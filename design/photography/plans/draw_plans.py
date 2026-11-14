#!/usr/bin/env python3
"""Draw the four scene maps using only Python's standard library.

Run from any directory: python3 design/photography/plans/draw_plans.py
Only the four named SVGs are written. Camera rows are read from the bibles,
so position, heading, lens, and anchor marks have one source of truth.
All model geometry is in meters, with north up and x east, y north.
"""

from html import escape
import math
from pathlib import Path
import re
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[3]
OUT = Path(__file__).resolve().parent
BG = "#F2ECE3"
INK = "#2E211A"
MUTED = "#6A584A"
CLAY = "#8E4A2C"
WOOD = "#D9C4A6"
FLOOR = "#EFE6D6"
STONE = "#E3DCD0"
GLASS = "#8FB0C0"
MAHOGANY = "#B97F5E"
RUG = "#E6D5B8"
WHITE = "#F7F2EA"


def attrs(values):
    return " ".join(f'{key.replace("_", "-")}="{escape(str(value), quote=True)}"'
                    for key, value in values.items())


class Drawing:
    def __init__(self, title, subtitle, width=1180, height=1040):
        self.width, self.height = width, height
        self.items = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" '
                      f'height="{height}" viewBox="0 0 {width} {height}" '
                      'font-family="Helvetica, Arial, sans-serif">',
                      f'<title>{escape(title)}</title>',
                      f'<rect width="100%" height="100%" fill="{BG}"/>']
        self.text(24, 30, title + " · plan and camera map", 18, weight=500)
        self.text(24, 55, subtitle, 11, fill=MUTED)
        self.text(24, 77, "Coordinates in meters. North up. ★ = anchor shot for that space.",
                  11, fill=MUTED)
        x = width - 42
        self.add("path", d=f"M{x} 64 L{x} 34 M{x-6} 44 L{x} 34 L{x+6} 44",
                 stroke=INK, stroke_width=2, fill="none")
        self.text(x, 24, "N", 13, anchor="middle")

    def add(self, tag, **values):
        self.items.append(f"<{tag} {attrs(values)}/>")

    def text(self, x, y, value, size=10, fill=INK, anchor="start", weight=400):
        values = dict(x=f"{x:.1f}", y=f"{y:.1f}", font_size=size,
                      font_weight=weight, text_anchor=anchor, fill=fill)
        self.items.append(f'<text {attrs(values)}>{escape(value)}</text>')

    def legend(self, y):
        self.add("line", x1=25, y1=y, x2=65, y2=y, stroke=INK, stroke_width=4)
        self.text(75, y + 4, "Wall", 11)
        self.add("line", x1=145, y1=y, x2=185, y2=y, stroke=GLASS, stroke_width=5)
        self.text(195, y + 4, "Window / open glass doors", 11)
        self.add("rect", x=390, y=y-8, width=32, height=16, fill=WOOD,
                 stroke=INK, stroke_width=1.5, rx=2)
        self.text(432, y + 4, "Furniture", 11)
        self.add("circle", cx=550, cy=y, r=8, fill="none", stroke=CLAY,
                 stroke_width=1.5, stroke_dasharray="3 2")
        self.text(568, y + 4, "Pendant above", 11)
        self.add("polygon", points=f"710,{y} 747,{y-11} 747,{y+11}",
                 fill=CLAY, fill_opacity=0.18, stroke=CLAY, stroke_width=1)
        self.text(759, y + 4, "Camera cone", 11)
        self.text(25, y + 29,
                  "Cones show full-frame horizontal direction before crop; their short length is a symbol, not a focus limit.",
                  11, fill=MUTED)
        self.text(25, y + 49,
                  "35mm cone: 54 degrees. 50mm cone: 40 degrees. Read camera height and any downward pitch in the bible.",
                  11, fill=MUTED)

    def save(self, slug):
        result = "\n".join(self.items + ["</svg>"]) + "\n"
        ET.fromstring(result)
        assert chr(0x2014) not in result
        (OUT / f"{slug}.svg").write_text(result)


