import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { HomeSliderC } from "../src/components/HomeSlider";
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
          <HomeSliderC />
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
                  src="assets/images/products/13.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Prepared Produce</div>
                <h3>
                  <Link href="/services">Prepared Fruit</Link>
                </h3>
                <p className="fz-20">
                  We can prepare fruit to whatever spec you want!
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Fruit pots</li>
                    <li>Fruit kebabs</li>
                    <li>Diced fruit</li>
                    <li>Fruit balls</li>
                    <li>Fruit wedges</li>
                    <li>Fruit zest</li>
                    <li>Fresh fruit Juices</li>
                    <li>Fruit Salads</li>
                    <li>Peeled Fruit</li>
                  </ul>
                  <p className="fz-20 pb-20">
                    We can do any prep you require! We are accustom to supply in
                    large quantities to the likes of airline and train line food
                    suppliers.
                  </p>
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
                  src="assets/images/products/14.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Prepared Produce </div>
                <h3>
                  <Link href="/services">Prepared Vegetables</Link>
                </h3>
                <p className="fz-20">
                  Save time & money in your kitchen by buying your veg pre
                  prepped!
                </p>
                <details>
                  <summary> Product Options</summary>
                  <ul className="ul-5">
                    <li>Sliced</li>
                    <li>Diced</li>
                    <li>1/4 cut</li>
                    <li>1/2 cut</li>
                    <li>Shredded</li>
                    <li>Grated</li>
                    <li>Peeled</li>
                    <li>Wedges</li>
                    <li>Chipped</li>
                    <li>Brunoise</li>
                    <li>Julienne</li>
                    <li>Florets</li>
                    <li>Cubed</li>
                  </ul>
                  <p className="fz-20 pb-20">
                    We can prepare anything to your exact specification at a
                    minutes notice. All of our prep is made to order and can be
                    ordered until 10pm for next day delivery!
                  </p>
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
