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
                <a href="assets/images/products/preview6.1.png">
                  <img
                    src="assets/images/products/preview6.1.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview6.2.png">
                  <img
                    src="assets/images/products/preview6.2.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview6.3.png">
                  <img
                    src="assets/images/products/preview6.3.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview6.4.png">
                  <img
                    src="assets/images/products/preview6.4.png"
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
                  <h2>Tomatoes</h2>
                </div>
                <p>
                  Clean, fresh, and whole fruit. Preferred varieties include
                  Aranca, Brioso, Verona, and Baby Maya. Other varieties may be
                  considered upon approval. All tomatoes adhere to the EC
                  marketing standards for Tomatoes, class 1.{" "}
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
                  <br /> Clean, fresh, and whole fruit. Preferred varieties
                  include Aranca, Brioso, Verona, and Baby Maya. Other varieties
                  may be considered upon approval. All tomatoes&nbsp;&nbsp;
                  adhere to the EC marketing standards for Tomatoes, class 1.
                </p>
                <p>
                  <strong>Compliance:</strong>
                  <br /> In accordance with the{" "}
                  <a href="https://publishing.service.gov.uk">
                    EC regulation for Class 1 - Marketing standards for tomatoes
                  </a>
                  .
                </p>
                <p>
                  <strong>Size/Grade:</strong>
                </p>
                <ul>
                  <li>Diameter: 35-50mm with a tolerance of 10%.</li>
                  <li>Minimum of EC Class 1.</li>
                </ul>
                <p>
                  <strong>Packaging:</strong>
                </p>
                <ul>
                  <li>Packed in units of 10, flow-wrapped on a tray.</li>
                  <li>
                    Appropriate number of trays per outer box (e.g., 16 or 20
                    trays per outer box).
                  </li>
                  <li>Labels: "Wash before eating".</li>
                </ul>
                <p>
                  <strong>Temperature Control:</strong>
                </p>
                <ul>
                  <li>Prior to packaging: 8°C to 12°C.</li>
                  <li>Storage prior to dispatch: 5°C to 10°C.</li>
                  <li>During distribution: &lt;12°C.</li>
                  <li>Product core temperature on arrival: &lt;12°C.</li>
                </ul>
                <p>
                  <strong>Product Life:</strong>
                  <br /> Day of delivery plus 6 calendar days stored at 7°C to
                  10°C.
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane" eventKey="information">
                <p>
                  <strong>Organoleptic Properties:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Appearance:</strong> EC Marketing Standard for
                    Tomatoes Class 1.
                  </li>
                  <li>
                    <strong>Colour:</strong> EC Marketing Standard for Tomatoes
                    Class 1.
                  </li>
                  <li>
                    <strong>Shape:</strong> EC Marketing Standard for Tomatoes
                    Class 1.
                  </li>
                  <li>
                    <strong>Taste:</strong> Free from foreign smell and/or
                    taste.
                  </li>
                  <li>
                    <strong>Texture:</strong> Reasonably firm and characteristic
                    of the variety.
                  </li>
                </ul>
                <p>
                  <strong>Quality Assurance:</strong>
                </p>
                <ul>
                  <li>
                    All tomatoes coloured in accordance with the EC marketing
                    standard at the point of consumption in schools.
                  </li>
                  <li>
                    Tomatoes tested for quality attributes, including taste and
                    edibility, pre and post-delivery using shelf life samples.
                  </li>
                </ul>
                <p>
                  <strong>Organoleptic Quality Assurance Criteria:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Juice Content:</strong> Very juicy with a firm
                    texture.
                  </li>
                  <li>
                    <strong>Acidity vs. Sweetness:</strong> Very sweet with Brix
                    over 7-9%.
                  </li>
                  <li>
                    <strong>Fruitiness and Aroma:</strong> Full balanced
                    flavour, limited colour variance. Fragrant tomato aroma.
                  </li>
                  <li>
                    <strong>Off Flavours:</strong> None.
                  </li>
                  <li>
                    <strong>Physical:</strong> Good firm texture throughout
                    truss.
                  </li>
                </ul>
                <p>
                  Note: CBT – Central Bureau for the Fruit and Vegetable
                  Auctions
                </p>
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
