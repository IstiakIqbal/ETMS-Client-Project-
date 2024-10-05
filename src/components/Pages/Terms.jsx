import React from "react";
import Banner from "./../Elements/Banner";
import ShortcodesNav from "./../Elements/ShortcodesNav";

var bnrimg = require("./../../resources/about-banner.png");

class Terms extends React.Component {
  render() {
    return (
      <>
        <div className="page-content">
          <Banner
            title="Read out all our terms and conditions."
            pagename="Terms & Conditions"
            bgimage={bnrimg}
          />

          {/* SECTION CONTENTG START */}
          <div className="section-full p-tb80 inner-page-padding">
            <div className="container">
              <div className="row">
                <ShortcodesNav />
                <div className="col-md-9 col-sm-8">
                  <div className="m-b0">
                    {/* TITLE START */}
                    <div className="section-head">
                      <div className="mt-separator-outer separator-left">
                        <div className="mt-separator">
                          <h2 className="text-black text-uppercase sep-line-one ">
                            <span className="font-weight-300 text-primary">
                              Terms
                            </span>{" "}
                            &amp; Conditions
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
                            Allotment Letter: Upon confirmation of a client,
                            ETMS Belvedere Property (BD) Ltd. (EBPL) will issue
                            an Allotment Letter in favor of the client with
                            specific terms and conditions.
                          </li>
                          <li>
                            Payment: <br />
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>
                                The client/allottee will begin making payments
                                as per the agreed schedule.
                              </li>
                              <li>
                                The client is not entitled to transfer the
                                apartment to a third party until the apartment
                                has been officially handed over.
                              </li>
                              <li>
                                Down payments, installments, additional works,
                                and other charges must be made by A/C payee
                                cheque or bank draft in favor of "ETMS Belvedere
                                Property (BD) Ltd (EBPL)." Any cash transaction
                                is strictly discouraged.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Payment Schedule Compliance:
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>
                                EBPL expects the client to strictly adhere to
                                the payment schedule. Timely completion of the
                                project is heavily dependent on the client’s
                                timely payments.
                              </li>
                              <li>
                                A delay in payment of 15 days or more will make
                                the client liable to pay a delay charge of 2%
                                per month on the defaulted amount.
                              </li>
                              <li>
                                If payment is delayed beyond two months, EBPL
                                reserves the right to cancel the allotment. In
                                such a case, EBPL will refund the amount paid by
                                the client within 60 days, deducting 10% of the
                                total paid amount as a penalty.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Modifications and Design: <br />
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>
                                The company reserves the right to make changes
                                to the architectural, structural, and other
                                designs of the project. Changes can be made in
                                the specifications in the overall interest of
                                the project.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Possession of the Apartment:
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>
                                Possession of the apartment will be handed over
                                within 36 months, except for reasons beyond the
                                control of EBPL (e.g., force majeure, natural
                                calamities, political disturbances, or Acts of
                                God).
                              </li>
                              <li>
                                Handover will only occur after the client has
                                made the complete payment.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Post-Handover Changes:{" "}
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>
                                After the apartment is handed over, any changes
                                within the apartment must be consulted with
                                EBPL.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Additional Costs:{" "}
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>
                                Connection fees/charges, security deposits, and
                                other incidental costs for water, gas,
                                electricity, telephone, and satellite cable
                                connections are not included in the apartment
                                price.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Land Registration:{" "}
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>
                                A proportionate share of undivided and unmarked
                                land will be registered in favor of each allotee
                                as per current rules and government regulations.
                                The allottee will bear stamp duties,
                                registration fees, documentation charges, and
                                any other taxes and expenses incurred during the
                                process of registration, allotment, and
                                transfer.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Project Abandonment:{" "}
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>
                                If for any reason beyond EBPL’s control, the
                                ETMS Suriaya Naser project is abandoned, EBPL
                                will refund the down payment and all
                                installments deposited by the client within 60
                                days of the announcement. In this case, the
                                allottee will not be entitled to any further
                                claims or damages.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Co-operative Society Membership:{" "}
                            <ol className="list-num-count lower-alpha list-outline-none">
                              <li>
                                The client must be a member of the Owners'
                                Co-operative Society, which will be formed by
                                the apartment owners to manage the general
                                affairs of the complex. Each apartment owner
                                must deposit Tk. 60,000 (sixty thousand only) to
                                the reserve fund before taking possession of the
                                apartment.
                              </li>
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

export default Terms;
