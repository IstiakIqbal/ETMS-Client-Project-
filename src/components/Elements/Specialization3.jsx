import React from "react";
import { NavLink } from "react-router-dom";

var bnr1 = require("./../../images/background/bg-6.png");

class Specialization3 extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full p-t80 p-b50 bg-dark mobile-page-padding"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <div className="container">
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="section-head m-b50 text-white text-center">
                <h3 className="m-t0">
                  Crafting your vision into reality with precision, quality, and
                  reliability.
                </h3>
                <p>
                  Company's commitment to turning client ideas into reality
                  through reliable, high-quality construction. It highlights the
                  focus on delivering projects that are not only durable but
                  also completed within the agreed timeline, ensuring customer
                  satisfaction and trust.
                </p>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6 m-b30">
                  <div className="image-effect-one hover-shadow">
                    <img src={require("../../resources/w1.jpg")} alt="" />
                    <div className="figcaption">
                      <h4>Concept and Design</h4>
                      <p>
                        Concept involves shaping ideas; design transforms them
                        into effective solutions.
                      </p>
                      <NavLink to="#">
                        <i className="link-plus bg-primary" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 m-b30">
                  <div className="image-effect-one hover-shadow">
                    <img src={require("../../resources/w2.jpg")} alt="" />
                    <div className="figcaption">
                      <h4>Refurbishment</h4>
                      <p>
                        Refurbishment involves restoring, repairing, and
                        upgrading items to improve functionality.
                      </p>
                      <NavLink to="#">
                        <i className="link-plus bg-primary" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 m-b30">
                  <div className="image-effect-one hover-shadow">
                    <img src={require("../../resources/w3.jpg")} alt="" />
                    <div className="figcaption bg-dark">
                      <h4>General Builder</h4>
                      <p>
                        General Builder provides construction, renovation, and
                        maintenance services for various projects.
                      </p>
                      <NavLink to="#">
                        <i className="link-plus bg-primary" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Specialization3;
