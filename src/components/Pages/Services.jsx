import React from "react";
import AboutCompany from "../Elements/AboutCompany";
import Faq from "../Elements/Faq";
import OurProject3 from "../Elements/OurProject3";
import OurServices3 from "../Elements/OurServices3";
import OurValue3 from "../Elements/OurValue3";
import Specialization3 from "../Elements/Specialization3";
import Banner from "./../Elements/Banner";

var bnrimg = require("./../../resources/service-banner.png");

class Services extends React.Component {
  render() {
    return (
      <>
        <div className="page-content">
          <Banner
            title="Diversified services. Unvarying quality."
            pagename="Services"
            bgimage={bnrimg}
          />
          <AboutCompany />
          <Specialization3 />
          <OurServices3 />
          <OurValue3 />
          <OurProject3 />
          <Faq />
        </div>
      </>
    );
  }
}

export default Services;
