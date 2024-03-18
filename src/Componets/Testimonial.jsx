import React from "react";
import "./Testimonial.css";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
      <section id="testimonials">
        <div className="container">
          <div className="row card-text justify-content-md-between justify-content-center gap-md-0 gap-3">
            <div data-aos-duration="2000">
              <h4>Testimonials</h4>
              <h2>We're All About Your Satisfaction</h2>
            </div>
            <div className="col-md-4 col-sm-8 col-11" data-aos-delay="100">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/testimonials-1.webp"
                    alt="testimonialsImg"
                  />
                </figure>
                <h6>Raisa Barker</h6>
                <p>Tourist</p>
                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-8 col-11" data-aos-delay="500">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/testimonials-2.webp"
                    alt="testimonialsImg"
                  />
                </figure>
                <h6>Terrence Baker</h6>
                <p>Tourist</p>
                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-8 col-11" data-aos-delay="900">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/testimonials-3.webp"
                    alt="testimonialsImg"
                  />
                </figure>
                <h6>Xiong Lee</h6>
                <p>Tourist</p>
                <div className="d-flex gap-2 mt-3 mb-4 pb-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="logoipsum">
          <div className="container">
            <div>
              <div className="logoipsum-slider d-flex justify-content-between align-items-center">
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/logoipsum-1.svg"
                    alt="logoipsumImg"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/logoipsum-3.svg"
                    alt="logoipsumImg"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/logoipsum-4.svg"
                    alt="logoipsumImg"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/logoipsum-5.svg"
                    alt="logoipsumImg"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/logoipsum-4.svg"
                    alt="logoipsumImg"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/logoipsum-3.svg"
                    alt="logoipsumImg"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="planningContent text-center">
        <h3 className="text-center">
          Start Planning Your Trip Now and <span>Get 30% Discount</span>
        </h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad{" "}
          <br />
          minim veniam
        </p>
        <div className="globalBtn mt-lg-4 mt-3">
          <ul>
            <li>
              <Link to="https://html-templates.evonicmedia.com/adventurist/contact.html">
                Book Now
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
