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
                <a href="assets/images/products/preview1.1.png">
                  <img
                    src="assets/images/products/preview1.1.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview1.2.png">
                  <img
                    src="assets/images/products/preview1.2.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview1.3.png">
                  <img
                    src="assets/images/products/preview1.3.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview1.4.png">
                  <img
                    src="assets/images/products/preview1.4.png"
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
                  <h2>Pears</h2>
                </div>
                <p>
                  Clean, fresh, and whole pears. All dessert varieties are
                  eligible for supply that meet the requirements for EC Class 1.
                  Varieties for consumption when crisp are differentiated from
                  those consumed ripe with slight softening.
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
                  <br /> Clean, fresh, and whole pears. All dessert varieties
                  are eligible for supply that meet the requirements for EC
                  Class 1. Varieties for consumption when crisp are
                  differentiated from those consumed ripe with slight softening.
                </p>
                <p>
                  <strong>Compliance:</strong>
                  <br /> In accordance with the{" "}
                  <a href="https://publishing.service.gov.uk">
                    EC regulation for Class 1 - Marketing standards for pears
                  </a>
                  .
                </p>
                <p>
                  <strong>Size/Grade:</strong>
                </p>
                <ul>
                  <li>Diameter: 50/55 mm (tolerance up to 60mm).</li>
                  <li>
                    Minimum of EC Class 1. Conference pears that meet all
                    quality standards of EC Class 1, but with a size of 45/50mm,
                    will be accepted as Class 2.
                  </li>
                </ul>
                <p>
                  <strong>Packaging:</strong>
                </p>
                <ul>
                  <li>
                    Packed in units of 10 (changes in the use of single-use
                    plastic may affect this in due course).
                  </li>
                  <li>Clean cardboard box, free from wood and staples.</li>
                  <li>Case counts ranging from 10 to 25 bags.</li>
                  <li>Label: "Wash before eating."</li>
                </ul>
                <p>
                  <strong>Temperature Control:</strong>
                </p>
                <ul>
                  <li>Prior to packaging: -1°C to 5°C.</li>
                  <li>
                    Air temperature in storage prior to dispatch: 5°C to 10°C.
                  </li>
                  <li>Air temperature during distribution: &lt;12°C.</li>
                  <li>Product core temperature on arrival: &lt;12°C.</li>
                </ul>
                <p>
                  <strong>Product Life:</strong>
                  <br /> Day of Delivery plus 5 calendar days stored at 7°C to
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
                    standard for Pears Class I.
                  </li>
                  <li>
                    <strong>Colour:</strong> In line with EC marketing standard
                    for Pears Class I.
                  </li>
                  <li>
                    <strong>Shape:</strong> In line with EC marketing standard
                    for Pears Class I.
                  </li>
                  <li>
                    <strong>Taste:</strong> Free of any foreign smell and/or
                    taste.
                  </li>
                  <li>
                    <strong>Texture:</strong> Firmness on day of consumption not
                    less than 3kg, averaging 4kg (using 8mm probe). Tolerance:
                    25%.
                  </li>
                  <li>
                    <strong>Size:</strong> Class 2 conference pears can be
                    supplied to the School Fruit and Vegetable Scheme, provided
                    they meet the quality specification of Class 1 but have a
                    size parameter of 45/50 mm.
                  </li>
                </ul>
                <p>
                  <strong>Quality Assurance:</strong>
                </p>
                <ul>
                  <li>
                    All pears are coloured in accordance with the requirements
                    of the EC marketing guidance for consumption in schools.
                  </li>
                  <li>
                    Pears tested for quality attributes, including taste and
                    edibility, pre and post-delivery using shelf life samples.
                  </li>
                </ul>
                <p>
                  <strong>Organoleptic Quality Assurance Criteria:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Juice Content:</strong> Very Juicy
                  </li>
                  <li>
                    <strong>Acidity vs. Sweetness:</strong> Very sweet, over 14%
                    Brix
                  </li>
                  <li>
                    <strong>Fruitiness and Aroma:</strong> Strong, fragrant
                  </li>
                  <li>
                    <strong>Flavours:</strong> Excellent rounded, refreshing
                    &amp; sweet
                  </li>
                  <li>
                    <strong>Physical:</strong> Perfectly formed, fresh with
                    pressure between 7kg and 8kg.
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
