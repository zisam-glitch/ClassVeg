import Link from "next/link";
import Layout from "../src/layout/Layout";
const ShopGrid = () => {
  return (
    <Layout header={1}>
      {/* <PageBanner pageName={"Shop"} /> */}
      <section className="shop-page rel z-1 pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="shop-shorter rel z-3 pt-10 mb-40 wow fadeInUp delay-0-2s">
            <div className="products-dropdown"></div>
          </div>
          <div className="row show-grid-row">
            <Link href="/apple">
              <div className="col-xl-4 col-lg-4 col-sm-6 c-p">
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/products/product1.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/apple">Apple</Link>
                    </h5>
                    <span className="price">
                      <span>Clean, fresh, and whole apples...</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/easy-peel-citrus">
              <div className="col-xl-4 col-lg-4 col-sm-6 c-p">
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/products/product3.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/easy-peel-citrus">Easy Peel Citrus</Link>
                    </h5>
                    <span className="price">
                      <span>Clean, fresh, and whole citrus fruits...</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/pears">
              <div className="col-xl-4 col-lg-4 col-sm-6 c-p">
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/products/product2.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/pears">Pears</Link>
                    </h5>
                    <span className="price">
                      <span>Clean, fresh, and whole pears...</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/banana">
              <div className="col-xl-4 col-lg-4 col-sm-6 c-p">
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/products/product4.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/banana">Banana </Link>
                    </h5>
                    <span className="price">
                      <span>Clean, fresh, and whole bananas. </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/carrots ">
              <div className="col-xl-4 col-lg-4 col-sm-6 c-p">
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/products/product5.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/carrots ">Carrots  </Link>
                    </h5>
                    <span className="price">
                      <span>Clean, fresh, and whole vegetables... </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/sugar-snap-peas ">
              <div className="col-xl-4 col-lg-4 col-sm-6 c-p">
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/products/product6.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/sugar-snap-peas ">Sugar Snap Peas  </Link>
                    </h5>
                    <span className="price">
                      <span>Clean, fresh, and whole vegetables... </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/tomatoes ">
              <div className="col-xl-4 col-lg-4 col-sm-6 c-p">
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/products/product7.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/tomatoes ">Tomatoes</Link>
                    </h5>
                    <span className="price">
                      <span>Clean, fresh, and whole fruit... </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/raisins-dried-grapes ">
              <div className="col-xl-4 col-lg-4 col-sm-6 c-p">
                <div className="product-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/products/product8.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h5>
                      <Link href="/raisins-dried-grapes ">Raisins/ Dried Grapes</Link>
                    </h5>
                    <span className="price">
                      <span>Clean, fresh, and whole fruit... </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ShopGrid;
