import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-11 col-md-12 text-center">
              <div>
                <h1>EXPLORE </h1>
                <h1>THE WORLD</h1>
                <p>
                  With the rise of technology and increased connectivity,
                  tourism has become more accessible to a broader audience.
                  Online platforms facilitate travel planning, booking
                  accommodations, and discovering new destinations, making the
                  entire experience more convenient
                </p>
                <div class="globalBtn mb-4">
                  <ul>
                    <li>
                      <Link to="/">
                        {" "}
                        Discover Now
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
