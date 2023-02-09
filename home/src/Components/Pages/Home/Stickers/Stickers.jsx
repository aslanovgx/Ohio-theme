import React from "react";
import "./../Stickers/Stickers.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Stickers = () => {
  return (
    <section id="stickers">
      <div className="container-fluid">
        <div className="row">
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
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="right_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/drZ4vTCS-oh__img95-1920x1076.jpeg"
                alt=""
              />
              <div className="centre_icon">
                <BsFillPlayCircleFill />
              </div>
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
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/zxDVPhmF-oh__img31.jpeg"
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

export default Stickers;
