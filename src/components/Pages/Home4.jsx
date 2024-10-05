import React from "react";
import About3 from "../Elements/About3";
import Blogs2 from "../Elements/Blogs2";
import Faq from "../Elements/Faq";
import OurProject3 from "../Elements/OurProject3";
import OurServices4 from "../Elements/OurServices4";
import OurValue2 from "../Elements/OurValue2";
import OurValue3 from "../Elements/OurValue3";
import Slider from "../Elements/Slider";
import Specialization from "../Elements/Specialization";
import Specialization3 from "../Elements/Specialization3";
import Team from "../Elements/Team";

class Home4 extends React.Component {
  render() {
    return (
      <>
        <div className="page-content">
          <Slider />
          <About3 />
          <Specialization3 />
          <Specialization />
          <OurValue2 />
          <OurProject3 />
          <OurServices4 />
          <OurValue3 />
          <Team />
          <Blogs2 />
          <Faq />
        </div>
      </>
    );
  }
}

export default Home4;
