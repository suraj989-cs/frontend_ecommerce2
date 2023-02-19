import React from "react";
import { Link } from "react-router-dom";
import blog01 from "../images/blog-1.jpg";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card shadow">
        <div className="card-image">
          <img src={blog01} alt="blogimage" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">11 June, 2023</p>
          <h5 className="title">Dive into the world of VR.</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            rem, at culpa facere omnis sed quos consectetur.
          </p>
          <Link className="button" to="">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
