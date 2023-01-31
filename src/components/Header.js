import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { TfiBag } from "react-icons/tfi";
import menu from "../images/menu.svg";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel: +919898033180">
                  +91 9898033180
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-3">
              <h2 className="mb-0">
                <Link className="text-white" to="">
                  <span className="d-flex">
                    <TfiBag />
                    &nbsp; ShopZe
                  </span>
                </Link>
              </h2>
            </div>

            <div className="col-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <button
                  className="input-group-text bg-warning "
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </button>
              </div>
            </div>

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="" className="d-flex text-white">
                    <img src={compare} alt="header-upper-link-compare" />
                    <p className="mb-0">
                      Comapre
                      <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="" className="d-flex text-white">
                    <img src={wishlist} alt="header-upper-link-wihslist" />
                    <p className="mb-0">
                      Favourite <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="" className="d-flex text-white">
                    <img
                      src={user}
                      alt="header-upper-link-user"
                      className="mb-0"
                    />
                    <p className="mb-0">
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="" className="d-flex">
                    <img src={cart} alt="header-upper-link-cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <span className="text-white">$0.00</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-content-center">
                <div className="d-flex pe-1">
                  <div class="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="menu-bottom-menu" />
                      <span className="ms-2 me-5 d-inline-block">
                        Shop categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-content-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
