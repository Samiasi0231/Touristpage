import React from "react";
import { Link } from "react-router-dom";

const Testing = () => {
  return (
    <>
      <header>
        <nav className="navbar container navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand position-relative p-0" href="index.html">
              <img
                src="https://html-templates.evonicmedia.com/adventurist/assets/images/logo.svg"
                alt="logo"
              />
            </a>
            <button className="navbar-toggler" id="sidebarEvent" type="button">
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav position-relative ms-auto mx-4 mb-2 mb-lg-0 d-flex gap-4 justify-content-center align-items-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item position-relative">
                  <a
                    className="nav-link"
                    href="https://html-templates.evonicmedia.com/adventurist/about.html"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://html-templates.evonicmedia.com/adventurist/blog.html"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://html-templates.evonicmedia.com/adventurist/contact.html"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://html-templates.evonicmedia.com/adventurist/services.html"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://html-templates.evonicmedia.com/adventurist/destinations.html"
                      >
                        Destinations
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://html-templates.evonicmedia.com/adventurist/testimonials.html"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://html-templates.evonicmedia.com/adventurist/faq.html"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://html-templates.evonicmedia.com/adventurist/team.html"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://html-templates.evonicmedia.com/adventurist/404.html"
                      >
                        404
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://html-templates.evonicmedia.com/adventurist/comingsoon.html"
                      >
                        Coming Soon
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="globalBtn">
                <ul>
                  <li>
                    <a href="https://html-templates.evonicmedia.com/adventurist/contact.html">
                      Book Now
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <hr />
        <aside>
          <div className="sidebar">
            <div className="d-flex justify-content-between align-items-center">
              <a href="index.html">
                <img
                  src="https://html-templates.evonicmedia.com/adventurist/assets/images/sidebarLogo.png"
                  alt="logo"
                />
              </a>
              <button
                type="button"
                id="closeBtn"
                className="btn-close"
              ></button>
            </div>
            <ul className="nav-links text-lg-start">
              <li>
                <a href="index.html" className="active">
                  {" "}
                  Home
                </a>
              </li>
              <li>
                <a href="https://html-templates.evonicmedia.com/adventurist/about.html">
                  About
                </a>
              </li>
              <li>
                <a href="https://html-templates.evonicmedia.com/adventurist/blog.html">
                  Blog{" "}
                </a>
              </li>
              <li>
                <a href="https://html-templates.evonicmedia.com/adventurist/contact.html">
                  Contact{" "}
                </a>
              </li>
            </ul>
            <div className="more">
              <a href="#">Pages</a>
              <a
                className="btn btn-outline-primary"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i className="fa-solid fa-plus"></i>
              </a>
            </div>
            <div className="collapse mt-2" id="collapseExample">
              <div className="card card-body">
                <a href="https://html-templates.evonicmedia.com/adventurist/services.html">
                  Services
                </a>
                <a href="https://html-templates.evonicmedia.com/adventurist/destinations.html">
                  Destinations
                </a>
                <a href="https://html-templates.evonicmedia.com/adventurist/testimonials.html">
                  Testimonials
                </a>
                <a href="https://html-templates.evonicmedia.com/adventurist/faq.html">
                  FAQ
                </a>
                <a href="https://html-templates.evonicmedia.com/adventurist/team.html">
                  Team
                </a>
                <a href="https://html-templates.evonicmedia.com/adventurist/404.html">
                  404
                </a>
                <a href="https://html-templates.evonicmedia.com/adventurist/comingsoon.html">
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </aside>
      </header>
    </>
  );
};

export default Testing;
