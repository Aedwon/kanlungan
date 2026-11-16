"""Line drawings of the Hardin Apartment cameras. Each drawing is the camera for one new before, or for a story frame in a new place.

Run: python3 draw_views.py
Writes one PNG per view beside this file and prints where the main points fall,
as a percent of the frame width (x) and height (y), for the edge lists in the prompts.
The drawings are wireframes: lines behind an object show through it.
Coordinates are meters. x runs east, y runs north, z runs up. Heading is compass degrees.
Sizes come from docs/content/project-designs/hardin-apartment.md and are approximate.
The living room and the balcony share one origin, at the southwest corner of the living room. The bedroom has its own.
The View class is copied from design/pahinga/drawings/draw_views.py, with one addition: cy, the horizon line.
The living room's before is approved. Its camera was fitted to that image (see hero_check). hero-check.png is a
check of the fit and of the furniture layout. It is not a reference for any prompt: the hero's marks are measured on the image.
"""
import math, os
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
NEAR = 0.08


class View:
    def __init__(self, name, cam, heading, hfov, size, cy=None):
        self.name, self.cam, self.size = name, cam, size
        h = math.radians(heading)
        self.f = (math.sin(h), math.cos(h), 0.0)
        self.r = (math.cos(h), -math.sin(h), 0.0)
        self.F = (size[0] / 2) / math.tan(math.radians(hfov) / 2)
        self.img = Image.new("RGB", size, "white")
        self.d = ImageDraw.Draw(self.img)
        self.cy = size[1] / 2 if cy is None else cy   # the horizon line, in pixels from the top

    def cam_space(self, p):
        d = [p[i] - self.cam[i] for i in range(3)]
        return (sum(d[i] * self.r[i] for i in range(3)), d[2], sum(d[i] * self.f[i] for i in range(3)))

    def px(self, c):
        return (self.size[0] / 2 + self.F * c[0] / c[2], self.cy - self.F * c[1] / c[2])

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


H = 2.6    # ceiling height in every room
BH = 2.5   # balcony soffit height


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
    """A horizontal circle: a ceiling rose, a round table top, a pot rim."""
    v.poly([(x + r * math.cos(math.radians(a)), y + r * math.sin(math.radians(a)), z) for a in range(0, 360, 20)], w)


def bulb(v, x, y):
    """A ceiling point as handed over: a small ceiling rose and a bare bulb."""
    ring(v, x, y, H, 0.07)
    v.line((x, y, H), (x, y, H - 0.12), 2)
    ring(v, x, y, H - 0.16, 0.04)


def living_shell(v):
    """The living and dining room. 8.0 m west to east and 3.45 m south to north. The window and the balcony door are in
    the east wall. The entry door is in the west wall. The bedroom, bath, and kitchen are south of it."""
    v.room(8.0, 3.45, H)
    quad(v, ("x", 8.0), 1.17, 3.25, 0.56, 2.2)                                # window, east wall
    v.line((8.0, 2.21, 0.56), (8.0, 2.21, 2.2), 2)                            # where its two sliding panels meet
    quad(v, ("x", 8.0), 0.11, 1.05, 0.0, 2.24)                                # balcony door, glass, hinged on its south side
    socket(v, ("y", 3.45), 6.0, z=0.3); socket(v, ("y", 3.45), 6.4, z=0.34)   # north wall sockets, living half
    v.box(6.15, 7.7, 3.25, 3.45, 2.0, 2.3, 2)                                  # air conditioner, north wall
    socket(v, ("y", 0), 7.0, z=0.3)                                           # south wall socket
    quad(v, ("y", 0), 4.2, 5.1, 0.0, 2.1)                                     # bedroom door
    socket(v, ("y", 0), 4.0, z=1.15, w=0.09, h=0.25)                          # switch plate, two switches
    quad(v, ("y", 0), 2.45, 3.15, 0.0, 2.1)                                   # bath door
    quad(v, ("y", 0), 1.2, 2.1, 0.0, 2.1)                                     # kitchen opening, no door
    quad(v, ("x", 0), 0.25, 1.2, 0.0, 2.1)                                    # entry door, west wall
    socket(v, ("x", 0), 1.38, z=1.15, w=0.09, h=0.25)                         # switch plate by the entry door
    socket(v, ("x", 0), 2.9, z=0.3)                                           # west wall socket
    socket(v, ("y", 3.45), 1.6, z=0.3); socket(v, ("y", 3.45), 3.0, z=0.3)    # north wall sockets, dining half
    bulb(v, 5.95, 1.93); bulb(v, 1.8, 1.75)                                   # two ceiling points