class Panel:
    def __init__(self, drawing, ox, oy, scale):
        self.d = drawing
        self.ox, self.oy, self.scale = ox, oy, scale

    def xy(self, x, y):
        return self.ox + x * self.scale, self.oy - y * self.scale

    def line(self, x1, y1, x2, y2, color=INK, width=3, dash=None):
        a, b = self.xy(x1, y1), self.xy(x2, y2)
        values = dict(x1=a[0], y1=a[1], x2=b[0], y2=b[1],
                      stroke=color, stroke_width=width)
        if dash:
            values["stroke_dasharray"] = dash
        self.d.add("line", **values)

    def rect(self, x, y, w, h, fill=FLOOR, stroke=INK, width=1.5, dash=None):
        px, py = self.xy(x, y + h)
        values = dict(x=px, y=py, width=w*self.scale, height=h*self.scale,
                      rx=2, fill=fill, stroke=stroke, stroke_width=width)
        if dash:
            values["stroke_dasharray"] = dash
        self.d.add("rect", **values)

    def text(self, x, y, value, size=10, fill=INK, anchor="middle"):
        px, py = self.xy(x, y)
        self.d.text(px, py, value, size, fill, anchor)

    def piece(self, x, y, w, h, label="", fill=WOOD, facing=None, planned=False):
        self.rect(x-w/2, y-h/2, w, h, fill, dash="4 3" if planned else None)
        if label:
            self.text(x, y-0.06, label, 9)
        if facing is not None:
            a = math.radians(facing)
            dx, dy = math.sin(a), math.cos(a)
            length = min(w, h) * 0.32
            sx, sy = x + dx * length, y + dy * length
            ex, ey = x + dx * (length + 0.20), y + dy * (length + 0.20)
            self.line(sx, sy, ex, ey, MUTED, 1)
            for delta in (-35, 35):
                b = math.radians(facing + 180 + delta)
                self.line(ex, ey, ex+0.12*math.sin(b), ey+0.12*math.cos(b), MUTED, 1)

    def circle(self, x, y, radius, fill=WOOD, stroke=INK, dash=None):
        px, py = self.xy(x, y)
        values = dict(cx=px, cy=py, r=radius*self.scale,
                      fill=fill, stroke=stroke, stroke_width=1.5)
        if dash:
            values["stroke_dasharray"] = dash
        self.d.add("circle", **values)

    def glass(self, x1, y1, x2, y2):
        self.line(x1, y1, x2, y2, GLASS, 5)

    def opening(self, x1, y1, x2, y2):
        self.line(x1, y1, x2, y2, FLOOR, 7)

    def camera(self, c, offset=(8, -8), number=None):
        x, y = self.xy(c["x"], c["y"])
        half = 27 if c["lens"] == 35 else 20
        # Match the short cones in the approved Lilim map.
        length = self.scale * (3.2 if c["lens"] == 35 else 2.4)
        if c["studio"]:
            length = self.scale * 0.45
        points = [(x, y)]
        for heading in (c["heading"]-half, c["heading"]+half):
            a = math.radians(heading)
            points.append((x+length*math.sin(a), y-length*math.cos(a)))
        self.d.add("polygon", points=" ".join(f"{a:.1f},{b:.1f}" for a, b in points),
                   fill=CLAY, fill_opacity=0.18 if c["anchor"] else 0.1,
                   stroke=CLAY, stroke_width=1, stroke_opacity=0.6,
                   data_camera=c["number"], data_shot=c["shot"],
                   data_x=c["x"], data_y=c["y"], data_heading=c["heading"],
                   data_lens=c["lens"], data_height=c["height"],
                   data_space="studio" if c["studio"] else "project")
        self.d.add("circle", cx=x, cy=y, r=6, fill=CLAY)
        label = c["number"] + (" ★" if c["anchor"] else "") if number is None else number
        if label:
            self.d.text(x+offset[0], y+offset[1], label, 12, CLAY, weight=500)

    def scale_bar(self, x, y, meters=5):
        self.line(x, y, x+meters, y, INK, 2)
        self.text(x+meters/2, y+0.3, f"{meters} m", 11)


def cameras(slug):
    source = (ROOT / "docs/content/scene-bibles" / f"{slug}.md").read_text()
    rows = []
    for line in source.splitlines():
        if not re.match(r"\| C\d+", line):
            continue
        cols = [c.strip() for c in line.strip("|").split("|")]
        label, shot, position, height, heading, lens, _ = cols
        studio = position.startswith("Studio:")
        x, y = map(float, position.replace("Studio:", "").split(","))
        rows.append(dict(number=label.split()[0], shot=shot.strip("`"), x=x, y=y,
                         height=float(height.split()[0]), heading=float(heading),
                         lens=int(lens.replace("mm", "")), anchor="anchor" in label,
                         studio=studio))
    assert len(rows) == 10, (slug, "Expected one camera for each of ten shots")
    assert len({c["shot"] for c in rows}) == 10
    assert [c["number"] for c in rows] == [f"C{i}" for i in range(1, 11)]
    return rows


