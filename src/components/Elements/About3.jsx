import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { NavLink } from "react-router-dom";

const images = [
  require("./../../resources/ETMS banner.png"),
  require("./../../resources/Peace banner.png"),
  require("./../../resources/EHB banner.png"),
  require("./../../resources/selection banner.png"),
];

var bnr1 = require("./../../images/background/line.png");

class About3 extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/masonary.js");
  }
  render() {
    const options = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      items: 1,
      dots: true,
    };
    return (
      <>
        <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
          <div className="container">
            <div className="section-content ">
              <div className="row">
                <div className="col-lg-5 col-md-5">
                  <div className="m-about ">
                    <OwlCarousel
                      className="owl-carousel about-us-carousel"
                      {...options}
                    >
                      {images.map((item, index) => (
                        <div className="item" key={index}>
                          <div className="ow-img">
                            <NavLink to="/about">
                              <img src={item} alt="" />
                            </NavLink>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="m-about-containt text-black p-t80">
                    <div
                      className="m-about-years bg-moving"
                      style={{ backgroundImage: "url(" + bnr1 + ")" }}
                    >
                      <span className="text-primary large-title">25</span>
                      <span className="large-title-info">
                        Years of Experience
                      </span>
                    </div>
                    <h3 className="font-weight-600">
                      Improving quality of life with an integrated unified
                      approach.
                    </h3>
                    <p>
                    At ETMS, we build more than just structures—we build trust and quality. With a skilled team and years of experience, we ensure every project is crafted with precision and attention to detail. From foundation to finish, our commitment to excellence guarantees your vision becomes a reality, on time and within budget.
                    </p>
                    <div className="author-info p-t20">
                      <NavLink
                        to="/about"
                        className="site-button btn-effect m-b15"
                      >
                        <span>Get in touch</span>
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

export default About3;