def balcony_shell(v):
    """The balcony. 1.2 m deep, across the whole east front of the living room. A low concrete wall with a steel railing."""
    v.poly([(8.0, 0, 0), (9.2, 0, 0), (9.2, 3.45, 0), (8.0, 3.45, 0)], 4)             # floor
    v.poly([(8.0, 0, BH), (9.2, 0, BH), (9.2, 3.45, BH), (8.0, 3.45, BH)], 4)         # soffit
    for x, y in ((8.0, 0), (9.2, 0), (9.2, 3.45), (8.0, 3.45)):
        v.line((x, y, 0), (x, y, BH), 4)                                              # the two end walls and the front wall
    v.box(9.08, 9.2, 0, 3.45, 0, 0.5, 3)                                              # low concrete wall
    v.line((9.14, 0, 0.95), (9.14, 3.45, 0.95), 3)                                    # top rail
    for i in range(1, 29):
        v.line((9.14, i * 0.12, 0.5), (9.14, i * 0.12, 0.95), 1)                      # balusters
    quad(v, ("x", 8.0), 1.17, 3.25, 0.56, 2.2)                                        # window
    v.line((8.0, 2.21, 0.56), (8.0, 2.21, 2.2), 2)
    quad(v, ("x", 8.0), 0.11, 1.05, 0.0, 2.24)                                        # balcony door
    quad(v, ("y", 3.45), 8.5, 8.7, 2.05, 2.2, 2)                                      # small wall light, north end wall


