import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { HomeSliderD } from "../src/components/HomeSlider";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout header={1}>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSliderD />
        </div>
        <img
          className="bg-leaf"
          src="assets/images/slider/slider-bg-leaf.png"
          alt="Shape"
        />
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
      </section>
      {/* Slider Section End */}
      {/* Category Section Start */}
      <section className="category-section rpt-100">
        <div className="container">
          <div className="category-wrap">
            <div className="category-item Sr wow fadeInUp delay-0-3s">
              <div className="icon r">
                <img
                  className="b-10"
                  src="assets/images/products/15.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Fresh Produce</div>
                <h3>
                  <Link href="/services">Veg</Link>
                </h3>
                <p className="fz-20">
                  From wonderful, flavourful onions to the freshest mushrooms
                  and root vegetables. Natural greens, chillis and more. Always
                  wholesome and fresh.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Artichokes</li>
                    <li>Asparagus</li>
                    <li>Aubergines</li>
                    <li>Baby Veg</li>
                    <li>Baby Corn</li>
                    <li>Beetroot - Candy, Golden, Raw, Cooked</li>
                    <li>Beans</li>
                    <li>Broccoli - Purple Sprouting, Tenderstem, Heads</li>
                    <li>Butternut Squash</li>
                    <li>
                      Cabbage - White, Red, Savoy, Spring, Hispi &amp;&nbsp;more
                    </li>
                    <li>
                      Carrots - Normal, Donkey, Chanternay, Heritage, Fern on,
                      Baby Rainbow &amp;&nbsp;more
                    </li>
                    <li>Cauliflower</li>
                    <li>Celeriac</li>
                    <li>Chillies</li>
                    <li>China Leaf</li>
                    <li>Corn Vac Packed</li>
                    <li>Courgettes - Green, Yellow, Baby</li>
                    <li>Fennel</li>
                    <li>Garlic - String, Smoked, Peeled, Bulbs</li>
                    <li>Ginger</li>
                    <li>Horseradish</li>
                    <li>Jalapenios</li>
                    <li>Kale</li>
                    <li>Kohlrabi</li>
                    <li>Leeks</li>
                    <li>Lemon Grass</li>
                    <li>Mangetout</li>
                    <li>Moolie</li>
                    <li>
                      Mushrooms - Button, Chestnut, Flat, Oyster, Portobello,
                      Class 2, Closed Cup, Wild, Shemeji, &amp;&nbsp;more
                    </li>
                    <li>
                      Potatoes - New, Maris, Washed Whites, Reds, Heritage,
                      Jackets,&nbsp;Chippers, Jersey Royals &amp;&nbsp;more
                    </li>
                    <li>Onions - White, Red, Silverskin, Roscoff</li>
                    <li>Radish</li>
                    <li>Shallots - Banana, Round</li>
                    <li>Spinach- Loose, Pre Packed</li>
                    <li>Sugarsnaps</li>
                    <li>Swede</li>
                    <li>Sweet Potatoes</li>
                    <li>Fresh Truffle</li>
                  </ul>
                  <p className="fz-20 pb-20">& more.</p>
                </details>
                <Link href="/shop-grid">
                  <a className="theme-btn style-two pb-20">
                    Get A Free Quote <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="category-item Sr wow fadeInUp delay-0-4s">
              <div className="icon r">
                <img
                  className="b-10"
                  src="assets/images/products/16.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Fresh Produce</div>
                <h3>
                  <Link href="/services">Fruit</Link>
                </h3>
                <p className="fz-20">
                  We supply a wide range of the freshest fruits, from bananas to
                  berries, lemons bursting with flavour to melons and exotic
                  fruit. All the colours of the rainbow delivered to your
                  kitchen.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Apples Bakers &nbsp; &nbsp;</li>
                    <li>Apples Green &nbsp; &nbsp;</li>
                    <li>Apples Granny Smith &nbsp; &nbsp; &nbsp;</li>
                    <li>Apples Pink Ladies &nbsp; &nbsp;</li>
                    <li>Apples Red &nbsp; &nbsp;</li>
                    <li>Bananas &nbsp; &nbsp;</li>
                    <li>Blackberries 125gm &nbsp; &nbsp;</li>
                    <li>Blueberries 125gm &nbsp; &nbsp;</li>
                    <li>Cantaloupe &nbsp; &nbsp;</li>
                    <li>Dragon Fruit each &nbsp; &nbsp;</li>
                    <li>Figs &nbsp; &nbsp;</li>
                    <li>Galia &nbsp; &nbsp;</li>
                    <li>Grapefruit Pink &nbsp; &nbsp;</li>
                    <li>Grapefruit &nbsp; &nbsp;</li>
                    <li>Grapes Black &nbsp; &nbsp;</li>
                    <li>Grapes Green &nbsp; &nbsp; &nbsp; &nbsp;</li>
                    <li>Kiwi &nbsp; &nbsp;</li>
                    <li>Lemons &nbsp; &nbsp;</li>
                    <li>Limes &nbsp; &nbsp;</li>
                    <li>AIR FREIGHT Mango each &nbsp; &nbsp;</li>
                    <li>Nectarines &nbsp; &nbsp;</li>
                    <li>BLOOD Oranges &nbsp; &nbsp;</li>
                    <li>Oranges &nbsp; &nbsp;</li>
                    <li>Oranges JUICING box</li>
                    <li>Papaya &nbsp; &nbsp;</li>
                    <li>Passion Fruit &nbsp; &nbsp;</li>
                    <li>Peaches &nbsp; &nbsp;</li>
                    <li>Pears &nbsp; &nbsp;</li>
                    <li>Pears Williams &nbsp; &nbsp;</li>
                    <li>Physalis &nbsp; &nbsp;</li>
                    <li>Pineapple &nbsp; &nbsp;</li>
                    <li>Plums &nbsp; &nbsp;</li>
                    <li>Pomegranate each &nbsp; &nbsp;</li>
                    <li>Raspberries 125gm &nbsp; &nbsp;</li>
                    <li>Red Currants 125gm &nbsp; &nbsp;</li>
                    <li>Rhubarb &nbsp; &nbsp;</li>
                    <li>Satsumas &nbsp; &nbsp;</li>
                    <li>Starfruit</li>
                    <li>Strawberries punnet &nbsp; &nbsp;</li>
                    <li>Watermelons &nbsp; &nbsp;</li>
                    <li>Yellow Melons</li>
                  </ul>
                  <p className="fz-20 pb-20">& more.</p>
                </details>
                <Link href="/shop-grid">
                  <a className="theme-btn style-two pb-20">
                    Get A Free Quote <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="category-item Sr wow fadeInUp delay-0-5s">
              <div className="icon r">
                <img
                  className="b-10"
                  src="assets/images/products/17.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Fresh Produce</div>
                <h3>
                  <Link href="/services">Salad</Link>
                </h3>
                <p className="fz-20">
                  A wide variety of fresh salads, available when in season.
                  Specially selected for the crispiest lettuce, juiciest and
                  most flavourful tomatoes to add life and colour to the plate.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Avocados</li>
                    <li>Beansprouts</li>
                    <li>Celery</li>
                    <li>Chard - Red, Rainbow</li>
                    <li>Chickory - Red, White</li>
                    <li>Corn Salad</li>
                    <li>
                      Lettuce - Cos, Iceberg, Flat, Little Gem, Lollo Biondi,
                      Lollo Rosso, Endive, Oak Leaf, RadMixed Leaf, Baby Leaf
                      &amp;&nbsp;more
                    </li>
                    <li>Cucumbers</li>
                    <li>Mustard Cress</li>
                    <li>Peppers - Green, Red, Yellow</li>
                    <li>Radish</li>
                    <li>Rocket</li>
                    <li>Spring Onions</li>
                    <li>
                      Tomatoes - Medium, Beef, Cherry, Cherry Vine,&nbsp;Cherry
                      Yellow, Heritage, Plum, Plum Vine, Vine &amp; more
                    </li>
                    <li>Watercress</li>
                  </ul>
                  <p className="fz-20 pb-20">& more.</p>
                </details>
                <Link href="/shop-grid">
                  <a className="theme-btn style-two pb-20">
                    Get A Free Quote <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="category-item Sr wow fadeInUp delay-0-6s">
              <div className="icon r">
                <img
                  className="b-10"
                  src="assets/images/products/18.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Fresh Produce</div>
                <h3>
                  <Link href="/services">Herbs</Link>
                </h3>
                <p className="fz-20">
                  Full of aroma, flavour & nature. Specially selected culinary
                  herbs, with a wide range available.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Basil 100gm &nbsp; &nbsp;</li>
                    <li>Basil Thai &nbsp;</li>
                    <li>Bronze Fennel 20gm &nbsp;</li>
                    <li>Chervil PKT &nbsp; &nbsp;</li>
                    <li>Chives 100gm &nbsp; &nbsp;</li>
                    <li>Coriander 100gm Bunch &nbsp; &nbsp;</li>
                    <li>Dill 100gm &nbsp; &nbsp;</li>
                    <li>Fennel Flowers Mint 100gm</li>
                    <li>Oregano 100gm &nbsp; &nbsp;</li>
                    <li>Parsley Curly &nbsp; &nbsp;</li>
                    <li>Flat Parsley &nbsp; &nbsp;</li>
                    <li>Rosemary 100gm &nbsp; &nbsp;</li>
                    <li>Sage 100gm &nbsp; &nbsp;</li>
                    <li>Large Red Shizo pkt &nbsp; &nbsp;</li>
                    <li>Tarragon 100gm &nbsp; &nbsp;</li>
                    <li>Lemon Thyme Pkt &nbsp; &nbsp;</li>
                    <li>Thyme 100gm &nbsp; &nbsp;</li>
                    <li>Viola Flowers punnet &nbsp; &nbsp;</li>
                    <li>Wild Garlic bag</li>
                  </ul>
                  <p className="fz-20 pb-20">& more.</p>
                </details>
                <Link href="/shop-grid">
                  <a className="theme-btn style-two pb-20">
                    Get A Free Quote <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="category-item Sr wow fadeInUp delay-0-7s">
              <div className="icon r">
                <img
                  className="b-10"
                  src="assets/images/products/19.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Fresh Produce</div>
                <h3>
                  <Link href="/services">Mirco Herbs</Link>
                </h3>
                <p className="fz-20">
                  We are partnered with Nurtured in Norfolk so can supply a wide
                  range of the highest quality micros.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>KC Affila Cress &nbsp;x16 &nbsp; &nbsp;</li>
                    <li>KC Secura Mix x18 &nbsp; &nbsp;</li>
                    <li>Micro Cress Basil Pkt &nbsp; &nbsp;</li>
                    <li>Micro Cress Celery pkt &nbsp; &nbsp;</li>
                    <li>Micro Cress Corriander Pkt &nbsp; &nbsp;</li>
                    <li>Micro Cress Garlic Chives Pkt &nbsp; &nbsp;</li>
                    <li>Micro Lemon Balm Pkt &nbsp; &nbsp;</li>
                    <li>Micro Mint punnet &nbsp; &nbsp;</li>
                    <li>Micro Nasturcium Leaves &nbsp; &nbsp; &nbsp; &nbsp;</li>
                    <li>Micro Oyster Leaf punnet &nbsp; &nbsp;</li>
                    <li>Micro Parsley each &nbsp;</li>
                    <li>Micro Cress Peashoots &nbsp; &nbsp;</li>
                    <li>Micro Popcorn shoots &nbsp; &nbsp;</li>
                    <li>Microcress Purple Shizo &nbsp; &nbsp;</li>
                    <li>Micro Cress Red Amaryth pkt &nbsp; &nbsp;</li>
                    <li>Micro Red Mustard Frills &nbsp; &nbsp;</li>
                    <li>Micro Rocket punnet</li>
                  </ul>
                  <p className="fz-20 pb-20">& more.</p>
                </details>
                <Link href="/shop-grid">
                  <a className="theme-btn style-two pb-20">
                    Get A Free Quote <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category Section End */}

      <section className="gallery-area pt-130 rpt-100 pb-100 rpb-80">
        <PhotoGallery />
      </section>
      {/* Gallery Area End */}
      {/* Feedback Section Start */}
    </Layout>
  );
};
export default Index;
