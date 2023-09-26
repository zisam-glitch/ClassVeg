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
                <a href="assets/images/products/preview4.1.png">
                  <img
                    src="assets/images/products/preview4.1.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview4.2.png">
                  <img
                    src="assets/images/products/preview4.2.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview4.3.png">
                  <img
                    src="assets/images/products/preview4.3.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview4.4.png">
                  <img
                    src="assets/images/products/preview4.4.png"
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
                  <h2>Carrots </h2>
                </div>
                <p>
                  Clean, fresh, and whole vegetables. All carrot varieties,
                  including Chantenay, Nairobi, Purple Dragon, Kaleidoscope mix,
                  or equivalent, meet the requirements for the EC General
                  Marketing Standard.
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
                    <a>Vegetable</a>
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
                  <br /> Clean, fresh, and whole vegetables. All carrot
                  varieties, including Chantenay, Nairobi, Purple Dragon,
                  Kaleidoscope mix, or equivalent, meet the requirements for the
                  EC General Marketing Standard.
                </p>
                <p>
                  <strong>Compliance:</strong>
                  <br /> In accordance with the{" "}
                  <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/869242/marketing-standard-general-marketing-standard.pdf">
                    EC General Marketing Standard
                  </a>
                  .
                </p>
                <p>
                  <strong>Size/Grade:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Chantenay:</strong> Diameter 18-32 mm, length 50-120
                    mm. Weight: Min 20g, Max 80g, target 20-80g.
                  </li>
                  <li>
                    <strong>Nairobi:</strong> Diameter 18–35mm, crown diameter
                    25-40mm, length 50-150 mm. Weight: Min 35g, Max 100g, target
                    20-80g.
                  </li>
                  <li>
                    <strong>Coloured Varieties:</strong> Diameter 18–35mm, crown
                    diameter 25-40mm, length 50-150 mm. Weight: Min 35g, Max
                    100g, target 20-80g.
                  </li>
                </ul>
                <p>
                  <strong>Packaging:</strong>
                </p>
                <ul>
                  <li>
                    Packed in units of 10 in a bag. Changes in single-use
                    plastic usage may affect this.
                  </li>
                  <li>
                    Bags display "wash before eating", trace code, and use-by
                    date.
                  </li>
                  <li>Bags indicate ideal chilled storage in schools.</li>
                </ul>
                <p>
                  <strong>Temperature Control:</strong>
                </p>
                <ul>
                  <li>Storage prior to dispatch: 2-5°C.</li>
                  <li>During distribution: 2-5°C.</li>
                  <li>Product core temperature on arrival: 2-8°C.</li>
                </ul>
                <p>
                  <strong>Product Life:</strong>
                  <br /> Day of delivery plus 5 calendar days stored at 2°C to
                  5°C.
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane" eventKey="information">
                <p>
                  <strong>Organoleptic Properties:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Appearance:</strong> In line with EC General
                    Marketing Standard.
                  </li>
                  <li>
                    <strong>Colour:</strong> In line with EC General Marketing
                    Standard.
                  </li>
                  <li>
                    <strong>Shape:</strong> In line with EC General Marketing
                    Standard.
                  </li>
                  <li>
                    <strong>Taste:</strong> Free from any foreign smell or
                    taste. Crisp.
                  </li>
                  <li>
                    <strong>Texture:</strong> Characteristic for variety –
                    orange flesh juicy.
                  </li>
                </ul>
                <p>
                  <strong>Quality Assurance:</strong>
                </p>
                <ul>
                  <li>
                    All vegetables must be coloured in accordance with the UK
                    Government General Marketing Standard at the point of
                    consumption in schools.
                  </li>
                  <li>
                    Suppliers must test vegetables for quality attributes,
                    including taste and edibility, pre and post-delivery using
                    shelf life samples.
                  </li>
                </ul>
                <p>
                  <strong>Organoleptic Quality Assurance Criteria:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Decay:</strong> 1 carrot over 3 cartons by count.
                  </li>
                  <li>
                    <strong>Major Defects Progressive:</strong> Not to exceed 2%
                    by tolerance. Less than 2 carrots per carton or less than
                    0.6% by count.
                  </li>
                  <li>
                    <strong>Minor Defects Progressive:</strong> Not to exceed
                    10% by tolerance. This includes superficial bruising, shaved
                    or chipped areas, healed cuts and scratches, skin
                    marks/blemishes, and healed growth cracks.
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
