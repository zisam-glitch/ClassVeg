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
                <a href="assets/images/products/preview3.1.png">
                  <img
                    src="assets/images/products/preview3.1.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview3.2.png">
                  <img
                    src="assets/images/products/preview3.2.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview3.3.png">
                  <img
                    src="assets/images/products/preview3.3.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview3.4.png">
                  <img
                    src="assets/images/products/preview3.4.png"
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
                  <h2>Bananas</h2>
                </div>
                <p>Clean, fresh, and whole bananas.</p>

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
                  <br /> Clean, fresh, and whole bananas.
                </p>
                <p>
                  <strong>Compliance:</strong>
                  <br /> In accordance with the{" "}
                  <a href="https://europa.eu">
                    EC regulation for Class 1 - Commission Implementing
                    Regulation (EU) No 1333/2011 of 19 December 2011
                  </a>
                  . This regulation covers unripened bananas.
                </p>
                <p>
                  <strong>Size/Grade:</strong>
                </p>
                <ul>
                  <li>
                    Target Size: 165mm, range 150mm to 190mm. Tolerance: 5% in
                    length with a minimum grade of 30mm. Tolerance: 10%.
                  </li>
                </ul>
                <p>
                  <strong>Packaging:</strong>
                </p>
                <ul>
                  <li>
                    Packed in units of 10 in food cardboard outers allowing air
                    circulation. Changes in single-use plastic usage may affect
                    this.
                  </li>
                  <li>Minimum 14 bags per case.</li>
                  <li>Label: "Do not store in the fridge."</li>
                </ul>
                <p>
                  <strong>Temperature Control:</strong>
                </p>
                <ul>
                  <li>Prior to packaging: 13°C to 18°C.</li>
                  <li>Storage prior to dispatch: 13°C to 16°C.</li>
                  <li>
                    During distribution: 13°C to 16°C (12°C acceptable for short
                    timescales from depot to school).
                  </li>
                  <li>Product core temperature on arrival: 12°C.</li>
                </ul>
                <p>
                  <strong>Product Life:</strong>
                </p>
                <ul>
                  <li>
                    Bananas are typically consumed on Thursday. Shelf life
                    varies depending on the delivery day to the distributor,
                    with the full life being the planned consumption day plus 1.
                  </li>
                </ul>
                <ul>
                  <ul>
                    <li>
                      Sunday delivery: Colouration 2.5-3, life of delivery day
                      plus 4 days.
                    </li>
                    <li>
                      Monday delivery: Colouration 2.5-3.5, life of delivery day
                      plus 3 days.
                    </li>
                    <li>
                      Tuesday delivery: Colouration 3-4, life of delivery day
                      plus 3 days.
                    </li>
                  </ul>
                </ul>
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
                    <strong>Taste:</strong> Free from any foreign taste.
                  </li>
                  <li>
                    <strong>Texture:</strong> Free of any foreign smell and/or
                    taste.
                  </li>
                </ul>
                <p>
                  <strong>Quality Assurance:</strong>
                </p>
                <ul>
                  <li>
                    Bananas must be at colour stage 5 (yellow with a hint of
                    green) upon delivery to schools.
                  </li>
                  <li>
                    Bananas tested for quality attributes, including taste and
                    edibility, pre and post-delivery using shelf life samples.
                  </li>
                  <li>Infestation, e.g., spiders, must be minimized.</li>
                </ul>
                <p>
                  <strong>Specifications:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Colouration:</strong> (as per banana colour guide)
                  </li>
                </ul>
                <ul>
                  <ul>
                    <li>Sunday delivery: 3</li>
                    <li>Monday delivery: 3.5</li>
                    <li>Tuesday delivery: 4</li>
                  </ul>
                </ul>
                <ul>
                  <li>
                    <strong>Pulps:</strong> Pulp temperature for all deliveries:
                    Target &gt;14.5-16 °C
                  </li>
                  <li>
                    <strong>Quality/Taste:</strong> Sweet/starchy with a
                    distinct banana flavour. No defects on the interior or
                    exterior.
                  </li>
                  <li>
                    <strong>Size:</strong> Between 150mm and 190mm.
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
