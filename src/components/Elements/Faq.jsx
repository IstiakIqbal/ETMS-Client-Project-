import React from "react";
import { NavLink } from "react-router-dom";

class Faq extends React.Component {
  render() {
    return (
      <>
        <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
          <div className="container">
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  {/* TITLE START */}
                  <div className="section-head">
                    <div className="mt-separator-outer separator-left">
                      <div className="mt-separator">
                        <h2 className="text-uppercase sep-line-one ">
                          <span className="font-weight-300 text-primary">
                            Some
                          </span>{" "}
                          FAQ
                        </h2>
                      </div>
                    </div>
                  </div>
                  {/* TITLE END */}
                  <div className="section-content p-b30">
                    <div className="mt-accordion acc-bg-gray" id="accordion5">
                      <div className="panel mt-panel">
                        <div className="acod-head acc-actives">
                          <h6 className="acod-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseOne5"
                              data-parent="#accordion5"
                            >
                              1. What types of projects do you handle?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapseOne5"
                          className="acod-body collapse in"
                        >
                          <div className="acod-content p-tb15">
                            <p>
                              {" "}
                              We specialize in a wide range of construction
                              projects, including residential, commercial, and
                              industrial builds. Whether you need new
                              construction, renovations, or remodeling, we have
                              the expertise to meet your needs.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel mt-panel">
                        <div className="acod-head">
                          <h6 className="acod-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseTwo5"
                              className="collapsed"
                              data-parent="#accordion5"
                            >
                              2. How long will my project take to complete?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTwo5" className="acod-body collapse">
                          <div className="acod-content p-tb15">
                            Project timelines vary depending on the size and
                            scope of the work. Once we understand your
                            requirements, we provide a detailed timeline and
                            strive to complete projects on schedule while
                            maintaining the highest standards of quality.
                          </div>
                        </div>
                      </div>
                      <div className="panel mt-panel">
                        <div className="acod-head">
                          <h6 className="acod-title">
                            <a
                              data-toggle="collapse"
                              href="#collapseThree5"
                              className="collapsed"
                              data-parent="#accordion5"
                            >
                              3. Do you offer warranties on your work?
                              <span className="indicator">
                                <i className="fa" />
                              </span>
                            </a>
                          </h6>
                        </div>
                        <div id="collapseThree5" className="acod-body collapse">
                          <div className="acod-content p-tb15">
                            TYes, we stand behind the quality of our work and
                            offer warranties for both materials and labor. The
                            length and coverage of the warranty depend on the
                            project, and we'll provide all details upfront to
                            ensure your peace of mind.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  {/* TITLE START */}
                  <div className="section-head">
                    <div className="mt-separator-outer separator-left">
                      <div className="mt-separator">
                        <h2 className="text-uppercase sep-line-one ">
                          <span className="font-weight-300 text-primary">
                            Our
                          </span>{" "}
                          Solution
                        </h2>
                      </div>
                    </div>
                  </div>
                  {/* TITLE END */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-gray center">
                        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                          <span className="icon-cell text-primary">
                            <i className="flaticon-sketch" />
                          </span>
                        </div>
                        <div className="icon-content text-black">
                          <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">
                            Assistance
                          </h4>
                          <p>
                            Providing expert guidance and support throughout
                            your entire construction project.
                          </p>
                          <NavLink
                            to="/about"
                            className="site-button-link"
                            data-hover="Read More"
                          >
                            Read More{" "}
                            <i className="fa fa-angle-right arrow-animation" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-dark center">
                        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                          <span className="icon-cell text-primary">
                            <i className="flaticon-ui" />
                          </span>
                        </div>
                        <div className="icon-content text-white">
                          <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">
                            Financing
                          </h4>
                          <p>
                            Flexible financing options available to make your
                            construction project achievable.
                          </p>
                          <NavLink
                            to="/about"
                            className="site-button-link yellow"
                            data-hover="Read More"
                          >
                            Read More{" "}
                            <i className="fa fa-angle-right arrow-animation" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ */}
        </div>
      </>
    );
  }
}

export default Faq;
