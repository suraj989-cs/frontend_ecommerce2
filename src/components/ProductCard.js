import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import product01 from "../images/boatwatch.png";
import product02 from "../images/boatwatch2.png";
import addcart from "../images/add-cart.svg";
import compare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import wishlist from "../images/wish.svg";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative shadow" to="">
        <div className="product-image">
          <img src={product01} alt="product" className="img-fluid" />
          <img src={product02} alt="product" className="img-fluid" />
        </div>
        <div className="product-content ps-2">
          <h6 className="product-name">Boat Flash</h6>
          <h5 className="product-title">
            A Smart Companion for Your Active Lifestyle
          </h5>
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
          <p className="product-price text-success">$1000</p>
        </div>

        <div className="product-wishlist position-absolute">
          <Link to="">
            <img src={wishlist} alt="wishlist" />
          </Link>
        </div>

        <div className="product-action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link to="">
              <img src={compare} alt="addcart" />
            </Link>
            <Link to="">
              <img src={view} alt="view" />
            </Link>
            <Link to="">
              <img src={addcart} alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
