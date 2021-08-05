import React from "react";
import Layout from "../../Layout/Layout";

const Delivery = () => {
  return (
    <Layout>
      <div class="container">
        <div class="my_information_area" style={{ padding: 80 }}>
          <h2 class="text-center mt-5">Deliery Option</h2>
          <form class="mt-3">
            <p class="font-weight-bold">Select Delivery Option</p>
            <div class="row mb-1 bg-white p-3 m-1">
              <div class="col">
                <label style={{ width: 180 }}>Pick up at the store</label>
                <input
                  type="radio"
                  name="delivery_option"
                  value="pick_up_at_store"
                />
                <br />
                <label style={{ width: 180 }}>Delivery</label>
                <input type="radio" name="delivery_option" value="delivery" />
              </div>
            </div>
            <div class="row mb-1">
              <div class="col"></div>
            </div>
            <div class="row mb-1">
              <div class="col">
                <label>Address</label>
                <input type="text" name="address" class="form-control" />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <label>City</label>
                <input type="text" name="city" class="form-control" />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-lg-2 col-md-2 col-sm-2 mx-auto">
                <button
                  type="button"
                  class="btn button_primary text-center"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Proceed
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Delivery;
