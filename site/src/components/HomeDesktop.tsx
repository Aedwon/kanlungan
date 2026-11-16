// Faithful transcription of T-home-desktop.dc.html, sections 1 to 9.
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { RoomPhoto } from "./RoomPhoto";
import { Photo } from "./Photo";
import { pageCopy } from "@/data/copy";
import { formatPrice } from "@/lib/formatPrice";
export function HomeDesktop() { return (<div className="home-desktop">


<section className="hero-track" data-wipe>
  <div className="hero-pin" data-wipe-pin>
    
    <div className="ref-desktop-1">
      <h1 className="ref-desktop-2">{pageCopy["Spaces to come home to."]}</h1>
      <p className="ref-desktop-3">{pageCopy["Kanlungan is an interior design studio and shop. We furnish homes and small hotels so they feel like refuge."]}</p>
      <div className="ref-desktop-4"><Link href="/book" className="btn-p ref-desktop-5" data-hero-book="true">{pageCopy["Book a discovery call"]}</Link><Link href="/projects" className="lnk ref-desktop-6">{pageCopy["View projects"]} <span className="arr" aria-hidden="true">→</span></Link></div>
    </div>

    
    <div className="win">
      <div className="layer before"><div className="win-img"><Photo name="lilim-hero-before" alt="" sizes="100vw" /></div></div>
      <div className="layer after"><div className="win-img"><Photo name="lilim-hero-B-layered" alt="Lilim House living room, furnished: low sofa, marble table, cane chair, greenery through wide openings" sizes="100vw" /></div></div>
      <div className="scrim"></div>
      <div aria-hidden="true" className="ref-desktop-9">
        <div className="ref-desktop-10">{pageCopy["Spaces to come home to."]}</div>
        <div className="ref-desktop-11">{pageCopy["Kanlungan is an interior design studio and shop. We furnish homes and small hotels so they feel like refuge."]}</div>
        <div className="ref-desktop-12"><span className="ref-desktop-13">{pageCopy["Book a discovery call"]}</span><span className="ref-desktop-14">{pageCopy["View projects"]} <span aria-hidden="true">→</span></span></div>
      </div>
    </div>
  </div>
</section>


<section className="stsec ref-desktop-15">
  
  <div className="ref-desktop-16">
    <div className="ref-desktop-17">
      <p className="ref-desktop-18">{pageCopy["A home should lower your shoulders when you walk in. We design for that feeling: cool rooms, honest materials, and furniture made by people we know."]}</p>
      <div aria-hidden="true" className="ref-desktop-19"><div className="prog ref-desktop-20"></div></div>
    </div>
    <div className="ref-desktop-21">
      <RoomPhoto label="Cane weave in raking window light" className="ref-desktop-22" />
      <RoomPhoto label="Oat linen draped in shade" className="ref-desktop-25" />
      <RoomPhoto label="Terrace bench under deep eaves with greenery behind" className="ref-desktop-28" />
    </div>
  </div>
</section>


<section className="ref-desktop-31">
  <div className="ref-desktop-32">
    <h2 className="rv ref-desktop-33">{pageCopy["Recent projects"]}</h2>
    <Link href="/projects" className="lnk ref-desktop-34">{pageCopy["View projects"]} <span className="arr" aria-hidden="true">→</span></Link>
  </div>
  <div className="dk ref-desktop-35">
    <Link href="/projects/lilim-house" className="ref-desktop-36">
      <div className="zin ref-desktop-37">
        <div className="photo-fill"><Photo name="lilim-terrace" alt="Lilim House covered terrace with a daybed and a low table facing the valley in early sun" sizes="(min-width: 1280px) 1184px, 100vw" /></div>
      </div>
      
      <div className="ref-desktop-39"></div>
      <div className="ref-desktop-41">
        <div className="ref-desktop-42">{pageCopy["Lilim House"]}</div>
        <div className="ref-desktop-43">
          <div className="ref-desktop-44">{pageCopy["Antipolo, Rizal"]}</div>
          <div className="ref-desktop-45">{pageCopy["Residential"]}</div>
        </div>
      </div>
    </Link>
    <Link href="/projects/tanaw-residence" className="ref-desktop-46">
      <div className="zin ref-desktop-47">
        <div className="photo-fill"><Photo name="tanaw-hero" alt="Tanaw Residence living room at dusk, lamps lit, the city beyond the glass" sizes="(min-width: 1280px) 1184px, 100vw" /></div>
      </div>
      <div className="ref-desktop-49"></div>
      <div className="ref-desktop-51">
        <div className="ref-desktop-52">{pageCopy["Tanaw Residence"]}</div>
        <div className="ref-desktop-53">
          <div className="ref-desktop-54">{pageCopy["Bonifacio Global City, Taguig"]}</div>
          <div className="ref-desktop-55">{pageCopy["Residential"]}</div>
        </div>
      </div>
    </Link>
    <Link href="/projects/dalampasigan-inn" className="ref-desktop-56">
      <div className="zin ref-desktop-57">
        <div className="photo-fill"><Photo name="dalampasigan-hero" alt="Dalampasigan Inn guest room in bright morning light, a honey acacia bed and a reed mat" sizes="(min-width: 1280px) 1184px, 100vw" /></div>
      </div>
      
      <div className="ref-desktop-59"></div>
      <div className="ref-desktop-61">
        <div className="ref-desktop-62">{pageCopy["Dalampasigan Inn"]}</div>
        <div className="ref-desktop-63">
          <div className="ref-desktop-64">{pageCopy["San Juan, La Union"]}</div>
          <div className="ref-desktop-65">{pageCopy["Hospitality"]}</div>
        </div>
      </div>
    </Link>
  </div>
</section>


<section className="ref-desktop-66">
  <h2 className="ref-desktop-67">{pageCopy["Two ways to work with us"]}</h2>
  <div className="ref-desktop-68">

    <div className="sv dk">
      <div className="sv-img" aria-hidden="true">
        <div className="sv-img-i">
          <RoomPhoto label="Quiet room detail: linen curtain in soft daylight, a low stool and a stoneware vase" className="ref-desktop-69" />
          <div className="ref-desktop-70"></div>
        </div>
        <div className="ph ref-desktop-71">{pageCopy["Placeholder · Linen curtain in soft daylight, low stool, stoneware vase"]}</div>
      </div>
      <h3 className="tx ref-desktop-72">{pageCopy["Full-Service Furnishing"]}</h3>
      <p className="tx ref-desktop-73">{pageCopy["We design, source, deliver, and style every room."]}</p>
      <div className="ref-desktop-74"></div>
      <div className="ref-desktop-75">
        <span className="sv-big tx ref-desktop-76"><span className="ref-desktop-77">{pageCopy["From"]}</span>{formatPrice(1500000)}</span>
      </div>
      <p className="tm ref-desktop-78">{pageCopy["Design fee included."]}</p>
      <Link href="/studio/full-service-furnishing" className="lnk tx ref-desktop-79">{pageCopy["About this service"]} <span className="arr" aria-hidden="true">→</span></Link>
    </div>

    <div className="sv dk ref-desktop-80">
      <div className="sv-img" aria-hidden="true">
        <div className="sv-img-i">
          <RoomPhoto label="Quiet room detail: plans and a pencil on a warm wood drafting table in side light" className="ref-desktop-81" />
          <div className="ref-desktop-82"></div>
        </div>
        <div className="ph ref-desktop-83">{pageCopy["Placeholder · Plans and a pencil on a warm wood table, side light"]}</div>
      </div>
      <h3 className="tx ref-desktop-84">{pageCopy["Interior Design Direction"]}</h3>
      <p className="tx ref-desktop-85">{pageCopy["We design the space. You bring it to life."]}</p>
      <div className="ref-desktop-86"></div>
      <div className="ref-desktop-87">
        <span className="sv-big tx ref-desktop-88"><span className="ref-desktop-89">{pageCopy["From"]}</span>{formatPrice(2500)}</span>
      </div>
      <p className="tm ref-desktop-90">Per sqm, minimum {formatPrice(150000)}.</p>
      <Link href="/studio/interior-design-direction" className="lnk tx ref-desktop-91">{pageCopy["About this service"]} <span className="arr" aria-hidden="true">→</span></Link>
    </div>

  </div>
</section>


<section className="ref-desktop-92">
  <div className="ref-desktop-93">
    <p className="ref-desktop-94">{pageCopy["The pieces we use in our own projects, made by workshops across the Philippines."]}</p>
    <div className="ref-desktop-95"><Link href="/shop" className="lnk ref-desktop-96">{pageCopy["Explore the shop"]} <span className="arr" aria-hidden="true">→</span></Link></div>
  </div>

  <div className="ref-desktop-97">

    
    <Link href="/" className="col ref-desktop-98">
      <RoomPhoto label="Low sofa, stone coffee table and stoneware lamp in soft shaded daylight" className="cz ref-desktop-99" />
      <div className="ref-desktop-101"><div className="ref-desktop-102">{pageCopy["Quiet Living"]}</div><div className="cd ref-desktop-103">{pageCopy["Soft light, low furniture, and nothing that asks for attention."]}</div></div>
    </Link>

    
    <Link href="/" className="col ref-desktop-104">
      <RoomPhoto label="Wood dining table with cane chairs in morning light through a linen curtain" className="cz ref-desktop-105" />
      <div className="ref-desktop-108"><div className="ref-desktop-109">{pageCopy["Slow Mornings"]}</div><div className="cd ref-desktop-110">{pageCopy["Pieces for the first hour of the day."]}</div></div>
    </Link>

    
    <Link href="/" className="col ref-desktop-111">
      <ImagePlaceholder className="cz ref-desktop-112" alt="Close crop of cane weave on a rattan lounge chair">
        <div className="ph ref-desktop-113">{pageCopy["Placeholder · Close crop of cane weave on a rattan lounge chair, soft daylight"]}</div>
      </ImagePlaceholder>
      <div className="ref-desktop-114"><div className="ref-desktop-115">{pageCopy["Woven Forms"]}</div><div className="cd ref-desktop-116">{pageCopy["Cane, rattan, and reed, woven by hand."]}</div></div>
    </Link>
  </div>
</section>


<section className="rm ref-desktop-117">
  <h2 className="ref-desktop-118">{pageCopy["From the shop"]}</h2>
  <div className="ref-desktop-119">
    <div className="ref-desktop-120 shop-room"><Photo name="lilim-shop-room" alt="Lilim House living and dining room in one long view: a low sofa and a daybed-height lounge chair on the left, a long dining table under a pendant, a floor lamp and a clay vessel on the right" sizes="(min-width: 1280px) 1312px, 100vw" /></div>

    
    <Link href="/shop/products/silong-sofa" className="pin p1 ref-desktop-155" aria-label="1, Silong Sofa, Kanlungan Original, ₱186,000, made to order, ready in 10 weeks">1
      <span className="tip" aria-hidden="true"><span className="ref-desktop-156">{pageCopy["Silong Sofa"]}</span><span className="ref-desktop-157">{pageCopy["Kanlungan Original"]}</span><span className="ref-desktop-158">{formatPrice(186000)}</span><span className="ref-desktop-159">{pageCopy["Made to order · 10 weeks"]}</span></span>
    </Link>
    <Link href="/shop/products/hapag-dining-table" className="pin p2 ref-desktop-160" aria-label="2, Hapag Dining Table, Kanlungan Original, ₱178,000, made to order, ready in 12 weeks">2
      <span className="tip" aria-hidden="true"><span className="ref-desktop-161">{pageCopy["Hapag Dining Table"]}</span><span className="ref-desktop-162">{pageCopy["Kanlungan Original"]}</span><span className="ref-desktop-163">{formatPrice(178000)}</span><span className="ref-desktop-164">{pageCopy["Made to order · 12 weeks"]}</span></span>
    </Link>
    <Link href="/shop/products/dapithapon-lounge-chair" className="pin p3 ref-desktop-165" aria-label="3, Dapithapon Lounge Chair, Sulihiya Studio, ₱64,000, made to order, ready in 8 weeks">3
      <span className="tip" aria-hidden="true"><span className="ref-desktop-166">{pageCopy["Dapithapon Lounge Chair"]}</span><span className="ref-desktop-167">{pageCopy["Sulihiya Studio"]}</span><span className="ref-desktop-168">{formatPrice(64000)}</span><span className="ref-desktop-169">{pageCopy["Made to order · 8 weeks"]}</span></span>
    </Link>
    <Link href="/shop/products/kapis-pendant" className="pin p4 ref-desktop-170" aria-label="4, Kapis Pendant, Tanso Lighting Works, ₱32,000, in stock, ships in 3 to 7 business days">4
      <span className="tip tip-b" aria-hidden="true"><span className="ref-desktop-171">{pageCopy["Kapis Pendant"]}</span><span className="ref-desktop-172">{pageCopy["Tanso Lighting Works"]}</span><span className="ref-desktop-173">{formatPrice(32000)}</span><span className="ref-desktop-174">{pageCopy["In stock"]}</span></span>
    </Link>
    <Link href="/shop/products/sinag-floor-lamp" className="pin p5 ref-desktop-175" aria-label="5, Sinag Floor Lamp, Kanlungan Original, ₱36,500, made to order, ready in 6 weeks">5
      <span className="tip tip-r" aria-hidden="true"><span className="ref-desktop-176">Sinag Floor Lamp</span><span className="ref-desktop-177">{pageCopy["Kanlungan Original"]}</span><span className="ref-desktop-178">{formatPrice(36500)}</span><span className="ref-desktop-179">Made to order · 6 weeks</span></span>
    </Link>
    <Link href="/shop/products/tapayan-vessel" className="pin p6 ref-desktop-180" aria-label="6, Tapayan Vessel, Bukal Clayworks, ₱8,600, in stock, ships in 3 to 7 business days">6
      <span className="tip tip-l" aria-hidden="true"><span className="ref-desktop-181">{pageCopy["Tapayan Vessel"]}</span><span className="ref-desktop-182">{pageCopy["Bukal Clayworks"]}</span><span className="ref-desktop-183">{formatPrice(8600)}</span><span className="ref-desktop-184">{pageCopy["In stock"]}</span></span>
    </Link>
  </div>

  
  <ol className="ref-desktop-185">

    <li><ProductCard product={products.find((product) => product.slug === "silong-sofa")!} number={1} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "hapag-dining-table")!} number={2} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "dapithapon-lounge-chair")!} number={3} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "kapis-pendant")!} number={4} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "sinag-floor-lamp")!} number={5} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "tapayan-vessel")!} number={6} variant="home" /></li>

  </ol>
