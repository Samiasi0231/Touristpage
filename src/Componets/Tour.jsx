import React from "react";
import "./Tour.css";
const Tour = () => {
  return (
    <>
      <section id="tour">
        <div className="container">
          <h6 className="mt-5">Tour</h6>
          <h2 className="">Live Your Life Through Travel</h2>
          <div class="d-flex flex-md-row flex-column gap-3 justify-content-between align-items-center mt-3">
            <div className="tourPara">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="globalBtnActive">
                <ul>
                  <li>
                    <a href="https://html-templates.evonicmedia.com/adventurist/destinations.html">
                      {" "}
                      View all
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
          <div className="tourCards card-text mt-5">
            <div className="row gap-4 ">
              <div className="col-md-4 col-sm-5 col-11" data-aos-delay="100">
                <div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/tour-img1.webp"
                      alt="tour-img"
                    />
                  </figure>
                  <h6>Explore beauty of Turkey</h6>
                  <p>
                    Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                    sed{" "}
                  </p>
                  <a href="#">
                    Learn More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-5 col-11" data-aos-delay="500">
                <div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/tour-img2.webp"
                      alt="tour-img"
                    />
                  </figure>
                  <h6>Explore beauty of Sweden</h6>
                  <p>
                    Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                    sed{" "}
                  </p>
                  <a href="#">
                    Learn More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-4 col-sm-5 col-11" data-aos-delay="900">
                <div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/tour-img3.webp"
                      alt="tour-img"
                    />
                  </figure>
                  <h6>Explore beauty of Indonesia</h6>
                  <p>
                    Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                    sed{" "}
                  </p>
                  <a href="#">
                    Learn More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-5 col-11" data-aos-delay="100">
                <div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/tour-img4.webp"
                      alt="tour-img"
                    />
                  </figure>
                  <h6>Explore beauty of Pakistan</h6>
                  <p>
                    Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                    sed{" "}
                  </p>
                  <a href="#">
                    Learn More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-5 col-11" data-aos-delay="500">
                <div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/tour-img5.webp"
                      alt="tour-img"
                    />
                  </figure>
                  <h6>Explore beauty of Dubai</h6>
                  <p>
                    Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                    sed{" "}
                  </p>
                  <a href="#">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-5 col-11" data-aos-delay="900">
                <div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/tour-img6.webp"
                      alt="tour-img"
                    />
                  </figure>
                  <h6>Explore beauty of Paris</h6>
                  <p>
                    Lorem ipsum dolor sit amet, sit consecte adipiscing elit,
                    sed{" "}
                  </p>
                  <a href="#">
                    Learn More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tour;
