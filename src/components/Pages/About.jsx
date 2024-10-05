import React from "react";
import About3 from "./../Elements/About3";
import AboutSummary from "./../Elements/AboutSummary";
import Banner from "./../Elements/Banner";
import Specialization3 from "./../Elements/Specialization3";
import Team from "./../Elements/Team";
import Table from "./Table";

var bnrimg = require("./../../resources/about-banner.png");

class About extends React.Component {
  render() {
    return (
      <>
        <div className="page-content">
          <Banner
            title="Creating quality urban lifestyles, building stronger communities."
            pagename="About Us"
            bgimage={bnrimg}
          />
          <AboutSummary />
          <About3 />
          <Table />
          <Specialization3 />
          <Team />
        </div>
      </>
    );
  }
}

export default About;
