// Faithful transcription of T-home-mobile.dc.html, sections 1 to 9.
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { RoomPhoto } from "./RoomPhoto";
import { Photo } from "./Photo";
import { pageCopy } from "@/data/copy";
import { formatPrice } from "@/lib/formatPrice";
export function HomeMobile() { return (<div className="home-mobile">


<section className="hero-track" data-wipe>
  <div className="hero-pin" data-wipe-pin>
    
    <h1 className="ref-mobile-228">{pageCopy["Spaces to come home to."]}</h1>
    <div className="ref-mobile-229">
      <p className="ref-mobile-230">{pageCopy["Kanlungan is an interior design studio and shop. We furnish homes and small hotels so they feel like refuge."]}</p>
      <div className="ref-mobile-231"><Link href="/book" className="btn-p ref-mobile-232" data-hero-book="true">{pageCopy["Book a discovery call"]}</Link><Link href="/projects" className="lnk ref-mobile-233">{pageCopy["View projects"]} <span className="arr ref-mobile-234" aria-hidden="true">→</span></Link></div>
    </div>

    
    <div className="win">
      <div className="layer before"><div className="win-img"><Photo name="lilim-hero-before" alt="" sizes="100vw" priority /></div></div>
      <div className="layer after"><div className="win-img"><Photo name="lilim-hero-B-layered" alt="Lilim House living room, furnished: low sofa, marble table, cane chair, greenery through wide openings" sizes="100vw" /></div></div>
      <div className="scrim"></div>
      <div aria-hidden="true" className="ref-mobile-237">{pageCopy["Spaces to come home to."]}</div>
      <div aria-hidden="true" className="ref-mobile-238">
        <div className="ref-mobile-239">{pageCopy["Kanlungan is an interior design studio and shop. We furnish homes and small hotels so they feel like refuge."]}</div>
        <div className="ref-mobile-240"><span className="ref-mobile-241">{pageCopy["Book a discovery call"]}</span><span className="ref-mobile-242">{pageCopy["View projects"]} <span aria-hidden="true" className="ref-mobile-243">→</span></span></div>
      </div>
    </div>
  </div>
</section>


<section className="ref-mobile-244">
  
  <div className="ref-mobile-245">
    <p className="ref-mobile-246">{pageCopy["A home should lower your shoulders when you walk in. We design for that feeling: cool rooms, honest materials, and furniture made by people we know."]}</p>
  </div>
  <div className="ref-mobile-247">
    <RoomPhoto label="Cane weave in raking window light" className="ref-mobile-248" />
    <RoomPhoto label="Oat linen draped in shade" className="ref-mobile-250" />
    <RoomPhoto label="Terrace bench under deep eaves with greenery behind" className="ref-mobile-252" />
  </div>
</section>


<section className="ref-mobile-254">
  <div className="ref-mobile-255">
    <h2 className="rv ref-mobile-256">{pageCopy["Recent projects"]}</h2>
    <Link href="/projects" className="ref-mobile-257">{pageCopy["View projects"]} <span className="arr ref-mobile-258" aria-hidden="true">→</span></Link>
  </div>
  <div className="dk ref-mobile-259">
    <Link href="/projects/lilim-house" className="ref-mobile-260">
      <div className="zin ref-mobile-261">
        <div className="photo-fill"><Photo name="lilim-terrace" alt="Lilim House covered terrace with a daybed and a low table facing the valley in early sun" sizes="(min-width: 1280px) 1184px, 100vw" /></div>
      </div>
      
      <div className="ref-mobile-263"></div>
      <div className="ref-mobile-264">
        <div className="ref-mobile-265">{pageCopy["Lilim House"]}</div>
        <div className="ref-mobile-266">{pageCopy["Antipolo, Rizal"]}</div>
        <div className="ref-mobile-267">{pageCopy["Residential"]}</div>
      </div>
    </Link>
    <Link href="/projects/tanaw-residence" className="ref-mobile-268">
      <div className="zin ref-mobile-269">
        <div className="photo-fill"><Photo name="tanaw-hero" alt="Tanaw Residence living room at dusk, lamps lit, the city beyond the glass" sizes="(min-width: 1280px) 1184px, 100vw" /></div>
      </div>
      <div className="ref-mobile-271"></div>
      <div className="ref-mobile-272">
        <div className="ref-mobile-273">{pageCopy["Tanaw Residence"]}</div>
        <div className="ref-mobile-274">{pageCopy["Bonifacio Global City, Taguig"]}</div>
        <div className="ref-mobile-275">{pageCopy["Residential"]}</div>
      </div>
    </Link>
    <Link href="/projects/dalampasigan-inn" className="ref-mobile-276">
      <div className="zin ref-mobile-277">
        <div className="photo-fill"><Photo name="dalampasigan-hero" alt="Dalampasigan Inn guest room in bright morning light, a honey acacia bed and a reed mat" sizes="(min-width: 1280px) 1184px, 100vw" /></div>
      </div>
      
      <div className="ref-mobile-279"></div>
      <div className="ref-mobile-280">
        <div className="ref-mobile-281">{pageCopy["Dalampasigan Inn"]}</div>
        <div className="ref-mobile-282">{pageCopy["San Juan, La Union"]}</div>
        <div className="ref-mobile-283">{pageCopy["Hospitality"]}</div>
      </div>
    </Link>
  </div>
</section>


<section className="ref-mobile-284">
  <h2 className="ref-mobile-285">{pageCopy["Two ways to work with us"]}</h2>

  <div className="ref-mobile-286">
    <RoomPhoto label="Quiet room detail: linen curtain in soft daylight, a low stool and a stoneware vase" className="svi ref-mobile-287" />
    <div className="ref-mobile-288">
      <h3 className="ref-mobile-289">{pageCopy["Full-Service Furnishing"]}</h3>
      <p className="ref-mobile-290">{pageCopy["We design, source, deliver, and style every room."]}</p>
      <p className="ref-mobile-291">{pageCopy["From"]} {formatPrice(1500000)} design fee included.</p>
      <Link href="/studio/full-service-furnishing" className="lnk ref-mobile-292">{pageCopy["About this service"]} <span className="arr ref-mobile-293" aria-hidden="true">→</span></Link>
    </div>
  </div>

  <div className="ref-mobile-294">
    <RoomPhoto label="Quiet room detail: plans and a pencil on a warm wood drafting table in side light" className="svi ref-mobile-295" />
    <div className="ref-mobile-296">
      <h3 className="ref-mobile-297">{pageCopy["Interior Design Direction"]}</h3>
      <p className="ref-mobile-298">{pageCopy["We design the space. You bring it to life."]}</p>
      <p className="ref-mobile-299">{pageCopy["From"]} {formatPrice(2500)} per sqm, minimum {formatPrice(150000)}.</p>
      <Link href="/studio/interior-design-direction" className="lnk ref-mobile-300">{pageCopy["About this service"]} <span className="arr ref-mobile-301" aria-hidden="true">→</span></Link>
    </div>
  </div>
</section>


<section className="ref-mobile-302">
  <p className="ref-mobile-303">{pageCopy["The pieces we use in our own projects, made by workshops across the Philippines."]}</p>
  <Link href="/shop" className="lnk ref-mobile-304">{pageCopy["Explore the shop"]}<span className="arr" aria-hidden="true">→</span></Link>

  <Link href="/shop/collections/quiet-living" className="ref-mobile-305">
    <RoomPhoto label="Low sofa, stone coffee table and stoneware lamp in soft shaded daylight" className="ref-mobile-306" />
    <div className="ref-mobile-307"><div className="ref-mobile-308">{pageCopy["Quiet Living"]}</div><div className="ref-mobile-309">{pageCopy["Soft light, low furniture, and nothing that asks for attention."]}</div></div>
  </Link>

  <Link href="/shop/collections/slow-mornings" className="ref-mobile-310">
    <RoomPhoto label="Wood dining table with cane chairs in morning light through a linen curtain" className="ref-mobile-311" />
    <div className="ref-mobile-313"><div className="ref-mobile-314">{pageCopy["Slow Mornings"]}</div><div className="ref-mobile-315">{pageCopy["Pieces for the first hour of the day."]}</div></div>
  </Link>

  <Link href="/shop/collections/woven-forms" className="ref-mobile-316">
    <RoomPhoto label="Close crop of cane weave on a rattan lounge chair" className="ref-mobile-317" />
    <div className="ref-mobile-318"><div className="ref-mobile-319">{pageCopy["Woven Forms"]}</div><div className="ref-mobile-320">{pageCopy["Cane, rattan, and reed, woven by hand."]}</div></div>
  </Link>
</section>


<section className="rm ref-mobile-321">
  <h2 className="ref-mobile-322">{pageCopy["From the shop"]}</h2>
  <div className="rmscroll">
    <div className="ref-mobile-323">
      <div className="ref-mobile-324 shop-room"><Photo name="lilim-shop-room" alt="Lilim House living and dining room in one long view: a low sofa and a daybed-height lounge chair on the left, a long dining table under a pendant, a floor lamp and a clay vessel on the right" sizes="920px" /></div>
      <Link href="/shop/products/silong-sofa" className="pin p1 ref-mobile-358" aria-label="1, Silong Sofa, Kanlungan Original, ₱186,000">1</Link>
      <Link href="/shop/products/hapag-dining-table" className="pin p2 ref-mobile-359" aria-label="2, Hapag Dining Table, Kanlungan Original, ₱178,000">2</Link>
      <Link href="/shop/products/dapithapon-lounge-chair" className="pin p3 ref-mobile-360" aria-label="3, Dapithapon Lounge Chair, Sulihiya Studio, ₱64,000">3</Link>
      <Link href="/shop/products/kapis-pendant" className="pin p4 ref-mobile-361" aria-label="4, Kapis Pendant, Tanso Lighting Works, ₱32,000">4</Link>
      <Link href="/shop/products/sinag-floor-lamp" className="pin p5 ref-mobile-362" aria-label="5, Sinag Floor Lamp, Kanlungan Original, ₱36,500">5</Link>
      <Link href="/shop/products/tapayan-vessel" className="pin p6 ref-mobile-363" aria-label="6, Tapayan Vessel, Bukal Clayworks, ₱8,600">6</Link>
    </div>
  </div>

  <ol className="ref-mobile-364">

    <li><ProductCard product={products.find((product) => product.slug === "silong-sofa")!} number={1} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "hapag-dining-table")!} number={2} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "dapithapon-lounge-chair")!} number={3} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "kapis-pendant")!} number={4} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "sinag-floor-lamp")!} number={5} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "tapayan-vessel")!} number={6} variant="home" /></li>

  </ol>
