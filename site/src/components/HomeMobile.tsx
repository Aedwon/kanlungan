// Faithful transcription of T-home-mobile.dc.html, sections 1 to 9.
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { pageCopy } from "@/data/copy";
import { formatPrice } from "@/lib/formatPrice";
export function HomeMobile() { return (<div className="home-mobile">


<section className="hero-track">
  <div className="hero-pin">
    
    <h1 className="ref-mobile-228">{pageCopy["Spaces to come home to."]}</h1>
    <div className="ref-mobile-229">
      <p className="ref-mobile-230">{pageCopy["Kanlungan is an interior design studio and shop. We furnish homes and small hotels so they feel like refuge."]}</p>
      <div className="ref-mobile-231"><Link href="/book" className="btn-p ref-mobile-232" data-hero-book="true">{pageCopy["Book a discovery call"]}</Link><Link href="/projects" className="lnk ref-mobile-233">{pageCopy["View projects"]} <span className="arr ref-mobile-234" aria-hidden="true">→</span></Link></div>
    </div>

    
    <div className="win">
      <div className="win-img">
        <ImagePlaceholder alt="Lilim House living room in shaded daylight, low mahogany and linen sofa, deep eaves, greenery through wide openings" className="ref-mobile-235"></ImagePlaceholder>
        <div className="shade ref-mobile-236"></div>
      </div>
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
    <ImagePlaceholder alt="Cane weave in raking window light" className="ref-mobile-248">
      <div className="par ref-mobile-249"></div>
      
    </ImagePlaceholder>
    <ImagePlaceholder alt="Oat linen draped in shade" className="ref-mobile-250">
      <div className="par ref-mobile-251"></div>
    </ImagePlaceholder>
    <ImagePlaceholder alt="Terrace bench under deep eaves with greenery behind" className="ref-mobile-252">
      <div className="par ref-mobile-253"></div>
      
    </ImagePlaceholder>
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
        <ImagePlaceholder alt="Lilim House terrace with a bench in shaded daylight, greenery behind" className="ref-mobile-262"></ImagePlaceholder>
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
        <ImagePlaceholder alt="Tanaw Residence city skyline at dusk through full-height windows, warm lamps inside" className="ref-mobile-270"></ImagePlaceholder>
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
        <ImagePlaceholder alt="Dalampasigan Inn bright coastal guest room in daylight, pale limewash walls, reed mat, open window" className="ref-mobile-278"></ImagePlaceholder>
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
    <ImagePlaceholder className="svi ref-mobile-287" alt="Quiet room detail: linen curtain in soft daylight, a low stool and a stoneware vase">
    </ImagePlaceholder>
    <div className="ref-mobile-288">
      <h3 className="ref-mobile-289">{pageCopy["Full-Service Furnishing"]}</h3>
      <p className="ref-mobile-290">{pageCopy["We design, source, deliver, and style every room."]}</p>
      <p className="ref-mobile-291">{pageCopy["From"]} {formatPrice(1500000)} design fee included.</p>
      <Link href="/studio/full-service-furnishing" className="lnk ref-mobile-292">{pageCopy["About this service"]} <span className="arr ref-mobile-293" aria-hidden="true">→</span></Link>
    </div>
  </div>

  <div className="ref-mobile-294">
    <ImagePlaceholder className="svi ref-mobile-295" alt="Quiet room detail: plans and a pencil on a warm wood drafting table in side light">
    </ImagePlaceholder>
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
    <ImagePlaceholder alt="Low sofa, stone coffee table and stoneware lamp in soft shaded daylight" className="ref-mobile-306">
    </ImagePlaceholder>
    <div className="ref-mobile-307"><div className="ref-mobile-308">{pageCopy["Quiet Living"]}</div><div className="ref-mobile-309">{pageCopy["Soft light, low furniture, and nothing that asks for attention."]}</div></div>
  </Link>

  <Link href="/shop/collections/slow-mornings" className="ref-mobile-310">
    <ImagePlaceholder alt="Wood dining table with cane chairs in morning light through a linen curtain" className="ref-mobile-311">
      <div className="cpar ref-mobile-312"></div>
    </ImagePlaceholder>
    <div className="ref-mobile-313"><div className="ref-mobile-314">{pageCopy["Slow Mornings"]}</div><div className="ref-mobile-315">{pageCopy["Pieces for the first hour of the day."]}</div></div>
  </Link>

  <Link href="/shop/collections/woven-forms" className="ref-mobile-316">
    <ImagePlaceholder alt="Close crop of cane weave on a rattan lounge chair" className="ref-mobile-317">
    </ImagePlaceholder>
    <div className="ref-mobile-318"><div className="ref-mobile-319">{pageCopy["Woven Forms"]}</div><div className="ref-mobile-320">{pageCopy["Cane, rattan, and reed, woven by hand."]}</div></div>
  </Link>
</section>


<section className="rm ref-mobile-321">
  <h2 className="ref-mobile-322">{pageCopy["From the shop"]}</h2>
  <div className="rmscroll">
    <div className="ref-mobile-323">
      <ImagePlaceholder alt="Lilim House living and dining room in one long view: a low sofa and a cane lounge chair on the left, a dining table under a brass pendant and a mahogany cabinet with a clay vessel on the right" className="ref-mobile-324">
        <div className="ref-mobile-325"></div>
        <div className="ref-mobile-326"></div>
        <div className="ref-mobile-327"></div>
        <div className="ref-mobile-328"></div>
        <div className="ref-mobile-329"></div>
        <div className="ref-mobile-330"></div>
        <div className="ref-mobile-331"></div>
        <div className="ref-mobile-332"></div>
        <div className="ref-mobile-333"></div>
        <div className="ref-mobile-334"></div>
        <div className="ref-mobile-335"></div>
        <div className="ref-mobile-336"></div>
        <div className="ref-mobile-337"></div>
        <div className="ref-mobile-338"></div>
        <div className="ref-mobile-339"></div>
        <div className="ref-mobile-340"></div>
        <div className="ref-mobile-341"></div>
        <div className="ref-mobile-342"></div>
        <div className="ref-mobile-343"></div>
        <div className="ref-mobile-344"></div>
        <div className="ref-mobile-345"></div>
        <div className="ref-mobile-346"></div>
        <div className="ref-mobile-347"></div>
        <div className="ref-mobile-348"></div>
        <div className="ref-mobile-349"></div>
        <div className="ref-mobile-350"></div>
        <div className="ref-mobile-351"></div>
        <div className="ref-mobile-352"></div>
        <div className="ref-mobile-353"></div>
        <div className="ref-mobile-354"></div>
        <div className="ref-mobile-355"></div>
        <div className="ref-mobile-356"></div>
        <div className="shade ref-mobile-357"></div>
      </ImagePlaceholder>
      <Link href="/shop/products/silong-sofa" className="pin p1 ref-mobile-358" aria-label="1, Silong Sofa, Kanlungan Original, ₱186,000">1</Link>
      <Link href="/shop/products/hapag-dining-table" className="pin p2 ref-mobile-359" aria-label="2, Hapag Dining Table, Kanlungan Original, ₱178,000">2</Link>
      <Link href="/shop/products/dapithapon-lounge-chair" className="pin p3 ref-mobile-360" aria-label="3, Dapithapon Lounge Chair, Sulihiya Studio, ₱64,000">3</Link>
      <Link href="/shop/products/kapis-pendant" className="pin p4 ref-mobile-361" aria-label="4, Kapis Pendant, Tanso Lighting Works, ₱32,000">4</Link>
      <Link href="/shop/products/aparador-cabinet" className="pin p5 ref-mobile-362" aria-label="5, Aparador Cabinet, Kanlungan Original, ₱164,000">5</Link>
      <Link href="/shop/products/tapayan-vessel" className="pin p6 ref-mobile-363" aria-label="6, Tapayan Vessel, Bukal Clayworks, ₱8,600">6</Link>
    </div>
  </div>

  <ol className="ref-mobile-364">

    <li><ProductCard product={products.find((product) => product.slug === "silong-sofa")!} number={1} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "hapag-dining-table")!} number={2} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "dapithapon-lounge-chair")!} number={3} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "kapis-pendant")!} number={4} variant="home" /></li>

    <li><ProductCard product={products.find((product) => product.slug === "aparador-cabinet")!} number={5} variant="home" /></li>

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
    <ImagePlaceholder alt="Hands weaving a cane panel on a frame in a workshop, window light and hanging reed" className="ref-mobile-372"><div className="par ref-mobile-373"></div><div className="shade ref-mobile-374"></div></ImagePlaceholder>
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
    <div className="zin ref-mobile-404"><ImagePlaceholder alt="Tanaw Residence at dusk, warm lamps lit inside and the city beyond the glass" className="ref-mobile-405"><div className="ref-mobile-406"></div></ImagePlaceholder></div>
    <div className="ref-mobile-407"></div>
    <div className="ref-mobile-408">
      <h2 className="ref-mobile-409">{pageCopy["Tell us about your space."]}</h2>
      <p className="ref-mobile-410">A discovery call takes 30 minutes and costs nothing. Furnishing projects start at {formatPrice(1500000)}.</p>
      <Link href="/book" className="btn-p ref-mobile-411">{pageCopy["Book a discovery call"]}</Link>
    </div>
  </div>
</section>
</div>); }
