import React from "react";
import "./../Work/Work.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Work = () => {
  return (
    <section id="work">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-lg-7">
            <div className="work_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__demo1__1.jpeg?id=223768"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="work_right">
              <div className="centre_icon">
                <BsFillPlayCircleFill />
              </div>
              <h1>We work in the fields of UI/UX design and art direction.</h1>
              <ul>
                <li>
                  <AiOutlinePlus />
                  Website & Mobile App Design
                </li>
                <li>
                  <AiOutlinePlus />
                  Motion Graphics & Animation
                </li>
                <li>
                  <AiOutlinePlus />
                  User Experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-2-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-4-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-6-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-8-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-10-min.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-1-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-3-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-5-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-7-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-9-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="work_logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/LogoSC-11-min.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