def tanaw():
    slug = "tanaw-residence"
    d = Drawing("Tanaw Residence", "118 sqm · BGC, Taguig · west skyline · all views at dusk, lamps on")
    p = Panel(d, 100, 850, 58)
    p.rect(0, 0, 10, 11.8, width=4)
    p.rect(4, 0, 1.8, 4.2, STONE, MUTED, 1)
    p.line(5.8, 0, 5.8, 11.8)
    p.line(7, 0, 7, 11.8)
    for y in (2, 5.5, 8):
        p.line(7, y, 10, y)
    p.line(8.5, 0, 8.5, 2)
    p.line(0, 4.2, 5.8, 4.2, MUTED, 1, "4 3")
    for y1, y2 in ((0.5, 1.3), (2.1, 3), (5.6, 6.5), (8.1, 9)):
        p.opening(7, y1, 7, y2)
    p.opening(5.8, 4.4, 5.8, 5.4)
    p.opening(6, 0, 6.9, 0)
    p.opening(9.1, 2, 9.9, 2)
    p.glass(0, 0.3, 0, 11.5)
    for y in (0.3, 2.3, 4.3, 6.3, 8.3, 10.3, 11.5):
        p.line(-0.08, y, 0.08, y, MAHOGANY, 3)
    for y1, y2 in ((2.8, 4.8), (6.1, 7.6), (9.2, 11.5)):
        p.glass(10, y1, 10, y2)
    p.text(2.8, 10.7, "Living", 14, MUTED)
    p.text(2.0, 3.8, "Dining", 12, MUTED)
    p.text(4.9, 3.8, "Kitchen", 10, MUTED)
    p.text(8.5, 11.45, "Main bedroom", 11, MUTED)
    p.text(8.5, 7.55, "Study", 11, MUTED)
    p.text(8.5, 5.15, "Guest bedroom", 11, MUTED)
    p.text(8.5, 0.4, "Bath / laundry", 10, MUTED)
    p.text(6.4, 7.1, "Hall", 10, MUTED)
    p.piece(5.1, 8.9, .92, 1.78, "Silong", facing=270)
    p.piece(5.05, 10.15, .4, .4)
    p.text(4.1, 10.13, "Sulok", 9)
    p.circle(5.05, 10.65, .2)
    p.text(4.1, 10.6, "Sinag", 9)
    p.piece(3.5, 11.62, 1, .36, fill=MAHOGANY, facing=180)
    p.text(3.5, 12.1, "Estante", 10)
    p.piece(4.95, 9.25, .5, .5, fill=WHITE)
    p.line(5.8, 8.65, 5.8, 9.15, CLAY, 5)
    p.text(6.45, 9, "Amihan", 9)
    p.piece(2.4, .225, 1.8, .45, "Baul", MAHOGANY)
    p.piece(2.1, 2.3, .75, 1.2, "Table*")
    for x in (1.35, 2.85):
        for y in (1.95, 2.65):
            p.piece(x, y, .48, .45)
    p.piece(5.5, 2.05, .6, 3.5, fill=MAHOGANY)
    p.piece(8.5, 10.725, 1.6, 2.15, "Bed*", facing=180)
    p.piece(9.6, 11.1, .4, .45)
    p.circle(9.6, 11.1, .15, WHITE)
    p.text(10.5, 11.1, "Luad", 9)
    p.circle(7.35, 11.71, .09, WHITE, CLAY)
    p.text(7.4, 12.1, "Tala", 9)
    p.piece(8.75, 8.275, 1.5, .55, fill=MAHOGANY)
    p.piece(8.7, 4.5, 1.4, 2, "Bed*", facing=180)
    p.piece(7.75, 4.9, .35, .4)
    p.piece(7.275, 3.8, .55, 1.2, fill=MAHOGANY)
    p.circle(7.75, 5.4, .08, WHITE)
    p.piece(9.65, 6.8, .6, 1.2, "Desk*", facing=90)
    p.piece(8.95, 6.8, .48, .45)
    p.circle(9.65, 7.15, .08, WHITE)
    p.piece(8.45, 7.775, 1.8, .45, fill=MAHOGANY)
    p.piece(6.85, 1.45, .3, 1.5, fill=MAHOGANY)
    p.piece(5.875, 1.6, .15, .5)
    p.circle(5.85, 1.6, .07, WHITE)
    for c in cameras(slug):
        p.camera(c, (-42, 18) if c["number"] == "C10" else (8, -8))
    p.text(5, 12.65, "10 m east to west × 11.8 m north to south", 11)
    p.text(0, -.4, "(0, 0)", 9, MUTED)
    p.scale_bar(0, -1, 5)
    d.text(760, 190, "West = skyline", 13)
    d.text(760, 216, "Full-height fixed glazing", 11, MUTED)
    d.text(760, 242, "Acacia built-ins; mahogany", 11, MUTED)
    d.text(760, 260, "Silong and Baul stay mahogany.", 11, MUTED)
    d.text(760, 300, "* = not a catalog piece", 11, MUTED)
    d.text(760, 324, "Furniture arrows show facing.", 11, MUTED)
    d.text(760, 348, "No balcony or extra floor area.", 11, MUTED)
    d.legend(955)
    d.save(slug)


