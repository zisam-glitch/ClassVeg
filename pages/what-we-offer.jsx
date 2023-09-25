import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { HomeSliderE, HomeSliderB } from "../src/components/HomeSlider";
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
          <HomeSliderE />
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
                  src="assets/images/products/20.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Local </div>
                <h3>
                  <Link href="/services">Dairy Products</Link>
                </h3>
                <p className="fz-20">
                  Check out the extensive range of Dairy products we can supply
                </p>

                <Link href="/dairy-products">
                  <a className="theme-btn style-two pb-20">
                    View Products <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="category-item Sr wow fadeInUp delay-0-4s">
              <div className="icon r">
                <img
                  className="b-10"
                  src="assets/images/products/21.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Range Of </div>
                <h3>
                  <Link href="/services">Dried Goods</Link>
                </h3>
                <p className="fz-20">
                  Tinned goods, Breads, Pastas, Condiments, Sauces & more.
                </p>

                <Link href="/dry-goods">
                  <a className="theme-btn style-two pb-20">
                    View Products <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="category-item Sr wow fadeInUp delay-0-5s">
              <div className="icon r">
                <img
                  className="b-10"
                  src="assets/images/products/22.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Quality </div>
                <h3>
                  <Link href="/services">Prepared Produce</Link>
                </h3>
                <p className="fz-20">
                  Save time & money in your kitchen by letting us prepare all
                  your produce.
                </p>

                <Link href="/prepared-fresh-produce">
                  <a className="theme-btn style-two pb-20">
                    View Products <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="category-item Sr wow fadeInUp delay-0-6s">
              <div className="icon r">
                <img
                  className="b-10"
                  src="assets/images/products/23.png"
                  alt="Icon"
                />
              </div>
              <div className="pc-40">
                <div className="sub-title mb-20">Quality </div>
                <h3>
                  <Link href="/services">Fresh Produce</Link>
                </h3>
                <p className="fz-20">
                  From your everyday veg to your speciality tropical fruits.
                </p>

                <Link href="fresh-produce">
                  <a className="theme-btn style-two pb-20">
                    View Products <i className="fas fa-angle-double-right" />
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
