import React from "react";
import "./Isotope.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Isotope = () => {
  // // state for storing the isotope object, with an initial value of null
  // const [isotope, setIsotope] = React.useState(null);
  // // state for storing the filter keyword, with an initial value of *, which matches everything
  // const [filterKey, setFilterKey] = React.useState('*');

  function Click_All() {
    const Small_1 = document.querySelector("#small_1");
    const Small_2 = document.querySelector("#small_2");
    const Small_3 = document.querySelector("#small_3");
    const Small_4 = document.querySelector("#small_4");
    const Small_5 = document.querySelector("#small_5");
    const Big_1 = document.querySelector("#big_1");
    const Big_2 = document.querySelector("#big_2");

    // console.log(Small_1);

    Small_1.style.height = "auto";
    Small_1.style.width = "380px";
    Small_1.style.padding = "0 12px";
    Small_1.style.transition = "0.4s ease-in-out";

    Small_2.style.height = "auto";
    Small_2.style.width = "380px";
    Small_2.style.padding = "0 12px";
    Small_2.style.transition = "0.4s ease-in-out";

    Small_3.style.height = "auto";
    Small_3.style.width = "380px";
    Small_3.style.padding = "0 12px";
    Small_3.style.transition = "0.4s ease-in-out";

    Small_4.style.height = "auto";
    Small_4.style.width = "380px";
    Small_4.style.padding = "0 12px";
    Small_4.style.transition = "0.4s ease-in-out";

    Small_5.style.height = "auto";
    Small_5.style.width = "380px";
    Small_5.style.padding = "0 12px";
    Small_5.style.transition = "0.4s ease-in-out";

    Big_1.style.height = "auto";
    Big_1.style.width = "760px";
    Big_1.style.padding = "0 12px";
    Big_1.style.transition = "0.4s ease-in-out";

    Big_2.style.height = "auto";
    Big_2.style.width = "760x";
    Big_2.style.padding = "0 12px";
    Big_2.style.transition = "0.4s ease-in-out";
  }
  function Click_Apps() {
    const Small_1 = document.querySelector("#small_1");
    const Small_2 = document.querySelector("#small_2");
    const Small_3 = document.querySelector("#small_3");
    const Small_4 = document.querySelector("#small_4");
    const Small_5 = document.querySelector("#small_5");
    const Big_1 = document.querySelector("#big_1");
    const Big_2 = document.querySelector("#big_2");

    // console.log(Small_1);

    Small_1.style.height = "0";
    Small_1.style.width = "0";
    Small_1.style.padding = "0";
    Small_1.style.transition = "0.4s ease-in-out";

    Small_2.style.height = "0";
    Small_2.style.width = "0";
    Small_2.style.padding = "0";
    Small_2.style.transition = "0.4s ease-in-out";

    Small_3.style.height = "auto";
    Small_3.style.width = "380px";
    Small_3.style.padding = "0 12px";
    Small_3.style.transition = "0.4s ease-in-out";

    Small_4.style.height = "0";
    Small_4.style.width = "0";
    Small_4.style.padding = "0";
    Small_4.style.transition = "0.4s ease-in-out";

    Small_5.style.height = "0";
    Small_5.style.width = "0";
    Small_5.style.padding = "0";
    Small_5.style.transition = "0.4s ease-in-out";

    Big_2.style.height = "auto";
    Big_2.style.width = "760px";
    Big_2.style.padding = "0 12px";
    Big_2.style.transition = "0.4s ease-in-out";

    Big_1.style.height = "0";
    Big_1.style.width = "0";
    Big_1.style.padding = "0";
    Big_1.style.transition = "0.4s ease-in-out";
  }
  function Click_Branding() {
    const Small_1 = document.querySelector("#small_1");
    const Small_2 = document.querySelector("#small_2");
    const Small_3 = document.querySelector("#small_3");
    const Small_4 = document.querySelector("#small_4");
    const Small_5 = document.querySelector("#small_5");
    const Big_1 = document.querySelector("#big_1");
    const Big_2 = document.querySelector("#big_2");

    // console.log(Small_1);

    Small_1.style.height = "0";
    Small_1.style.width = "0";
    Small_1.style.padding = "0";
    Small_1.style.transition = "";

    Small_2.style.height = "auto";
    Small_2.style.width = "380px";
    Small_2.style.padding = "0 12px";
    Small_2.style.transition = "0.4s ease-in-out";

    Small_3.style.height = "0";
    Small_3.style.width = "0";
    Small_3.style.padding = "0";
    Small_3.style.transition = "0.4s ease-in-out";

    Small_4.style.height = "0";
    Small_4.style.width = "0";
    Small_4.style.padding = "0";
    Small_4.style.transition = "0.4s ease-in-out";

    Small_5.style.height = "0";
    Small_5.style.width = "0";
    Small_5.style.padding = "0";
    Small_5.style.transition = "0.4s ease-in-out";

    Big_1.style.height = "auto";
    Big_1.style.width = "760px";
    Big_1.style.padding = "0 12px";
    Big_1.style.transition = "0.4s ease-in-out";

    Big_2.style.height = "0";
    Big_2.style.width = "0";
    Big_2.style.padding = "0";
    Big_2.style.transition = "0.4s ease-in-out";
  }
  function Click_Creative() {
    const Small_1 = document.querySelector("#small_1");
    const Small_2 = document.querySelector("#small_2");
    const Small_3 = document.querySelector("#small_3");
    const Small_4 = document.querySelector("#small_4");
    const Small_5 = document.querySelector("#small_5");
    const Big_1 = document.querySelector("#big_1");
    const Big_2 = document.querySelector("#big_2");

    // console.log(Small_1);

    Small_1.style.height = "0";
    Small_1.style.width = "0";
    Small_1.style.padding = "0";
    Small_1.style.transition = "0.4s ease-in-out";

    Small_2.style.height = "0";
    Small_2.style.width = "0";
    Small_2.style.padding = "0";
    Small_2.style.transition = "0.4s ease-in-out";

    Small_3.style.height = "0";
    Small_3.style.width = "0";
    Small_3.style.padding = "0";
    Small_3.style.transition = "0.4s ease-in-out";

    Small_4.style.height = "auto";
    Small_4.style.width = "380px";
    Small_4.style.padding = "0 12px";
    Small_4.style.transition = "0.4s ease-in-out";

    Small_5.style.height = "0";
    Small_5.style.width = "0";
    Small_5.style.padding = "0";
    Small_5.style.transition = "0.4s ease-in-out";

    Big_1.style.height = "0";
    Big_1.style.width = "0";
    Big_1.style.padding = "0";
    Big_1.style.transition = "0.4s ease-in-out";

    Big_2.style.height = "0";
    Big_2.style.width = "0";
    Big_2.style.padding = "0";
    Big_2.style.transition = "0.4s ease-in-out";
  }
  function Click_ID() {
    const Small_1 = document.querySelector("#small_1");
    const Small_2 = document.querySelector("#small_2");
    const Small_3 = document.querySelector("#small_3");
    const Small_4 = document.querySelector("#small_4");
    const Small_5 = document.querySelector("#small_5");
    const Big_1 = document.querySelector("#big_1");
    const Big_2 = document.querySelector("#big_2");

    // console.log(Small_1);

    Small_1.style.height = "auto";
    Small_1.style.width = "380px";
    Small_1.style.padding = "0 12px";
    Small_1.style.transition = "0.4s ease-in-out";

    Small_2.style.height = "auto";
    Small_2.style.width = "380px";
    Small_2.style.padding = "0 12px";
    Small_2.style.transition = "0.4s ease-in-out";

    Small_3.style.height = "0";
    Small_3.style.width = "0";
    Small_3.style.padding = "0";
    Small_3.style.transition = "0.4s ease-in-out";

    Small_4.style.height = "auto";
    Small_4.style.width = "380px";
    Small_4.style.padding = "0 12px";
    Small_4.style.transition = "0.4s ease-in-out";

    Small_5.style.height = "auto";
    Small_5.style.width = "380px";
    Small_5.style.padding = "0 12px";
    Small_5.style.transition = "0.4s ease-in-out;";

    Big_1.style.height = "auto";
    Big_1.style.width = "760px";
    Big_1.style.padding = "0 12px";
    Big_1.style.transition = "0.4s ease-in-out";

    Big_2.style.height = "0";
    Big_2.style.width = "0";
    Big_2.style.padding = "0";
    Big_2.style.transition = "0.4s ease-in-out";
  }
  function Click_Mock() {
    const Small_1 = document.querySelector("#small_1");
    const Small_2 = document.querySelector("#small_2");
    const Small_3 = document.querySelector("#small_3");
    const Small_4 = document.querySelector("#small_4");
    const Small_5 = document.querySelector("#small_5");
    const Big_1 = document.querySelector("#big_1");
    const Big_2 = document.querySelector("#big_2");

    // console.log(Small_1);

    Small_1.style.height = "0";
    Small_1.style.width = "0";
    Small_1.style.padding = "0";
    Small_1.style.transition = "0.4s ease-in-out";

    Small_2.style.height = "0";
    Small_2.style.width = "0";
    Small_2.style.padding = "0";
    Small_2.style.transition = "0.4s ease-in-out";

    Small_3.style.height = "0";
    Small_3.style.width = "0";
    Small_3.style.padding = "0";
    Small_3.style.transition = "0.4s ease-in-out";

    Small_4.style.height = "auto";
    Small_4.style.width = "380px";
    Small_4.style.padding = "0 12px";
    Small_4.style.transition = "0.4s ease-in-out";

    Small_5.style.height = "auto";
    Small_5.style.width = "380px";
    Small_5.style.padding = "0 12px";
    Small_5.style.transition = "0.4s ease-in-out";

    Big_1.style.height = "0";
    Big_1.style.width = "0";
    Big_1.style.padding = "0";
    Big_1.style.transition = "0.4s ease-in-out";

    Big_2.style.height = "0";
    Big_2.style.width = "0";
    Big_2.style.padding = "0";
    Big_2.style.transition = "0.4s ease-in-out";
  }

  return (
    <section id="isotope">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="lists">
              <li id="normal_li">Filter by</li>
              <li id="special_li" className="special_li1" onClick={Click_All}>
                <p>07</p>
                <span>All / </span>
              </li>
              <li id="special_li" onClick={Click_Apps}>
                <p>02</p>
                <span>Apps / </span>
              </li>
              <li id="special_li" onClick={Click_Branding}>
                <p>02</p>
                <span>Branding / </span>
              </li>
              <li id="special_li" onClick={Click_Creative}>
                <p>01</p>
                <span>Creative / </span>
              </li>
              <li id="special_li" onClick={Click_ID}>
                <p>05</p>
                <span>Identity / </span>
              </li>
              <li id="special_li" onClick={Click_Mock}>
                <p>02</p>
                <span>Mockup /</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row row_left_right g-4 pt-5">
          <div className="col-lg-4 col-md-6 col-sm-12" id="small_1">
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
          <div className="col-lg-8 col-md-6 col-sm-12" id="big_1">
            <div className="right_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img25-1920x1076.jpeg"
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
          <div className="col-lg-4 col-md-6 col-sm-12" id="small_2">
            <div className="left_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/7evLAXa6-oh__img30-1.jpeg"
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
          <div className="col-lg-4 col-md-6 col-sm-12" id="small_3">
            <div className="left_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/JwFczCN8-oh__img35.jpeg"
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
          <div className="col-lg-4 col-md-6 col-sm-12" id="small_4">
            <div className="left_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/guQWgJXg-oh__img26.jpeg"
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
          <div className="col-lg-8 col-md-6 col-sm-12" id="big_2">
            <div className="right_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/oh__img95-1920x1076.jpeg"
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
          <div className="col-lg-4 col-md-6 col-sm-12" id="small_5">
            <div className="left_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/MeKCvxP5-oh__img34.1.jpeg"
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