def guest(p, base, full=True):
    p.rect(0, base, 6, 4, width=3)
    p.line(4, base, 4, base+4)
    p.line(4, base+2, 6, base+2)
    p.opening(6, base+.4, 6, base+1.3)
    p.opening(4, base+.3, 4, base+1.3)
    p.opening(4.5, base+2, 5.3, base+2)
    p.glass(0, base+1, 0, base+3)
    p.rect(1, base+.4, 2, 3, RUG, CLAY, 1.2, "4 3")
    p.piece(2, base+2.925, 1.68, 2.15, "Himlay" if full else "", facing=180)
    p.piece(2, base+2.05, 1.3, .32, fill="#6A584A" if base == 12 else WHITE)
    p.piece(3.25, base+3.25, .34, .34)
    p.piece(1.2, base+.225, 1.2, .45, fill=MAHOGANY)
    p.circle(3.25, base+3.9, .07, WHITE)
    if full:
        p.text(5, base+3.3, "Bath*", 11, MUTED)
        p.text(5, base+.55, "Entry", 10, MUTED)
        p.text(2, base+.65, "Banig", 10, MUTED)
        p.text(3.8, base+3.3, "Tuntungan", 9)


def public_rooms(p):
    p.rect(0, 0, 10, 8, width=4)
    p.line(4, 0, 4, 8)
    p.opening(0, 2, 0, 3.2)
    p.opening(4, 5.8, 4, 7.2)
    p.opening(6, 8, 8, 8)
    p.glass(0, 4.2, 0, 6.8)
    p.glass(.5, 8, 3.5, 8)
    p.glass(10, 1, 10, 3)
    p.glass(10, 4.5, 10, 7)
    p.glass(8.4, 8, 9.6, 8)
    p.piece(3.81, 2.8, .38, 1.4, facing=270)
    p.line(4, 2.35, 4, 3.25, CLAY, 5)
    p.text(2.5, 3.9, "Bangko + Habi", 10)
    p.piece(7, 4.7, .95, 2.6, "Hapag 260")
    for x in (6.12, 7.88):
        for y in (3.85, 4.7, 5.55):
            p.piece(x, y, .52, .48)
    for y in (2.95, 6.45):
        p.piece(7, y, .48, .52)
    p.circle(7, 4.7, .17, "none", CLAY, "3 2")
    p.piece(7, 1.6, 2.6, .6, "", MAHOGANY)
    p.circle(7, 1.6, .21, RUG)
    for x in (6.15, 6.5):
        p.circle(x, 1.6, .10, STONE)
    p.circle(7, 1.6, .09, STONE)
    for x in (7.45, 7.6, 7.75, 7.9):
        p.circle(x, 1.6, .045, WHITE)
    p.text(7, .95, "Counter* + Bilao", 10)
    p.text(2, 7.3, "Lobby", 14, MUTED)
    p.text(7, 7.3, "Breakfast room", 13, MUTED)


