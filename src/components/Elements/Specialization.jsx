import React from "react";
import { NavLink } from "react-router-dom";

var bnr1 = require("./../../images/background/bg-5.png");

class Specialization extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <div className="container">
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                  <div className="image-effect-one hover-shadow">
                    <img src={require("../../resources/suraiya/sn-4.png")} alt="" />
                    <div className="figcaption">
                      <h4>Construction</h4>
                      <p>Engineering your dreams with us.</p>
                      <NavLink to="/project-detail">
                        <i className="link-plus bg-primary" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-6 m-b30">
                  <div className="mt-box our-speciallization-content">
                    <h3 className="m-t0">
                      <span className="font-weight-100">Project</span> <br />
                      Suriaya Naser
                    </h3>
                    <p>
                      Suriaya Naser features spacious, beautifully designed
                      apartments ranging from 1300 to 1550 square feet, catering
                      to those who seek elegance, comfort, and functionality in
                      their home. With a focus on green architecture and
                      eco-friendly solutions, the project embraces a sustainable
                      approach to urban living, incorporating features such as a
                      rooftop garden and solar power systems to reduce energy
                      consumption and promote a healthier lifestyle.
                    </p>
                    <NavLink
                      to="/project-detail"
                      className="site-button btn-effect"
                    >
                      View More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
            <strong>Suriaya Naser</strong>
          </div>
        </div>
      </>
    );
  }
}

export default Specialization;
