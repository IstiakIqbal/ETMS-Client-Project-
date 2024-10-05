import React from "react";

class Table extends React.Component {
  render() {
    return (
      <>
        <div className="page-content">
          {/* SECTION CONTENTG START */}
          <div className="section-full p-tb80 inner-page-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-8">
                  <div className="section-content m-b50">
                    {/* TITLE START */}
                    <div className="section-head">
                      <div className="mt-separator-outer separator-left">
                        <div className="mt-separator">
                          <h2 className="text-black text-uppercase sep-line-one ">
                            <span className="font-weight-300 text-primary">
                              List of{" "}
                            </span>{" "}
                            Management
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* TITLE END */}
                    {/* TABLE RESPONSIVE */}
                    <div id="no-more-tables">
                      <table className=" table-striped table-condensed cf mt-responsive-table">
                        <thead className="cf">
                          <tr>Incorporation No: CH-7746/10</tr>
                          <tr>Date of Incorporation: 24/05/2010</tr>
                          <tr>
                            <th>Code</th>
                            <th>Designation</th>
                            <th className="numeric">No. of Employee</th>
                            <th className="numeric">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-title="Code">Code-1</td>
                            <td data-title="Company">General Manager</td>
                            <td data-title="Price" className="numeric">
                              1
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td data-title="Code">Code-2</td>
                            <td data-title="Company">
                              Manager Accounts & Finance
                            </td>
                            <td data-title="Price" className="numeric">
                              1
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td data-title="Code">Code-3</td>
                            <td data-title="Company">Chief Engineer</td>
                            <td data-title="Price" className="numeric">
                              1
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td data-title="Code">Code-4</td>
                            <td data-title="Company">Engineer Civil</td>
                            <td data-title="Price" className="numeric">
                              3
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td data-title="Code">Code-5</td>
                            <td data-title="Company">Engineer Architectural</td>
                            <td data-title="Price" className="numeric">
                              2
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td data-title="Code">Code-6</td>
                            <td data-title="Company">Engineer Electrical</td>
                            <td data-title="Price" className="numeric">
                              8
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td data-title="Code">Code-7</td>
                            <td data-title="Company">Engineer Diploma</td>
                            <td data-title="Price" className="numeric">
                              3
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td data-title="Code">Code-8</td>
                            <td data-title="Company">Marketing Manager</td>
                            <td data-title="Price" className="numeric">
                              1
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td data-title="Code">Code-9</td>
                            <td data-title="Company">Procurement Department</td>
                            <td data-title="Price" className="numeric">
                              4
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td data-title="Code">Code-10</td>
                            <td data-title="Company">
                              Executive All Department
                            </td>
                            <td data-title="Price" className="numeric">
                              24
                            </td>
                            <td data-title="Change" className="numeric">
                              Active
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td>Total: 48</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Site Office & Factory Employee: 200 persons</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT END */}
        </div>
      </>
    );
  }
}

export default Table;
