import React from "react";
import food from "../assets/food.jpeg";
// import tourism from "../assets/tourism.jpeg";
// import hotel7 from "../assets/hotel7.jpg";
import image2 from "../assets/image2.gif";
import image1 from "../assets/image1.jpeg";
import "./services.scss";
const Services = () => {
  return (
    <section className="services">
      <div className="grid">
        <div className="card">
          <div className="img">
            <img src={image1} alt="service-1" />
          </div>
          <div className="detail">
            <a
              href="https://www.airbnb.co.in/?locale=en&_set_bev_on_new_domain=1652080749_NzZiYmI1NDU3Yzg4"
              classname="redirect"
            >
              HOTELS
            </a>
            <p>
            Tell us your plans and we will find the best room for you
            </p>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <img src={image2} alt="service-2" />
          </div>
          <div className="detail">
            <a
              href="https://www.thomascook.in/holidays/india-tour-packages"
              classname="redirect"
            >
             HOLIDAY PACKAGES
            </a>
            <p>
            Explore, Journey, Discover, Adventure. Making your heart want to return. Don'T Be A Tourist, Be A Traveler. Every Day Is Different.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="img">
            <img src={food} alt="service-3" />
          </div>

          <div className="detail">
            <a href="https://www.ecatering.irctc.co.in/" classname="redirect">
              E-CATERING
            </a>
            <p>
            Get restaurant food delivered right at your seat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
