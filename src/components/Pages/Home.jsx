import React from "react";
import Footer from "./../Common/Footer";
import Header from "./../Common/Header";
import About from "./../Elements/About";
import Blogs from "./../Elements/Blogs";
import Callus from "./../Elements/Callus";
import OurMission from "./../Elements/OurMission";
import OurProject from "./../Elements/OurProject";
import OurServices from "./../Elements/OurServices";
import OurValue from "./../Elements/OurValue";
import Slider from "./../Elements/Slider";
import Specialization from "./../Elements/Specialization";
import Testimonials from "./../Elements/Testimonials";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Slider />
          <Specialization />
          <About />
          <OurValue />
          <OurMission />
          <OurServices />
          <Callus />
          <OurProject />
          <Blogs />
          <Testimonials />
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
