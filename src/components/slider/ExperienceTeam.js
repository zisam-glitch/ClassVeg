import { Component, Fragment } from "react";
import Slider from "react-slick";

export default class ExperienceTeam extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      speed: 1000,
      focusOnSelect: false,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <div className="team-header mb-35">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="section-title mb-25 text-lg-left text-center">
                <span className="sub-title mb-15">Our Team</span>
                <h2>We’re Experienced Professionals</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-right text-center">
              <div className="slider-arrows mb-25">
                <button
                  onClick={this.previous}
                  className="slick-arrow team-prev"
                >
                  <i className="fas fa-arrow-left" />
                </button>
                <button onClick={this.next} className="slick-arrow team-next">
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...settings}
          ref={(c) => (this.slider = c)}
          className="team-active"
        >
          <div className="team-member wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="assets/images/team/member1.jpg" alt="Team Member" />
            </div>
            <h4>Mandy</h4>
            <span className="designation">Managing Director</span>
            <img
              className="team-bg"
              src="assets/images/team/team-member-bg.png"
              alt="Bg"
            />
          </div>
          <div className="team-member wow fadeInUp delay-0-3s">
            <div className="image">
              <img src="assets/images/team/member2.jpg" alt="Team Member" />
            </div>
            <h4>Georgia</h4>
            <span className="designation">Operations Director</span>
            <img
              className="team-bg"
              src="assets/images/team/team-member-bg.png"
              alt="Bg"
            />
          </div>
          <div className="team-member wow fadeInUp delay-0-4s">
            <div className="image">
              <img src="assets/images/team/member3.jpg" alt="Team Member" />
            </div>
            <h4>Daisy</h4>
            <span className="designation">P/L Director</span>
            <img
              className="team-bg"
              src="assets/images/team/team-member-bg.png"
              alt="Bg"
            />
          </div>
          <div className="team-member wow fadeInUp delay-0-5s">
            <div className="image">
              <img src="assets/images/team/member4.jpg" alt="Team Member" />
            </div>
            <h4>Candice</h4>
            <span className="designation">General Manager</span>
            <img
              className="team-bg"
              src="assets/images/team/team-member-bg.png"
              alt="Bg"
            />
          </div>
          <div className="team-member wow fadeInUp delay-0-6s">
            <div className="image">
              <img src="assets/images/team/member5.jpg" alt="Team Member" />
            </div>
            <h4>Olivia</h4>
            <span className="designation">Financial Controller</span>
            <img
              className="team-bg"
              src="assets/images/team/team-member-bg.png"
              alt="Bg"
            />
          </div>
          <div className="team-member wow fadeInUp delay-0-7s">
            <div className="image">
              <img src="assets/images/team/member6.jpeg" alt="Team Member" />
            </div>
            <h4>Tracy</h4>
            <span className="designation">Admin Assistant</span>
            <img
              className="team-bg"
              src="assets/images/team/team-member-bg.png"
              alt="Bg"
            />
          </div>
          <div className="team-member wow fadeInUp delay-0-8s">
            <div className="image">
              <img src="assets/images/team/member7.jpg" alt="Team Member" />
            </div>
            <h4>Carl</h4>
            <span className="designation">Senior Buyer</span>
            <img
              className="team-bg"
              src="assets/images/team/team-member-bg.png"
              alt="Bg"
            />
          </div>
          <div className="team-member wow fadeInUp delay-0-9s">
            <div className="image">
              <img src="assets/images/team/member8.jpeg" alt="Team Member" />
            </div>
            <h4>Josh</h4>
            <span className="designation">
              Stock Controller / Assistant Buyer
            </span>
            <img
              className="team-bg"
              src="assets/images/team/team-member-bg.png"
              alt="Bg"
            />
          </div>
          <div className="team-member wow fadeInUp delay-0-10s">
            <div className="image">
              <img src="assets/images/team/member9.jpg" alt="Team Member" />
            </div>
            <h4>Eddie</h4>
            <span className="designation">Prep Manager r</span>
            <img
              className="team-bg"
              src="assets/images/team/team-member-bg.png"
              alt="Bg"
            />
          </div>
        </Slider>
      </Fragment>
    );
  }
}