</section>


<section className="ref-desktop-186">
  <div className="ref-desktop-187">
    <h2 className="rv ref-desktop-188">{pageCopy["Made by people we know"]}</h2>
    <div className="ref-desktop-189">
      <p className="ref-desktop-190">{pageCopy["Most of what we sell is made in the Philippines, in small workshops that still cut, weave, and throw by hand. We visit them, and we name them."]}</p>
      <Link href="/shop/makers" className="lnk ref-desktop-191">{pageCopy["Makers"]} <span className="arr" aria-hidden="true">→</span></Link>
    </div>
  </div>
  <div className="win-g ref-desktop-192">
    <ImagePlaceholder alt="Hands weaving a cane panel on a frame in a workshop, window light and hanging reed" className="ref-desktop-193"><div className="par ref-desktop-194"></div><div className="shade ref-desktop-195"></div><div className="ph ref-desktop-196">{pageCopy["Placeholder · Hands weaving a cane panel at a Cebu workshop, window light, hanging reed"]}</div></ImagePlaceholder>
  </div>
</section>


<section className="proc" aria-labelledby="proc-h-desktop">
  <div className="proc-track">
    <div className="proc-pin">
      <div className="proc-head"><h2 id="proc-h-desktop" className="ref-desktop-197">{pageCopy["How a furnishing project works"]}</h2></div>
      <ol className="proc-row" role="list">
      <li>
        <span aria-hidden="true" className="ref-desktop-198">1</span>
        <h3 className="ref-desktop-199">{pageCopy["Discovery call"]}</h3>
        <p className="ref-desktop-200">{pageCopy["We talk about your space, your brief, and your budget."]}</p>
      </li>
      <li>
        <span aria-hidden="true" className="ref-desktop-201">2</span>
        <h3 className="ref-desktop-202">{pageCopy["Site visit and proposal"]}</h3>
        <p className="ref-desktop-203">{pageCopy["We measure the space and send a fixed design fee and a budget range."]}</p>
      </li>
      <li>
        <span aria-hidden="true" className="ref-desktop-204">3</span>
        <h3 className="ref-desktop-205">{pageCopy["Design"]}</h3>
        <p className="ref-desktop-206">{pageCopy["You see layouts, materials, and a full furnishing plan."]}</p>
      </li>
      <li>
        <span aria-hidden="true" className="ref-desktop-207">4</span>
        <h3 className="ref-desktop-208">{pageCopy["Procurement"]}</h3>
        <p className="ref-desktop-209">{pageCopy["We order every piece and manage the makers."]}</p>
      </li>
      <li>
        <span aria-hidden="true" className="ref-desktop-210">5</span>
        <h3 className="ref-desktop-211">{pageCopy["Installation and styling"]}</h3>
        <p className="ref-desktop-212">{pageCopy["Our crew delivers, installs, and styles each room."]}</p>
      </li>
      <li>
        <span aria-hidden="true" className="ref-desktop-213">6</span>
        <h3 className="ref-desktop-214">{pageCopy["Handover"]}</h3>
        <p className="ref-desktop-215">{pageCopy["A walkthrough, a care guide, and a visit 30 days later."]}</p>
      </li>
      </ol>
      <div className="proc-bar" aria-hidden="true"><div></div></div>
    </div>
  </div>
</section>


<section className="dk ref-desktop-216">
  <div className="cta-sec"><div className="ref-desktop-217">
    <div className="zin ref-desktop-218"><div className="photo-fill"><Photo name="lilim-exterior-dusk" alt="Lilim House at dusk, warm lamps lit inside and the garden in front" sizes="(min-width: 1280px) 1312px, 100vw" /></div></div>
    <div className="ref-desktop-221"></div>
    <div className="ref-desktop-223">
      <h2 className="ref-desktop-224">{pageCopy["Tell us about your space."]}</h2>
      <p className="ref-desktop-225">A discovery call takes 30 minutes and costs nothing. Furnishing projects start at {formatPrice(1500000)}.</p>
      <div className="ref-desktop-226"><Link href="/book" className="btn-p ref-desktop-227">{pageCopy["Book a discovery call"]}</Link></div>
    </div>
  </div></div>
</section>
</div>); }
