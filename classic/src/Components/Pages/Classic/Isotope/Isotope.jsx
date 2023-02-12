import React from "react";
import "./Isotope.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Isotope = () => {
  return (
    <section id="isotope">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="lists">
              <li id="normal_li">Filter by</li>
              <li id="special_li">
                <p>07</p>
                <span>All / </span>
              </li>
              <li id="special_li">
                <p>02</p>
                <span>Apps / </span>
              </li>
              <li id="special_li">
                <p>02</p>
                <span>Branding / </span>
              </li>
              <li id="special_li">
                <p>01</p>
                <span>Creative / </span>
              </li>
              <li id="special_li">
                <p>05</p>
                <span>Identity / </span>
              </li>
              <li id="special_li">
                <p>02</p>
                <span>Mockup /</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row row_left_right g-4 pt-5">
          <div className="col-lg-4">
            <div className="left_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/zdfLZADL-oh__demo31__1.jpeg"
                alt=""
              />
              <div className="centre_icon">
                <BsFillPlayCircleFill />
              </div>
              <div className="img_details">
                <h3>Stickers Pack</h3>
                <div className="span">
                  <span>
                    Identity, Mockup
                    <div className="span2">
                      <span>Show project</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="right_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img25-1920x1076.jpeg"
                alt=""
              />
              <div className="img_details">
                <h3>Diseño Gráfico</h3>
                <div className="span">
                  <span>
                    Branding, Identity
                    <div className="span2">
                      <span>Show project </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="left_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/zdfLZADL-oh__demo31__1.jpeg"
                alt=""
              />
              <div className="centre_icon">
                <BsFillPlayCircleFill />
              </div>
              <div className="img_details">
                <h3>Stickers Pack</h3>
                <div className="span">
                  <span>
                    Identity, Mockup
                    <div className="span2">
                      <span>Show project</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Isotope;
