import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";

const logos = [
  { image: "Kohls" },
  { image: "Wal-Mart" },
  { image: "K-Mart" },
  { image: "JC Penney" },
  { image: "Hanes" },
  { image: "Zellers" },
  { image: "T J Maxx" },
  { image: "Family Dollar" },
  { image: "U.S Polo Assn" },
  { image: "Timberland" },
];

class ClientsLogo extends React.Component {
  render() {
    const options = {
      loop: true,
      margin: 0,
      autoplay: true,
      nav: false,
      dots: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        767: {
          items: 4,
        },
        1000: {
          items: 6,
        },
      },
    };
    return (
      <>
        <div className="section-full p-t10 bg-white ">
          <div className="container">
            <div className="section-content">
              <h2 className="text-uppercase ">
                <span className="font-weight-300 text-primary">Our</span>{" "}
                Clients
              </h2>
              {/* TESTIMONIAL 4 START ON BACKGROUND */}
              <div className="section-content">
                <div className="section-content p-tb10 owl-btn-vertical-center">
                  <OwlCarousel
                    className="owl-carousel home-client-carousel-2"
                    {...options}
                  >
                    {logos.map((item, index) => (
                      <div className="item" key={index}>
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <button className="site-button">
                              {item.image}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClientsLogo;
