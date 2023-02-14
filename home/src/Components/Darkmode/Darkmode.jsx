import React from "react";
import "./Darkmode.scss";
import { useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const Darkmode = () => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  return (
    <>
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

export default Darkmode;