def dalampasigan():
    slug = "dalampasigan-inn"
    d = Drawing("Dalampasigan Inn", "640 sqm · San Juan, La Union · sea west · bright coastal morning", 1280, 1280)
    p = Panel(d, 330, 990, 25)
    p.rect(0, 0, 10, 32, width=4)
    public_rooms(p)
    for base in (8, 12, 16, 20, 24, 28):
        guest(p, base, False)
    p.rect(6, 8, 2, 24, FLOOR, INK, 3)
    p.rect(8, 8, 2, 24, STONE, INK, 3)
    p.opening(6, 8, 8, 8)
    for base in (8, 12, 16, 20, 24, 28):
        p.opening(6, base+.4, 6, base+1.3)
    for y in (10, 18, 26):
        p.glass(8, y, 8, y+1)
    p.glass(6, 32, 8, 32)
    p.rect(8, 3, 2, 5, "none", MUTED, 1, "4 3")
    p.text(9, 5.5, "Stair*", 9, MUTED)
    p.text(7, 30, "Hall", 9)
    p.text(9, 24, "Service", 8, MUTED)
    p.text(3, 32.65, "Ground floor, 10 × 32 m", 12)
    p.text(0, -.5, "(0, 0)", 9, MUTED)
    p.text(-5, 25, "SEA", 12, MUTED)
    p.text(-5, 24, "west", 11, MUTED)
    p.text(3, 10, "A", 13)
    p.text(3, 14, "B", 13)
    cs = cameras(slug)
    for c in (cs[0], cs[9]):
        p.camera(c)
    p.scale_bar(-8, -1.9)
    # Insets use original project coordinates and contain the remaining cameras.
    g = Panel(d, 700, 1006, 68)
    guest(g, 8)
    g.text(3, 12.7, "Room A enlarged: 6 × 4 m", 13)
    g.text(3, 7.55, "B repeats A exactly, translated 4 m north.", 11, MUTED)
    g.text(3, 7.25, "Only Kumot changes: natural to indigo.", 11, MUTED)
    for c in (cs[2], cs[3], cs[4]):
        g.camera(c, (-45, 20) if c["number"] == "C4" else (8, -8))
    # Overlay B's translated camera at the identical local point, label separately.
    b = dict(cs[5], y=cs[5]["y"]-4)
    g.camera(b, (8, 22), "C6 ★ in B")
    # Preserve true global coordinates on the overlay's metadata.
    d.items[-3] = d.items[-3].replace('data-y="8.6"', 'data-y="12.6"')
    g.scale_bar(0, 6.65, 2)
    q = Panel(d, 675, 1015, 50)
    public_rooms(q)
    q.text(5, 8.7, "Ground-floor shared rooms enlarged", 13)
    for c in (cs[1], cs[6], cs[7], cs[8]):
        offsets = {"C2": (-10, -15), "C7": (-40, -10), "C8": (8, 20), "C9": (8, 23)}
        q.camera(c, offsets[c["number"]])
    q.scale_bar(0, -1.0)
    d.text(25, 1100, "Upper floor: same six room types and corridor above the guest wing; support rooms above the south block.", 11, MUTED)
    d.text(25, 1122, "Twelve guest rooms total. * = not a catalog piece. Each inset has its own scale bar; north is unchanged.", 11, MUTED)
    d.text(25, 1144, "C6 is drawn over C3 in the room-type inset because the room and camera are exact translations.", 11, MUTED)
    d.legend(1190)
    d.save(slug)


