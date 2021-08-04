import React from "react";
import shop1 from "../../Assets/images/shop1.jpg";
import shop2 from "../../Assets/images/shop2.jpg";
import shop3 from "../../Assets/images/shop3.jpg";
import shop4 from "../../Assets/images/shop4.jpg";

const Stores = () => {
  return (
    <div>
      <section class="shops pt-5 mb-5">
        <div class=" container">
          <div class="shop-cards">
            <div class="card" style={{ backgroundImage: `url(${shop1})` }}>
              <span class="card__title  card-1">
                Store Ryad
                <br />
                Men - Women - Child
              </span>
            </div>
            <div class="card" style={{ backgroundImage: `url(${shop2})` }}>
              <span class="card__title  card-2">
                Store Amir
                <br />
                Women
              </span>
            </div>
            <div class="card" style={{ backgroundImage: `url(${shop3})` }}>
              <span class="card__title  card-3">
                Store ARC
                <br />
                House
              </span>
            </div>
            <div class="card" style={{ backgroundImage: `url(${shop4})` }}>
              <span class="card__title  card-4">
                Store Amir
                <br />
                Men
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stores;
