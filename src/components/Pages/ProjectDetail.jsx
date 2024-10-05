import React from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import Banner from "./../Elements/Banner";

var bnrimg = require("./../../resources/projects-detail-banner.png");

class ProjectDetail extends React.Component {
  render() {
    return (
      <>
        <div className="page-content">
          <Banner
            title="Helping you and your house become better acquainted."
            pagename="Project Detail"
            bgimage={bnrimg}
          />

          {/* SECTION CONTENT START */}
          <div className="section-full p-tb80 inner-page-padding">
            <div className="container">
              <div className="project-detail-outer">
                <div className="m-b0">
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <div className="project-detail-pic m-b30">
                        <div className="mt-media">
                          <img
                            src={require("./../../resources/suraiya/Babor Bhai 3d Up III (000.jpg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="project-detail-pic m-b30">
                        <div className="mt-media">
                          <img
                            src={require("./../../resources/suraiya/DALE-1.jpg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="project-detail-pic m-b30">
                        <div className="mt-media">
                          <img
                            src={require("./../../resources/suraiya/Babor Bhai UP III (1)zz.jpg")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-b30">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="product-block">
                        <div className="row">

                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              Project Name
                            </h4>
                            <p>ETMS Suriaya Naser</p>
                          </div>
                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              Project type
                            </h4>
                            <p>
                              2 Basement + 15 Storied Residential Building
                              Apartment sizes ranging from 1300 sqft to 1550
                              sqft.
                            </p>
                          </div>
                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              Location
                            </h4>
                            <p>31, satish babu lane, kotowali, Chattogram</p>
                          </div>
                          <div className="col-md-12 m-b10">
                            <h4 className="text-uppercase font-weight-600 m-b10">
                              Project Started
                            </h4>
                            <p>2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="mt-box">
                        <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                          <img
                            src="http://i3.ytimg.com/vi/s3A7AK1K2hc/maxresdefault.jpg"
                            alt=""
                          />
                          <button
                            type="button"
                            className="play-now"
                            data-toggle="modal"
                            data-target="#myModal3"
                          >
                            <i className="icon fa fa-play" />
                            <span className="ripple" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <div className="project-detail-pic m-b30">
                      <div className="mt-media">
                        <img
                          src={require("./../../resources/suraiya/DALE-4.jpeg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="project-detail-pic m-b30">
                      <div className="mt-media">
                        <img
                          src={require("./../../resources/suraiya/DALE-2.jpeg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="project-detail-pic m-b30">
                      <div className="mt-media">
                        <img
                          src={require("./../../resources/suraiya/DALE-3.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-detail-containt">
                  <div className="bg-white text-black">
                    <h3 className="font-weight-600">
                      Live in the Heart of the City - Your Entrance to Grandeur
                    </h3>
                    <p>
                      {" "}
                      At ETMS, we are proud to introduce our latest flagship
                      project, Suriaya Naser, a remarkable residential
                      development that sets new standards for luxury living in
                      Chattogram. Nestled in the historic and culturally rich
                      Satish Babu Lane, Kotowali, this modern Semi Basement +
                      13-storied residential building offers a prime location
                      with unparalleled convenience and accessibility.
                    </p>
                    <p>
                      Why Choose Suriaya Naser?
                      <br />
                      <br />
                      Prime Location: Located in the heart of Chattogram, close
                      to key landmarks such as the CMP Police Head Quarter,
                      Bangladesh Bank, and majorshopping centers, schools, and
                      hospitals, making it the perfect place for both
                      convenience and connectivity.
                      <br />
                      <br />
                      Sophisticated Living: Designed to offer residents a blend
                      of luxury and practicality, with high-end finishes, modern
                      amenities, and an inviting environment that fosters
                      community and comfort.
                      <br />
                      <br />
                      Eco-Friendly Features: From rooftop gardening to
                      energy-efficient systems, Suriaya Naser is crafted with
                      sustainability in mind, promoting an environmentally
                      conscious lifestyle.
                      <br />
                      <br />
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <div className="project-detail-pic m-b30">
                            <div className="mt-media">
                              <img
                                src={require("./../../resources/suraiya/s1.jpg")}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="project-detail-pic m-b30">
                            <div className="mt-media">
                              <img
                                src={require("./../../resources/suraiya/s2.jpg")}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="project-detail-pic m-b30">
                            <div className="mt-media">
                              <img
                                src={require("./../../resources/suraiya/s3.jpg")}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      Key Features of Suriaya Naser:
                      <br />
                      <br />
                      Elegant Building Entrance with a secured decorative gate,
                      marble logo, and functional internal driveway.
                      <br />
                      <br />
                      Luxurious Reception Lobby featuring imported tiles,
                      decorative ceiling, and 24/7 CCTV security.
                      <br />
                      <br />
                      Modern Amenities including two high-capacity lifts, a
                      community lounge, and a children's play area on the
                      rooftop.
                      <br />
                      <br />
                      Rooftop Lifestyle with a BBQ pit, garden seating, and
                      dedicated areas for relaxation and entertainment.
                      <br />
                      <br />
                      Premium Finishes in every apartment, from polished tiles
                      and durable veneer doors to high-quality sanitary fittings
                      and kitchen setups.
                      <br />
                      <br />
                      At ETMS, we believe that Suriaya Naser is more than just a
                      place to live; it's a gateway to a lifestyle of grandeur
                      and convenience. Whether you're looking for a family home
                      or a luxurious retreat in the city, Suriaya Naser offers a
                      perfect balance of sophistication, comfort, and
                      sustainability. Discover your new home in the heart of
                      Chattogram at Suriaya Naser—your entrance to grandeur.{" "}
                    </p>
                    <div className="m-b0">
                      <div className="mt-divider divider-1px  bg-black">
                        <i className="icon-dot c-square" />
                      </div>
                    </div>
                    <ul className="social-icons social-square social-darkest m-b0">
                      <li>
                        <NavLink to={"#"} className="fa fa-facebook" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-twitter" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-linkedin" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-rss" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-youtube" />
                      </li>
                      <li>
                        <NavLink to={"#"} className="fa fa-instagram" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT END  */}
        </div>

        <div className="modal fade" id="myModal3" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <ReactPlayer url="https://www.youtube.com/watch?v=s3A7AK1K2hc" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectDetail;