def hero_check():
    """The approved before. Camera fitted to the image: 1.5 m from the west wall, 1.42 m from the south wall, 1.3 m high,
    turned 6 degrees north of east, 24mm, 16:9, with the horizon 44 percent down. The boxes are the layout of section 5."""
    v = View("hero-check", (1.5, 1.42, 1.3), 84.0, 73.7, (1920, 1080), cy=474)
    living_shell(v)
    v.box(4.5, 6.28, 2.53, 3.45, 0, 0.72, 2)                                  # sofa, 178 by 92
    v.box(4.5, 6.28, 2.53, 3.2, 0, 0.42, 1)                                   # its seat
    v.box(4.85, 5.95, 1.8, 2.18, 0, 0.4, 2)                                   # low bench table
    v.poly([(4.5, 1.2, 0), (6.9, 1.2, 0), (6.9, 2.9, 0), (4.5, 2.9, 0)], 2)   # rug, 170 by 240
    v.box(6.6, 7.25, 1.3, 2.0, 0, 0.8, 2)                                     # cane chair
    v.box(5.3, 6.8, 0.0, 0.38, 0, 0.8, 2)                                     # console, 150 by 38 by 80
    v.line((6.5, 3.2, 0), (6.5, 3.2, 1.6), 2); v.line((6.5, 3.2, 1.6), (6.3, 2.95, 1.6), 2); v.box(6.18, 6.42, 2.83, 3.07, 1.25, 1.5, 2)   # crook lamp
    quad(v, ("y", 3.45), 4.73, 5.33, 1.05, 1.85, 2); quad(v, ("y", 3.45), 5.45, 6.05, 1.05, 1.85, 2)   # two prints
    v.box(3.95, 4.4, 3.05, 3.42, 0, 0.5, 2)                                   # book stacks
    ring(v, 7.5, 1.3, 0.4, 0.2); ring(v, 7.5, 1.3, 1.4, 0.4)                  # plant: pot rim and crown
    v.box(7.85, 7.98, 2.95, 3.42, 0, 2.58, 2)                                 # curtain stack
    ring(v, 5.95, 1.93, 2.4, 0.22); ring(v, 5.95, 1.93, 2.28, 0.05)           # paper shade
    v.save()
    report(v, {"far left corner floor": (8.0, 3.45, 0), "far left corner ceiling": (8.0, 3.45, H), "far right corner floor": (8.0, 0, 0), "far right corner ceiling": (8.0, 0, H),
               "window left": (8.0, 3.25, 2.2), "window right sill": (8.0, 1.17, 0.56), "door left top": (8.0, 1.05, 2.24), "door right foot": (8.0, 0.11, 0),
               "socket n 6.0": (6.0, 3.45, 0.34), "socket n 6.4": (6.4, 3.45, 0.38), "ac near top": (6.15, 3.25, 2.3), "ac far bottom": (7.7, 3.25, 2.0),
               "socket s 7.0": (7.0, 0, 0.34), "bedroom door far jamb": (5.1, 0, 1.0), "bedroom door near jamb": (4.2, 0, 1.0), "knob": (5.0, 0, 1.0), "switch": (4.0, 0, 1.27), "ceiling point": (5.95, 1.93, H),
               "sofa near arm front top": (4.5, 2.53, 0.6), "sofa near arm front foot": (4.5, 2.53, 0), "sofa far arm front top": (6.28, 2.53, 0.6), "sofa far front foot": (6.28, 2.53, 0),
               "sofa back top near": (4.5, 3.4, 0.72), "sofa back top far": (6.28, 3.4, 0.72),
               "bench near left": (4.85, 2.18, 0.4), "bench near right": (4.85, 1.8, 0.4), "bench far right": (5.95, 1.8, 0.4), "bench far left": (5.95, 2.18, 0.4), "bench foot near": (4.85, 1.8, 0),
               "rug near left": (4.5, 2.9, 0), "rug near right": (4.5, 1.2, 0), "rug far right": (6.9, 1.2, 0), "rug far left": (6.9, 2.9, 0),
               "chair left": (6.6, 2.0, 0.5), "chair right": (6.6, 1.3, 0.5), "chair top": (7.2, 1.65, 0.8), "chair foot": (6.6, 1.65, 0),
               "console near end top": (5.3, 0.38, 0.8), "console far end top": (6.8, 0.38, 0.8), "console near foot": (5.3, 0.38, 0), "console far foot": (6.8, 0.38, 0), "console at wall near": (5.3, 0, 0.8),
               "console lamp top": (6.5, 0.19, 1.25), "print over console near": (5.6, 0, 1.5), "print over console far": (6.1, 0, 1.5), "print top": (5.85, 0, 1.75), "print bottom": (5.85, 0, 1.05),
               "lamp foot": (6.5, 3.2, 0), "lamp top": (6.5, 3.2, 1.6), "lamp shade top": (6.3, 2.95, 1.5), "lamp shade bottom": (6.3, 2.95, 1.25),
               "print 1 near": (4.73, 3.45, 1.45), "print 1 far": (5.33, 3.45, 1.45), "print 2 near": (5.45, 3.45, 1.45), "print 2 far": (6.05, 3.45, 1.45), "prints top": (5.4, 3.45, 1.85), "prints bottom": (5.4, 3.45, 1.05),
               "books near": (3.95, 3.05, 0.5), "books far": (4.4, 3.05, 0.5), "books foot": (3.95, 3.05, 0),
               "plant pot": (7.5, 1.3, 0.4), "plant top": (7.5, 1.3, 1.45), "plant left": (7.5, 1.7, 1.0), "plant right": (7.5, 0.9, 1.0), "herbs through window": (8.9, 2.0, 0.95), "lemongrass": (8.98, 3.0, 1.35), "bean canes top": (8.3, 3.3, 1.8),
               "curtain stack inner": (7.9, 2.95, 1.2), "shade rim left": (5.95, 2.15, 2.4), "shade rim right": (5.95, 1.71, 2.4), "shade bottom": (5.95, 1.93, 2.26),
               "balcony rail": (9.14, 1.5, 0.95), "balcony wall top": (9.08, 0.6, 0.5), "balcony floor at door": (8.0, 0.6, 0)})


