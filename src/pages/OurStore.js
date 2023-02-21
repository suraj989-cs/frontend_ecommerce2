import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";

import homepod from "../images/homepod.png";
import boatwatch2 from "../images/boatwatch2.png";
import grid01 from "../images/gr.svg";
import grid02 from "../images/gr2.svg";
import grid03 from "../images/gr3.svg";
import grid04 from "../images/gr4.svg";
import ProductCard from "../components/ProductCard";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    // alert(grid);

    return (
        <>
            <Meta title={"Our store"} />
            <BreadCrumb title="Our store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Shop By Categories</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Laptop</li>
                                        <li>Camera</li>
                                        <li>TV</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Filter By</h3>
                                <div className="filter-card-availability my-4">
                                    <h4 className="sub-title">Availability</h4>
                                    <div className="availability-div">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="in-stock" />
                                            <label className="form-check-label text-success" htmlFor="in-stock">In Stock (12)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="out-stock" disabled />
                                            <label className="form-check-label text-danger" htmlFor="out-stock">Out Stock (0)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-card-price my-4">
                                    <h4 className="sub-title">Price</h4>
                                    <div className="input-div d-flex align-items-center gap-10">$
                                        <div><input type="text" class="form-control" name="" id="price-from" placeholder="From" /></div>
                                        <div><input type="text" class="form-control" name="" id="price-to" placeholder="To" /></div>
                                    </div>
                                </div>
                                <div className="filter-card-color my-4">
                                    <h4 className="sub-title">Colors</h4>
                                    <div className="color-div">
                                        <ul className="filter-colors ps-0 mt-2">
                                            <li></li><li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-card-Size">
                                    <h4 className="sub-title">Size</h4>
                                    <div className="size-div">
                                        <div className="form-check text-muted">
                                            <input className="form-check-input" type="checkbox" value="" id="size-s" />
                                            <label className="form-check-label" htmlFor="size-s">S (2)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="size-m" />
                                            <label className="form-check-label" htmlFor="size-m">M (3)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="size-l" disabled />
                                            <label className="form-check-label" htmlFor="size-l">L (0)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="size-xl" />
                                            <label className="form-check-label" htmlFor="size-xl">XL (21)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="size-xxl" disabled />
                                            <label className="form-check-label" htmlFor="size-xxl">XXL (0)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Product Tags</h3>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge" >Headphone</span>
                                    <span className="badge" >Laptop</span>
                                    <span className="badge" >TV</span>
                                    <span className="badge" >Smart Watch</span>
                                    <span className="badge" >Camera</span>
                                    <span className="badge" >Smart Phone</span>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Random Products</h3>
                                <div className="random-products d-flex " style={{ cursor: "pointer" }}>
                                    <div className="w-50">
                                        <img src={homepod} alt="random product" className="img-fluid" />
                                    </div>
                                    <div className="random-product-content d-flex flex-column w-50">
                                        <h5 className="product-title mb-0"><span className="text-warning">Realme </span>Surround Sound homePod 2</h5>
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
                                        <div className="product-price text-danger"><b>$600</b></div>
                                    </div>
                                </div>

                                <hr className="text-muted" />

                                <div className="random-products d-flex" style={{ cursor: "pointer" }}>
                                    <div className="w-50">
                                        <img src={boatwatch2} alt="random product" className="img-fluid" />
                                    </div>
                                    <div className="random-product-content d-flex flex-column w-50">
                                        <h5 className="product-title mb-0"><span className="text-danger">Boat </span>Flash Smart Companion For Smart People</h5>
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
                                        <div className="product-price text-danger"><b>$200</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">

                            <div className="filter-sort-grid shadow" >
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 w-50">Sort By:</p>
                                        <select name="" class="form-control form-select" id="">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling">Best Selling</option>
                                            <option value="title-ascending">Alphabetically A-Z</option>
                                            <option value="title-descending">Alphabetically Z-A</option>
                                            <option value="price-ascending">Price Low to High</option>
                                            <option value="price-descending">Price High to Low</option>
                                            <option value="date-ascending">Date Old to New</option>
                                            <option value="title-descending">Date New to Old</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 text-dark">12 Products</p>
                                        <div className="grid-layout d-flex gap-10">
                                            <img src={grid01} onClick={() => { setGrid(1) }} alt="grid" className="img-fluid d-block" width={20} height={20} />
                                            <img src={grid02} onClick={() => { setGrid(2) }} alt="grid" className="img-fluid d-block" width={20} height={20} />
                                            <img src={grid03} onClick={() => { setGrid(3) }} alt="grid" className="img-fluid d-block" width={20} height={20} />
                                            <img src={grid04} onClick={() => { setGrid(4) }} alt="grid" className="img-fluid d-block" width={20} height={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="products-list my-4 ">
                                <div className="row">
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStore;
