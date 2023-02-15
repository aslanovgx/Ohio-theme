import React from "react";
import "./Products.scss";
import { HiArrowRight } from "react-icons/hi";
const Products = () => {
  return (
    <section id="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="products_header">
              <h1>Related Products</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="product_box">
              <div className="product_img">
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__026-600x600.jpg"
                  alt=""
                />
                <div className="collab_right">
                  <span className="btn">
                    Select options{" "}
                    <div className="arrow_right">
                      <HiArrowRight className="svg1" />
                      <HiArrowRight className="svg2" />
                    </div>
                  </span>
                  <span className="btn">
                    Save{" "}
                    <div className="arrow_right">
                      <HiArrowRight className="svg1" />
                      <HiArrowRight className="svg2" />
                    </div>
                  </span>
                </div>
              </div>
              <div className="product_details">
                <h1>Gosta Upholstery Chair</h1>
                <p>Chairs, Everyday essentials</p>
                <b>%89.00</b>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product_box">
              <div className="product_img">
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__052-600x600.jpg"
                  alt=""
                />
                <div className="collab_right">
                  <span className="btn">
                    Select options{" "}
                    <div className="arrow_right">
                      <HiArrowRight className="svg1" />
                      <HiArrowRight className="svg2" />
                    </div>
                  </span>
                  <span className="btn">
                    Save{" "}
                    <div className="arrow_right">
                      <HiArrowRight className="svg1" />
                      <HiArrowRight className="svg2" />
                    </div>
                  </span>
                </div>
              </div>
              <div className="product_details">
                <h1>Gosta Upholstery Chair</h1>
                <p>Chairs, Everyday essentials</p>
                <b>%89.00</b>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product_box">
              <div className="product_img">
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/ProductImage__002-600x600.jpg"
                  alt=""
                />
                <div className="collab_right">
                  <span className="btn">
                    Select options{" "}
                    <div className="arrow_right">
                      <HiArrowRight className="svg1" />
                      <HiArrowRight className="svg2" />
                    </div>
                  </span>
                  <span className="btn">
                    Save{" "}
                    <div className="arrow_right">
                      <HiArrowRight className="svg1" />
                      <HiArrowRight className="svg2" />
                    </div>
                  </span>
                </div>
              </div>
              <div className="product_details">
                <h1>Gosta Upholstery Chair</h1>
                <p>Chairs, Everyday essentials</p>
                <b>%89.00</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