def dining():
    """Story frame. The dining end of the living room. Camera in front of the console, looking west-northwest down the room. 24mm, 16:9."""
    v = View("dining", (5.4, 0.5, 1.25), 292, 73.7, (1920, 1080))
    living_shell(v)
    v.save()
    report(v, {"nw corner floor": (0, 3.45, 0), "nw corner ceiling": (0, 3.45, H), "sw corner floor": (0, 0, 0), "sw corner ceiling": (0, 0, H),
               "entry door south jamb": (0, 0.25, 1.0), "entry door north jamb": (0, 1.2, 1.0), "entry door head": (0, 0.7, 2.1), "entry switch": (0, 1.38, 1.27),
               "west socket": (0, 2.9, 0.34), "north socket 1.6": (1.6, 3.45, 0.34), "north socket 3.0": (3.0, 3.45, 0.34), "ceiling point": (1.8, 1.75, H), "bedroom door near jamb": (4.2, 0, 1.0), "switch s": (4.0, 0, 1.27), "bath door east jamb": (3.15, 0, 1.0), "bath door west jamb": (2.45, 0, 1.0), "kitchen opening east": (2.1, 0, 1.0), "kitchen opening west": (1.2, 0, 1.0), "door heads": (2.45, 0, 2.1),
               "north wall at right edge": (3.6, 3.45, 1.25), "south wall at left edge": (3.5, 0, 1.25),
               "table sw top": (1.1, 1.4, 0.75), "table se top": (2.5, 1.4, 0.75), "table nw top": (1.1, 2.1, 0.75), "table ne top": (2.5, 2.1, 0.75), "table se foot": (2.5, 1.4, 0), "table ne foot": (2.5, 2.1, 0), "table sw foot": (1.1, 1.4, 0),
               "chair s1": (1.45, 1.15, 0.85), "chair s2": (2.15, 1.15, 0.85), "chair n1": (1.45, 2.35, 0.85), "chair n2": (2.15, 2.35, 0.85), "chair s2 foot": (2.35, 0.95, 0),
               "bookcase west top": (0.35, 3.15, 1.8), "bookcase east top": (1.25, 3.15, 1.8), "bookcase east foot": (1.25, 3.15, 0), "bookcase west foot": (0.35, 3.15, 0),
               "shade top": (1.8, 1.75, 1.72), "shade rim l": (1.8, 1.53, 1.58), "shade rim r": (1.8, 1.97, 1.58),
               "stool": (0.23, 1.73, 0.42), "stool foot": (0.41, 1.73, 0), "shoe tray n": (0.3, 2.6, 0), "pegs s": (0, 1.55, 1.6), "pegs n": (0, 2.45, 1.6),
               "print w s": (0, 2.62, 1.45), "print w n": (0, 3.12, 1.45), "print w top": (0, 2.87, 1.8), "print w bottom": (0, 2.87, 1.1),
               "print n w": (1.9, 3.45, 1.5), "print n e": (2.5, 3.45, 1.5), "print n top": (2.2, 3.45, 1.9), "print n bottom": (2.2, 3.45, 1.1)})


def bedroom_shell(v):
    """The bedroom, with its own origin at its southwest corner. 4.0 m west to east and 3.6 m south to north.
    Its door is in the north wall and opens from the living room. Its window is in the east wall."""
    v.room(4.0, 3.6, H)
    quad(v, ("y", 3.6), 0.2, 1.1, 0.0, 2.1)                                   # door, north wall
    socket(v, ("y", 3.6), 1.3, z=1.15, w=0.09, h=0.25)                        # switch plate beside it
    socket(v, ("y", 3.6), 2.6, z=0.3)                                         # north wall socket
    quad(v, ("x", 4.0), 0.9, 2.7, 0.9, 2.2); v.line((4.0, 1.8, 0.9), (4.0, 1.8, 2.2), 2)   # window, east wall
    v.box(3.8, 4.0, 0.05, 0.85, 2.0, 2.3, 2)                                  # air conditioner, east wall, beside the window
    socket(v, ("y", 0), 0.6, z=0.3); socket(v, ("y", 0), 3.75, z=0.3)         # south wall sockets
    quad(v, ("x", 0), 0.15, 2.35, 0.05, 2.3)                                  # closet front, west wall: four flush doors
    for y in (0.7, 1.25, 1.8):
        v.line((0, y, 0.05), (0, y, 2.3), 2)
    for y in (0.64, 0.76, 1.74, 1.86):
        ring(v, 0.02, y, 1.05, 0.02, 1)                                       # four small knobs
    bulb(v, 2.0, 1.8)


