import React from "react";
import "./../Background/Background.scss";
const Background = () => {
  return (
    <section
      id="back"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img_details">
              <h1>Contact: Agency</h1>
              <p>Leave us a little info, and we'll be in touch.</p>
              <span className="btn">Send Us an Email </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
