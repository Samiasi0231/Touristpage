import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = () => {
  return (
    <>
      <section id="services">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div data-aos-duration="2000">
                <h4>Our Services</h4>
                <h2>Join The Adventure With Stories</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div class="row align-items-center gap-lg-3 gap-md-4 text-lg-start text-center">
                  <div class="col-md-3">
                    <div>
                      <figure>
                        <img
                          src="https://html-templates.evonicmedia.com/adventurist/assets/images/icon/services-1.svg"
                          alt="servicesIcon"
                        />
                      </figure>
                      <h6>Custom Destinations</h6>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div>
                      <figure>
                        <img
                          src="https://html-templates.evonicmedia.com/adventurist/assets/images/icon/services-3.svg"
                          alt="servicesIcon"
                        />
                      </figure>
                      <h6>Unforgettable Moments</h6>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div>
                      <figure>
                        <img
                          src="https://html-templates.evonicmedia.com/adventurist/assets/images/icon/services-2.svg"
                          alt="servicesIcon"
                        />
                      </figure>
                      <h6>Competitive Pricings</h6>
                    </div>
                  </div>
                </div>
                <div class="globalBtnActive d-flex justify-content-md-start justify-content-center mt-lg-3 mt-md-3 mt-4">
                  <ul>
                    <li>
                      <a href="https://html-templates.evonicmedia.com/adventurist/services.html">
                        See all services
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="col-md-5 mt-md-0 mt-5"
              data-aos-easing="ease-in-out-quad"
            >
              <div>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/services-img1.webp"
                    alt="service-img"
                  />
                </figure>
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/services-img2.webp"
                    alt="ser-Camera"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <section id="weDo">
          <div class="container">
            <div class="row">
              <div class="col-md-6 d-flex justify-content-center">
                <div class="weDo-video">
                  <div>
                    <a class="video-play-button" href="#">
                      <span class="fa-solid fa-play"></span>
                    </a>
                  </div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/wedo-img.webp"
                      alt="weDo"
                    />
                  </figure>
                </div>
              </div>
              <div class="col-md-6 d-flex justify-content-center align-content-center">
                <div class="weDo-content d-flex flex-column justify-content-center align-items-start">
                  <div data-aos="fade" data-aos-duration="2000">
                    <h4>What We Do</h4>
                    <h2>Exploring The World Without Limits</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                  <div class="globalBtnActive mt-3" data-aos-duration="2000">
                    <ul>
                      <li>
                        <Link to="https://html-templates.evonicmedia.com/adventurist/services.html">
                          {" "}
                          Learn More
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Service;
