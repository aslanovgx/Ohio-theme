import React from "react";
import "./Modern.scss";
import { HiArrowRight } from "react-icons/hi";

const Modern = () => {
  return (
    <section id="modern">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="modern_header">
              <span>Shop</span>
              <span>{">"} Chairs</span>
              <span>{">"} Modern Upholstery Stool</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="table_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/kfnQjzZB-ProductImage__018.jpg"
                alt=""
              />
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/vvT68sbJ-ProductImage__017.jpg"
                alt=""
              />
            </div>
            <div className="table_img">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/nHTDq8be-ProductImage__019.jpg"
                alt=""
              />
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio.clbthemes.com/ProductImage__020.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="table_details">
              <span className="btn">In stock</span>
              <h1>Modern Upholstery Stool</h1>
              <h5>
                <b>$</b>89.00
              </h5>
              <p>
                <b>SKU:</b> 29045-SB-2 <b>Categories:</b> Chairs, Everyday
                essentials <b>Tags:</b> Creative, Shop, WordPress
              </p>
              The current product may have a <b>manufacturer's warranty.</b>{" "}
              Visit the website or contact us for full warranty details.
              <p id="border_p">
                Free delivery available; Use promo-code and save up to 25%;
              </p>
              <h4>Quantity:</h4>
              <span>
                <span> +</span> <span>1</span> <span>+</span>
              </span>
              <div className="collab_right">
                <span className="btn">
                  Add to cart{" "}
                  <div className="arrow_right">
                    <HiArrowRight className="svg1" />
                    <HiArrowRight className="svg2" />
                  </div>
                </span>
                <span className="btn">Save </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modern;
