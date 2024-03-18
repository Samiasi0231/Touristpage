import React from "react";

const Faq = () => {
  return (
    <>
      <section id="faq">
        <div className="container bg-white">
          <div className="faq-section">
            <div>
              <h4>FAQ</h4>
              <h2>Have Answers, Will Travel.</h2>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h6 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How many people will be on my trip?
                  </button>
                </h6>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. In vitae turpis massa sed elementum tempus egestas
                      sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                      nunc aliquet bibendum enim facilisis gravida
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h6 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do you offer discount on family bookings?
                  </button>
                </h6>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. In vitae turpis massa sed elementum tempus egestas
                      sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                      nunc aliquet bibendum enim facilisis gravida
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h6 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are your Most Booked Destinations?
                  </button>
                </h6>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. In vitae turpis massa sed elementum tempus egestas
                      sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                      nunc aliquet bibendum enim facilisis gravida
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h6 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What is your refund policy?
                  </button>
                </h6>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. In vitae turpis massa sed elementum tempus egestas
                      sed. Diam in arcu cursus euismod. Dolor sed viverra ipsum
                      nunc aliquet bibendum enim facilisis gravida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
