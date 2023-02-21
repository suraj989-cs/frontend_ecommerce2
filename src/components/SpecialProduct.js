import React from "react";
import iHeadphone from "../images/Iheadphone.png";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card my-3">
        <div className="d-flex justify-content-center">
          <div>
            <img src={iHeadphone} alt="watch" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="product-name">Apple headphone</h5>
            <h6 className="product-title">
              A smart Companion for smart people
            </h6>
            <div className="product-rating">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <p className="product-price"><span className="text-success">$1000</span> &nbsp; <strike>$2000</strike></p>
            <div className="discount-till d-flex align-items-center gap-10">
              <div className="d-flex gap-1"><b>5</b><span className="text-muted">days</span></div>
              <div className="d-flex gap-1 align-items-center prod-badge">
                <span className="badge rounded-circle p-3 bg-danger">2</span>:
                <span className="badge rounded-circle p-3 bg-danger">2</span>:
                <span className="badge rounded-circle p-3 bg-danger">2</span>
              </div>
            </div>
            <div className="prod-stock my-3">
              <p className="text-muted">Products: 12</p>
             <div className="progress">
             <div className="progress-bar" style={{width:"25%", background:"cyan"}} role="progressbar" aria-valuemin="0" aria-valuenow="60" aria-valuemax="100"></div>
             </div>
            </div>
              <div className="text-center"><Link className="button" to="">Add to Cart</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
