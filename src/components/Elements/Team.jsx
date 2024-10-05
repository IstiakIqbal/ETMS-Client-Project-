import React from "react";
import { NavLink } from "react-router-dom";

const teamMembers = [
  {
    image: require("./../../resources/p1.png"),
    membername: "Earshadul Hoq",
    position: "Managing Director",
  },
  {
    image: require("./../../resources/p2.png"),
    membername: "Mainul Kabir",
    position: "Deputy Managing Director",
  },
  {
    image: require("./../../resources/p3.png"),
    membername: "Sayedul Kabir",
    position: "Director",
  },
  {
    image: require("./../../resources/p4.png"),
    membername: "Touhidul Hoq Chowdhury",
    position: "Director",
  },
];

class Team extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full p-t80 p-b50 square_shape1 bg-parallax bg-cover mobile-page-padding"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            {/* TITLE START */}
            <div className="section-head text-center text-black ">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one">
                    <span className="font-weight-300 text-primary">Our </span>{" "}
                    Panel
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="row">
                {teamMembers.map((item, index) => (
                  <div
                    key={index}
                    className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30   "
                  >
                    <div className="our-team-2 ">
                      <div className="profile-image scale-in-center">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="figcaption text-black">
                        <h5>{item.membername}</h5>
                        <h6>{item.position}</h6>
                        <div className="icons">
                          <NavLink to={"#"}>
                            <i className="fa fa-facebook" />
                          </NavLink>
                          <NavLink to={"#"}>
                            {" "}
                            <i className="fa fa-twitter" />
                          </NavLink>
                          <NavLink to={"#"}>
                            {" "}
                            <i className="fa fa-instagram" />
                          </NavLink>
                          <NavLink to={"#"}>
                            <i className="fa fa-rss" />
                          </NavLink>
                          <NavLink to={"#"}>
                            {" "}
                            <i className="fa fa-youtube" />
                          </NavLink>
                          <NavLink to={"#"}>
                            {" "}
                            <i className="fa fa-linkedin" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Team;
