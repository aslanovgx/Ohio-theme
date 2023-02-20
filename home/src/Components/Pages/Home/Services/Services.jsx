import React from "react";
import "./../Services/Services.scss";
const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row pt-2">
          <div className="col-lg-6">
            <div className="services_left">
              <p>SERVICES</p>
              <h1>
                We're a team of creatives who are excited about unique ideas.
              </h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services_right">
              <div className="left">
                <p>STRATEGY</p>
                <h1>Brand Strategy & Art Direction</h1>
                <h5>
                  Creating a higher spacing and how people move through a unique
                  and impactful campaign.
                </h5>
              </div>
              <div className="right">
                <p>DESIGN</p>
                <h1>UX/UI Design & Website Design</h1>
                <h5>
                  Get a regulatory oneven an enterprises such she and the got
                  the did attributing and pushed.
                </h5>
              </div>
            </div>
            <div className="services_right">
              <div className="left">
                <p>PRODUCTION</p>
                <h1>Typography & Video Production</h1>
                <h5>
                  Spaces of each debt in the digital world can help you with
                  overall simplest authentic.
                </h5>
              </div>
              <div className="right">
                <p>CAMPAIGNS</p>
                <h1>Promo Campaigns & Content Creation</h1>
                <h5>Making an email campaigns to achieve a real impact.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
