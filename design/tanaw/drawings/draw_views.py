"""Line drawings of the Tanaw Residence cameras. Each drawing is the camera for one new before, or for a story frame in a new place.

Run: python3 draw_views.py
Writes one PNG per view beside this file and prints where the main verticals fall,
as a percent of the frame width, for the edge lists in the prompts.
The drawings are wireframes: lines behind an object show through it.
Coordinates are meters. x runs east, y runs north, z runs up. Heading is compass degrees.
Sizes come from docs/content/project-designs/tanaw-residence.md and are approximate.
Each room has its own origin, given in the function. The View class is copied from design/lilim/drawings/draw_views.py.
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


def downlight(v, x, y, z=2.8, r=0.06):
    v.poly([(x - r, y - r, z), (x + r, y - r, z), (x + r, y + r, z), (x - r, y + r, z)], 2)



H = 2.6  # ceiling height, every room


def pc(v, p, axis="x"):
    """Percent from the left (x) or from the top (y) of a point, or None if behind the camera."""
    c = v.cam_space(p)
    if c[2] < NEAR:
        return None
    return round(100 * v.px(c)[0 if axis == "x" else 1] / v.size[0 if axis == "x" else 1], 1)


def report(v, pts):
    print(v.name)
    for k, p in pts.items():
        print("   %-34s x %s  y %s" % (k, pc(v, p), pc(v, p, "y")))


def dining_shell(v):
    """Dining and kitchen end of the main room. Origin: on the south wall, 7.5 m east of the living room glass.
    x runs east to the kitchen wall at 4.2. y runs north to 4.5. The living zone is x below 0."""
    for y in (0, 4.5):                                                        # long walls, floor and ceiling lines
        v.line((-4, y, 0), (4.2, y, 0), 4); v.line((-4, y, H), (4.2, y, H), 4)
    v.poly([(4.2, 0, 0), (4.2, 4.5, 0), (4.2, 4.5, H), (4.2, 0, H)], 4)       # east wall
    v.box(3.6, 4.2, 0.85, 3.3, 0, 0.9)                                        # base cabinets and counter
    for y in (1.34, 1.83, 2.32, 2.81):
        v.line((3.6, y, 0.08), (3.6, y, 0.86), 2)
    v.box(3.85, 4.2, 0.85, 3.3, 1.5, 2.25)                                    # wall cabinets
    for y in (1.34, 1.83, 2.32, 2.81):
        v.line((3.85, y, 1.5), (3.85, y, 2.25), 2)
    v.box(3.6, 4.2, 0.0, 0.85, 1.95, 2.25)                                    # bridge cabinet over the refrigerator gap
    v.line((3.6, 0.85, 0), (3.6, 0.85, 2.25), 3)                              # tall side panel beside the gap
    v.line((3.6, 0, 0), (3.6, 0.85, 0), 2)
    v.poly([(3.7, 1.45, 0.9), (4.1, 1.45, 0.9), (4.1, 1.95, 0.9), (3.7, 1.95, 0.9)], 2)   # sink
    v.poly([(3.7, 2.35, 0.9), (4.1, 2.35, 0.9), (4.1, 2.95, 0.9), (3.7, 2.95, 0.9)], 2)   # hob
    socket(v, ("x", 4.2), 1.1, z=1.1); socket(v, ("x", 4.2), 2.15, z=1.1)     # splashback sockets
    socket(v, ("y", 0), 1.0); socket(v, ("y", 0), 3.4)                        # south wall sockets
    quad(v, ("y", 4.5), 3.1, 4.0, 0.0, 2.1)                                   # front door, north wall
    socket(v, ("y", 4.5), 2.85, z=1.25, w=0.15, h=0.09)                       # switch plate
    socket(v, ("y", 4.5), 2.85, z=1.45, w=0.12, h=0.18)                       # intercom panel
    socket(v, ("y", 4.5), 1.9)                                                # north wall socket
    quad(v, ("y", 4.5), 0.3, 1.2, 2.15, 2.45)                                 # air conditioner, north wall
    for x, y in ((0.8, 1.1), (0.8, 3.4), (2.8, 1.1), (2.8, 3.4)):
        downlight(v, x, y, z=H)
    v.line((1.6, 2.2, H), (1.6, 2.2, H - 0.2), 2)                             # ceiling point with its bulb


def kitchen_dining():
    """P2. Camera in the living zone near the north wall, looking southeast. 28mm, 16:9."""
    v = View("kitchen-dining-p2", (-1.6, 3.9, 1.25), 116, 65.5, (1920, 1080))
    dining_shell(v)
    v.save()
    report(v, {"far corner, floor": (4.2, 0, 0), "far corner, ceiling": (4.2, 0, H),
               "gap side panel (cabinet front)": (3.6, 0.85, 1.0), "gap, at south wall": (3.6, 0, 1.0),
               "kitchen run north end, counter": (3.6, 3.3, 0.9), "run north end at wall": (4.2, 3.3, 1.0),
               "wall cabinets bottom, north end": (3.85, 3.3, 1.5), "wall cabinets top, north end": (3.85, 3.3, 2.25),
               "sink": (3.9, 1.7, 0.9), "hob": (3.9, 2.65, 0.9),
               "splash socket south": (4.2, 1.1, 1.1), "splash socket north": (4.2, 2.15, 1.1),
               "south socket x1.0": (1.0, 0, 0.3), "south socket x3.4": (3.4, 0, 0.3),
               "ceiling point": (1.6, 2.2, H), "bulb": (1.6, 2.2, H - 0.2),
               "downlight 2.8,1.1": (2.8, 1.1, H), "downlight 2.8,3.4": (2.8, 3.4, H), "downlight 0.8,1.1": (0.8, 1.1, H),
               "table center top": (1.6, 2.2, 0.75), "table west edge": (1.05, 2.2, 0.75), "table east edge": (2.15, 2.2, 0.75),
               "table foot": (1.6, 2.2, 0), "pendant bottom": (1.6, 2.2, 1.55), "pendant top": (1.6, 2.2, 1.95),
               "credenza west end": (1.3, 0.45, 0.72), "credenza east end": (3.1, 0.45, 0.72), "credenza foot west": (1.3, 0.45, 0),
               "painting left": (1.75, 0, 1.6), "painting right": (2.65, 0, 1.6), "painting top": (2.2, 0, 2.2), "painting bottom": (2.2, 0, 1.0),
               "south wall at x0.6": (0.6, 0, 1.0), "east wall y4.3": (4.2, 4.3, 1.0), "refrigerator top": (3.6, 0.4, 1.8)})


def entry():
    """Entry. Same zone as P2. Camera in front of the credenza, square to the north wall. 35mm, 3:4 upright."""
    v = View("entry", (2.9, 0.9, 1.15), 0, 37.8, (1200, 1600))
    dining_shell(v)
    v.save()
    report(v, {"door west jamb": (3.1, 4.5, 1.0), "door east jamb": (4.0, 4.5, 1.0), "door head": (3.5, 4.5, 2.1),
               "wall foot": (2.9, 4.5, 0), "wall top": (2.9, 4.5, H), "switch": (2.85, 4.5, 1.25), "intercom": (2.85, 4.5, 1.5),
               "socket": (1.9, 4.5, 0.3), "bench west": (1.72, 4.5, 0.45), "bench east": (2.72, 4.5, 0.45),
               "bench front top": (2.2, 4.12, 0.45), "peg rail": (2.22, 4.5, 1.6), "ac east end": (1.2, 4.5, 2.3),
               "chair back top": (2.3, 2.9, 0.8), "east corner": (4.2, 4.5, 1.0)})


def bedroom():
    """P3. Main bedroom, 4.6 m deep (x, east from the glass) by 3.8 m (y, north). Camera in the doorway, looking southwest. 28mm, 16:9."""
    v = View("bedroom-p3", (4.45, 3.05, 1.15), 232, 65.5, (1920, 1080))
    v.room(4.6, 3.8, H)
    quad(v, ("x", 0), 0.3, 3.5, 0.0, H)                                       # glass, west wall, floor to ceiling
    for y in (1.37, 2.43):
        v.line((0, y, 0), (0, y, H), 2)
    socket(v, ("y", 0), 1.15); socket(v, ("y", 0), 3.45)                      # bed wall sockets
    v.box(0.9, 3.3, 3.2, 3.8, 0, 2.4)                                         # wardrobe, north wall (behind the camera)
    quad(v, ("x", 4.6), 0.3, 1.1, 0.0, 2.1)                                   # bath door, east wall
    quad(v, ("x", 4.6), 2.6, 3.5, 0.0, 2.1)                                   # room door, east wall
    for x, y in ((1.2, 0.95), (3.4, 0.95), (1.2, 2.85), (3.4, 2.85)):
        downlight(v, x, y, z=H)
    v.line((2.3, 1.9, H), (2.3, 1.9, H - 0.2), 2)
    v.save()
    report(v, {"corner floor": (0, 0, 0), "corner ceiling": (0, 0, H), "glass south edge": (0, 0.3, 1.2),
               "mullion 1": (0, 1.37, 1.2), "mullion 2": (0, 2.43, 1.2), "socket east": (3.45, 0, 0.3), "socket west": (1.15, 0, 0.3),
               "south wall at left edge x3.4": (3.4, 0, 1.2), "downlight 1.2,0.95": (1.2, 0.95, H), "downlight 3.4,0.95": (3.4, 0.95, H),
               "downlight 1.2,2.85": (1.2, 2.85, H), "ceiling point": (2.3, 1.9, H), "bulb": (2.3, 1.9, H - 0.2),
               "headboard east top": (3.16, 0, 1.0), "headboard west top": (1.44, 0, 1.0), "bed foot east": (3.16, 2.22, 0.5),
               "bed foot west": (1.44, 2.22, 0.5), "side table east": (3.47, 0.2, 0.55), "side table west": (1.12, 0.2, 0.55),
               "art left": (3.05, 0, 1.55), "art right": (1.55, 0, 1.55), "art top": (2.3, 0, 1.85), "art bottom": (2.3, 0, 1.25),
               "glass at y2.5": (0, 2.5, 1.2)})


def study():
    """P4. Study and guest room, 3.6 m deep (x, east from the glass) by 3.0 m (y, north). Camera near the door, looking northwest. 24mm, 3:4 upright."""
    v = View("study-p4", (3.2, 0.95, 1.25), 298, 53.1, (1200, 1600))
    v.room(3.6, 3.0, H)
    quad(v, ("x", 0), 0.3, 2.7, 0.0, H)                                       # glass, west wall
    v.line((0, 1.5, 0), (0, 1.5, H), 2)
    socket(v, ("y", 3.0), 0.7); socket(v, ("y", 3.0), 1.6)                    # desk wall sockets
    socket(v, ("y", 3.0), 1.0, w=0.08)                                        # data outlet
    v.box(3.0, 3.6, 1.4, 3.0, 0, 2.4)                                         # wardrobe
    downlight(v, 0.9, 1.5, z=H); downlight(v, 2.7, 1.5, z=H)
    v.line((1.8, 1.5, H), (1.8, 1.5, H - 0.2), 2)
    v.save()
    report(v, {"corner floor": (0, 3.0, 0), "corner ceiling": (0, 3.0, H), "glass north edge": (0, 2.7, 1.2), "mullion": (0, 1.5, 1.2),
               "glass at left edge y1.05": (0, 1.05, 1.2), "socket x0.7": (0.7, 3.0, 0.3), "data x1.0": (1.0, 3.0, 0.3), "socket x1.6": (1.6, 3.0, 0.3),
               "downlight 0.9": (0.9, 1.5, H), "ceiling point": (1.8, 1.5, H), "bulb": (1.8, 1.5, H - 0.2),
               "desk west front": (0.25, 2.3, 0.75), "desk east front": (1.65, 2.3, 0.75), "desk east back": (1.65, 3.0, 0.75), "desk west back": (0.25, 3.0, 0.75),
               "desk foot east": (1.65, 2.3, 0), "pin board left": (0.45, 3.0, 1.5), "pin board right": (1.45, 3.0, 1.5), "pin board top": (0.95, 3.0, 1.85), "pin board bottom": (0.95, 3.0, 1.15),
               "lamp on desk": (0.5, 2.8, 1.1), "monitor": (1.05, 2.8, 1.0),
               "chair": (0.95, 1.85, 0.9), "north wall right edge x1.8": (1.8, 3.0, 1.2)})


if __name__ == "__main__":
    import sys
    views = dict(kitchen_dining=kitchen_dining, entry=entry, bedroom=bedroom, study=study)
    for name in (sys.argv[1:] or views):
        views[name]()
