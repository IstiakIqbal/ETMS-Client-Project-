import React from "react";
import ClientsLogo from "../Elements/ClientsLogo";
import OurProject from "../Elements/OurProject";
import SDetails from "./SDetails";
import STable from "./STable";

class SAbout extends React.Component {
  render() {
    return (
      <>
        <div className="page-content">
          <OurProject />
          <SDetails />
          <STable />
          <ClientsLogo />
        </div>
      </>
    );
  }
}

export default SAbout;
