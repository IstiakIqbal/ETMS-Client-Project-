import React from "react";
import { NavLink } from "react-router-dom";

class AboutCompany extends React.Component {
  render() {
    return (
      <>
        <div className="section-full p-t80 bg-white">
          <div className="container">
            <div className="section-content ">
              <div className="m-service-containt text-black">
                <div className="row">
                  <div className="col-md-5 col-sm-12">
                    <div className="service-about-left">
                      <div className="mt-media">
                        <img
                          src={require("./../../resources/sr1.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12">
                    <div className="service-about-right m-b30">
                      <h3 className="m-t0">
                        In our work we have pride, quality is what we provide.
                      </h3>
                      <p>
                        We offer a comprehensive range of construction services
                        tailored to meet your needs. From residential and
                        commercial projects to renovations and custom builds,
                        our skilled team is dedicated to delivering high-quality
                        workmanship and exceptional results. We prioritize clear
                        communication and collaboration, ensuring your vision is
                        brought to life on time and within budget. Explore our
                        services and discover how we can turn your construction
                        dreams into reality.
                      </p>
                      <div className="call-for-quote-outer">
                        <div className="call-quote">
                          <span>Call For a Quote:</span>
                          <h4>(+88) 031-616905</h4>
                        </div>
                        <div className="call-estimate bg-dark">
                          <NavLink
                            to={"#"}
                            className="site-button-secondry btn-effect"
                          >
                            Online Estimate Form
                          </NavLink>
                        </div>
                      </div>
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

export default AboutCompany;
