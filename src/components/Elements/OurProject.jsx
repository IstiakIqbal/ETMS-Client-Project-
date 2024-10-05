import React from "react";
import { NavLink } from "react-router-dom";

const filters = [
  { label: "Loungewear", filter: ".cat-1" },
  { label: "Man's Camisole", filter: ".cat-4" },
  { label: "Man's Long Sleeve", filter: ".cat-2" },
  { label: "Man's Print Tshirt", filter: ".cat-3" },
  { label: "Man's under-shirt", filter: ".cat-5" },
  { label: "Man's Underwear", filter: ".cat-6" },
  { label: "Pajamas", filter: ".cat-6" },
];

const projects = [
  {
    image: require("./../../resources/selection/Screenshot_5.png"),
    title: "Man's Print Tshirt",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-2",
  },
  {
    image: require("./../../resources/selection/xim7003-1_3.jpg"),
    title: "Loungewear",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-2",
  },
  {
    image: require("./../../resources/selection/1.jpg"),
    title: "Man's under-shirt",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-6",
  },
  {
    image: require("./../../resources/selection/2.png"),
    title: "Man's Underwear",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-6",
  },
  {
    image: require("./../../resources/selection/22.jpg"),
    title: "Man's Print Tshirt",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-3",
  },
  {
    image: require("./../../resources/selection/22140579_fpx.jpeg"),
    title: "Man's Print Tshirt",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-3",
  },
  {
    image: require("./../../resources/selection/61hf0VT72eL._AC_UF894,1000_QL80_.jpg"),
    title: "Pajamas",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-1",
  },
  {
    image: require("./../../resources/selection/Screenshot_1.png"),
    title: "Man's Long Sleeve",
    address: "lorem",
    width: "col-md-6",
    filter: "cat-6",
  },
  {
    image: require("./../../resources/selection/Screenshot_2.png"),
    title: "Man's Long Sleeve",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-5",
  },
  {
    image: require("./../../resources/selection/Screenshot_3.png"),
    title: "Man's Long Sleeve",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-4",
  },
  {
    image: require("./../../resources/selection/Screenshot_4.png"),
    title: "Man's Long Sleeve",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-2",
  },
  {
    image: require("./../../resources/selection/Screenshot_5.png"),
    title: "Man's Print Tshirt",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-6",
  },
  {
    image: require("./../../resources/selection/Screenshot_7.png"),
    title: "Pajamas",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-6",
  },
  {
    image: require("./../../resources/selection/Screenshot_6.png"),
    title: "Pajamas",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-3",
  },
  {
    image: require("./../../resources/selection/61lpfWu18DL._AC_UY1000_.jpg"),
    title: "Man's Under-shirt",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-3",
  },
  {
    image: require("./../../resources/selection/71aeqWaLknL._AC_UY350_.jpg"),
    title: "Man's Under-shirt",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-1",
  },
  {
    image: require("./../../resources/selection/Screenshot_5.png"),
    title: "Man's Print Tshirt",
    address: "lorem",
    width: "col-md-6",
    filter: "cat-6",
  },
  {
    image: require("./../../resources/selection/11.png"),
    title: "Man's Solid Tshirt",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-5",
  },
  {
    image: require("./../../resources/selection/3.png"),
    title: "Man's Underwear",
    address: "lorem",
    width: "col-md-3",
    filter: "cat-4",
  },
];

class OurProject extends React.Component {
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
        <div className="section-full mobile-page-padding p-t80 p-b30 square_shape2 ">
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-left">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 text-primary">Selection</span>{" "}
                    Products
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            <div className="section-content">
              <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
                {/* COLUMNS 1 */}
                <div className="stamp col-md-3 col-sm-6 m-b30">
                  <div className="bg-gray p-a30">
                    <div className="filter-wrap">
                      <ul className="filter-navigation masonry-filter text-uppercase">
                        <li className="active">
                          <NavLink to={"#"} data-filter="*" data-hover="All">
                            All
                          </NavLink>
                        </li>
                        {filters.map((item, index) => (
                          <li key={index}>
                            <NavLink
                              to={"#"}
                              data-filter={item.filter}
                              data-hover={item.label}
                            >
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* COLUMNS 2 */}
                {projects.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.filter} masonry-item ${item.width} col-sm-6 m-b30`}
                  >
                    <div className="mt-box   image-hover-block">
                      <div className="mt-thum-bx">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="mt-info  p-t20 text-white">
                        <h4 className="mt-tilte m-b10 m-t0">{item.title}</h4>
                        <p className="m-b0">{item.address}</p>
                      </div>
                      <NavLink to="/project-detail"></NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
            <strong>Products</strong>
          </div>
        </div>
      </>
    );
  }
}

export default OurProject;
