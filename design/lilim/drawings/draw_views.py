"""Line drawings of the Lilim House pair cameras. Each drawing is the camera for one new before.

Run: python3 draw_views.py
Writes one PNG per view beside this file and prints where the main verticals fall,
as a percent of the frame width, for the edge lists in the prompts.
The drawings are wireframes: lines behind an object show through it.
Coordinates are meters. x runs east, y runs north, z runs up. Heading is compass degrees.
Sizes come from docs/content/project-designs/lilim-house.md and are approximate.
"""
import math, os
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
NEAR = 0.08


class View:
    def __init__(self, name, cam, heading, hfov, size):
        self.name, self.cam, self.size = name, cam, size
        h = math.radians(heading)
        self.f = (math.sin(h), math.cos(h), 0.0)
        self.r = (math.cos(h), -math.sin(h), 0.0)
        self.F = (size[0] / 2) / math.tan(math.radians(hfov) / 2)
        self.img = Image.new("RGB", size, "white")
        self.d = ImageDraw.Draw(self.img)

    def cam_space(self, p):
        d = [p[i] - self.cam[i] for i in range(3)]
        return (sum(d[i] * self.r[i] for i in range(3)), d[2], sum(d[i] * self.f[i] for i in range(3)))

    def px(self, c):
        return (self.size[0] / 2 + self.F * c[0] / c[2], self.size[1] / 2 - self.F * c[1] / c[2])

    def line(self, a, b, w=3):
        a, b = self.cam_space(a), self.cam_space(b)
        if a[2] < NEAR and b[2] < NEAR:
            return
        if a[2] < NEAR or b[2] < NEAR:
            t = (NEAR - a[2]) / (b[2] - a[2])
            m = tuple(a[i] + t * (b[i] - a[i]) for i in range(3))
            a, b = (m, b) if a[2] < NEAR else (a, m)
        self.d.line([self.px(a), self.px(b)], fill="black", width=w)

    def poly(self, pts, w=3):
        for i in range(len(pts)):
            self.line(pts[i], pts[(i + 1) % len(pts)], w)

    def box(self, x0, x1, y0, y1, z0, z1, w=3):
        for z in (z0, z1):
            self.poly([(x0, y0, z), (x1, y0, z), (x1, y1, z), (x0, y1, z)], w)
        for x, y in ((x0, y0), (x1, y0), (x1, y1), (x0, y1)):
            self.line((x, y, z0), (x, y, z1), w)

    def room(self, X, Y, Z):
        self.box(0, X, 0, Y, 0, Z, 4)

    def percent(self, p):
        c = self.cam_space(p)
        return None if c[2] < NEAR else round(100 * self.px(c)[0] / self.size[0], 1)

    def save(self):
        self.d.rectangle([0, 0, self.size[0] - 1, self.size[1] - 1], outline="black", width=2)
        self.img.save(os.path.join(HERE, self.name + ".png"))


def socket(v, wall, a, z=0.3, w=0.12, h=0.08):
    """A small plate on a wall. wall is ('x', value) or ('y', value); a is the position along it."""
    axis, val = wall
    if axis == "y":
        v.poly([(a - w / 2, val, z), (a + w / 2, val, z), (a + w / 2, val, z + h), (a - w / 2, val, z + h)], 2)
    else:
        v.poly([(val, a - w / 2, z), (val, a + w / 2, z), (val, a + w / 2, z + h), (val, a - w / 2, z + h)], 2)


def family_room():
    v = View("family-room-p4", (3.7, 4.2, 1.2), 220, 65.5, (1920, 1080))
    v.room(4.0, 4.6, 2.8)
    v.poly([(0, 1.5, 0.9), (0, 3.1, 0.9), (0, 3.1, 2.1), (0, 1.5, 2.1)])      # window, west wall
    v.line((0, 2.3, 0.9), (0, 2.3, 2.1), 2)                                   # window meeting stile
    socket(v, ("y", 0), 1.0); socket(v, ("y", 0), 2.4)                        # south wall sockets
    socket(v, ("y", 0), 1.7, z=0.5, w=0.08)                                   # cable outlet
    socket(v, ("x", 0), 0.8)                                                  # west wall socket
    v.save()
    print(v.name, {"south-west corner": v.percent((0, 0, 1.2)), "window south side": v.percent((0, 1.5, 1.5)),
                   "window north side": v.percent((0, 3.1, 1.5)), "south socket east": v.percent((2.4, 0, 0.3)),
                   "south socket west": v.percent((1.0, 0, 0.3)), "west socket": v.percent((0, 0.8, 0.3))})


