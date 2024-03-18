import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div data-aos-duration="2000">
            <h4>Our Blogs</h4>
            <h2>Timeless Adventures Await with Timeless Stories.</h2>
          </div>
          <div className="blogCards mt-lg-5 mt-md-4">
            <div className="row gap-4 justify-content-center card-text">
              <div className="col-md-4 col-sm-9 col-11" data-aos-delay="100">
                <div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/blog-1.webp"
                      alt="tour-img"
                    />
                  </figure>
                  <Link to="#">
                    <p className="blogCategory">Traveller</p>
                  </Link>
                  <Link to="#">
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                  </Link>
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                    Dolore Magna Aliqua….{" "}
                  </p>
                  <Link to="#">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-9 col-11" data-aos-delay="500">
                <div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/blog-2.webp"
                      alt="tour-img"
                    />
                  </figure>
                  <Link to="#">
                    <p className="blogCategory">Vacation</p>
                  </Link>
                  <Link to="#">
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                  </Link>
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                    Dolore Magna Aliqua….
                  </p>
                  <Link to="#">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-9 col-11" data-aos-delay="900">
                <div>
                  <figure>
                    <img
                      src="https://html-templates.evonicmedia.com/adventurist/assets/images/index/blog-3.webp"
                      alt="tour-img"
                    />
                  </figure>
                  <Link to="#">
                    <p className="blogCategory">Boating</p>
                  </Link>
                  <Link to="#">
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                  </Link>
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                    Dolore Magna Aliqua….
                  </p>
                  <Link to="#">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter">
        <div className="container">
          <div data-aos-duration="2000">
            <h4>Newsletter</h4>
            <h2>Stay In The Know, Without Having To Do Anything</h2>
          </div>
          <div className="row justify-content-between" data-aos-duration="2000">
            <div className="col-md-5">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="d-md-flex justify-content-lg-end justify-content-md-end justify-content-center">
                <form id="newsletter-form">
                  <div id="newsletter-message"></div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                    required
                  />
                  <div className="globalBtnActive">
                    <ul>
                      <li>
                        <button type="submit">
                          Subscribe
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
