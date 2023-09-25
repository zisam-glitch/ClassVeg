import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { HomeSliderA, HomeSliderB } from "../src/components/HomeSlider";
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
          <HomeSliderB />
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
                  src="assets/images/products/7.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dried Goods </div>
                <h3>
                  <Link href="/services">Condiments</Link>
                </h3>
                <p className="fz-20">
                  A great condiment will add huge flavour to a host of dishes.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Sauces</li>
                    <li>Spices</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Chutneys</li>
                    <li>Creams</li>
                    <li>Oils</li>
                    <li>Syrups</li>
                    <li>Vinegars</li>
                    <li>Curry Powders</li>
                    <li>Jellies</li>
                    <li>Relish</li>
                    <li>Spreads</li>
                    <li>Stocks</li>
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
                  src="assets/images/products/8.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dried Goods </div>
                <h3>
                  <Link href="/services">Baking Products & Pastries</Link>
                </h3>
                <p className="fz-20">
                  We supply a variety of Baking Products & Pastries
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Sugars</li>
                    <li>Flours</li>
                    <li>Pastries</li>
                    <li>Eggs</li>
                    <li>Yeast</li>
                    <li>Butters</li>
                    <li>Baking Powder</li>
                    <li>Baking Soda</li>
                    <li>Jams</li>
                    <li>Parchment Paper</li>
                    <li>Vanilla Pods</li>
                    <li>Vanilla Essence</li>
                    <li>Bicarbonate of Soda</li>
                    <li>Chocolate pistols</li>
                    <li>Spreads</li>
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
                  src="assets/images/products/9.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dried Goods </div>
                <h3>
                  <Link href="/services">Frozen</Link>
                </h3>
                <p className="fz-20">
                  The best frozen foods from major brands, carefully selected
                  for quality and convenience. All maintained in perfect
                  conditions.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Frozen Boirons</li>
                    <li>Frozen Fruits</li>
                    <li>Frozen Veg</li>
                    <li>Frozen Chips/Fries</li>
                    <li>Frozen Baguettes</li>
                    <li>Frozen Brioche</li>
                    <li>Frozen Ciabatta</li>
                    <li>Frozen Wraps</li>
                    <li>Frozen Falafel</li>
                    <li>Frozen Pastries</li>
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
                  src="assets/images/products/10.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dried Goods </div>
                <h3>
                  <Link href="/services">Tinned</Link>
                </h3>
                <p className="fz-20">
                  A variety of tinned food is available, from staples such as
                  baked beans and vegetables, to tomato paste and anchovy
                  fillets
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Borlotti Beans</li>
                    <li>Cannelini Beans</li>
                    <li>Heinz Beans</li>
                    <li>Plain Baked Beans</li>
                    <li>Black Beans</li>
                    <li>Chick Peas</li>
                    <li>Coconut Milk</li>
                    <li>Condensed Milk</li>
                    <li>Haricot Beans</li>
                    <li>Kidney Beans</li>
                    <li>Mango Slices</li>
                    <li>Lychees in Syrup</li>
                    <li>Mushy Peas</li>
                    <li>Pineapple Rings</li>
                    <li>Roasted Red Peppers</li>
                    <li>Sweetcorn</li>
                    <li>Chopped Tomatoes</li>
                    <li>Plum Tomatoes</li>
                    <li>Tuna Tin</li>
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
                  src="assets/images/products/11.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dried Goods </div>
                <h3>
                  <Link href="/services">Breads</Link>
                </h3>
                <p className="fz-20">
                  We supply sliced bread and bakery products from major brands
                  and local, artisan suppliers.
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Loaf</li>
                    <li>Baps</li>
                    <li>Bagels</li>
                    <li>Baguettes</li>
                    <li>Brioche</li>
                    <li>Burger Buns</li>
                    <li>Muffins</li>
                    <li>Ciabatta</li>
                    <li>Foccacia</li>
                    <li>Teacakes</li>
                    <li>Naan Breads</li>
                    <li>Paninis</li>
                    <li>Pastries</li>
                    <li>Croissant</li>
                    <li>Wraps</li>
                    <li>Sourdough</li>
                    <li>Bloomers</li>
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
                  src="assets/images/products/12.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Dried Goods </div>
                <h3>
                  <Link href="/services">Miscellaneous</Link>
                </h3>
                <p className="fz-20">
                We consider ourselves a one-stop shop & can accomodate any of your purchasing needs
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Sugars</li>
                    <li>Flours</li>
                    <li>Pastries</li>
                    <li>Eggs</li>
                    <li>Yeast</li>
                    <li>Butters</li>
                    <li>Baking Powder</li>
                    <li>Baking Soda</li>
                    <li>Jams</li>
                    <li>Parchment Paper</li>
                    <li>Vanilla Pods</li>
                    <li>Vanilla Essence</li>
                    <li>Bicarbonate of Soda</li>
                    <li>Chocolate pistols</li>
                    <li>Spreads</li>
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
