import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="blueBg"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9">
              <form
                id="about-form"
                className="d-flex gap-lg-2 gap-md-1 gap-sm-4 gap-3 justify-content-evenly align-items-md-center"
              >
                <div id="about-message"></div>
                <div>
                  <h6>Name</h6>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <h6>Destination</h6>
                  <select name="country" id="destination">
                    <option value="destination" selected disabled>
                      Destination
                    </option>
                    <option value="turkey">Turkey</option>
                    <option value="sweden">Sweden</option>
                    <option value="indonesia">Indonesia</option>
                  </select>
                </div>
                <div>
                  <h6>Tour Days</h6>
                  <input type="date" name="name" required />
                </div>
                <div className="globalBtn">
                  <ul>
                    <li>
                      <button type="submit">
                        Book Now
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </li>
                  </ul>
                </div>
              </form>
              <div className="col-lg-10 col-md-9">
                <div>
                  <h4>About Us</h4>
                  <h2>With Us, You Are Always In For A Pleasant Surprise</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="globalBtnActive justify-content-md-start justify-content-center mt-4">
                    <ul>
                      <li>
                        <Link to="https://html-templates.evonicmedia.com/adventurist/about.html" />{" "}
                        Learn More
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className="fa-solid fa-arrow-right"></i>
                        <link />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-9 col-12 about-Image">
              <div className="aboutImg position-relative">
                <figure>
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/about-img.webp"
                    alt="about-sec"
                  />
                </figure>
                <div className="customer d-flex flex-column justify-content-between align-items-center">
                  <div className="d-flex">
                    <h2 className="count">25 </h2>
                    <h2>K+</h2>
                  </div>
                  <p>Happy Customers</p>
                </div>
                <div
                  className="experience d-flex flex-column justify-content-between align-items-center"
                  data-aos="fade-up"
                >
                  <div className="d-flex">
                    <h2 className="count">15</h2>
                    <h2>+</h2>
                  </div>
                  <p>Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
