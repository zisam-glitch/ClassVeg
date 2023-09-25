import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import PhotoGallery from "../src/components/slider/PhotoGallery";

const About = () => {
  return (
    <Layout header={1}>
      <PageBanner pageName={"CURRENT VACANCIES"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="py-130 rpy-100">
        <div className="offer-banners-area">
          <div className="row">
            <div className="col-xl-6">
              <div className="card p-40">
                <h3>Food Preparation Manager</h3>
                <p>
                  We are on the look-out for a capable and enthusiastic manager
                  to lead, inspire and grow our fruit and vegetable prep
                  facility located in Manchester
                </p>
                <h4 className="job-des pt-20">job description</h4>
                <div className="hrs pt-20">
                  <h5>Hours</h5>
                  <ul>
                    <li>Sunday – Friday 6 days</li>
                    <li>
                      17.00 – Finish (Finish varies but this will be discussed
                      in interview)
                    </li>
                  </ul>
                </div>
                <div className="hrs pt-30">
                  <h5>
                    In exchange for your passion and commitment you will
                    receive:
                  </h5>
                  <ul>
                    <li>Competitive salary - £25,000 - £35,000 per year</li>
                    <li>32 days holiday.</li>
                    <li>Pension scheme</li>
                    <li>Free weekly wrap up.</li>
                  </ul>
                </div>
                <div className="hrs pt-30">
                  <h5>Responsibilities:</h5>
                  <ul>
                    <li>
                      Responsible for ensuring the smooth running of all daily
                      operations of the preparation unit.
                    </li>
                    <li>Driving productivity and daily production.</li>
                    <li>Developing & costing new products.</li>
                    <li>To champion the quality of fresh prep product.</li>
                    <li>
                      To champion a clean and organised working environment.
                    </li>
                    <li>
                      Working closely with senior management to improve the
                      department.
                    </li>
                    <li>
                      To develop, train and coach your team through appraisal
                      and learning and development.
                    </li>
                    <li>
                      To bring fun to the workplace and ensure a happy,
                      motivated and focused team.
                    </li>
                    <li>
                      To manage the store rotas effectively to deliver target
                      wage costs.
                    </li>
                    <li>To complete daily paperwork to a high standard.</li>
                    <li>
                      To maintain a safe and tidy workplace across the facility.
                    </li>
                  </ul>
                </div>
                <div className="hrs pt-30">
                  <h5>Hours</h5>
                  <p>
                    Our prep room prepares fresh produce to reduce time & waste
                    in or customer's kitchens. We peel, dice, slice, baton,
                    chip, 1/4 & much more a wide range of products.
                    <br />
                    <br />
                    As the Prep Room Manager you will be responsible for running
                    the prep room taking full ownership, ensuring excellent
                    quality product is provided at all times for our growing
                    customer base. You will need to be confident and have
                    experience in managing a team. You will act as a role model
                    for developing, training and coaching through performance.
                    You will be able to write and manage rotas, controlling
                    labour costs, costing new products and Salsa paperwork as
                    well as monitor stock levels ensuring minimum waste and
                    maximise efficiency. ‍
                    <br />
                    <br />
                    <br />
                    To apply please email your CV & covering letter to
                    georgia@bettaveg.co.uk.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card p-40">
                <h3>Multi Drop Delivery Driver</h3>
                <p>
                  EARLY START JOB - Starting at 2am 5 days a week Monday -
                  Saturday.
                </p>
                <h4 className="job-des pt-20">job description</h4>
                <div className="hrs pt-20">
                  <h5>Day off rotation.</h5>
                </div>

                <p>
                  Bettaveg are a family owned fresh produce supplier to the
                  hospitality sector, serving restaurants, hotels, event
                  centers, schools, hospitals etc.
                  <br /> <br />
                  Duties include picking, loading and delivering to customers
                  within a 70 mile radius. Customer orders must be picked to the
                  best quality and correct quantity so attention to detail is
                  vital.
                  <br /> <br />
                  The drivers are responsible for filling in daily paperwork
                  relevant to our accreditation. The perfect candidate will need
                  to be a quick learner and work at a fast pace to ensure the
                  vans are out on time to reach the customers at the allotted
                  time.
                  <br /> <br />
                  A positive attitude and good worth ethic are essential to
                  carry out this role.
                  <br /> <br />
                  Employees are welcome to have a free wrap up of food every
                  week.
                  <br /> <br />
                  You MUST have excellent customer service skills and be able to
                  work on your own without supervision.
                  <br /> <br />
                  You MUST have previous experience within the food
                  service/hospitality industry.
                  <br /> <br />
                  You MUST be able to speak and understand English.
                  <br /> <br />
                  There is scope for progression within this role & the wider
                  business in general for the right person.
                  <br /> <br />
                  Job Types: Full-time, Permanent
                  <br /> <br />
                  Salary: £480.00-£550.00 per week ‍ To apply please contact us
                  on 0161 2318244.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-area pt-80 rpt-80 pb-130 rpb-80">
        <PhotoGallery />
      </section>
    </Layout>
  );
};
export default About;
