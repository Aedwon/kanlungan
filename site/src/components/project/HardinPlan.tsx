// Furniture floor plan of the Hardin Apartment, drawn from docs/content/project-designs/hardin-apartment.md (sections 1 and 5).
// One unit is one centimeter. North is up, and the street (east) is on the right. Sizes are approximate, as in the design file.
const description = 'Floor plan of the main rooms of the one-bedroom apartment, north at the top. A living and dining room, 8 by 3.45 meters, runs west to east. '
  + 'The entry door is on its west wall, and the balcony runs along the east front. A two-seat sofa stands against the north wall, with a low bench, a rug and a cane chair toward the window, and a console on the south wall. '
  + 'A dining table with four chairs and a bookcase fill the west end. The kitchen and the bath sit south of the dining end. The bedroom is south of the living room, with a queen bed, two bedsides and the building closet on its west wall. '
  + 'The balcony holds a plank bench with herb pots, large pots at the north end, and a stool.';

function Door({ x, y, w, h, arc, leaf }: { x: number; y: number; w: number; h: number; arc: string; leaf: string }) {
  return <g><rect x={x} y={y} width={w} height={h} className="fp-cut" /><path d={arc} className="fp-thin" /><path d={leaf} className="fp-line" /></g>;
}

export function HardinPlan() {
  return <figure className="fr fp">
    <div className="fp-scroll" tabIndex={0} role="group" aria-label="Floor plan, scrolls sideways on narrow screens">
      <svg viewBox="-20 -24 960 760" role="img" aria-labelledby="fp-title" aria-describedby="fp-desc" xmlns="http://www.w3.org/2000/svg">
        <title id="fp-title">Hardin Apartment floor plan with furniture</title>
        <desc id="fp-desc">{description}</desc>

        {/* Balcony floor, then the walls */}
        <rect x="800" y="0" width="120" height="345" className="fp-fill" />
        <g className="fp-wall">
          <path d="M0 0H800V345H0Z" />
          <path d="M0 345H400V590H0Z" />
          <path d="M400 345H800V705H400Z" />
          <path d="M800 0H920V345H800" />
        </g>
        <path d="M0 345V590H400" className="fp-wall" />
        <path d="M920 0V345" className="fp-wall" />
        <path d="M912 0V345" className="fp-thin" />

        {/* Openings: windows, doors, the kitchen opening */}
        <g>
          <rect x="793" y="45" width="14" height="160" className="fp-cut" />
          <path d="M796 45V205M800 45V205M804 45V205" className="fp-thin" />
          <rect x="793" y="435" width="14" height="180" className="fp-cut" />
          <path d="M796 435V615M800 435V615M804 435V615" className="fp-thin" />
          <rect x="116" y="338" width="98" height="14" className="fp-cut" />
        </g>
        <Door x={793} y={235} w={14} h={90} arc="M800 235A90 90 0 0 0 710 325" leaf="M800 325H710" />
        <Door x={-7} y={225} w={14} h={95} arc="M0 225A95 95 0 0 1 95 320" leaf="M0 320H95" />
        <Door x={420} y={338} w={90} h={14} arc="M510 345A90 90 0 0 1 420 435" leaf="M420 345V435" />
        <Door x={245} y={338} w={70} h={14} arc="M315 345A70 70 0 0 1 245 415" leaf="M245 345V415" />

        {/* Curtains: a track along each east window, stacked on the north side */}
        <path d="M790 0V345" className="fp-dash" />
        <rect x="786" y="2" width="8" height="40" className="fp-thin fp-piece" />
        <path d="M790 400V635" className="fp-dash" />
        <rect x="786" y="402" width="8" height="40" className="fp-thin fp-piece" />

        {/* Dining end */}
        <rect x="35" y="0" width="90" height="30" className="fp-line fp-piece" />
        <rect x="110" y="135" width="140" height="70" className="fp-line fp-piece" />
        {[[123, 93], [193, 93], [123, 203], [193, 203]].map(([x, y]) => <rect key={`${x}${y}`} x={x} y={y} width="44" height="44" rx="4" className="fp-thin" />)}
        <circle cx="22" cy="150" r="12" className="fp-thin" />
        <rect x="4" y="172" width="36" height="16" className="fp-thin" />
        <path d="M3 110V170" className="fp-line" />

        {/* Living half */}
        <rect x="480" y="100" width="240" height="170" className="fp-dash" />
        <rect x="450" y="4" width="180" height="85" rx="3" className="fp-line fp-piece" />
        <path d="M454 18H626" className="fp-thin" />
        <circle cx="435" cy="18" r="8" className="fp-line" />
        <rect x="495" y="110" width="90" height="40" className="fp-line fp-piece" />
        <rect x="700" y="150" width="60" height="60" rx="4" className="fp-line fp-piece" />
        <path d="M752 152V208" className="fp-line" />
        <circle cx="778" cy="196" r="17" className="fp-thin" />
        <circle cx="778" cy="196" r="8" className="fp-thin" />
        <rect x="530" y="306" width="150" height="38" className="fp-line fp-piece" />
        <circle cx="664" cy="325" r="9" className="fp-line" />

        {/* Bedroom */}
        <rect x="400" y="470" width="55" height="220" className="fp-line" />
        <path d="M400 525H455M400 580H455M400 635H455" className="fp-thin" />
        <rect x="455" y="505" width="80" height="200" className="fp-dash" />
        <rect x="540" y="505" width="150" height="200" rx="3" className="fp-line fp-piece" />
        <rect x="548" y="675" width="62" height="24" rx="3" className="fp-thin" />
        <rect x="620" y="675" width="62" height="24" rx="3" className="fp-thin" />
        <path d="M542 570H688" className="fp-thin" />
        <rect x="700" y="665" width="40" height="40" className="fp-line fp-piece" />
        <circle cx="720" cy="685" r="8" className="fp-line" />
        <circle cx="505" cy="687" r="14" className="fp-line fp-piece" />
        <circle cx="505" cy="687" r="6" className="fp-thin" />

        {/* Balcony */}
        <rect x="888" y="45" width="25" height="170" className="fp-line fp-piece" />
        {[70, 130, 190].map((y) => <circle key={y} cx="900" cy={y} r="7" className="fp-thin" />)}
        {[830, 862, 894].map((x) => <circle key={x} cx={x} cy="20" r="12" className="fp-line" />)}
        <circle cx="816" cy="95" r="13" className="fp-line" />
        <rect x="810" y="255" width="40" height="50" className="fp-dash" />

        {/* Labels */}
        <g textAnchor="middle">
          <text x="170" y="64" className="fp-room">Dining</text>
          <text x="448" y="262" className="fp-room">Living</text>
          <text x="110" y="470" className="fp-room">Kitchen</text>
          <text x="320" y="470" className="fp-room">Bath</text>
          <text x="610" y="420" className="fp-room">Bedroom</text>
          <text x="872" y="318" className="fp-room">Balcony</text>
          <text x="540" y="52" className="fp-label">Sofa</text>
          <text x="540" y="136" className="fp-label">Bench</text>
          <text x="730" y="184" className="fp-label">Chair</text>
          <text x="605" y="330" className="fp-label">Console</text>
          <text x="180" y="174" className="fp-label">Table</text>
          <text x="80" y="20" className="fp-label">Bookcase</text>
          <text x="615" y="620" className="fp-label">Bed</text>
          <text x="428" y="585" className="fp-label" transform="rotate(-90 428 585)">Closet</text>
        </g>

        {/* Scale and north */}
        <path d="M20 650H220M20 644V656M120 646V654M220 644V656" className="fp-line" />
        <g textAnchor="middle"><text x="20" y="676" className="fp-label">0</text><text x="120" y="676" className="fp-label">1 m</text><text x="220" y="676" className="fp-label">2 m</text></g>
        <path d="M330 690V630M322 642L330 630L338 642" className="fp-line" />
        <text x="330" y="712" textAnchor="middle" className="fp-label">North</text>
        <text x="866" y="372" textAnchor="middle" className="fp-label">Street, east</text>
      </svg>
    </div>
    <figcaption className="t-small">The plan of the main rooms, with furniture placed.</figcaption>
  </figure>;
}
