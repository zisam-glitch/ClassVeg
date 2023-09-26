import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { productActiveTwo } from "../src/sliderProps";
const ProductDetails = () => {
  return (
    <Layout header={1}>
      <section className="product-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="product-preview-images rmb-55 wow fadeInLeft delay-0-2s">
                <a href="assets/images/products/preview2.1.png">
                  <img
                    src="assets/images/products/preview2.1.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview2.2.png">
                  <img
                    src="assets/images/products/preview2.2.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview2.3.png">
                  <img
                    src="assets/images/products/preview2.3.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview2.4.png">
                  <img
                    src="assets/images/products/preview2.4.png"
                    alt="Preview"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="product-details-content mb-30 wow fadeInRight delay-0-2s">
                <div className="off-ratting mb-15">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="section-title mb-20">
                  <h2>Easy Peel Citrus</h2>
                </div>
                <p>
                  Clean, fresh, and whole citrus fruits. Only "easy peel" orange
                  varieties are eligible for supply, such as clementines,
                  ellendales, Nardacott’s, tangerines, satsumas, and other
                  mandarins. All fruits must be seedless and meet the
                  requirements for EC Class 1.
                </p>

                <hr />
                <a href="/contact">
                  <button className="theme-btn">
                    Request for prices
                    <i className="fas fa-angle-double-right" />
                  </button>
                </a>

                <hr />
                <ul className="category-tags pt-10">
                  <li>
                    <b>Category</b>
                    <span>:</span>
                    <a>Fresh</a>
                    <a>Fruit</a>
                  </li>
                  <li>
                    <b>Tags</b>
                    <span>:</span>
                    <a href="#">Organic</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"details"}>
            <Nav className="nav nav-tabs product-information-tab pt-35 mb-25">
              <li>
                <Nav.Link
                  eventKey={"details"}
                  href="#details"
                  data-toggle="tab"
                >
                  Description
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  eventKey={"information"}
                  href="#information"
                  data-toggle="tab"
                >
                  Additional information
                </Nav.Link>
              </li>
            </Nav>
            <Tab.Content className="tab-content wow fadeInUp delay-0-2s pb-130 rpb-100">
              <Tab.Pane className="tab-pane" eventKey="details">
                <p>
                  <strong>Description:</strong>
                  <br /> Clean, fresh, and whole citrus fruits. Only "easy peel"
                  orange varieties are eligible for supply, such as clementines,
                  ellendales, Nardacott’s, tangerines, satsumas, and other
                  mandarins. All fruits must be seedless and meet the
                  requirements for EC Class 1.
                </p>
                <p>
                  <strong>Compliance:</strong>
                  <br /> In accordance with the{" "}
                  <a href="https://publishing.service.gov.uk">
                    EC regulation for Class 1 - Marketing standards for citrus
                    fruits
                  </a>
                  .
                </p>
                <p>
                  <strong>Size/Grade:</strong>
                </p>
                <ul>
                  <li>
                    Calibre 4/5, 46-55mm diameter – tolerance +/-10%. Calibre 3
                    to 5.
                  </li>
                </ul>
                <p>
                  <strong>Packaging:</strong>
                </p>
                <ul>
                  <li>
                    Packed in units of 10 fruits in giro net with wine glass
                    labels, or equivalent, in food cardboard outers. Changes in
                    the use of single-use plastic may affect this in due course.
                  </li>
                </ul>
                <p>
                  <strong>Temperature Control:</strong>
                </p>
                <ul>
                  <li>Prior to packaging: 3°C to 8°C.</li>
                  <li>
                    Air temperature in storage prior to dispatch: 4°C to 7°C.
                  </li>
                  <li>Air temperature during distribution: 5°C to 10°C.</li>
                  <li>Product core temperature on arrival: &lt;12°C.</li>
                </ul>
                <p>
                  <strong>Product Life:</strong>
                  <br /> Day of delivery plus 5 calendar days stored at 7°C to
                  10°C.
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane" eventKey="information">
                <p>
                  <strong>Organoleptic Properties:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Appearance:</strong> In line with EC marketing
                    standard for Citrus Class I. Green tinge allowed.
                  </li>
                  <li>
                    <strong>Colour:</strong> In line with EC marketing standard
                    for Citrus Class I.
                  </li>
                  <li>
                    <strong>Shape:</strong> In line with EC marketing standard
                    for Citrus Class I.
                  </li>
                  <li>
                    <strong>Taste:</strong> Minimum sugar acid ratio 7:1.
                  </li>
                  <li>
                    <strong>Texture:</strong> Characteristic juiciness for
                    variety. Satsumas 33%, Clementines 40%, late mandarins 40%.
                  </li>
                </ul>
                <p>
                  <strong>Quality Assurance:</strong>
                </p>
                <ul>
                  <li>
                    All fruits must be fully coloured at the point of
                    consumption in schools.
                  </li>
                  <li>
                    Fruits tested for "easy peeling" by physically peeling a
                    sample. Fruits that cannot be easily peeled are not be
                    supplied. Quality attributes, including taste and edibility,
                    should also be tested pre and post-delivery using shelf life
                    samples.
                  </li>
                </ul>
                <p>
                  <strong>Organoleptic Quality Assurance Criteria:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Juice Content:</strong> Succulent, over 50%.
                    Extremely juicy.
                  </li>
                  <li>
                    <strong>Acidity vs. Sweetness:</strong> Very sweet with a
                    hint of acidity. Brix over 14%.
                  </li>
                  <li>
                    <strong>Fruitiness and Aroma:</strong> Strong citrus
                    flavour, fragrant.
                  </li>
                  <li>
                    <strong>Physical:</strong> Peels and segments very easily.
                  </li>
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Product Details End */}
    </Layout>
  );
};
export default ProductDetails;
