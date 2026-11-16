"""Line drawings of the Dalampasigan Inn cameras. Each drawing is the camera for one new before, or for a story frame in a new place.

Run: python3 draw_views.py
Writes one PNG per view beside this file and prints where the main verticals fall,
as a percent of the frame width, for the edge lists in the prompts.
The drawings are wireframes: lines behind an object show through it.
Coordinates are meters. x runs east, y runs north, z runs up. Heading is compass degrees.
Sizes come from docs/content/project-designs/dalampasigan-inn.md and are approximate.
Each room has its own origin, at its southwest corner. The View class is copied from design/tanaw/drawings/draw_views.py.
The guest room has no drawing: its before is approved, and its marks are measured from that image.
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



H = 2.7  # ceiling height, ground and upper floor


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


def lobby_shell(v):
    """Lobby. 4.6 m east to the street wall, 5.4 m north to the breakfast room wall."""
    v.room(4.6, 5.4, H)
    quad(v, ("x", 0), 3.4, 4.4, 0.0, 2.1)                                     # open doorway to the corridor, west wall
    socket(v, ("x", 0), 1.0); socket(v, ("x", 0), 2.4)                        # west wall sockets
    socket(v, ("x", 0), 3.15, z=1.2, w=0.08, h=0.13)                          # switch plate beside the doorway
    socket(v, ("y", 0), 1.9); socket(v, ("y", 0), 3.6)                        # south wall sockets
    quad(v, ("x", 4.6), 0.8, 2.4, 0.0, 2.1)                                   # street door, two glass leaves
    v.line((4.6, 1.6, 0), (4.6, 1.6, 2.1), 2)
    quad(v, ("x", 4.6), 3.2, 5.0, 0.9, 2.1)                                   # street window
    v.line((4.6, 4.1, 0.9), (4.6, 4.1, 2.1), 2)
    quad(v, ("y", 5.4), 3.0, 4.2, 0.0, 2.1)                                   # doorway to the breakfast room
    fan(v, 1.6, 1.8, H); fan(v, 3.1, 3.7, H)                                  # two ceiling fans
    tube(v, 0.65, 0.75, 2.2, 3.4, H); tube(v, 3.55, 3.65, 3.0, 4.2, H)        # two tube lights


def lobby():
    """P2. Camera in the northeast corner, beside the street window, looking southwest. 24mm, 16:9. The room is small."""
    v = View("lobby-p2", (4.3, 5.0, 1.3), 232, 73.7, (1920, 1080))
    lobby_shell(v)
    v.save()
    report(v, {"corner floor": (0, 0, 0), "corner ceiling": (0, 0, H), "south wall at left edge": (2.6, 0, 1.2),
               "south socket x1.9": (1.9, 0, 0.3), "west socket y1.0": (0, 1.0, 0.3), "west socket y2.4": (0, 2.4, 0.3),
               "switch": (0, 3.15, 1.25), "doorway south jamb": (0, 3.4, 1.0), "doorway north jamb": (0, 4.4, 1.0), "doorway head": (0, 3.9, 2.1),
               "fan hub": (1.6, 1.8, H - 0.3), "fan rod top": (1.6, 1.8, H), "tube south end": (0.7, 2.2, H), "tube north end": (0.7, 3.4, H),
               "floor at doorway": (0, 3.9, 0), "ceiling at doorway": (0, 3.9, H),
               "desk south front top": (1.7, 0.9, 0.76), "desk north front top": (1.7, 2.7, 0.76), "desk north back top": (1.0, 2.7, 0.76),
               "desk south back top": (1.0, 0.9, 0.76), "desk foot north front": (1.7, 2.7, 0), "desk foot south front": (1.7, 0.9, 0),
               "habi left": (0, 0.3, 1.5), "habi right": (0, 1.2, 1.5), "habi top": (0, 0.75, 2.2), "habi bottom": (0, 0.75, 0.8),
               "key board left": (0, 1.85, 1.4), "key board right": (0, 2.45, 1.4), "key board top": (0, 2.15, 1.65), "key board bottom": (0, 2.15, 1.2),
               "desk lamp base": (1.3, 2.45, 0.76), "desk lamp top": (1.3, 2.45, 1.36), "tree top": (1.4, 0.3, 1.3), "tree pot": (1.4, 0.3, 0.0),
               "floor lamp foot": (2.15, 0.25, 0), "floor lamp top": (2.15, 0.25, 1.5), "bench west end": (2.4, 0.38, 0.45),
               "rug sw": (2.0, 1.0, 0), "rug nw": (2.0, 2.6, 0), "staff chair top": (0.55, 1.7, 0.8)})


def breakfast_shell(v):
    """Breakfast room, north of the lobby. 4.8 m east to the street wall, 9.6 m north to the end wall."""
    v.room(4.8, 9.6, H)
    for y0 in (0.6, 2.9, 5.0):                                                # three street windows, east wall
        quad(v, ("x", 4.8), y0, y0 + 1.8, 0.9, 2.1)
        v.line((4.8, y0 + 0.9, 0.9), (4.8, y0 + 0.9, 2.1), 2)
    quad(v, ("y", 0), 3.0, 4.2, 0.0, 2.1)                                     # doorway from the lobby, south wall
    quad(v, ("x", 0), 7.0, 7.9, 0.0, 2.1)                                     # kitchen door, west wall
    socket(v, ("x", 0), 6.75, z=1.2, w=0.08, h=0.13)                          # switch plate
    socket(v, ("x", 0), 3.0); socket(v, ("x", 0), 4.6)                        # west wall sockets
    quad(v, ("y", 9.6), 0.5, 1.4, 2.2, 2.5)                                   # air conditioner, north wall
    socket(v, ("y", 9.6), 3.0); socket(v, ("y", 9.6), 4.3)                    # north wall sockets
    fan(v, 2.4, 2.6, H); fan(v, 2.4, 6.2, H)
    for y in (0.8, 4.4, 8.2):
        tube(v, 1.8, 3.0, y - 0.05, y + 0.05, H)


def breakfast():
    """P3. Camera at the lobby doorway, looking northwest. The street windows are behind it. 28mm, 16:9."""
    v = View("breakfast-p3", (4.3, 0.6, 1.3), 325, 65.5, (1920, 1080))
    breakfast_shell(v)
    v.save()
    report(v, {"corner floor": (0, 9.6, 0), "corner ceiling": (0, 9.6, H), "west wall at left edge": (0, 2.4, 1.2),
               "west socket y3.0": (0, 3.0, 0.3), "west socket y4.6": (0, 4.6, 0.3), "switch": (0, 6.75, 1.25),
               "kitchen door south": (0, 7.0, 1.0), "kitchen door north": (0, 7.9, 1.0), "kitchen door head": (0, 7.45, 2.1),
               "ac left": (0.5, 9.6, 2.35), "ac right": (1.4, 9.6, 2.35), "north socket x3.0": (3.0, 9.6, 0.3), "north wall right edge": (3.95, 9.6, 1.2),
               "fan far hub": (2.4, 6.2, H - 0.3), "fan near hub": (2.4, 2.6, H - 0.3), "tube y4.4": (2.4, 4.4, H), "tube y8.2": (2.4, 8.2, H),
               "table near east top": (2.85, 1.2, 0.75), "table near west top": (1.95, 1.2, 0.75), "table far east top": (2.85, 5.4, 0.75),
               "table far west top": (1.95, 5.4, 0.75), "table near east foot": (2.85, 1.2, 0),
               "sideboard south top": (0.5, 2.6, 0.9), "sideboard north top": (0.5, 5.0, 0.9), "sideboard north foot": (0.5, 5.0, 0),
               "rack left": (0, 2.9, 1.65), "rack right": (0, 4.7, 1.65), "rack top": (0, 3.8, 1.95), "rack bottom": (0, 3.8, 1.35),
               "screen left": (2.4, 9.3, 1.0), "screen right": (3.6, 9.3, 1.0), "screen top": (3.0, 9.3, 1.35), "stand top": (3.0, 9.3, 0.55),
               "chair w": (2.6, 7.0, 0.8), "chair e": (3.7, 7.1, 0.8), "plant by kitchen door": (0.35, 8.6, 1.2),
               "bench near end": (3.1, 1.2, 0.45), "bench far end": (3.1, 5.4, 0.45)})


def common_corner():
    """Story frame. Same room as P3. Camera beside the serving table's north end, looking northeast. 28mm, 3:4 upright."""
    v = View("common-corner", (0.7, 5.3, 1.2), 42, 46.4, (1200, 1600))
    breakfast_shell(v)
    v.save()
    report(v, {"corner floor": (4.8, 9.6, 0), "corner ceiling": (4.8, 9.6, H), "north wall at left edge": (2.2, 9.6, 1.2),
               "north socket x3.0": (3.0, 9.6, 0.3), "north socket x4.3": (4.3, 9.6, 0.3), "east wall right edge": (4.8, 7.0, 1.2),
               "window 3 north edge": (4.8, 6.8, 1.5), "tube y8.2": (2.4, 8.2, H), "fan far hub": (2.4, 6.2, H - 0.3),
               "screen left": (2.4, 9.3, 1.0), "screen right": (3.6, 9.3, 1.0), "screen top": (3.0, 9.3, 1.35), "screen bottom": (3.0, 9.3, 0.65), "stand top": (3.0, 9.3, 0.55),
               "chair w seat": (2.6, 7.0, 0.4), "chair w top": (2.6, 6.7, 0.8), "chair e seat": (3.7, 7.1, 0.4), "chair e top": (3.7, 6.8, 0.8),
               "stool between": (3.15, 7.2, 0.44), "bookcase south": (4.5, 7.5, 0.9), "bookcase north": (4.5, 8.7, 0.9),
               "lamp on bookcase": (4.55, 8.4, 1.25), "art left": (4.8, 7.7, 1.5), "art right": (4.8, 8.5, 1.5), "art top": (4.8, 8.1, 1.8), "art bottom": (4.8, 8.1, 1.25),
               "rug sw": (2.0, 6.4, 0), "rug ne": (4.3, 9.0, 0)})


