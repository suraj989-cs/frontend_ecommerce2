import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import mainBanner from "../images/main-banner-1.jpg";
import catBanner01 from "../images/catbanner-01.jpg";
import catBanner02 from "../images/catbanner-02.jpg";
import catBanner03 from "../images/catbanner-03.jpg";
import catBanner04 from "../images/catbanner-04.jpg";
import service01 from "../images/service.png";
import service02 from "../images/service-02.png";
import service03 from "../images/service-03.png";
import service04 from "../images/service-04.png";
import service05 from "../images/service-05.png";

import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import headphone from "../images/headphone.jpg";
import iHeadphone from "../images/Iheadphone.png";
import ipad from "../images/tab.jpg";
import homepod from "../images/homepod.png";
import boatwatch from "../images/boatwatch.png"

import laptop from "../images/laptop.jpg";
import brand01 from "../images/brand-01.png";
import brand02 from "../images/brand-02.png";
import brand03 from "../images/brand-03.png";
import brand04 from "../images/brand-04.png";
import brand05 from "../images/brand-05.png";
import brand06 from "../images/brand-06.png";
import brand07 from "../images/brand-07.png";

import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative rounded-3">
                <img
                  src={mainBanner}
                  alt="main-banner-home"
                  className="img-fluid"
                />
                <div className="main-banner-content position-absolute ">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $990.00 or $41.62/mo. <br /> for 24 mo. Footnote
                  </p>
                  <Link to="" className="button">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner position-relative rounded-3">
                  <img
                    src={catBanner01}
                    alt="small-banner-home"
                    className="img-fluid"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptop max </h5>
                    <p>
                      From $1690.00 or <br /> $64/mo. for 12 mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative rounded-3">
                  <img
                    src={catBanner02}
                    alt="small-banner-home"
                    className=" img-fluid"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>Buy iWatch </h5>
                    <p>
                      From $990.00 or <br /> $21.62/mo. for 12 mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative rounded-3">
                  <img
                    src={catBanner03}
                    alt="small-banner-home"
                    className="img-fluid"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>Buy Ipad Tab</h5>
                    <p>
                      From $590.00 or <br /> $73.62/mo. for 12 mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative rounded-3">
                  <img
                    src={catBanner04}
                    alt="small-banner-home"
                    className=" img-fluid"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>new Arrival</h4>
                    <h5>Buy iHeadphone</h5>
                    <p>
                      From $550.00 or <br /> $12.62/mo. for 12 mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex justify-content-between align-baseline">
                <div className="d-flex align-items-center gap-10">
                  <img src={service01} alt="services" className="" />
                  <div>
                    <h6> Free Shipping</h6>
                    <p className="mb-0"> For all order over $1000 </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src={service02} alt="services" className="" />
                  <div>
                    <h6> Daily Surprise offers</h6>
                    <p className="mb-0"> Save upto 5% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src={service03} alt="services" className="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0"> Shop with expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src={service04} alt="services" className="" />
                  <div>
                    <h6> Affordable Prices</h6>
                    <p className="mb-0"> Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src={service05} alt="services" className="" />
                  <div>
                    <h6> Secure Payments</h6>
                    <p className="mb-0"> 100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Top categories</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-content-center">
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Camera</h6>
                    <p className="mb-0">10 Item</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Smart TV</h6>
                    <p className="mb-0">20 Item</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Headphones</h6>
                    <p className="mb-0">10 Item</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p className="mb-0">20 Item</p>
                  </div>
                  <img src={laptop} alt="camera" />
                </div>

                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Camera</h6>
                    <p className="mb-0">10 Item</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Smart TV</h6>
                    <p className="mb-0">20 Item</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Headphones</h6>
                    <p className="mb-0">10 Item</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p className="mb-0">20 Item</p>
                  </div>
                  <img src={laptop} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <h3 className="section-heading">Featured Collections</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="unique-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">

            <div className="col-3">
              <div className="unique-product-card text-white shadow-lg" style={{background: "#212529"}}>
                <h5 className="product-usp text-white">Big screen</h5>
                <h6 className="product-subtitle text-white">Flash Smart Watch</h6>
                <p className="product-desc">
                  From $990.00 or $41.62/mo. <br /> for 24 mo.
                </p>
                <div className="unique-image">
                  <img src={boatwatch} alt="product" className="img-fluid"/>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="unique-product-card shadow-lg" style={{background: "white"}}>
                <h5 className="product-usp">Big view</h5>
                <h6 className="product-subtitle ">Apple iPad Series 2</h6>
                <p className="product-desc">
                  From $990.00 or $41.62/mo. <br /> for 24 mo.
                </p>
                <div className="unique-image">
                  <img src={ipad} alt="product" className="img-fluid"/>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="unique-product-card shadow-lg" style={{background: "white"}}>
                <h5 className="product-usp">crystal sound</h5>
                <h6 className="product-subtitle">Apple Smart sound</h6>
                <p className="product-desc">
                  From $990.00 or $41.62/mo. <br /> for 24 mo.
                </p>
                <div className="unique-image">
                  <img src={iHeadphone} alt="product" className="img-fluid"/>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="unique-product-card shadow-lg" style={{background: "#212529"}}>
                <h5 className="product-usp text-white">Power Sound</h5>
                <h6 className="product-subtitle text-white">Power Pod 2</h6>
                <p className="product-desc text-white">
                  From $990.00 or $41.62/mo. <br /> for 24 mo.
                </p>
                <div className="unique-image">
                  <img src={homepod} alt="product" className="img-fluid" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="special-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Collection</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper bg-white p-3">
                <Marquee className="d-flex gap-30" pauseOnHover>
                  <div className="d-flex mx-4 w-25">
                    <img src={brand01} alt="brand" />
                  </div>
                  <div className="d-flex mx-4 w-25">
                    <img src={brand02} alt="brand" />
                  </div>
                  <div className="d-flex mx-4 w-25">
                    <img src={brand03} alt="brand" />
                  </div>
                  <div className="d-flex mx-4 w-25">
                    <img src={brand04} alt="brand" />
                  </div>
                  <div className="d-flex mx-4 w-25">
                    <img src={brand05} alt="brand" />
                  </div>
                  <div className="d-flex mx-4 w-25">
                    <img src={brand06} alt="brand" />
                  </div>
                  <div className="d-flex mx-4 w-25">
                    <img src={brand07} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Technologies</h3>
            </div>
          </div>
          <div className="row">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
