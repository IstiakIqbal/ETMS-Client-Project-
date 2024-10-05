import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import { NavLink } from "react-router-dom";

class ShortcodesNav extends React.Component {
  render() {
    return (
      <>
        <div className="col-md-3 col-sm-4">
          <div className="hover-navigation bg-white m-b30">
            <ul>
              <li>
                <NavLink to={"#"} data-hover="Accordian">
                  Allotment Letter
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"} data-hover="Button">
                  Payment
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"} data-hover="Icon box style">
                  Payment Schedule Compliance
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"} data-hover="List Group">
                  Modifications and Design
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"} data-hover="Modal popup">
                  Possession of the Apartment
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"} data-hover="Tabs">
                  Post-Handover Changes
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"} data-hover="Table">
                  Additional Costs
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"} data-hover="Video">
                  Land Registration
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"} data-hover="Icon font">
                  Project Abandonment
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"} data-hover="Icon font">
                  Co-operative Society Membership
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ShortcodesNav;