def corridor():
    """Story frame. Upper floor corridor, 1.6 m wide and 14.4 m long, doors on both sides. Camera at the stair end, looking north. 28mm, 3:4 upright."""
    v = View("corridor", (0.65, 0.5, 1.35), 0, 46.4, (1200, 1600))
    v.room(1.6, 14.4, H)
    for k in range(4):
        quad(v, ("x", 0), 0.4 + 3.6 * k, 1.3 + 3.6 * k, 0.0, 2.1)             # sea-side room doors, west wall
        quad(v, ("x", 1.6), 2.3 + 3.6 * k, 3.2 + 3.6 * k, 0.0, 2.1)           # garden-side room doors, east wall
    quad(v, ("y", 14.4), 0.3, 1.3, 0.9, 2.1)                                  # end window
    v.line((0.8, 14.4, 0.9), (0.8, 14.4, 2.1), 2)
    socket(v, ("x", 0), 6.9); socket(v, ("x", 1.6), 12.4)
    tube(v, 0.75, 0.85, 3.0, 4.2, H); tube(v, 0.75, 0.85, 10.2, 11.4, H)
    v.save()
    report(v, {"end wall left foot": (0, 14.4, 0), "end wall right foot": (1.6, 14.4, 0), "end wall left top": (0, 14.4, H), "end wall right top": (1.6, 14.4, H),
               "window left": (0.3, 14.4, 1.5), "window right": (1.3, 14.4, 1.5), "window top": (0.8, 14.4, 2.1), "window sill": (0.8, 14.4, 0.9),
               "west door 2 (y4.0)": (0, 4.0, 1.0), "west door 2 end (y4.9)": (0, 4.9, 1.0), "west door 3 (y7.6)": (0, 7.6, 1.0), "west door 3 end": (0, 8.5, 1.0),
               "west door 4": (0, 11.2, 1.0), "east door 1 (y2.3)": (1.6, 2.3, 1.0), "east door 1 end": (1.6, 3.2, 1.0), "east door 2 (y5.9)": (1.6, 5.9, 1.0), "east door 2 end": (1.6, 6.8, 1.0),
               "east door 3": (1.6, 9.5, 1.0), "door head west 2": (0, 4.0, 2.1), "west socket y6.9": (0, 6.9, 0.3),
               "tube near": (0.8, 3.0, H), "tube near end": (0.8, 4.2, H), "tube far": (0.8, 10.2, H),
               "west wall at left edge": (0, 2.05, 1.35), "east wall at right edge": (1.6, 2.7, 1.35),
               "bench top": (0.8, 14.0, 0.45), "art east wall left": (1.6, 4.0, 1.5), "art east wall right": (1.6, 5.1, 1.5),
               "stool at west door 3": (0.2, 7.2, 0.44), "runner near": (0.8, 2.0, 0), "runner far": (0.8, 13.0, 0)})


if __name__ == "__main__":
    import sys
    views = dict(lobby=lobby, breakfast=breakfast, common_corner=common_corner, corridor=corridor)
    for name in (sys.argv[1:] or views):
        views[name]()
