import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div class="nav-top" style={{ paddingTop: 100 }}>
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
      </div>
      <section className="hero_section">
        <div
          id="carousel"
          className="carousel slide hero-slides"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              className="active"
              data-target="#carousel"
              data-slide-to="0"
            ></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active boat">
              <div className="container h-100 d-none d-md-block"></div>
            </div>
            <div className="carousel-item sea">
              <div className="container h-100 d-none d-md-block"></div>
            </div>
            <div className="carousel-item river">
              <div className="container h-100 d-none d-md-block"></div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Main;
