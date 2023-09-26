import Link from "next/link";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import PageBanner from "../src/components/PageBanner";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
const About = () => {
  return (
    <Layout header={1}>
      <PageBanner pageName={"about us"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section rel z-1 py-130 rpy-100 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <h2>The Mission and Story behind Classveg</h2>
                </div>
                <p className="fz-20">
                  Classveg was set up in 2002 by our Managing Director, Mandy.
                  Mandy has been in the fresh produce sector all of her life,
                  following in the footsteps of her Dad, Lawrence Liptrott, a
                  leading light in the industry.
                  <br />
                  <br />
                  From a small team of 3 , we now have a team of 30+ staff and a
                  fleet of vans delivering to a multitude of clients over the
                  North West; ranging from schools & universities, to
                  restaurants & hotels, to football clubs & catering companies.
                  We cater for all!
                </p>
                <ul className="list-style-two pt-10">
                  <li>20+ Years Experience</li>
                  <li>100's Happy Customers</li>
                  <li>1000+ Quality Products</li>
                </ul>
                <div className="slider-btns mt-30">
                 
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page-left.jpg"
                  alt="About"
                />

                <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/about-page.png"
          alt="Shape"
          className="shape"
        />
      </section>
      {/* About Section End */}
      <section className="team-profile rel z-1 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-profile-image pr-80 rmb-65 wow fadeInLeft delay-0-2s">
                <img src="assets/images/team/team-profile.jpeg" alt="Profile" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-profile-content wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Our Story</span>
                  <h2>Family Run Business</h2>
                </div>
                <p className="fz-20">
                  We maintain the personal, caring touch any family business
                  should have, yet we now have the capacity to handle anything
                  that comes our way. We were proud to be recognised with the
                  ‘Best Fresh Produce Supplier in England’ award and we also
                  have the highest level of BRC accreditation with an AA grade.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="team-profile-bg"
          src="assets/images/team/team-profile-bg.png"
          alt="bg"
        />
      </section>

      {/* Features Section End */}
      {/* About Section Start */}
      <section className="about-page-section rel z-1 pb-130 rpb-100 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <p className="fz-20">
                  Primarily, we supply fresh fruit and veg, including prepared
                  fruit, vegetables and juices, which are all made to order in
                  house, allowing us to meet exact customer specifications.
                  However, as we have grown we have dramatically expanded our
                  product range to include an abundance of dry and luxury dry
                  goods, breads, dairy & more. We now like to consider ourselves
                  a one stop shop for our customers!
                  <br />
                  <br />
                  We offer weekly and monthly specials and a buyers' report to
                  ensure our customers are kept up-to-date about produce,
                  whether sourced locally or from our suppliers across the
                  globe. We have total confidence in both our product and
                  service. For us, quality & service is prioritised over price,
                  as so eloquently put by Sir Henry Royce, ‘The quality is
                  remembered long after the price is forgotten’.
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-left2.jpg"
                  alt="About"
                />

                <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/about-page.png"
          alt="Shape"
          className="shape"
        />
      </section>
      {/* About Section End */}
      {/* Gallery Area Start */}

      {/* Gallery Area End */}
      {/* Team Area Start */}
      <section className="team-area pt-50 rpt-20 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section>
      {/* Team Area End */}
      {/* About Section Start */}
      <section className="about-section-two rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-three.png"
                  alt="About"
                />
                <img
                  className="about-over"
                  src="assets/images/about/about-left-over.png"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Sustainability</span>
                  <h2>Our Pledge To Stay Green</h2>
                </div>
                <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                  <p className="fz-20">
                    In times of concern about the impact of plastics on the
                    environment, we have made sustainable and impactful
                    packaging choices, and now use alternatives to plastic. For
                    example, potato starch is a biodegradable material which
                    will decompose naturally. <br />
                    <br />
                    Using this in place of plastic eliminates the spread of
                    toxins and subsequent threats to wildlife. In order to
                    further reduce our carbon footprint, we have introduced a
                    minimum order value of £50.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <img src="assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>
      <section className="gallery-area rpt-100 pt-200">
        <PhotoGallery noHeader />
      </section>
      {/* About Section End */}
      {/* Feedback Section Start */}
      <section className="feedback-section pb-130 rpb-100 pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-12">
              <CustomerReviews />
            </div>
          </div>
        </div>
      </section>
      {/* Feedback Section End */}
    </Layout>
  );
};
export default About;
