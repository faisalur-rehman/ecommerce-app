import React from "react";
import { Link } from "react-router-dom";
import capture from "../../Assets/images/Capture.PNG";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header class="header sticky">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" class="navbar-brand">
              <img src={capture} alt="logo" class="img-fluid" />
            </Link>
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
                <Link to="/user-registration">
                  <button class="btn btn-sm mr-4">Client Access </button>
                </Link>
                <button class="btn btn-sm mr-4">Pro Access </button>
                <Link to="/cart">
                  <i class="fas fa-cart-plus fa-2x text-dark"></i>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
