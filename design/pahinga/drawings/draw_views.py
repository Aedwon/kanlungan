"""Line drawings of the Pahinga Villas cameras. Each drawing is the camera for one new before, or for a story frame in a new place.

Run: python3 draw_views.py
Writes one PNG per view beside this file and prints where the main verticals fall,
as a percent of the frame width, for the edge lists in the prompts.
The drawings are wireframes: lines behind an object show through it.
Coordinates are meters. x runs east, y runs north, z runs up. Heading is compass degrees.
Sizes come from docs/content/project-designs/pahinga-villas.md and are approximate.
The villa and the reception pavilion each have their own origin, at the southwest corner of the main room.
The View class is copied from design/dalampasigan/drawings/draw_views.py.
The villa bedroom's before is approved. Its camera was fitted to that image (see hero_check). hero-check.png is a
check of the fit and of the furniture layout. It is not a reference for any prompt: the hero's marks are measured on the image.
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


def quad(v, wall, a0, a1, z0, z1, w=3):
    """A rectangle on a wall. wall is ('x', value) or ('y', value); a0..a1 runs along the wall."""
    axis, val = wall
    if axis == "y":
        v.poly([(a0, val, z0), (a1, val, z0), (a1, val, z1), (a0, val, z1)], w)
    else:
        v.poly([(val, a0, z0), (val, a1, z0), (val, a1, z1), (val, a0, z1)], w)


def fan(v, x, y, z, r=0.65):
    """A ceiling fan: a short rod, a hub, and the circle its blades sweep."""
    v.line((x, y, z), (x, y, z - 0.3), 2)
    pts = [(x + r * math.cos(math.radians(a)), y + r * math.sin(math.radians(a)), z - 0.3) for a in range(0, 360, 20)]
    v.poly(pts, 2)
    for a in (10, 130, 250):
        v.line((x, y, z - 0.3), (x + r * math.cos(math.radians(a)), y + r * math.sin(math.radians(a)), z - 0.3), 2)


def tube(v, x0, x1, y0, y1, z):
    """A tube light on the ceiling: a thin box."""
    v.box(x0, x1, y0, y1, z - 0.06, z, 2)




H = 2.7   # villa ceiling height
TH = 2.8  # terrace soffit height
RH = 2.9  # reception ceiling height


def pc(v, p, axis="x"):
    """Percent from the left (x) or from the top (y) of a point, or None if behind the camera."""
    c = v.cam_space(p)
    if c[2] < NEAR:
        return None
    return round(100 * v.px(c)[0 if axis == "x" else 1] / v.size[0 if axis == "x" else 1], 1)


def report(v, pts):
    print(v.name)
    for k, p in pts.items():
        print("   %-36s x %s  y %s" % (k, pc(v, p), pc(v, p, "y")))


def ring(v, x, y, z, r, w=2):
    """A horizontal circle: a downlight, a round table top, a pot rim."""
    v.poly([(x + r * math.cos(math.radians(a)), y + r * math.sin(math.radians(a)), z) for a in range(0, 360, 20)], w)


def villa_shell(v, terrace=True, inside=True):
    """One villa. The bedroom is 7.0 m west to east and 4.2 m south to north. The sliding doors are in the east wall
    and open to the terrace. The bath is south of the bedroom. The entry door is in the west wall."""
    if inside:
        v.room(7.0, 4.2, H)
        quad(v, ("x", 7.0), 0.34, 4.12, 0.0, 2.35)                                # sliding door frame, east wall
        v.line((7.0, 1.4, 0), (7.0, 1.4, 2.35), 2); v.line((7.0, 2.95, 0), (7.0, 2.95, 2.35), 2)   # the open middle is between these
        socket(v, ("y", 4.2), 5.7, z=0.35); socket(v, ("y", 4.2), 3.95, z=0.3); socket(v, ("y", 4.2), 2.2, z=0.3)   # north wall sockets
        quad(v, ("y", 0), 3.1, 4.0, 0.0, 2.1)                                     # bath door, south wall
        socket(v, ("y", 0), 2.85, z=1.15, w=0.09, h=0.22)                         # switch plate, three switches
        v.box(5.5, 6.6, 0.0, 0.25, 2.3, 2.62, 2)                                  # air conditioner, south wall
        socket(v, ("y", 0), 0.8, z=0.3)                                           # south wall socket, behind the screen console
        quad(v, ("x", 0), 0.7, 1.6, 0.0, 2.1)                                     # entry door, west wall
        socket(v, ("x", 0), 0.5, z=1.2, w=0.08, h=0.13)                           # switch by the entry door
        socket(v, ("x", 0), 3.7, z=0.3)                                           # west wall socket
        fan(v, 4.14, 2.2, H, r=0.6)                                               # ceiling fan, blades at about 2.35 m
        for x, y in ((6.06, 3.48), (6.27, 1.0), (1.5, 3.4), (1.5, 1.0)):          # recessed downlights
            ring(v, x, y, H, 0.06)
    else:
        quad(v, ("x", 7.0), 0.34, 4.12, 0.0, 2.35)                            # sliding door frame, seen from the terrace
    if terrace:
        v.poly([(7.0, -2.4, 0), (12.0, -2.4, 0), (12.0, 5.1, 0), (7.0, 5.1, 0)], 3)          # terrace slab
        v.poly([(7.0, -2.4, TH), (12.0, -2.4, TH), (12.0, 5.1, TH), (7.0, 5.1, TH)], 3)      # soffit
        v.box(11.7, 11.9, 4.9, 5.1, 0, TH, 2); v.box(11.7, 11.9, -2.4, -2.2, 0, TH, 2)       # two corner columns
        v.line((7.0, -2.4, 0), (7.0, -2.4, TH), 3); v.line((7.0, 4.2, 0), (7.0, 4.2, TH), 3)   # the ends of the east front: the bath wall is its south part
        quad(v, ("x", 7.0), -1.7, -0.9, 1.75, 2.2, 2)                                        # bath louver window
        socket(v, ("x", 7.0), -0.45, z=0.4, w=0.12, h=0.12)                                  # outdoor socket
        ring(v, 9.4, -1.5, TH, 0.09)                                                         # terrace ceiling light


def hero_check():
    """The approved before. Camera fitted to the image: 0.56 m from the west wall, 0.95 m from the south wall, 1.15 m high,
    turned 12.9 degrees north of east, 24mm, 16:9. The boxes are the furniture layout of section 5."""
    v = View("hero-check", (0.56, 0.95, 1.15), 77.1, 73.7, (1920, 1080))
    villa_shell(v)
    v.box(4.5, 6.15, 2.17, 4.2, 0, 1.9, 2)                                    # four-post bed frame, 165 by 203 cm, 1.9 m tall
    v.box(4.5, 6.15, 2.17, 4.2, 0, 0.55, 1)                                   # mattress top
    quad(v, ("y", 4.17), 4.55, 6.1, 0.55, 1.1, 2)                             # headboard
    v.box(4.1, 4.5, 3.8, 4.2, 0, 0.5, 2); v.box(6.2, 6.6, 3.8, 4.2, 0, 0.5, 2)       # two side tables
    v.poly([(3.9, 0.7, 0), (5.9, 0.7, 0), (5.9, 3.7, 0), (3.9, 3.7, 0)], 2)          # striped rug, 200 by 300
    v.box(4.15, 5.15, 0.0, 0.5, 0, 0.55, 2)                                   # old chest
    quad(v, ("y", 0), 4.2, 5.05, 1.2, 1.85, 2)                                # painting
    v.box(5.9, 6.6, 0.45, 1.2, 0, 0.74, 2)                                    # lounge chair
    ring(v, 5.5, 0.3, 0.55, 0.22); ring(v, 5.5, 0.3, 1.25, 0.4)               # fern: planter rim and frond tips
    v.save()
    report(v, {"far left corner floor": (7.0, 4.2, 0), "far right corner floor": (7.0, 0, 0), "far left corner ceiling": (7.0, 4.2, H),
               "door frame left": (7.0, 4.12, 1.0), "door frame right": (7.0, 0.34, 1.0), "door head": (7.0, 2.2, 2.35),
               "open middle left": (7.0, 2.95, 1.0), "open middle right": (7.0, 1.4, 1.0),
               "socket near": (3.95, 4.2, 0.34), "socket far": (5.7, 4.2, 0.39), "fan hub": (4.14, 2.2, 2.35),
               "downlight left": (6.06, 3.48, H), "downlight right": (6.27, 1.0, H), "ac near end top": (5.5, 0.25, 2.62), "ac far end bottom": (6.6, 0.25, 2.3),
               "bath door far jamb": (4.0, 0, 1.0), "bath door near jamb": (3.1, 0, 1.0), "switch": (2.85, 0, 1.27),
               "column": (11.8, 5.0, 1.0), "terrace edge": (12.0, 2.0, 0),
               "bed near head post top": (4.5, 4.2, 1.9), "bed near head post foot": (4.5, 4.2, 0), "bed near foot post top": (4.5, 2.17, 1.9),
               "bed near foot post foot": (4.5, 2.17, 0), "bed far foot post top": (6.15, 2.17, 1.9), "bed far foot post foot": (6.15, 2.17, 0),
               "bed far head post top": (6.15, 4.2, 1.9), "headboard top near": (4.55, 4.17, 1.1), "mattress near foot corner": (4.5, 2.17, 0.55), "mattress far foot corner": (6.15, 2.17, 0.55),
               "near table left": (4.1, 4.2, 0.5), "near table right": (4.5, 3.8, 0.5), "near table foot": (4.1, 3.8, 0), "near lamp top": (4.3, 4.0, 0.88),
               "far table": (6.4, 4.0, 0.5), "far lamp top": (6.4, 4.0, 0.88),
               "rug near left": (3.9, 3.7, 0), "rug near right": (3.9, 0.7, 0), "rug far right": (5.9, 0.7, 0),
               "chest near end top": (4.15, 0.5, 0.55), "chest far end top": (5.15, 0.5, 0.55), "chest near foot": (4.15, 0.5, 0), "chest near end at wall": (4.15, 0, 0.55),
               "painting near": (4.2, 0, 1.5), "painting far": (5.05, 0, 1.5), "painting top": (4.6, 0, 1.85), "painting bottom": (4.6, 0, 1.2),
               "chair left": (6.2, 1.2, 0.4), "chair right": (6.2, 0.45, 0.4), "chair top": (6.4, 0.85, 0.74), "chair foot": (5.9, 0.85, 0),
               "fern planter": (5.5, 0.3, 0.55), "fern top": (5.5, 0.3, 1.3), "fern foot": (5.5, 0.52, 0),
               "curtain left stack inner": (6.9, 3.45, 1.2), "curtain right stack outer": (6.9, 0.34, 1.2), "curtain right stack inner": (6.9, 0.75, 1.2), "curtain top": (6.93, 2.0, 2.68)})


def sitting_corner():
    """Story frame. The west half of the villa bedroom. Camera beside the foot of the bed, looking west. 24mm, 16:9."""
    v = View("sitting-corner", (4.3, 2.5, 1.2), 268, 73.7, (1920, 1080))
    villa_shell(v, terrace=False)
    v.save()
    report(v, {"nw corner floor": (0, 4.2, 0), "nw corner ceiling": (0, 4.2, H), "sw corner floor": (0, 0, 0), "sw corner ceiling": (0, 0, H),
               "entry door north jamb": (0, 1.6, 1.0), "entry door south jamb": (0, 0.7, 1.0), "entry door head": (0, 1.15, 2.1),
               "entry switch": (0, 0.5, 1.27), "west socket": (0, 3.7, 0.34), "north socket x2.2": (2.2, 4.2, 0.34), "south socket": (0.8, 0, 0.34),
               "downlight north": (1.5, 3.4, H), "downlight south": (1.5, 1.0, H), "north wall x2.6": (2.6, 4.2, 1.2), "south wall x2.4": (2.4, 0, 1.2), "bath door near jamb": (3.1, 0, 1.0), "bath switch": (2.85, 0, 1.27),
               "sofa east end front": (1.9, 3.35, 0.42), "sofa west end front": (0.5, 3.35, 0.42), "sofa back top east": (1.9, 4.15, 0.8), "sofa back top west": (0.5, 4.15, 0.8), "sofa foot east": (1.9, 3.35, 0),
               "corner table": (0.22, 3.97, 0.5), "corner lamp top": (0.22, 3.97, 1.05),
               "painting north": (0, 3.2, 1.5), "painting south": (0, 2.4, 1.5), "painting top": (0, 2.8, 2.0), "painting bottom": (0, 2.8, 1.0),
               "console east end top": (1.5, 0.4, 0.55), "console west end top": (0.0, 0.4, 0.55), "console east foot": (1.5, 0.4, 0),
               "screen east": (1.37, 0.12, 0.95), "screen west": (0.15, 0.12, 0.95), "screen top": (0.76, 0.12, 1.3), "screen bottom": (0.76, 0.12, 0.61),
               "low table": (1.2, 2.5, 0.38), "rug ne": (2.1, 3.3, 0), "rug se": (2.1, 1.6, 0), "rug sw": (0.5, 1.6, 0), "mat at door": (0.5, 1.15, 0)})


def terrace():
    """P2. The south end of the villa terrace. Camera on the terrace, 3.2 m out from the doors, looking south-southwest
    at the bath wall. The sliding doors are just out of the frame to the right. 24mm, 16:9."""
    v = View("terrace-p2", (10.2, 2.6, 1.25), 197, 73.7, (1920, 1080))
    villa_shell(v, inside=False)
    v.save()
    report(v, {"door frame south jamb": (7.0, 0.34, 1.0), "bath wall north end foot": (7.0, 0.0, 0), "bath wall south end foot": (7.0, -2.4, 0), "bath wall south end top": (7.0, -2.4, TH),
               "wall top at right edge": (7.0, 0.2, TH), "wall foot at right edge": (7.0, 0.2, 0),
               "louver left": (7.0, -1.7, 2.0), "louver right": (7.0, -0.9, 2.0), "louver top": (7.0, -1.3, 2.2), "louver bottom": (7.0, -1.3, 1.75),
               "outdoor socket": (7.0, -0.45, 0.46), "ceiling light": (9.4, -1.5, TH), "wall at right edge mid": (7.0, 0.25, 1.3),
               "slab south edge at wall": (7.0, -2.4, 0), "slab south edge at 9.5": (9.5, -2.4, 0), "slab south edge at 11": (11.0, -2.4, 0), "slab se corner": (12.0, -2.4, 0), "se column": (11.8, -2.3, 1.0),
               "soffit south edge at 9.5": (9.5, -2.4, TH),
               "daybed north end seat": (7.95, -0.2, 0.42), "daybed south end seat": (7.95, -2.2, 0.42), "daybed back top north": (7.08, -0.2, 0.75), "daybed back top south": (7.08, -2.2, 0.75), "daybed foot north": (7.95, -0.2, 0),
               "drinks table": (8.2, -1.2, 0.5), "lounge chair seat": (8.45, -1.9, 0.4), "lounge chair top": (8.45, -2.2, 0.74), "lounge chair foot": (8.45, -1.6, 0),
               "table nw": (9.0, -1.1, 0.74), "table ne": (9.8, -1.1, 0.74), "table sw": (9.0, -1.9, 0.74), "table se": (9.8, -1.9, 0.74), "table foot nw": (9.0, -1.1, 0), "table foot ne": (9.8, -1.1, 0),
               "chair north top": (9.4, -0.75, 0.8), "chair south top": (9.4, -2.25, 0.8), "pendant bottom": (9.4, -1.5, 1.75), "pendant top": (9.4, -1.5, 2.25),
               "rug nw": (7.1, 0.0, 0), "rug ne": (9.1, 0.0, 0), "rug se": (9.1, -2.3, 0), "rug sw": (7.1, -2.3, 0)})


def reception_shell(v):
    """Reception pavilion. 6.0 m west to east, 8.0 m south to north. Two sets of sliding doors in the east wall."""
    v.room(6.0, 8.0, RH)
    for y0 in (0.6, 4.4):                                                     # two sets of sliding doors, east wall
        quad(v, ("x", 6.0), y0, y0 + 3.0, 0.0, 2.35)
        v.line((6.0, y0 + 1.5, 0), (6.0, y0 + 1.5, 2.35), 2)
    quad(v, ("y", 8.0), 4.7, 5.6, 0.0, 2.1)                                   # office door, north wall, east end
    socket(v, ("y", 8.0), 5.75, z=1.2, w=0.08, h=0.13)                        # switch plate beside it, on the east side
    socket(v, ("y", 8.0), 1.2); socket(v, ("y", 8.0), 3.2)                    # north wall sockets
    socket(v, ("x", 0), 1.8); socket(v, ("x", 0), 4.2); socket(v, ("x", 0), 6.6)   # west wall sockets
    v.box(0.0, 0.25, 5.0, 6.0, 2.4, 2.7, 2)                                   # air conditioner, west wall
    socket(v, ("y", 0), 2.0); socket(v, ("y", 0), 4.0)                        # south wall sockets
    fan(v, 3.0, 2.4, RH); fan(v, 3.0, 5.6, RH)
    for x in (1.5, 4.5):
        for y in (1.3, 4.0, 6.7):
            ring(v, x, y, RH, 0.06)


def reception():
    """P3. Camera in the southeast corner, beside the sliding doors, looking northwest. 24mm, 16:9."""
    v = View("reception-p3", (5.5, 0.5, 1.3), 315, 73.7, (1920, 1080))
    reception_shell(v)
    v.save()
    report(v, {"corner floor": (0, 8.0, 0), "corner ceiling": (0, 8.0, RH), "west wall at left edge": (0, 1.3, 1.3), "north wall at right edge": (4.4, 8.0, 1.3),
               "west socket y1.8": (0, 1.8, 0.34), "west socket y4.2": (0, 4.2, 0.34), "west socket y6.6": (0, 6.6, 0.34),
               "north socket x1.2": (1.2, 8.0, 0.34), "north socket x3.2": (3.2, 8.0, 0.34), "ac south end": (0, 5.0, 2.55), "ac north end": (0, 6.0, 2.55),
               "fan far hub": (3.0, 5.6, RH - 0.3), "fan near hub": (3.0, 2.4, RH - 0.3),
               "dl w1": (1.5, 1.3, RH), "dl w2": (1.5, 4.0, RH), "dl w3": (1.5, 6.7, RH), "dl e2": (4.5, 4.0, RH), "dl e3": (4.5, 6.7, RH),
               "office door west jamb": (4.7, 8.0, 1.0),
               "table sw top": (2.0, 4.7, 0.75), "table se top": (4.0, 4.7, 0.75), "table nw top": (2.0, 5.6, 0.75), "table ne top": (4.0, 5.6, 0.75), "table sw foot": (2.0, 4.7, 0), "table se foot": (4.0, 4.7, 0),
               "host chair": (3.0, 6.1, 0.8), "guest chair w": (2.5, 4.2, 0.8), "guest chair e": (3.5, 4.2, 0.8), "desk lamp top": (2.3, 5.15, 1.25),
               "cabinet left": (2.3, 7.75, 1.0), "cabinet right": (3.4, 7.75, 1.0), "cabinet top": (2.85, 7.75, 1.7),
               "drinks table left": (0.3, 7.55, 0.85), "drinks table right": (1.8, 7.55, 0.85), "drinks table foot": (1.8, 7.55, 0),
               "settee south front": (0.85, 2.3, 0.42), "settee north front": (0.85, 3.9, 0.42), "settee back top south": (0.08, 2.3, 0.8), "settee back top north": (0.08, 3.9, 0.8), "settee foot north": (0.85, 3.9, 0),
               "painting south": (0, 2.3, 1.6), "painting north": (0, 3.9, 1.6), "painting top": (0, 3.1, 2.15), "painting bottom": (0, 3.1, 1.1),
               "floor lamp foot": (0.3, 1.9, 0), "floor lamp top": (0.3, 1.9, 1.6), "fern": (0.35, 4.6, 0.55), "fern top": (0.35, 4.6, 1.3),
               "low table": (1.7, 3.1, 0.38), "chair a": (2.5, 2.5, 0.74), "chair b": (2.5, 3.7, 0.74), "rug sw": (0.6, 1.9, 0), "rug se": (3.1, 1.9, 0), "rug ne": (3.1, 4.3, 0)})


if __name__ == "__main__":
    import sys
    views = dict(hero_check=hero_check, sitting_corner=sitting_corner, terrace=terrace, reception=reception)
    for name in (sys.argv[1:] or views):
        views[name]()
