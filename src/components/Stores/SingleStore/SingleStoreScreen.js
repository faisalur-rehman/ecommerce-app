import React from "react";
import Layout from "../../Layout/Layout";
import "./SingleStore.css";
import all from "../../../Assets/images/all.jpg";
import "../../../index.css";
import { Link } from "react-router-dom";

const SingleStoreScreen = ({ data, articles }) => {
  console.log("articles", articles);
  return (
    <Layout>
      <section class="ryad_store" style={{ background: "white" }}>
        <div class="container">
          <div class="row store-ryad-sidebar">
            <div class="ryad_store_nav col-lg-3 col-md-4 col-sm-6">
              <div id="accordion">
                <div class="card-store">
                  <div
                    class="card-header d-flex justify-content-between"
                    id="headingOne"
                  >
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <p class="mb-0">Men</p>
                    </button>
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i class="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <ul>
                        <li>
                          <a href=""> All</a>
                        </li>
                        <li>
                          <a href=""> Clothes</a>
                        </li>
                        <li>
                          <a href="">Shoes</a>
                        </li>
                        <li>
                          <a href="">Wathces and Jewelery</a>
                        </li>
                        <li>
                          <a href="">Bags</a>
                        </li>
                        <li>
                          <a href="">Accessories</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-store">
                  <div
                    class="card-header d-flex justify-content-between"
                    id="headingTwo"
                  >
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <p class="mb-0">Women</p>
                    </button>
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <i class="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <ul>
                        <li>
                          <a href=""> All</a>
                        </li>
                        <li>
                          <a href=""> Clothes</a>
                        </li>
                        <li>
                          <a href="">Shoes</a>
                        </li>
                        <li>
                          <a href="">Wathces and Jewelery</a>
                        </li>
                        <li>
                          <a href="">Bags</a>
                        </li>
                        <li>
                          <a href="">Accessories</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-store">
                  <div
                    class="card-header d-flex justify-content-between"
                    id="headingThree"
                  >
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      <p class="mb-0">Child</p>
                    </button>
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      <i class="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <ul>
                        <li>
                          <a href=""> All</a>
                        </li>
                        <li>
                          <a href=""> Clothes</a>
                        </li>
                        <li>
                          <a href="">Shoes</a>
                        </li>
                        <li>
                          <a href="">Accessories</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ryad_store_products col-lg-9 col-md-8 col-sm-6 mb-4">
              <div class="container">
                <div class="ryad_store_products_heading">
                  <h3 class="text-center">{data.store.shopName}</h3>
                </div>
                <div class="row">
                  {articles.articles.map((article) => (
                    <Link
                      to={`/product/${article._id}`}
                      class="col-lg-4 col-md-6 col-sm-12 mb-4"
                    >
                      <div class="product_image">
                        <a href="./single_product.html">
                          <img src={all} alt="" />
                        </a>
                      </div>
                      <div class="product_description mt-2">
                        <div class="d-flex justify-content-between">
                          <span>{article.indicatedPrice} DA</span>
                          <span>
                            <del> {article.indicatedPrice + 50}</del> DA
                          </span>
                          <span
                            class="d-inline-flex flex-column"
                            style={{ lineHeight: 1 }}
                          >
                            <i class="far fa-heart"></i>{" "}
                            <small>{article.likes}</small>
                          </span>
                        </div>
                        <span class="text-sp">
                          {" "}
                          {article.articleDescription}
                        </span>
                      </div>
                    </Link>
                  ))}

                  {/* <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="product_image">
                      <a href="./single_product.html">
                        <img src={all} alt="" />
                      </a>
                    </div>
                    <div class="product_description mt-2">
                      <div class="d-flex justify-content-between">
                        <span>1200 DA</span>
                        <span>
                          <del> 1200</del> DA
                        </span>
                        <span
                          class="d-inline-flex flex-column"
                          style={{ lineHeight: 1 }}
                        >
                          <i class="far fa-heart"></i> <small>11</small>
                        </span>
                      </div>
                      <span class="text-sp"> H&M</span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="product_image">
                      <a href="./single_product.html">
                        <img src={all} alt="" />
                      </a>
                    </div>
                    <div class="product_description mt-2">
                      <div class="d-flex justify-content-between">
                        <span>1200 DA</span>
                        <span>
                          <del> 1200</del> DA
                        </span>
                        <span
                          class="d-inline-flex flex-column"
                          style={{ lineHeight: 1 }}
                        >
                          <i class="far fa-heart"></i> <small>11</small>
                        </span>
                      </div>
                      <span class="text-sp"> H&M</span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="product_image">
                      <a href="./single_product.html">
                        <img src={all} alt="" />
                      </a>
                    </div>
                    <div class="product_description mt-2">
                      <div class="d-flex justify-content-between">
                        <span>1200 DA</span>
                        <span>
                          <del> 1200</del> DA
                        </span>
                        <span
                          class="d-inline-flex flex-column"
                          style={{ lineHeight: 1 }}
                        >
                          <i class="far fa-heart"></i> <small>11</small>
                        </span>
                      </div>
                      <span class="text-sp"> H&M</span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="product_image">
                      <a href="./single_product.html">
                        <img src={all} alt="" />
                      </a>
                    </div>
                    <div class="product_description mt-2">
                      <div class="d-flex justify-content-between">
                        <span>1200 DA</span>
                        <span>
                          <del> 1200</del> DA
                        </span>
                        <span
                          class="d-inline-flex flex-column"
                          style={{ lineHeight: 1 }}
                        >
                          <i class="far fa-heart"></i> <small>11</small>
                        </span>
                      </div>
                      <span class="text-sp"> H&M</span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="product_image">
                      <a href="./single_product.html">
                        <img src={all} alt="" />
                      </a>
                    </div>
                    <div class="product_description mt-2">
                      <div class="d-flex justify-content-between">
                        <span>1200 DA</span>
                        <span>
                          <del> 1200</del> DA
                        </span>
                        <span
                          class="d-inline-flex flex-column"
                          style={{ lineHeight: 1 }}
                        >
                          <i class="far fa-heart"></i> <small>11</small>
                        </span>
                      </div>
                      <span class="text-sp"> H&M</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SingleStoreScreen;
