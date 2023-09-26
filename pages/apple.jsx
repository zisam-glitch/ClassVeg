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
                <a href="assets/images/products/preview1.png">
                  <img
                    src="assets/images/products/preview1.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview2.png">
                  <img
                    src="assets/images/products/preview2.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview3.png">
                  <img
                    src="assets/images/products/preview3.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview4.png">
                  <img
                    src="assets/images/products/preview4.png"
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
                  <h2>Apple</h2>
                </div>
                <p>
                  Clean, fresh, and whole apples, perfect for a healthy snack or
                  addition to meals
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
                  <br /> Clean, fresh, and whole apples, perfect for a healthy
                  snack or addition to meals.
                </p>
                <p> </p>
                <p>
                  <strong>Compliance:</strong>
                  <br /> In accordance with the EC regulation for Class 1 -
                  Marketing standard for apples.
                </p>
                <p> </p>
                <p>
                  <strong>Size/Grade:</strong>
                </p>
                <ul>
                  <li>
                    Preferred diameter: 50-60 mm. However, 60mm-70mm diameter is
                    accepted when market dictates, with sizes supplied in 10 mm
                    bands.
                  </li>
                  <li>Minimum of EC Class 1.</li>
                  <li>Target bag weight: 700g</li>
                </ul>
                <p> </p>
                <p>
                  <strong>Packaging:</strong>
                </p>
                <ul>
                  <li>
                    Packed in units of 10 (changes in the use of single-use
                    plastic may affect this in due course).
                  </li>
                  <li>Clean cardboard box, free from wood and staples.</li>
                  <li>Case counts ranging from 10/25 bags.</li>
                  <li>Label: "Wash before eating."</li>
                </ul>
                <p>
                  <strong> </strong>
                </p>
                <p>
                  <strong>Temperature Control:</strong>
                </p>
                <ul>
                  <li>Prior to packaging: 0°C to 5°C.</li>
                  <li>
                    Air temperature in storage prior to dispatch: 5°C to 10°C.
                  </li>
                  <li>Air temperature during distribution: &lt;12°C.</li>
                  <li>Product core temperature on arrival: &lt;12°C.</li>
                </ul>
                <p>
                  <strong> </strong>
                </p>
                <p>
                  <strong>
                    Product Life:
                    <br />{" "}
                  </strong>
                  Day of delivery plus 5 calendar days stored at 2°C to 8°C.
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane" eventKey="information">
                <p>
                  <strong>Organoleptic Properties:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Appearance</strong>:
                    <ul>
                      <li>
                        Colour: [Specific colour description, e.g., "Bright red
                        with green undertones"]
                      </li>
                      <li>
                        Shape: [Specific shape description, e.g., "Round with a
                        slight taper at the base"]
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Taste</strong>: Free of any foreign smell and/or
                    taste.
                  </li>
                  <li>
                    <strong>Texture</strong>: Firmness not less than 5.5 kg
                    pressure, averaging 6 kilo (using 11mm probe). Tolerance:
                    25%.
                  </li>
                </ul>
                <p>&nbsp;</p>
                <p>
                  <strong>Quality Assurance:</strong>
                  <br /> All apples are coloured in accordance with the
                  requirements of the EC marketing guidance, specifically for
                  consumption in schools. Tests for quality attributes,
                  including taste and edibility, are conducted pre and
                  post-delivery using shelf life samples.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Organoleptic Quality Assurance Criteria:</strong>
                </p>
                <ul>
                  <li>Juice Content: Very Juicy</li>
                  <li>Acidity vs. Sweetness: Very sweet, over 14% Brix</li>
                  <li>Fruitiness and Aroma: Strong, fragrant</li>
                  <li>Flavours: Excellent rounded, refreshing &amp; sweet</li>
                  <li>Physical: Perfectly formed, strong structure 6-8kg</li>
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