def bedroom():
    """P2. Camera in the northeast corner, looking southwest. The window and the door are behind it. 24mm, 16:9."""
    v = View("bedroom-p2", (3.75, 3.35, 1.25), 220, 73.7, (1920, 1080))
    bedroom_shell(v)
    v.save()
    report(v, {"sw corner floor": (0, 0, 0), "sw corner ceiling": (0, 0, H), "south wall at left edge": (3.5, 0, 1.25), "west wall at right edge": (0, 2.45, 1.25),
               "socket s 0.6": (0.6, 0, 0.34), "socket s 3.75": (3.75, 0, 0.34), "ceiling point": (2.0, 1.8, H),
               "closet south edge": (0, 0.15, 1.2), "closet north edge": (0, 2.35, 1.2), "closet top": (0, 1.25, 2.3), "closet stile 0.7": (0, 0.7, 1.2), "closet stile 1.25": (0, 1.25, 1.2), "closet stile 1.8": (0, 1.8, 1.2), "knob": (0, 0.7, 1.05),
               "bed head w top": (1.3, 0.08, 1.0), "bed head e top": (3.02, 0.08, 1.0), "bed foot w top": (1.3, 2.22, 0.5), "bed foot e top": (3.02, 2.22, 0.5), "bed foot e floor": (3.02, 2.22, 0), "bed foot w floor": (1.3, 2.22, 0), "bed head e floor": (3.02, 0, 0),
               "stool top": (1.03, 0.25, 0.42), "stool lamp top": (1.03, 0.25, 0.82), "bakal top": (3.3, 0.25, 0.5), "bakal lamp top": (3.3, 0.25, 0.9), "bakal foot": (3.3, 0.44, 0),
               "print w": (1.56, 0, 1.5), "print e": (2.76, 0, 1.5), "print top": (2.16, 0, 1.8), "print bottom": (2.16, 0, 1.2),
               "runner sw": (0.35, 0.5, 0), "runner nw": (0.35, 2.5, 0), "runner ne": (1.15, 2.5, 0), "runner se": (1.15, 0.5, 0), "shade rim w": (1.78, 1.8, 2.4), "shade rim e": (2.22, 1.8, 2.4), "shade bottom": (2.0, 1.8, 2.26)})


def balcony():
    """P3. Camera at the south end of the balcony, by the door, looking north along it. 24mm, upright 3:4."""
    v = View("balcony-p3", (8.5, 0.22, 1.3), 4, 53.13, (1080, 1440))
    balcony_shell(v)
    v.save()
    report(v, {"end wall left foot": (8.0, 3.45, 0), "end wall left top": (8.0, 3.45, BH), "end wall right foot": (9.08, 3.45, 0), "end wall right top": (9.2, 3.45, BH),
               "window near edge sill": (8.0, 1.17, 0.56), "window near edge head": (8.0, 1.17, 2.2), "window far edge sill": (8.0, 3.25, 0.56), "window far edge head": (8.0, 3.25, 2.2), "wall at left edge": (8.0, 1.52, 1.3),
               "low wall top near": (9.08, 1.4, 0.5), "low wall top far": (9.08, 3.45, 0.5), "rail far": (9.14, 3.45, 0.95), "rail near": (9.14, 1.6, 0.95), "low wall foot near": (9.08, 1.5, 0),
               "wall light": (8.6, 3.45, 2.12),
               "bench near top": (8.8, 1.2, 0.42), "bench far top": (8.8, 2.9, 0.42), "bench near foot": (8.75, 1.2, 0), "bench far foot": (8.75, 2.9, 0),
               "stool": (8.3, 2.5, 0.42), "stool foot": (8.3, 2.32, 0), "bean canes top": (8.3, 3.3, 1.8), "bean pot": (8.3, 3.3, 0.35), "pandan": (8.65, 3.2, 0.7), "floor at bottom edge": (8.5, 2.17, 0), "pots at wall near": (8.2, 1.9, 0.25), "pots at wall far": (8.2, 3.0, 0.25), "lemongrass top": (8.98, 3.0, 1.35)})


if __name__ == "__main__":
    import sys
    views = dict(hero_check=hero_check, dining=dining, bedroom=bedroom, balcony=balcony)
    for name in (sys.argv[1:] or views):
        views[name]()
