import React from "react";
import ContactInfo from "../Elements/ContactInfo";
import Banner from "./../Elements/Banner";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

var bnrimg = require("./../../resources/contact-banner.png");

class ContactUs extends React.Component {
  componentDidMount() {
    // Initialize the Leaflet map with a higher zoom level for a closer view
    this.map = L.map('map').setView([22.344274602472638, 91.83286589502896], 17);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // Add a marker at the specified coordinates
    L.marker([22.344274602472638, 91.83286589502896]).addTo(this.map)
      .bindPopup('Corporate Head Office: 282, Momin Road (2nd Floor), Jamal Khan Lane, Kotowali, Chittagong-4000')
      .openPopup();
  }

  render() {
    return (
      <>
        <div className="page-content">
          <Banner
            title="Putting a plan to action, to assure your satisfaction!"
            pagename="Contact Us"
            bgimage={bnrimg}
          />

          {/* SECTION CONTENT START */}
          <div className="section-full p-tb80 inner-page-padding">
            <div className="container">
              {/* LEAFLET MAP */}
              <div className="gmap-outline m-b30">
                <div id="map" style={{ height: "400px", width: "100%" }}></div>
              </div>

              {/* CONTACT INFORMATION BELOW MAP */}
              <div className="section-content">
                <div className="contact-info m-b30">
                  {/* TITLE START */}
                  <div className="section-head">
                    <div className="mt-separator-outer separator-left">
                      <div className="mt-separator">
                        <h2 className="text-uppercase sep-line-one ">
                          <span className="font-weight-300 text-primary">Contact</span> Info
                        </h2>
                      </div>
                    </div>
                  </div>
                  {/* TITLE END */}
                  <div className="bg-dark p-a20 text-white">
                    <div className="mt-icon-box-wraper left p-b40">
                      <div className="icon-xs">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="icon-content">
                        <h5 className="m-t0 font-weight-500">Phone number</h5>
                        <div>(+88) 031-616905</div>
                        <span>(+88) 031-2862624, </span>
                        <span> (+88) 01715600200</span>
                      </div>
                    </div>
                    <div className="mt-icon-box-wraper left p-b40">
                      <div className="icon-xs">
                        <i className="fa fa-envelope" />
                      </div>
                      <div className="icon-content">
                        <h5 className="m-t0 font-weight-500">Email address</h5>
                        <p>infoetmsbd@gmail.com</p>
                      </div>
                    </div>
                    <div className="mt-icon-box-wraper left">
                      <div className="icon-xs">
                        <i className="fa fa-map-marker" />
                      </div>
                      <div className="icon-content">
                        <h5 className="m-t0 font-weight-500">Address info</h5>
                        <p>Corporate Head Office : 282, Momin Road (2nd Floor), Jamal Khan Lane, Kotowali, Chittagong-4000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT END */}

          <ContactInfo />
        </div>
      </>
    );
  }
}

export default ContactUs;
