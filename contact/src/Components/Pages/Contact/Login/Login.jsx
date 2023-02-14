import React from "react";
import "./../Login/Login.scss";
import { HiArrowRight } from "react-icons/hi";
const Login = () => {
  return (
    <section id="login">
      <div className="container">
        <div className="row pb-4">
          <div className="col-lg-4">
            <form action="#" className="form_login">
              <label>Name (required)</label>
              <input type="text" placeholder="Your name" />
            </form>
          </div>
          <div className="col-lg-4">
            <form action="#" className="form_login">
              <label>Company (required)</label>
              <input type="text" placeholder="Your company name" />
            </form>
          </div>
          <div className="col-lg-4">
            <form action="#" className="form_login">
              <label>Email (required)</label>
              <input type="text" placeholder="Your working email" />
            </form>
          </div>
        </div>
        <div className="row pb-4">
          <div className="col-lg-4">
            <form action="#" className="form_login">
              <label>Phone (optional)</label>
              <input type="text" placeholder="Your actual phone number" />
            </form>
          </div>
          <div className="col-lg-4">
            <form action="#" className="form_login">
              <label>Subject (optional)</label>
              <input type="text" placeholder="Choose a subject" />
            </form>
          </div>
          <div className="col-lg-4 cl4_s">
            <select className="form_login like_input">
              <option value="Less than 5K">Less than 5K</option>
              <option value="5K - 10K">5K - 10K</option>
              <option value="Over 10K">Over 10K</option>
              <option value="Please advice">Please advice</option>
            </select>
          </div>
        </div>
        <div className="row pb-4">
          <div className="col-lg-12">
            <form action="#" className="form_login">
              <label>Phone (optional)</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Brief project details"
              ></textarea>
            </form>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-lg-12">
            <div className="checkbox1">
              <input type="checkbox" />
              <h5>
                I'm okay with getting emails and having that activity tracked to
                improve my experience.
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="quote">
              <span className="btn">
                Get a quote{" "}
                <div className="arrow_right">
                  <HiArrowRight className="svg1" />
                  <HiArrowRight className="svg2" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
