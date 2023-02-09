import React from "react";
import "./../Design/Design.scss";
import Fade from "react-reveal/Fade";
const Design = () => {
  return (
    <section id="design">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            <div className="design_left">
              <Fade bottom distance="20%" duration={800}>
                <p>We are proud of the works we've done.</p>
                <h1>We're design creators.</h1>
                <p className="more_projects">More Projects</p>
              </Fade>
            </div>
          </div>
          <div className="col-lg-6 cl6r">
            <div className="design_right">
              <Fade bottom distance="150%" duration={1500}>
                <p>Featured project:</p>
                <h2>
                  Unique Bowls From
                  <br />
                  the South Pacific.
                </h2>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="background_img">
        <img
          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__demo1__1-1465x1536.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Design;
