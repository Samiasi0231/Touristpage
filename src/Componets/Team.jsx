import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = () => {
  return (
    <>
      <section id="team">
        <div className="container">
          <div data-aos-duration="2000">
            <h4>Our Team</h4>
            <h2>Experience The World With Us</h2>
          </div>
          <div className="row justify-content-md-between justify-content-center gap-md-0 gap-4">
            <div className=" col-md-4 col-sm-8 col-10" data-aos-delay="100">
              <div className="teamCard">
                <img
                  src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/team-img1.webp"
                  alt="teamimg"
                />
                <div className="overlaythree">
                  <div className="overlay_text">
                    <div className="d-flex justify-content-center gap-2">
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h6>James Bowel</h6>
                <p>Tour Guide</p>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-8 col-10"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="teamCard">
                <img
                  src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/team-img2.webp"
                  alt="teamimg"
                />
                <div className="overlaythree">
                  <div className="overlay_text">
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h6>Lucy Amanda</h6>
                <p>Tour Guide</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-8 col-10" data-aos-delay="900">
              <div class="teamCard">
                <img
                  src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/team-img3.webp"
                  alt="teamimg"
                />
                <div class="overlaythree">
                  <div class="overlay_text">
                    <div class="d-flex justify-content-center gap-2">
                      <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa-brands fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h6>Victoria Bells</h6>
                <p>Tour Guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
