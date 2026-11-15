#!/usr/bin/env python3
"""pairfix: pull an AI-furnished "after" image back to the "before" shell color balance.

measure BEFORE AFTER            print warmth of matched shell regions
fix BEFORE AFTER OUT [--keep-lamp-glow | --no-lamp-glow]
Only Pillow and numpy are used.
"""
import argparse
import warnings
warnings.filterwarnings("ignore")  # spurious BLAS matmul warnings on macOS
import sys
import numpy as np
from PIL import Image

WORK = 200          # working width for analysis
LUMA = np.array([0.2126, 0.7152, 0.0722])


def load(p):
    return np.asarray(Image.open(p).convert("RGB"), dtype=np.float64) / 255.0


def resize(a, w, h, resample=Image.BILINEAR):
    ch = [np.asarray(Image.fromarray(a[..., i].astype(np.float32)).resize((w, h), resample))
          for i in range(a.shape[2])] if a.ndim == 3 else \
         [np.asarray(Image.fromarray(a.astype(np.float32)).resize((w, h), resample))]
    out = np.stack(ch, -1)
    return out if a.ndim == 3 else out[..., 0]


def gblur(a, sigma):
    r = int(3 * sigma) + 1
    k = np.exp(-0.5 * (np.arange(-r, r + 1) / sigma) ** 2)
    k /= k.sum()
    def conv(x, axis):
        pad = [(0, 0)] * x.ndim
        pad[axis] = (r, r)
        xp = np.pad(x, pad, mode="edge")
        out = np.zeros_like(x)
        n = x.shape[axis]
        for i, kv in enumerate(k):
            sl = [slice(None)] * x.ndim
            sl[axis] = slice(i, i + n)
            out += kv * xp[tuple(sl)]
        return out
    return conv(conv(a, 0), 1)


