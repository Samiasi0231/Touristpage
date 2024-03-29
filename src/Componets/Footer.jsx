import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div>
              <h4>Quick Links</h4>
              <div class="footer-links d-flex flex-column">
                <Link to="index.html">Home</Link>
                <Link to="https://html-templates.evonicmedia.com/adventurist/about.html">
                  About
                </Link>
                <Link to="https://html-templates.evonicmedia.com/adventurist/destinations.html">
                  Destination
                </Link>
                <Link to="https://html-templates.evonicmedia.com/adventurist/contact.html">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div>
              <h4>Contact Info</h4>
              <div class="address">
                <div>
                  <i class="fa-solid fa-house"></i>
                  <p>Plaza X , XY Floor, Street, XYZ</p>
                </div>
                <div>
                  <i class="fa-solid fa-envelope"></i>
                  <p>Yourname@Email.Com</p>
                </div>
                <div>
                  <i class="fa-solid fa-phone"></i>
                  <p>+123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-md-5">
            <div class="reservation">
              <h4>Make A Reservation</h4>
              <p>
                Our Support & Sales team is available 24/7 to answer your
                queries
              </p>
              <div class="globalBtn justify-content-start mt-lg-4 mt-4 ">
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
          </div>
          <hr />
          <div class="row sub-footer justify-content-between align-items-center">
            <div class="col-md-5">
              <figure>
                <Link to="#">
                  <img
                    src="https://html-templates.evonicmedia.com/adventurist/assets/images/logo.svg"
                    alt="footerLogo"
                  />
                </Link>
              </figure>
            </div>
            <div class="col-md-6">
              <div>
                <p>
                  Copyright © 2023 Adventurist By Evonicmedia. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
