import React from "react";
import Layout from "../Layout/Layout";
import "./Product.css";
import sweater from "../../Assets/images/sweater.png";

const Product = () => {
  return (
    <Layout>
      <div class="product-body">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 mt-3">
              <div class="row">
                <figcaption class="col-3">
                  <ul class="d-flex flex-column ">
                    <li class="mb-2">
                      <img class="img-thumbnail" src={sweater} alt="" />
                    </li>
                    <li class="mb-2">
                      <img class="img-thumbnail" src={sweater} alt="" />
                    </li>
                    <li class="mb-2">
                      <img class="img-thumbnail" src={sweater} alt="" />
                    </li>
                  </ul>
                </figcaption>
                <figure class="col-7">
                  <img class="img-thumbnail" src={sweater} alt="" />
                </figure>
              </div>
            </div>
            <div class=" col-lg-6 col-md-6 col-sm-12 bg-white mt-5 mb-5">
              <div class="title">
                <h2 class="text-dark text-center">Pull rough Zara</h2>
              </div>
              <h2 class="text-center">1200 DA </h2>
              <p class="text-center">
                {" "}
                <del>1200 DA </del>
              </p>
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-3">
                  <p>Size:</p>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-6">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=" Default select example"
                  >
                    <option disabled selected>
                      Select Size
                    </option>
                    <option value="1">SM</option>
                    <option value="2">MD</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                  </select>
                </div>
              </div>
              <div class="input-group row">
                <div class="col-lg-3 col-md-4 col-sm-3">
                  <p>Quantity:</p>
                </div>
                <div class="col-lg-6 col-md-8 col-sm-6">
                  <div class="d-flex">
                    <span class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-number"
                        disabled="disabled"
                        data-type="minus"
                        data-field="quant[1]"
                      >
                        <span class="fa fa-minus"></span>
                      </button>
                    </span>
                    <input
                      type="text"
                      name="quant[1]"
                      class="form-control input-number"
                      value="1"
                      min="1"
                      max="10"
                    />
                    <span class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-number"
                        data-type="plus"
                        data-field="quant[1]"
                      >
                        <span class="fa fa-plus"></span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-4 mb-5 text-center">
                <a href="./my_cart.html" class="bnt button_primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div class="product-detail">
            <ul class="nav nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="#info">
                  Information
                </a>
              </li>
              <li class="">
                <a data-toggle="tab" href="#description">
                  Description
                </a>
              </li>
              <li class="">
                <a data-toggle="tab" href="#vendor-info">
                  Vendor Information
                </a>
              </li>
            </ul>
            <div class="row">
              <div class="tab-content active col-lg-8 col-md-8 col-12">
                <div id="info" class="tab-pane fade show active p-3 ">
                  <div>
                    <span>Category:</span> <span>Clothes</span>
                  </div>
                  <div>
                    <span>Section:</span> <span>Women</span>
                  </div>
                  <div>
                    <span>City:</span> <span>Oran </span>
                  </div>

                  <div>
                    <span>Brand:</span> <span>ZARA</span>
                  </div>
                  <div>
                    <span>On-Line:</span> <span>23-06-2021</span>
                  </div>
                </div>
                <div id="description" class="tab-pane fade show p-3 ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur ipsum quisquam odit libero id iure eos? Tempora
                    nisi error minus? Maxime blanditiis cumque ullam quas
                    pariatur ipsum nulla omnis nisi.
                  </p>
                </div>
                <div id="vendor-info" class="tab-pane fade show p-3">
                  <div>
                    <span>Shop: </span> <span>Shop Ryad</span>
                  </div>
                  <div>
                    <span>Address: </span> <span>12 adress street 112</span>
                  </div>
                  <div>
                    <span>Phone: </span> <span>+23456654 </span>
                  </div>

                  <div>
                    <span>Facebook: </span> <span>Shop Ryad</span>
                  </div>
                  <div>
                    <span>Instagram: </span> <span>Shop Ryad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
