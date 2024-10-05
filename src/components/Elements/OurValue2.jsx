import React from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

var img1 = require("./../../resources/v1.png");

class OurValue2 extends React.Component {
  render() {
    return (
      <>
        <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-7 col-sm-6">
                  <div className="video-section-full-v2">
                    <div
                      className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30"
                      style={{ backgroundImage: "url(" + img1 + ")" }}
                    >
                      <div className="overlay-main bg-black opacity-04" />
                      <div className="video-section-inner">
                        <div className="video-section-content">
                          <div className="video-section-left">
                            <button
                              type="button"
                              className="play-now"
                              data-toggle="modal"
                              data-target="#myModal"
                            >
                              Open Modal
                              <i className="icon fa fa-play" />
                              <span className="ripple" />
                            </button>
                          </div>
                          <div className="video-section-right">
                            <NavLink
                              to={"#"}
                              className="font-weight-600 text-uppercase"
                              onClick={this.openModal}
                            >
                              Video Presentation
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-6">
                  {/* TITLE START */}
                  <div className="video-part-2">
                    <h3>
                      <span className="font-weight-100">We will provide</span>{" "}
                      you the best work which you dreamt for!
                    </h3>
                    <p>
                      We are dedicated to providing the best services tailored
                      to your needs. Our team of experienced professionals is
                      committed to excellence, ensuring that every project is
                      completed to the highest standards. Your satisfaction is
                      our priority, and we strive to exceed your expectations
                      every step of the way.
                    </p>
                    <ul className="list-angle-right anchor-line">
                      <li>
                        <NavLink to={"/services"}>
                          Construction Management
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/services"}>
                          Pre Construction Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/services"}>
                          Contract Administration
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  {/* TITLE END */}
                  <div className="author-info author-info-v2 p-t20">
                    <div className="author-signature">
                      <img
                        src={require("./../../images/Signature+Black.png")}
                        alt="Signature"
                        width={150}
                      />
                    </div>
                    <div className="author-name">
                      <h4 className="m-t0">Nurul Hoque Chowdhury</h4>
                      <p>Chairman</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <ReactPlayer url="https://www.youtube.com/watch?v=YKtMErhDpm0" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OurValue2;
