import React from "react";

class ContactInfo extends React.Component {
  render() {
    return (
      <>
        <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
          <div className="container">
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="row">
                <div className="col-md-12 col-sm-6">
                  {/* TITLE START */}
                  <div className="section-head">
                    <div className="mt-separator-outer separator-left">
                      <div className="mt-separator">
                        <h2 className="text-uppercase sep-line-one ">
                          <span className="font-weight-300 text-primary">
                            Our
                          </span>{" "}
                          Solution
                        </h2>
                      </div>
                    </div>
                  </div>
                  {/* TITLE END */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-gray">
                        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                          <span className="icon-cell text-primary">
                            <i className="flaticon-sketch" />
                          </span>
                        </div>
                        <div className="icon-content text-black">
                          <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">
                            Administrative Contact:
                          </h4>
                          <p>
                            Name: Earshadul Hoq <br />
                            Company: ETMS Group <br />
                            Address: 282, Momin Road (2nd Floor) Jamal Khan
                            Lane, Kotowali, Chittagong. <br />
                            City: Chittagong
                            <br />
                            State/Province: Chittagong <br />
                            Country: BD <br />
                            Postal Code: 4000 <br />
                            Phone: +880 2865591 <br />
                            Email: leaproperties@gmail.com
                          </p>
                          {/* <NavLink
                            to="#"
                            className="site-button-link"
                            data-hover="Read More"
                          >
                            Read More{" "}
                            <i className="fa fa-angle-right arrow-animation" />
                          </NavLink> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-dark">
                        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                          <span className="icon-cell text-primary">
                            <i className="flaticon-ui" />
                          </span>
                        </div>
                        <div className="icon-content text-white">
                          <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">
                            Technical Contact:
                          </h4>
                          <p>
                            Name: Daluar Hossan <br />
                            Company: ETMS Group <br />
                            Address: 282, Momin Road (2nd Floor) Jamal Khan
                            Lane, Kotowali, Chittagong <br />
                            City: Chittagong
                            <br />
                            State/Province: Chittagong <br />
                            Country: BD <br />
                            Postal Code: 4000 <br />
                            Phone: +880 2865591, +880 1714-946170, +880 1819986902 <br />
                            Email: daluarhossan1977@gmail.com
                          </p>
                          {/* <NavLink
                            to="/about"
                            className="site-button-link yellow"
                            data-hover="Read More"
                          >
                            Read More{" "}
                            <i className="fa fa-angle-right arrow-animation" />
                          </NavLink> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ */}
        </div>
      </>
    );
  }
}

export default ContactInfo;
