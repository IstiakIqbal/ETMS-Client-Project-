import React from "react";
import About3 from "../Elements/About3";
import Callus3 from "../Elements/Callus3";
import Faq from "../Elements/Faq";
import OurMission3 from "../Elements/OurMission3";
import OurProject3 from "../Elements/OurProject3";
import OurServices3 from "../Elements/OurServices3";
import OurStory from "../Elements/OurStory";
import OurValue3 from "../Elements/OurValue3";
import Slider3 from "../Elements/Slider3";
import Specialization3 from "../Elements/Specialization3";
import Footer3 from "./../Common/Footer3";
import Header3 from "./../Common/Header3";

class Home3 extends React.Component {
  render() {
    return (
      <>
        <Header3 />
        <div className="page-content">
          <Slider3 />
          <About3 />
          <Specialization3 />
          <OurMission3 />
          <Callus3 />
          <OurServices3 />
          <OurProject3 />
          <OurValue3 />
          <OurStory />
          <Faq />
        </div>
        <Footer3 />
      </>
    );
  }
}

export default Home3;
