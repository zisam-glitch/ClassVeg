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
                <a href="assets/images/products/preview5.1.png">
                  <img
                    src="assets/images/products/preview5.1.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview5.2.png">
                  <img
                    src="assets/images/products/preview5.2.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview5.3.png">
                  <img
                    src="assets/images/products/preview5.3.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview5.4.png">
                  <img
                    src="assets/images/products/preview5.4.png"
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
                  <h2>Sugar Snap Peas</h2>
                </div>
                <p>
                  Clean, fresh, and whole vegetables. Specifically of the Pisum
                  sativum L variety and other stringless varieties. All peas
                  comply with the EC General Marketing Standard for Peas
                  intended for consumption within their pods.
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
                  <br /> Clean, fresh, and whole vegetables. Specifically of the
                  Pisum sativum L variety and other stringless varieties. All
                  peas comply with the EC General Marketing Standard for Peas
                  intended for consumption within their pods.
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
                  <strong>Packaging:</strong>
                </p>
                <ul>
                  <li>Bagged in portions of 3 sugar snaps.</li>
                  <li>Packed in units of 10 portions.</li>
                  <li>Changes in single-use plastic usage may affect this.</li>
                  <li>
                    Labels: "Wash before eating" and "Refrigerate if not eaten
                    immediately".
                  </li>
                </ul>
                <p>
                  <strong>Temperature Control:</strong>
                </p>
                <ul>
                  <li>Prior to packaging: 0°C to 10°C.</li>
                  <li>Storage prior to dispatch: 0°C to 10°C.</li>
                  <li>During distribution: &lt;8°C.</li>
                  <li>Product core temperature on arrival: &lt;8°C.</li>
                </ul>
                <p>
                  <strong>Product Life:</strong>
                  <br /> Day of delivery plus 3 calendar days at approximately
                  5°C and 2 days at ambient temperature.
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
                    <strong>Taste:</strong> Typical of Sugar Snap, sweet with no
                    bitter aftertaste.
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
                    Peas tested for quality attributes, including taste and
                    edibility, pre and post-delivery using shelf life samples.
                  </li>
                </ul>
                <p>
                  <strong>Organoleptic Quality Assurance Criteria:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Appearance:</strong> Bruise and spot-free.
                  </li>
                  <li>
                    <strong>Flavour:</strong> Sweet and fresh tasting with a
                    characteristic sugar snap flavour.
                  </li>
                  <li>
                    <strong>Physical:</strong> Very crispy, crunchy, and juicy.
                  </li>
                  <li>
                    <strong>Size:</strong> All pods within size parameters.
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
