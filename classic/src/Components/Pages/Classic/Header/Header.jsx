import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="head_part">
              <h1>Classic</h1>
              <div className="bakery">
                <span id="bakery_span1">WPBakery</span>
                <span id="bakery_span2">Elementor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