def pahinga():
    slug = "pahinga-villas"
    d = Drawing("Pahinga Villas", "520 sqm covered · Panglao, Bohol · filtered daylight; C7 and C10 at matching dusk", 1360, 1040)
    p = Panel(d, 375, 730, 38)
    for x, y in ((-5, 1), (-4, 8), (2, 10), (8, 9), (11, 10), (20, 3)):
        p.circle(x, y, .18, MUTED, MUTED)
        p.circle(x, y, .9, "none", MUTED, "4 3")
        p.text(x, y+1.15, "Palm", 9, MUTED)
    p.rect(-3.2, -1.2, 10.4, 9.4, "none", MUTED, 1, "6 5")
    p.rect(-2, 0, 2, 7, STONE, MUTED, 1)
    p.rect(0, 0, 6, 7, width=4)
    p.rect(4, 0, 2, 2.4, STONE, INK, 3)
    p.opening(4, .7, 4, 1.5)
    p.opening(6, 2.5, 6, 3.4)
    p.glass(0, .7, 0, 6.4)
    for y in (.7, 2.6, 4.5, 6.4):
        p.piece(0, y, .18, .18, fill="#5A3424")
    for y in (0, 7):
        p.piece(-2, y, .18, .18, fill="#5A3424")
    for y in (.8, 6.25):
        p.rect(.02, y-.22, .16, .44, WHITE, MUTED, 1)
    p.piece(3.2, 5.925, 1.68, 2.15, "Himlay", facing=180)
    p.line(2.75, 7, 3.65, 7, CLAY, 5)
    p.text(3.2, 7.45, "Habi", 10)
    p.piece(1.1, 6.775, 1.8, .45, fill=MAHOGANY)
    p.circle(.7, 6.75, .15, WHITE)
    p.circle(1.5, 6.75, .14, STONE)
    p.text(.9, 7.55, "Luad / Tapayan", 10)
    p.piece(-1.25, 5.1, .9, 2, "Duyan", facing=270)
    p.piece(-1.2, 3.6, .4, .4)
    p.text(-3.1, 3.55, "Sulok", 9)
    p.piece(-1.2, 1.4, .78, .72, facing=270)
    p.text(-3.1, 1.35, "Dapit.", 9)
    p.piece(2.1, 1.6, .6, 1.4, "Bench*", facing=270)
    p.circle(2.1, 1.6, .24, "none", CLAY, "3 2")
    p.text(2.1, .45, "Kapis above", 9)
    p.piece(5.7, 5, .6, 2, fill=MAHOGANY)
    p.text(5, 1.1, "Bath*", 10)
    p.text(1.9, 8.7, "Villa: 8 × 7 m, including 2 × 7 m terrace", 12)
    p.text(0, -.5, "(0, 0)", 9, MUTED)
    p.rect(8.8, -1.2, 11.4, 10.4, "none", MUTED, 1, "6 5")
    p.rect(10, 0, 9, 8, FLOOR, MUTED, 1)
    p.line(19, 0, 19, 8, INK, 4)
    p.rect(17.8, 5.5, 1.2, 2.5, FLOOR, INK, 3)
    p.opening(17.8, 6, 17.8, 6.9)
    for x, y in ((10, 0), (10, 4), (10, 8), (19, 0), (19, 8)):
        p.piece(x, y, .2, .2, fill="#5A3424")
    p.piece(16.8, 3.4, .7, 3.2, "Desk*", facing=270)
    p.piece(12.6, 5.8, 2.4, .6, "Bench*", facing=180)
    for x in (12, 13):
        p.circle(x, 2.5, .2)
    p.text(14.5, 8.7, "Reception pavilion: 9 × 8 m", 12)
    for c in cameras(slug):
        p.camera(c, (-38, 19) if c["number"] in ("C3", "C8") else (8, -8))
    p.scale_bar(-8, -3.0)
    d.text(25, 880, "Eight identical one-bedroom villas: 8 × 56 + 72 = 520 sqm covered. Other villas are outside this map.", 11, MUTED)
    d.text(25, 902, "Dashed outlines are eaves. West terrace has one low step and no railing. * = not a catalog piece.", 11, MUTED)
    d.legend(955)
    d.save(slug)


