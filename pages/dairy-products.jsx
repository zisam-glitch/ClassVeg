import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { HomeSliderA } from "../src/components/HomeSlider";
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
          <HomeSliderA />
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
                  src="assets/images/products/1.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dairy </div>
                <h3>
                  <Link href="/services">Milk</Link>
                </h3>
                <p className="fz-20">
                  Our milk is sourced from local farms, bringing you a great
                  range of quality milk products.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Alpro Almond UNSWEETENED 1L</li>
                    <li>Alpro Coconut 1L</li>
                    <li>Alpro Soya PROFESSIONAL 1L</li>
                    <li>Milk Full 2 Ltr</li>
                    <li>Milk Full 500ml</li>
                    <li>Milk Full 1L</li>
                    <li>Milk Semi Skimmed 1 ltr</li>
                    <li>Milk Semi 2 Ltr</li>
                    <li>Milk Semi 10x250ml</li>
                    <li>Milk Semi 500ml</li>
                    <li>Milk Skimmed 2Ltr</li>
                    <li>Milk Skimmed 1L</li>
                    <li>Milk Skimmed 500ml</li>
                    <li>Pergal FULL 13.6Ltr</li>
                    <li>Pergal Semi Skimmed 13.6ltr</li>
                    <li>Pergal Skimmed 13.6L</li>
                    <li>Buttermilk Large 5ltr</li>
                    <li>Buttermilk small 500ml</li>
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
                  src="assets/images/products/2.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dairy </div>
                <h3>
                  <Link href="/services">Butter</Link>
                </h3>
                <p className="fz-20">
                  A great range of natural butter from independent suppliers
                  delivered to your door.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Butter Portions 100x7gm</li>
                    <li>Netherend Farm Butter Portions 100x10gm</li>
                    <li>Jersey Butter 250gm</li>
                    <li>Butter Salted</li>
                    <li>Butter Unsalted</li>
                    <li>Lurpak 250gm</li>
                    <li>Laminating Butter 1kg</li>
                    <li>Margarine 2kg</li>
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
                  src="assets/images/products/3.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dairy </div>
                <h3>
                  <Link href="/services">Cream</Link>
                </h3>
                <p className="fz-20">
                  We can supply single cream, double cream, whipping cream and
                  even cans of squirty cream!
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Creme Fraiche 2kg tub</li>
                    <li>Clotted Cream 1kg LONG LIFE</li>
                    <li>Clotted Cream Mini 24x28gm</li>
                    <li>Cream Double 2 ltr</li>
                    <li>Cream Single 2ltr</li>
                    <li>Cream Whipping 2ltr</li>
                    <li>Sour Cream Set 2kg tub</li>
                    <li>Squirty Cream 500gm</li>
                    <li>Food Heaven Whipped Spray Cream Vegan 200ml</li>
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
                  src="assets/images/products/4.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dairy </div>
                <h3>
                  <Link href="/services">Cheese</Link>
                </h3>
                <p className="fz-20">
                  We have a great range of cheeses including fine English
                  cheeses from across the country.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Applewood Smoked Cheese kg</li>
                    <li>Applewood Sliced 500gm</li>
                    <li>Barbers Vintage Cheddar 1.25kg</li>
                    <li>Blacksticks Blue kg</li>
                    <li>Brie 1 kg wheel</li>
                    <li>Burrata 2x125gm PO</li>
                    <li>Kerrymaid Burger Slices 1.4kg x113</li>
                    <li>Camembert 145gm</li>
                    <li>Cammembert Wheel kg</li>
                    <li>Camembert Small 250gm</li>
                    <li>Capricorn Goats Log 100gm</li>
                    <li>Colston Bassett Stilton kg</li>
                    <li>Cream Cheese Full Fat 2kg tub</li>
                    <li>Extra Mature Grated 2kg</li>
                    <li>Cheshire Cheese kg</li>
                    <li>Cheddar Mature GRATED 2KG Bag</li>
                    <li>Cheddar Mature KG</li>
                    <li>Cheddar Mature Slices kg</li>
                    <li>Cheddar Mild GRATED 2KG Bag</li>
                    <li>Cheddar Mild KG</li>
                    <li>Cheddar Mild SLICED kg</li>
                    <li>Cheddar RED (Col&apos;d) kg</li>
                    <li>Cheddar RED Grated 2kg Bag</li>
                    <li>Grated 70/30 Cheese 2kg</li>
                    <li>Colliers EM Cheddar kg</li>
                    <li>Cottage Cheese 2 kg</li>
                    <li>Longley Cottage Cheese 1kg</li>
                    <li>Sliced Emmenthal kg</li>
                    <li>Essential Cheese Box 825gm</li>
                    <li>Feta Block 900gm</li>
                    <li>Goats Curd 500gm</li>
                    <li>Goats Log Kg</li>
                    <li>Gorgonzola kg</li>
                    <li>Gouda Sliced Cheese pkt</li>
                    <li>Gruyere Cheese kg</li>
                    <li>Gruyere Cheese Grated kg (PO)</li>
                    <li>Haloumi 200gm</li>
                    <li>Howgate Brie kg</li>
                    <li>Howgate Brie kg</li>
                    <li>Kidderton Ash 145gm</li>
                    <li>Mrs Kirkhams Lancashire kg</li>
                    <li>Lancashire Cheese kg</li>
                    <li>Manchego Cheese kg</li>
                    <li>Mascarpone 2kg</li>
                    <li>Mascarpone SMALL 250gm</li>
                    <li>Mexicana Sliced 500gm</li>
                    <li>Monterey Jack Sliced 50x20gm</li>
                    <li>Mozzarella Block kg</li>
                    <li>Mozzarella Boconcini 1kg TRAY</li>
                    <li>Mozzarella Grated 2kg bag</li>
                    <li>Mozzarella Ball 125gm</li>
                    <li>Parmesan Grated kg</li>
                    <li>Parmesan kg</li>
                    <li>Pont L&apos;eveque 1.7kg</li>
                    <li>Quickes Mature Cheddar kg</li>
                    <li>Red Leicester Cheese kg</li>
                    <li>Ricotta Cheese 1.5kg tub</li>
                    <li>Ricotta SMALL 250gm</li>
                    <li>Rosary Goats Log 275gm</li>
                    <li>Stilton Blue Kg</li>
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
                  src="assets/images/products/5.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dairy </div>
                <h3>
                  <Link href="/services">Yogurts</Link>
                </h3>
                <p className="fz-20">
                  Our selection of yoghurts will meet your every need. From
                  small pots of fruity yoghurts to gallon tubs of natural
                  yoghurts, we can provide it all.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Alpro Yogurt</li>
                    <li>GREEK Yoghurt 1KG</li>
                    <li>Yogurt 450ml SMALL</li>
                    <li>Yogurt FULL FAT 12x125gm Tray</li>
                    <li>Farmhouse Mixed Yogurts 6x150gm</li>
                    <li>Yogurt Natural Gallon tub</li>
                    <li>Yogurt Low Fat Tray 12x115gm</li>
                    <li>Skyr Yogurts 6x450gm</li>
                    <li>Yogurt Tray Natural 12x125gm</li>
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
            <div className="category-item Sr wow fadeInUp delay-0-8s">
              <div className="icon r">
                <img
                  className="b-10"
                  src="assets/images/products/6.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dairy </div>
                <h3>
                  <Link href="/services">Dairy Alternatives</Link>
                </h3>
                <p className="fz-20">
                  For dairy free or vegan alternatives, we offer coconut cream
                  and milk, almond milk, oat milk, vegan cheeses and more.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Alpro Almond UNSWEETENED 1L</li>
                    <li>Alpro Yogurt</li>
                    <li>Alpro Coconut 1L</li>
                    <li>Alpro Soya PROFESSIONAL 1L</li>
                    <li>Vegan Margerine 2kg</li>
                    <li>Vegan Mature Cheddar Block 200gm</li>
                    <li>Vegan Cream Cheese 200gm</li>
                    <li>Vegan Cheese Slices 200gm</li>
                    <li>Vegan Cream 1L</li>
                    <li>Vegan Feta 200gm</li>
                    <li>Veg Parmersan Grated kg</li>
                    <li>Alpro Hazlenut Milk 1L</li>
                    <li>Alpro Almond Milk Chilled ltr</li>
                    <li>Alpro Oat Milk 1L</li>
                    <li>Vegi Parmesan (Grana Moravia) kg</li>
                    <li>Vegan Mozzarella Grated kg</li>
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
