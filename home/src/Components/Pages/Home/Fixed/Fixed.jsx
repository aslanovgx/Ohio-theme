import React from "react";
import "./../Fixed/Fixed.scss";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
const Fixed = () => {
  return (
    <body>
      <div id="theme">
        <span className="span11">
          Dark
          <BsMoon />
          {/* <span id='span111'> Dark<BsSun /></span> */}
        </span>
        <span className="span22">
          Light
          <BsSun />
          <span id="span222">
            {" "}
            Light
            <BsSun />
          </span>
        </span>
      </div>
    </body>
  );
};

export default Fixed;
