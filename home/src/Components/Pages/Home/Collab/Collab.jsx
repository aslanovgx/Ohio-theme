import React from "react";
import "./../Collab/Collab.scss";
import { HiArrowRight } from "react-icons/hi";
const Collab = () => {
  return (
    <section id="collab">
      <div className="container">
        <div className="row row_top">
          <div className="col-lg-6">
            <div className="collab_left">
              <p>COLLABORATION</p>
              <h1>
                Got a project?
                <br />
                Let's talk.
              </h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="collab_right">
              <span className="btn">
                Contact us{" "}
                <div className="arrow_right">
                  <HiArrowRight className="svg1" />
                  <HiArrowRight className="svg2" />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="collab_bottom">
              <p>
                We're <strong>a team of creatives</strong> who are excited about
                unique ideas and help fin-tech companies to{" "}
                <strong>create amazing identity</strong> by crafting top-notch
                UI/UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collab;
