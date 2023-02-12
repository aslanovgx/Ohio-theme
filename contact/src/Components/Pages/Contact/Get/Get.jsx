import React from "react";
import "./Get.scss";
const Get = () => {
  return (
    <section id="get">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="get_header">
              <h5>Home </h5>
              <span> Contact: Agency</span>
            </div>
          </div>
        </div>
        <div className="row rb2 pb-4">
          <div className="col-lg-2">
            <div className="get_box">
              <h1>Get in touch</h1>
              <p>
                Work Inquiries
                <br />
                <strong>+1.809.120.6705</strong>
              </p>
              <p>
                Assistance hours:
                <br />
                Monday - Friday
                <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
          <div className="col-lg-4 gb2">
            <div className="get_box">
              {/* <h1>Get in touch</h1> */}
              <p>
                Careers & Press
                <br />
                <strong>+1.809.120.6705</strong>
              </p>
              <p>
                Assistance hours:
                <br />
                Monday - Friday
                <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="get_box">
              <h1>Post address</h1>
              <p>
                541 Melville Ave, Palo Alto,
                <br />
                CA 94301,
                <br />
                United States
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="get_box">
              <h1>Social media</h1>
              <p id="special_p">
                Facebook
                <br />
                Instagram
                <br />
                Twitter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Get;