def dining():
    v = View("dining-p2", (0.3, 12.2, 1.25), 90, 54.4, (1920, 1080))
    for y in (0, 15):                                                         # floor and ceiling lines, side walls
        v.line((0, y, 0), (5.5, y, 0), 4); v.line((0, y, 2.8), (5.5, y, 2.8), 4)
    v.line((5.5, 0, 0), (5.5, 15, 0), 4); v.line((5.5, 0, 2.8), (5.5, 15, 2.8), 4)   # door wall, floor and head
    v.line((5.5, 7.75, 2.68), (5.5, 14.6, 2.68), 3)                           # underside of the door head
    for y in (14.6, 12.9, 11.2, 9.5, 7.8):                                    # door stiles, north bay
        v.line((5.5, y - 0.04, 0), (5.5, y - 0.04, 2.68)); v.line((5.5, y + 0.04, 0), (5.5, y + 0.04, 2.68))
    v.poly([(5.5, 12.98, 0.06), (5.5, 14.52, 0.06), (5.5, 14.52, 2.62), (5.5, 12.98, 2.62)], 2)  # closed glass leaf
    v.box(5.2, 5.5, 14.6, 15.0, 0, 2.8)                                       # north pier
    v.box(5.15, 5.6, 7.3, 7.75, 0, 2.8)                                       # door-line column
    v.line((9.5, 0, 0), (9.5, 15, 0), 3)                                      # outer edge of the terrace floor
    v.line((10.0, 0, 2.8), (10.0, 15, 2.8), 3)                                # edge of the terrace roof
    v.line((5.5, 15, 0), (9.5, 15, 0), 2); v.line((5.5, 15, 2.8), (10.0, 15, 2.8), 2)
    for y in (15.0, 11.0, 7.0):                                               # terrace columns, about 4 m apart
        v.box(9.35, 9.65, y - 0.15, y + 0.15, 0, 2.8)
    v.save()
    print(v.name, {"north pier inner face": v.percent((5.5, 14.6, 1.2)), "stile 12.9": v.percent((5.5, 12.9, 1.2)),
                   "stile 11.2": v.percent((5.5, 11.2, 1.2)), "stile 9.5": v.percent((5.5, 9.5, 1.2)),
                   "terrace column north": v.percent((9.5, 15, 1.2)), "terrace column middle": v.percent((9.5, 11, 1.2)),
                   "table near end": v.percent((1.65, 12.2, 0.75)), "pendant": v.percent((2.75, 12.2, 1.7))})


def kitchen():
    v = View("kitchen-p5", (1.7, 0.25, 1.35), 0, 46.4, (1200, 1600))
    v.room(3.4, 5.0, 2.8)
    v.box(0.8, 2.65, 4.4, 5.0, 0, 0.9)                                        # base cabinets and counter, far wall
    for x in (1.26, 1.72, 2.19):                                              # cabinet door lines
        v.line((x, 4.4, 0.08), (x, 4.4, 0.86), 2)
    v.poly([(1.3, 5, 1.05), (2.5, 5, 1.05), (2.5, 5, 2.05), (1.3, 5, 2.05)])  # window over the sink
    v.line((1.9, 5, 1.05), (1.9, 5, 2.05), 2)
    v.poly([(1.6, 4.5, 0.9), (2.2, 4.5, 0.9), (2.2, 4.9, 0.9), (1.6, 4.9, 0.9)], 2)  # sink
    v.box(0.8, 1.3, 4.65, 5.0, 1.45, 2.15)                                    # wall cabinet
    v.box(2.65, 3.4, 4.5, 5.0, 1.6, 1.8)                                      # hood over the range gap
    v.line((0.8, 4.4, 0), (0.8, 5.0, 0), 2); v.line((2.65, 4.4, 0), (2.65, 5.0, 0), 2)
    v.box(1.8, 3.4, 2.3, 2.9, 0, 0.9)                                         # counter that juts from the right wall
    v.poly([(1.75, 2.05, 0.9), (3.4, 2.05, 0.9), (3.4, 2.3, 0.9), (1.75, 2.3, 0.9)], 2)  # overhang for stools
    socket(v, ("y", 5.0), 0.95, z=1.1); socket(v, ("y", 5.0), 2.57, z=1.1)    # splashback sockets
    for x in (0.9, 2.5):                                                      # two downlights
        v.poly([(x - .06, 3.64, 2.8), (x + .06, 3.64, 2.8), (x + .06, 3.76, 2.8), (x - .06, 3.76, 2.8)], 2)
    v.line((2.6, 2.6, 2.8), (2.6, 2.6, 2.62), 2)                              # ceiling point over the counter
    v.save()
    print(v.name, {"refrigerator gap right side": v.percent((0.8, 5, 1)), "window left": v.percent((1.3, 5, 1.5)),
                   "window right": v.percent((2.5, 5, 1.5)), "range gap left side": v.percent((2.65, 5, 1)),
                   "left wall far corner": v.percent((0, 5, 1)), "right wall far corner": v.percent((3.4, 5, 1)),
                   "counter free end": v.percent((1.8, 2.3, 0.9))})


if __name__ == "__main__":
    family_room(); dining(); kitchen()
