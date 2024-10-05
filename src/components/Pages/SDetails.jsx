import React from "react";

class SDetails extends React.Component {
  render() {
    return (
      <>
        <div className="page-content">
          {/* SECTION CONTENTG START */}
          <div className="section-full p-tb80 inner-page-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-8">
                  <div className="m-b0">
                    {/* TITLE START */}
                    <div className="section-head">
                      <div className="mt-separator-outer separator-left">
                        <div className="mt-separator">
                          <h2 className="text-black text-uppercase sep-line-one ">
                            <span className="font-weight-300 text-primary">
                              Selection
                            </span>{" "}
                            Fashion Wear LTD Details
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* TITLE END */}
                    {/* LISTING WITH NUMBERING & ALPHA */}
                    <div className="section-content">
                      <div className="m-b0">
                        <ol className="list-num-count">
                          <li>
                            Production Items : <br />
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>T-shirt</li>
                              <li>Polo shirt</li>
                              <li>Boxer shorts</li>
                              <li>PJ sets</li>
                              <li>Swimming wear</li>
                              <li>Knitting Vest</li>
                              <li>Trousers</li>
                              <li>Night dress & Regular woven Items</li>
                            </ol>
                          </li>
                          <li>
                            Lead Time & Capacity :
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>General Lead Time for Orders: 60-90 days.</li>
                              <li>
                                Main Products: Polo Shirt, Boxer, Brief, Trunk,
                                Tank Top, Panty, Kids Top and Bottom Set, Ladies
                                Dress & Underwear.
                              </li>
                              <li>
                                Production Capacity: Per Month 30,000 Dozen, Per
                                Year 3,600,000 Dozen.
                              </li>
                              <li>Business Market: USA, Canada, Europe.</li>
                            </ol>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SDetails;
