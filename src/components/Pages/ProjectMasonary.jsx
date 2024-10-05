import React from "react";
import OurProject3 from "../Elements/OurProject3";
import Banner from "./../Elements/Banner";

var bnrimg = require("./../..//resources/project-page-banner.png");

class ProjectMasonary extends React.Component {
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
        <div className="page-content">
          <Banner
            title="Creating quality urban lifestyles, building stronger communities."
            pagename="Project Masonry"
            bgimage={bnrimg}
          />

          {/* SECTION CONTENT START */}
          <OurProject3 />
          {/* SECTION CONTENT END  */}
        </div>
      </>
    );
  }
}

export default ProjectMasonary;
