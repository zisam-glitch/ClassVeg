import { Fragment, useState } from "react";
import Slider from "react-slick";
const CustomerReviews = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const props = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setSlideIndex((next / 2) * 100),
  };
  return (
    <Fragment>
      <div className="feedback-content-area rmb-65 wow fadeInLeft delay-0-2s">
        <div className="section-title mb-50 t-cemter">
          <span className="sub-title mb-20">Our Customers</span>
          <h2>What They Say</h2>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={50}
          style={{ backgroundSize: `${slideIndex}% 100%` }}
        >
          <span className="slider__label sr-only">50% completed</span>
        </div>

        <Slider {...props} className="feedback-active mt-20">
          <div className="feedback-item">
            <p>
              Georgia and the team at Betta veg were such a huge help when we
              opened The Blues Kitchen, they went above and beyond not only
              helping us with all our veg needs, but pulling out all the stops
              to find us dry store ingredients that no other supplier was able
              to get.
            </p>
            <div className="feedback-author">
              <img
                src="assets/images/reviews/feedback-author2.jpg"
                alt="Authro"
              />
              <div className="title">
                <h4>Tom Cajone </h4>
                <span> Executive Chef</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              Classveg are the perfect partner for our business with constantly
              changing needs. An amazing family team who have gone above and
              beyond to make sure they work in partnership with us. Ready to
              help supply all our crazy requests and always on the end of the
              phone. I am really happy to be working with Mandy, Georgia, Daisy
              and the team.
            </p>
            <div className="feedback-author">
              <img
                src="assets/images/reviews/feedback-author1.jpg"
                alt="Authro"
              />
              <div className="title">
                <h4>Marie Carter</h4>
                <span>Managing Director</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              It’s important to us that we have personal relationships with our
              suppliers, the people at Classveg are great to work with, and they
              constantly go above and beyond to ensure the produce they deliver
              is exactly what we ask for
            </p>
            <div className="feedback-author">
              <img
                src="assets/images/reviews/feedback-author3.jpg"
                alt="Authro"
              />
              <div className="title">
                <h4>Simon Martin</h4>
                <span>Chef Patron</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              I’ve used Classveg for over 10 years and have always found them
              extremely reliable, well priced and very helpful sourcing unusual
              produce for us on many occasions.Their communication is second to
              none and drivers are the best! (A bacon sarnie for them in the
              morning always helps!)
            </p>
            <div className="feedback-author">
              <img
                src="assets/images/reviews/feedback-author4.png"
                alt="Authro"
              />
              <div className="title">
                <h4>Tim Hamer </h4>
                <span>Executive Chef</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              I have been using Classveg for the past 4 years. The produce is
              second to none, with competitive prices. The office team are
              great, very helpful and Paul our delivery driver is excellent, he
              knows exactly what we want. I would highly recommend Classveg, one
              of the best suppliers I have ever used.
            </p>
            <div className="feedback-author">
              <img
                src="assets/images/reviews/feedback-author5.jpg"
                alt="Authro"
              />
              <div className="title">
                <h4>Ben Finchett </h4>
                <span>Executive Head Chef</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              I have been using Betta Veg since March 2015 when we had to source
              out a new supplier, Betta Veg stood out from the rest in pricing
              and quality. They go the extra mile to sort out issues and help in
              creating fresh new items and even helping with prepping for
              example mixed fruit salad pots. If we need items that aren’t on
              our buying list they will out source and beat other quotes from
              suppliers over all a brilliant company.
            </p>
            <div className="feedback-author">
              <img
                src="assets/images/reviews/feedback-author6.png"
                alt="Authro"
              />
              <div className="title">
                <h4>Leon Bent  </h4>
                <span>Cygnet Hospital Bury</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};
export default CustomerReviews;
