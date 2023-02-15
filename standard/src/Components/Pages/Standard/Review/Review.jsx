import React from "react";
import "./Review.scss";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Review = () => {
  return (
    <>
      <section id="review1">
        <div className="container">
          <div className="row_a">
            <div className="col-lg-12">
              <ul className="desc">
                <li>Description</li>
                <li>Additional Information</li>
                <li>Reviews (0)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="review2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="review_left">
                <h1>Online Return & Exchange Policy</h1>
                <p>
                  If you are not satisfied with your purchase, return it to us
                  for an exchange or refund, subject to the following terms.
                </p>
                <h1>Shipping & Handling</h1>
                <p>
                  For all the orders containing only Gift Cards, standard
                  shipping cost is US$25. Gift Cards are shipped separately from
                  merchandise and cannot be delivered to a P.O. Box.
                </p>
                <div>
                  <div>
                    <strong>Economy - US $20</strong>
                    <p>Allow 7-11 working days for delivery.</p>
                  </div>
                  <div>
                    <strong>Standard - US $25</strong>
                    <p>Allow 5-8 working days for delivery.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="review_right">
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/sM7eC9xC-product_attachement2.jpeg"
                  alt=""
                />
                <div className="centre_icon">
                  <BsFillPlayCircleFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
