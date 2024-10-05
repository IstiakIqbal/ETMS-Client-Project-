import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Error from "./Pages/Error";
import Faq from "./Pages/Faq";
import Home4 from "./Pages/Home4";
import Services from "./Pages/Services";

import Footer from "./Common/Footer";
import Header from "./Common/Header4";
import ProjectDetail from "./Pages/ProjectDetail";
import ProjectMasonary from "./Pages/ProjectMasonary";
import SAbout from "./Pages/SAbout";
import Terms from "./Pages/Terms";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="page-wraper">
          <Header />
          <Routes>
            <Route path="/" element={<Home4 />} />

            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/selection" element={<SAbout />} />

            <Route path="/faq" element={<Faq />} />
            <Route path="/error" element={<Error />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/project-masonary" element={<ProjectMasonary />} />
            <Route path="/project-detail" element={<ProjectDetail />} />
            <Route path="/terms" element={<Terms />} />

            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
