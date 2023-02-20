import React from "react";
import "./../Awards/Awards.scss";
// import "./Darkmode.scss";
import { useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
const Awards = () => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  return (
    <>
      <section
        id="awards"
        className={darkTheme ? "black-awards" : "light-awards"}
      >
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="awards_left">
                <p className={darkTheme ? "white-h1" : "black-h1"}>
                  AWARDS & HONORS
                </p>
                <h1 className={darkTheme ? "white-h1" : "black-h1"}>
                  The awards won by our project.
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="awards_right">
                <p className={darkTheme ? "white-h1" : "black-h1"}>
                  Our clients describe us as a product team which{" "}
                  <strong>creates amazing UI/UX</strong> experiences,{" "}
                  <strong>by crafting top-notch</strong> user experience.
                </p>
                <div className="award_day">
                  <div className="img">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_awwwards-min.png"
                      alt=""
                    />
                  </div>
                  <p className={darkTheme ? "white-h1" : "black-h1"}>
                    <strong>5x</strong> Developer Award
                  </p>
                </div>
                <div className="award_day">
                  <div className="img">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_awwwards-min.png"
                      alt=""
                    />
                  </div>
                  <p className={darkTheme ? "white-h1" : "black-h1"}>
                    <strong>3x</strong> Site of the Day
                  </p>
                </div>
                <div className="award_day">
                  <div className="img">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_fwa-min.png"
                      alt=""
                    />
                  </div>
                  <p className={darkTheme ? "white-h1" : "black-h1"}>
                    <strong>5x</strong> Mobile of the Day
                  </p>
                </div>
                <div className="award_day">
                  <div className="img">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_webby-min.png"
                      alt=""
                    />
                  </div>
                  <p className={darkTheme ? "white-h1" : "black-h1"}>
                    <strong>2x</strong> Best Website
                  </p>
                </div>
                <div className="award_day">
                  <div className="img">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/award_webby-min.png"
                      alt=""
                    />
                  </div>
                  <p className={darkTheme ? "white-h1" : "black-h1"}>
                    <strong>2x</strong> Best Website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="theme">
        <span className="span11" onClick={() => setDarkTheme(true)}>
          Dark
          <BsMoon />
          {/* <span id='span111'> Dark<BsSun /></span> */}
        </span>
        <span className="span22" onClick={() => setDarkTheme(false)}>
          Light
          <BsSun />
          <span
            id="span222"
            className={darkTheme ? "span222-minus" : "span222-plus"}
          >
            {" "}
            {darkTheme ? "Dark" : "Light"}
            {darkTheme ? <BsMoon /> : <BsSun />}
          </span>
        </span>
      </div>
    </>
  );
};

export default Awards;
