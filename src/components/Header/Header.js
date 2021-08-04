import React from "react";
import capture from "../../Assets/images/Capture.PNG";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header class="header sticky">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#1">
              {" "}
              <img src={capture} alt="logo" class="img-fluid" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="has-search col-lg-7 col-md-6 col-sm-12">
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search, Category, City .."
                />
              </div>
              <div class="header_right col-lg-5  col-md-6 col-sm-12 d-flex">
                <button class="btn btn-sm mr-4">Client Access </button>
                <button class="btn btn-sm mr-4">Pro Access </button>
                <a href="./my_cart.html">
                  <i class="fas fa-cart-plus fa-2x text-dark"></i>
                </a>
              </div>
            </div>
          </nav>
          {/* <div class="nav-top">
            <ul class="nav mb-2 mt-1 bg-white justify-content-center">
              <li class="nav-item mr-5">
                <a class="nav-link active" href="#1">
                  All
                </a>
              </li>
              <li class="nav-item mr-5">
                <a class="nav-link" href="#1">
                  Ready To Wear
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#1">
                  House
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