</section>


<section className="ref-mobile-365">
  <div className="ref-mobile-366">
    <h2 className="rv ref-mobile-367">{pageCopy["Made by people we know"]}</h2>
    <p className="ref-mobile-368">{pageCopy["Most of what we sell is made in the Philippines, in small workshops that still cut, weave, and throw by hand. We visit them, and we name them."]}</p>
    <Link href="/shop/makers" className="lnk ref-mobile-369">{pageCopy["Makers"]} <span className="arr ref-mobile-370" aria-hidden="true">→</span></Link>
  </div>
  <div className="win-g ref-mobile-371">
    <RoomPhoto label="Hands weaving a cane panel on a frame in a workshop, window light and hanging reed" className="ref-mobile-372" />
  </div>
</section>


<section aria-labelledby="proc-h-mobile" className="ref-mobile-375">
  <h2 id="proc-h-mobile" className="ref-mobile-376">{pageCopy["How a furnishing project works"]}</h2>
  <ol role="list" className="ref-mobile-377">
    <li className="ref-mobile-378">
      <span aria-hidden="true" className="ref-mobile-379">1</span>
      <div>
        <h3 className="ref-mobile-380">{pageCopy["Discovery call"]}</h3>
        <p className="ref-mobile-381">{pageCopy["We talk about your space, your brief, and your budget."]}</p>
      </div>
    </li>
    <li className="ref-mobile-382">
      <span aria-hidden="true" className="ref-mobile-383">2</span>
      <div>
        <h3 className="ref-mobile-384">{pageCopy["Site visit and proposal"]}</h3>
        <p className="ref-mobile-385">{pageCopy["We measure the space and send a fixed design fee and a budget range."]}</p>
      </div>
    </li>
    <li className="ref-mobile-386">
      <span aria-hidden="true" className="ref-mobile-387">3</span>
      <div>
        <h3 className="ref-mobile-388">{pageCopy["Design"]}</h3>
        <p className="ref-mobile-389">{pageCopy["You see layouts, materials, and a full furnishing plan."]}</p>
      </div>
    </li>
    <li className="ref-mobile-390">
      <span aria-hidden="true" className="ref-mobile-391">4</span>
      <div>
        <h3 className="ref-mobile-392">{pageCopy["Procurement"]}</h3>
        <p className="ref-mobile-393">{pageCopy["We order every piece and manage the makers."]}</p>
      </div>
    </li>
    <li className="ref-mobile-394">
      <span aria-hidden="true" className="ref-mobile-395">5</span>
      <div>
        <h3 className="ref-mobile-396">{pageCopy["Installation and styling"]}</h3>
        <p className="ref-mobile-397">{pageCopy["Our crew delivers, installs, and styles each room."]}</p>
      </div>
    </li>
    <li className="ref-mobile-398">
      <span aria-hidden="true" className="ref-mobile-399">6</span>
      <div>
        <h3 className="ref-mobile-400">{pageCopy["Handover"]}</h3>
        <p className="ref-mobile-401">{pageCopy["A walkthrough, a care guide, and a visit 30 days later."]}</p>
      </div>
    </li>
  </ol>
</section>


<section className="dk ref-mobile-402">
  <div className="ref-mobile-403">
    <div className="zin ref-mobile-404"><div className="photo-fill"><Photo name="lilim-exterior-dusk" alt="Lilim House at dusk, warm lamps lit inside and the garden in front" sizes="(min-width: 1280px) 1312px, 100vw" /></div></div>
    <div className="ref-mobile-407"></div>
    <div className="ref-mobile-408">
      <h2 className="ref-mobile-409">{pageCopy["Tell us about your space."]}</h2>
      <p className="ref-mobile-410">A discovery call takes 30 minutes and costs nothing. Furnishing projects start at {formatPrice(1500000)}.</p>
      <Link href="/book" className="btn-p ref-mobile-411">{pageCopy["Book a discovery call"]}</Link>
    </div>
  </div>
</section>
</div>); }