def srgb2lin(c):
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def lab(c):
    l = srgb2lin(c)
    m = np.array([[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]])
    xyz = l @ m.T / np.array([0.95047, 1.0, 1.08883])
    f = np.where(xyz > 0.008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
    return 116 * f[..., 1] - 16, 500 * (f[..., 0] - f[..., 1]), 200 * (f[..., 1] - f[..., 2])


def small(a):
    h, w = a.shape[:2]
    return resize(a, WORK, max(8, round(WORK * h / w)))


def shell_mask(b, a):
    """Weight 0..1: where before and after agree structurally (walls, ceiling)."""
    lb, la = b @ LUMA, a @ LUMA
    lb, la = gblur(lb, 1.5), gblur(la, 1.5)
    # brightness change at a coarse scale, relative to the median change
    ratio = np.log((la + 0.02) / (lb + 0.02))
    ratio = ratio - np.median(ratio)
    # local structure: gradients of each image
    def grad(x):
        gy, gx = np.gradient(x)
        return np.hypot(gx, gy)
    gb, ga = grad(lb), grad(la)
    gdiff = gblur(np.abs(gb - ga), 2.0)
    local_ratio = gblur(np.abs(ratio - gblur(ratio, 6)), 2.0)
    score = np.abs(gblur(ratio, 2.0)) / 0.35 + gdiff / 0.025 + local_ratio / 0.12
    w = np.clip(1.5 - score, 0, 1)
    return w


def band(a):
    h, w = a.shape[:2]
    return a[: int(h * 0.12), int(w * 0.2): int(w * 0.8)]


def stats(c, w=None):
    if w is not None:
        s = w.sum() + 1e-9
        m = lambda x: float((x * w).sum() / s)
    else:
        m = lambda x: float(x.mean())
    L, A, B = lab(c)
    return m(c[..., 0] * 255 - c[..., 2] * 255), m(A), m(B)


def cmd_measure(args):
    b, a = load(args.before), load(args.after)
    sb, sa = small(b), small(a)
    w = shell_mask(sb, sa)
    print(f"shell coverage: {w.mean() * 100:.0f}% of frame")
    for name, img in (("before", sb), ("after", sa)):
        r, A, B = stats(band(img))
        r2, A2, B2 = stats(img, w)
        print(f"{name:7s} ceiling band R-B {r:+6.1f}  Lab a {A:+5.1f} b {B:+5.1f} | shell R-B {r2:+6.1f}  a {A2:+5.1f} b {B2:+5.1f}")


def lamp_map(sb, sa):
    """Bright warm sources present in the after, newly warmer than before."""
    la = sa @ LUMA
    warm = (sa[..., 0] - sa[..., 2]) - (sb[..., 0] - sb[..., 2])
    thr = np.percentile(la, 97)
    src = ((la > max(thr, 0.6)) & (warm > 0.12)).astype(np.float64)
    return src


def cmd_fix(args):
    b, a = load(args.before), load(args.after)
    if a.shape != b.shape:
        sys.exit("images differ in size")
    H, W = a.shape[:2]
    sb, sa = small(b), small(a)
    w = shell_mask(sb, sa)
    # exclude very dark or clipped pixels
    la = sa @ LUMA
    w = w * ((la > 0.06) & (la < 0.97))
    glow = np.zeros_like(w)
    if args.keep_lamp_glow is None:   # auto: night and dusk scenes keep lamp glow
        args.keep_lamp_glow = stats(band(a))[0] - stats(band(b))[0] > 40   # very strong cast = lit evening scene
        print("lamp glow:", "kept (evening scene)" if args.keep_lamp_glow else "off (daylight scene)")
    if args.keep_lamp_glow:
        src = lamp_map(sb, sa)
        g = gblur(src, 3.0)
        glow = np.clip(g * 6, 0, 1)
        far = gblur(src, 16.0)
        glow = np.maximum(glow, np.clip(far * 24, 0, 1))
        w = w * (1 - glow)
    lr = np.log((sb + 0.02) / (sa + 0.02))           # per-channel log ratio
    lr = lr - (lr @ LUMA)[..., None]                    # chroma only, luma neutral
    sig = 14.0
    num = gblur(lr * w[..., None], sig)
    den = gblur(w, sig)[..., None]
    field = num / np.maximum(den, 1e-4)
    gl = (lr * w[..., None]).sum((0, 1)) / max(w.sum(), 1e-6)   # global fallback
    conf = np.clip(den / 0.08, 0, 1)
    field = conf * field + (1 - conf) * gl
    field = gblur(field, 6.0)
    field = np.clip(field, -0.6, 0.6)
    if args.keep_lamp_glow:
        field = field * (1 - gblur(glow, 4.0))[..., None]
    full = resize(field, W, H, Image.BICUBIC)
    out = (a + 0.02) * np.exp(full) - 0.02
    # keep luminance: rescale to the original luma
    lo, ln = a @ LUMA, np.maximum(out @ LUMA, 1e-4)
    out = out * (lo / ln)[..., None]
    out = np.clip(out, 0, 1)
    Image.fromarray((out * 255 + 0.5).astype(np.uint8)).save(args.out, quality=95)
    for name, img in (("before", b), ("after ", a), ("fixed ", out)):
        r, A, B = stats(band(img))
        print(f"{name} ceiling band R-B {r:+6.1f}  Lab a {A:+5.1f} b {B:+5.1f}")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    s = p.add_subparsers(dest="cmd", required=True)
    m = s.add_parser("measure"); m.add_argument("before"); m.add_argument("after"); m.set_defaults(f=cmd_measure)
    f = s.add_parser("fix"); f.add_argument("before"); f.add_argument("after"); f.add_argument("out")
    f.add_argument("--keep-lamp-glow", dest="keep_lamp_glow", action="store_true", default=None,
                   help="fade the correction near warm sources (default: auto, on when the ceiling cast is above +40 R-B)")
    f.add_argument("--no-lamp-glow", dest="keep_lamp_glow", action="store_false")
    f.set_defaults(f=cmd_fix)
    a = p.parse_args()
    a.f(a)


if __name__ == "__main__":
    main()
