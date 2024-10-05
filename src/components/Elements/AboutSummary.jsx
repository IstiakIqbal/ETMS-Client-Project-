import React from "react";

var img1 = require("./../../images/background/bg-6.png");
var img2 = require("./../../images/background/line.png");

class AboutSummary extends React.Component {
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
    return (
      <>
        <div
          className="section-full p-t80 p-b80 bg-dark bg-repeat square_shape2 inner-page-padding"
          style={{ backgroundImage: "url(" + img1 + ")" }}
        >
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-left">
                <div className="mt-separator text-white">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 text-primary">About</span>{" "}
                    Summary
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            <div className="section-content our-story">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="our-story-pic-block">
                    <div className="mt-media our-story-pic">
                      <img src={require("./../../resources/a1.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-6">
                  <div
                    className="mt-box our-story-detail bg-moving bg-cover"
                    style={{ backgroundImage: "url(" + img2 + ")" }}
                  >
                    <h4 className="text-uppercase m-b20">2011-12</h4>
                    <h4 className="m-b20">Introduction</h4>
                    <p>
                      Welcome to ETMS, a trusted name in the construction and
                      development industry. With a strong commitment to quality,
                      innovation, and sustainability, we have established
                      ourselves as a leader in creating remarkable residential
                      spaces that meet the highest standards of design and
                      functionality.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="our-story-pic-block">
                    <div className="mt-media our-story-pic">
                      <img src={require("./../../resources/a2.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-6">
                  <div
                    className="mt-box our-story-detail bg-moving bg-cover"
                    style={{ backgroundImage: "url(" + img2 + ")" }}
                  >
                    <h4 className="text-uppercase m-b20">2013-14</h4>
                    <h4 className="m-b20">Vision</h4>
                    <p>
                      At ETMS, we believe in shaping the future of urban living
                      by crafting projects that balance luxury, convenience, and
                      eco-friendly solutions. Our expertise spans from
                      conceptual planning to the full execution of complex
                      construction projects, ensuring that every detail is
                      meticulously managed to deliver results that exceed
                      expectations.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="our-story-pic-block">
                    <div className="mt-media our-story-pic">
                      <img src={require("./../../resources/a3.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-6">
                  <div
                    className="mt-box our-story-detail bg-moving bg-cover"
                    style={{ backgroundImage: "url(" + img2 + ")" }}
                  >
                    <h4 className="text-uppercase m-b20">2015-16</h4>
                    <h4 className="m-b20">Present View</h4>
                    <p>
                      Our latest project, Suriaya Naser, located in the heart of
                      Chattogram, is a testament to our dedication to
                      excellence. This Semi Basement + 15-story residential
                      building offers spacious, modern apartments designed to
                      provide a harmonious blend of comfort and sustainability.
                      With green architecture, rooftop gardens, and
                      energy-efficient systems, Suriaya Naser embodies our
                      philosophy of creating sophisticated, nature-inspired
                      living environments.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="our-story-pic-block">
                    <div className="mt-media our-story-pic">
                      <img src={require("./../../resources/a4.jpg")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-6">
                  <div
                    className="mt-box our-story-detail bg-moving bg-cover"
                    style={{ backgroundImage: "url(" + img2 + ")" }}
                  >
                    <h4 className="text-uppercase m-b20">2017-18</h4>
                    <h4 className="m-b20">Commitment</h4>
                    <p>
                      We take pride in being a customer-focused company,
                      maintaining transparency and professionalism at every step
                      of the way. From groundbreaking to handover, our team
                      ensures that every project is delivered on time, with the
                      utmost attention to detail and quality. Whether it's
                      residential, commercial, or mixed-use development, ETMS is
                      committed to building spaces that stand the test of time.{" "}
                    </p>
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

export default AboutSummary;
