import React from "react";
import "./../Footer/Footer.scss";

const Footer = () => {
  return (
    <footer id="footer1">
      <div className="container">
        <div className="row row_foot ">
          <div className="col-lg-3 col-md-6 col-sm-12 cf1">
            <ul className="foot1_box">
              <li>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/YbUt6che-OhioLogo.svg"
                  alt=""
                />
              </li>
              <li>Fb. / lg. / Tw. / Be.</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 cf2">
            <div className="foot2_box">
              <h1>Rooterdam</h1>
              <b>Ohio Digital Media LTD.</b>
              <p>
                Graaf Florisstraat 22A,
                <br />
                3021 CH Rotterdam
                <br />
                Netherlands
              </p>
              <h1>Barcelona</h1>
              <b>Ohio Digital LTD.</b>
              <p>
                365 Gran Via de Corts
                <br />
                Catalanes, BA 08015
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 cf3">
            <div className="foot3_box">
              <h1>Work inquiries</h1>
              <p>Interested in working with us?</p>
              <div className="line_bottom">
                <b>hello@clbthemes.com</b>
              </div>
              <h1>Career</h1>
              <p>Looking for a job opportunity?</p>
              <div className="line_bottom">
                <b>See open positions</b>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 cf4">
            <div className="foot4_box">
              <h1>Sign up for the newsletter</h1>
              <span>
                <input type="text" placeholder="Email address" />
                <button>Sign Up</button>
              </span>
              <div className="okay">
                <input type="checkbox" />
                <h5>
                  I'm okay with getting emails and having that activity tracked
                  to improve my experience.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="footer2_left f1">
              <p>
                © 2016-2023 Colabrio. All rights reserved
                <b>Purchase</b>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="footer2_left f2">
              <p>Security | Privacy & Cookie Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