def hardin():
    slug = "hardin-apartment"
    d = Drawing("Hardin Apartment", "74 sqm · Legazpi Village, Makati · fixed plan for photographs, renders, and design-book pages", 1280, 1040)
    p = Panel(d, 65, 760, 64)
    p.rect(0, 0, 10, 7.4, width=4)
    p.rect(0, 0, 1.2, 3, STONE, INK, 3)
    p.line(0, 0, 0, 3, GLASS, 5)
    p.line(0, 0, 1.2, 0, GLASS, 5)
    p.glass(1.2, .4, 1.2, 2.7)
    p.line(1.12, 1.55, 1.28, 1.55, MAHOGANY, 3)
    p.line(0, 4.4, 10, 4.4)
    p.line(6, 0, 6, 7.4)
    p.line(6, 1.6, 10, 1.6)
    p.line(8.4, 4.4, 8.4, 7.4)
    for x1, x2 in ((4.7, 5.6), (6.5, 7.3), (8.8, 9.6)):
        p.opening(x1, 4.4, x2, 4.4)
    p.opening(6, .3, 6, 1.5)
    p.opening(6, 2.6, 6, 3.8)
    p.opening(8.5, 1.6, 9.5, 1.6)
    p.opening(8.8, 0, 9.7, 0)
    p.glass(0, 5, 0, 6.8)
    p.rect(2.3, .95, 2.4, 1.7, RUG, CLAY, 1.2, "4 3")
    p.piece(3.5, .65, 1.78, .92, "Silong", facing=0)
    p.piece(2.2, .65, .4, .4)
    p.circle(2.2, .65, .15, WHITE)
    p.text(1.9, .15, "Luad", 9)
    p.circle(3.5, 2, .3, "none", MUTED, "4 3")
    p.piece(4.8, 3.3, .65, .7, "", facing=225, planned=True)
    p.piece(3, 6.325, 1.6, 2.15, "Bed*", facing=180, planned=True)
    p.piece(1.9, 6.9, .4, .35, planned=True)
    p.piece(5.7, 6.2, .6, 1.8, fill=MAHOGANY, planned=True)
    p.piece(7.4, 1.41, 1.5, .38, "Pasilyo", facing=180)
    p.piece(7.4, 1.4, .18, .12, fill="#D8D2C8")
    p.piece(.6, 1.6, .36, .36, "", fill=WHITE)
    for x, y in ((.3, .4), (.3, 2.65), (.9, 2.75)):
        p.circle(x, y, .15, MUTED)
    p.piece(9.7, 3, .6, 2.4, fill=MAHOGANY)
    p.text(3.3, 3.9, "Living", 14, MUTED)
    p.text(3, 7.75, "Bedroom", 13, MUTED)
    p.text(7.2, 6.2, "Bath", 12, MUTED)
    p.text(9.2, 6.2, "Laundry", 11, MUTED)
    p.text(7.6, 3.8, "Kitchen", 12, MUTED)
    p.text(8, .35, "Entry", 11, MUTED)
    p.text(.6, 3.45, "Balcony", 10, MUTED)
    p.text(5, 8.4, "10 m east to west × 7.4 m north to south", 11)
    p.text(0, -.4, "(0, 0)", 9, MUTED)
    p.text(3.5, 2.9, "Lambot 170 × 240", 10, MUTED)
    cs = cameras(slug)
    for c in cs:
        if not c["studio"]:
            offset = {"C1": (8, 23), "C2": (8, -8), "C10": (-35, -12)}.get(c["number"], (8, -8))
            p.camera(c, offset)
    p.scale_bar(0, -1.0)
    # A distinct off-site inset, not a room added to the apartment.
    q = Panel(d, 850, 650, 125)
    q.rect(0, 0, 2.4, 1.4, WOOD, MUTED, 1)
    q.rect(.96, .61, .48, .18, WHITE, INK, 1)
    q.line(1.2, .61, 1.2, .79, MUTED, 1)
    q.rect(.99, .5515, .42, .297, "none", MUTED, 1, "4 3")
    q.line(1.48, .61, 1.48, .79, INK, 2)
    d.text(835, 390, "OFF-SITE STUDIO TABLE", 13)
    d.text(835, 414, "Separate origin, north up; tabletop 0.75 m.", 11, MUTED)
    d.text(835, 436, "Paper / book outlines are alternatives.", 11, MUTED)
    for c in cs:
        if c["studio"]:
            # Shared viewpoints are drawn once; every camera remains explicit in the label.
            if c["number"] == "C4":
                q.camera(c, (-78, 35), "C4 ★ / C8")
            elif c["number"] == "C5":
                q.camera(c, (-65, -15), "C5 / C6 / C7")
            else:
                q.camera(c, number="")
    q.scale_bar(0, -.6, 1)
    d.text(835, 770, "C4/C8: 0.75 m above table, pitch 59°.", 11, MUTED)
    d.text(835, 792, "C5/C7: 0.80 m above table, pitch 83°.", 11, MUTED)
    d.text(835, 814, "C6: 0.70 m above table, pitch 82°.", 11, MUTED)
    d.text(25, 885, "Dashed furniture is planned only. Stage-one photograph C2 omits the planned table and chair; C1 retains them.", 11, MUTED)
    d.text(25, 907, "Book pages use this same unit outline and furniture positions, without camera cones or labels. * = not a catalog piece.", 11, MUTED)
    d.legend(955)
    d.save(slug)


if __name__ == "__main__":
    for draw in (tanaw, dalampasigan, pahinga, hardin):
        draw()
    print("Wrote tanaw-residence.svg, dalampasigan-inn.svg, pahinga-villas.svg, hardin-apartment.svg")
