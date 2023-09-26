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
                <a href="assets/images/products/preview7.1.png">
                  <img
                    src="assets/images/products/preview7.1.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview7.2.png">
                  <img
                    src="assets/images/products/preview7.2.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview7.3.png">
                  <img
                    src="assets/images/products/preview7.3.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview7.4.png">
                  <img
                    src="assets/images/products/preview7.4.png"
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
                  <h2>Raisins/ Dried Grapes</h2>
                </div>
                <p>
                  Clean, dried, and whole fruit. Suitable varieties include
                  sultana and/or Thompson seedless grapes.
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
                  <br /> Clean, dried, and whole fruit. Suitable varieties
                  include sultana and/or Thompson seedless grapes.
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
                  <strong>Organoleptic Properties:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Appearance:</strong> Mix of fruit with a bright
                    sheen on the berries.
                  </li>
                  <li>
                    <strong>Flavour:</strong> Very sweet with a hint of caramel.
                  </li>
                  <li>
                    <strong>Texture:</strong> Soft and yielding to the bite.
                  </li>
                  <li>
                    <strong>Size:</strong> 50-70 berries per 25g.
                  </li>
                </ul>
                <p>
                  <strong>Allergen Information:</strong>
                  <br /> Full allergen information will be provided upon tender
                  submission. Please confirm if the product is free from:
                </p>
                <ul>
                  <li>Peanuts</li>
                  <li>Nuts</li>
                  <li>Sesame and sesame products</li>
                  <li>Wheat and wheat products</li>
                  <li>Cereals containing gluten (&gt;20mg/kg)</li>
                  <li>Mustard and mustard products</li>
                  <li>Celery/Celeriac and related products</li>
                  <li>Eggs</li>
                  <li>Fish</li>
                  <li>Crustaceans and related products</li>
                  <li>Milk</li>
                  <li>Soybeans and soybean products</li>
                  <li>Lupin</li>
                  <li>Sulphites</li>
                </ul>
              </Tab.Pane>
              <Tab.Pane className="tab-pane" eventKey="information">
                <div>
                  &nbsp;
                  <p>
                    <strong>Size/Grade:</strong>
                  </p>
                  <ul>
                    <li>Berry Size: 175-350 berries per 100g.</li>
                    <li>Stalks (&gt;4mm): Zero.</li>
                    <li>Capstems (&lt;3mm): 2%.</li>
                  </ul>
                  <p>
                    <strong>Packaging:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Primary:</strong> Individual bags or boxes for the
                      raisins made of plastic laminate film with full
                      traceability code.
                    </li>
                    <li>
                      <strong>Secondary:</strong> Bags/box of 30 individual bags
                      made of clear plastic film or cardboard outer.
                    </li>
                    <li>
                      <strong>Tertiary:</strong> Cardboard carton (when a bag
                      has been used for secondary) with a label.
                    </li>
                    <li>
                      Packed in units of 10. Changes in single-use plastic usage
                      may affect this.
                    </li>
                  </ul>
                  <p>
                    <strong>Temperature Control:</strong>
                    <br /> All stages (pre-packaging, storage, distribution, and
                    product core temperature on arrival) are at ambient
                    temperature.
                  </p>
                  <p>
                    <strong>Product Life:</strong>
                    <br /> 9 calendar months from the date of delivery.
                  </p>
                </div>
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
