import React from "react";
import { Link } from "react-router-dom";
import { TfiBag } from "react-icons/tfi";
import newsletter from "../images/newsletter.png";
import appstore from "../images/appstore.11156c0c81561772662d.png";
import playstore from "../images/playstore.68b0b4ca44cc0b8e6108.png";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer-top py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="footer-top-data-newsletter" />
                <h2 className="text-white mb-0 ">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group py-1">
                <input
                  type="Email"
                  className="form-control"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <Link className="input-group-text p-2" id="basic-addon2" to="">
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-middle py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-3">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 139 vill: Budasan kadi <br /> Dist: Mehasana Chattral
                  Road Near Hitachi <br /> Pincode: 382715
                </address>
                <a
                  href="tel:+91 9898033180"
                  className="mt-4 text-white d-block fs-6 mb-1"
                >
                  +91 9898033180
                </a>
                <a
                  href="mailto: mehtasuraj7984@gmail.com"
                  className="mt-3 text-white fs-6 d-block mb-2"
                >
                  mehtasuraj7984@gmail.com
                </a>
                <div className="social_icons d-flex align-content-center gap-30">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsTwitter className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  Search
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  FAQs
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Link</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  HeadPhones
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Watches
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Our App</h4>
                <div className="footer-link d-flex flex-column">
                  <p className="mb-0 text-white">Download Our App from PlayStore or<br />AppStore and get 15% discount on your<br />first Order.</p>
                  <div className="d-flex my-3">
                    <img className="w-50"src={appstore} alt="footer-link-appstore" />
                    <img className="w-50" src={playstore} alt="footer-link-playstore" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-bottom py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()}; Powered By ShopZe <TfiBag/>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
