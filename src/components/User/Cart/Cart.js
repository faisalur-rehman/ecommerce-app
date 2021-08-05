import React from "react";
import Layout from "../../Layout/Layout";
import "./Cart.css";
import sweater from "../../../Assets/images/sweater.png";

const Cart = () => {
  return (
    <Layout>
      <div class="container">
        <div class="my_cart_area" style={{ padding: 80 }}>
          <div class="my_cart_table mb-4 mt-4">
            <h2 class="text-center">My Cart</h2>
            <div class="table-responsive">
              <table
                class="
                table table-hover table-fixed table-bordered
                fixed
                text-center
              "
              >
                <thead>
                  <th width="180px">Article</th>
                  <th width="120px">Price</th>
                  <th width="140px">Quantity</th>
                  <th width="120px">Total Amount</th>
                  <th width="120px"></th>
                </thead>
                <tbody>
                  <tr>
                    <td class="d-flex justify-content-lg-between">
                      <img src={sweater} height="60px" width="60px" alt="" />
                      <p>PULL ROUGHT ZARA</p>
                    </td>
                    <td>2000 Da</td>
                    <td>
                      <div class="input-group">
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
                    </td>
                    <td>2000 Da</td>
                    <td>
                      <a class="btn btn-primary1">Cancel</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-lg-between">
                      <img src={sweater} height="60px" width="60px" alt="" />
                      <p>PULL ROUGHT ZARA</p>
                    </td>
                    <td>2000 Da</td>
                    <td>
                      <div class="input-group">
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
                    </td>
                    <td>2000 Da</td>
                    <td>
                      <a class="btn btn-primary1">Cancel</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="d-flex justify-content-lg-between">
                      <img src={sweater} height="60px" width="60px" alt="" />
                      <p>PULL ROUGHT ZARA</p>
                    </td>
                    <td>2000 Da</td>
                    <td>
                      <div class="input-group">
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
                    </td>
                    <td>2000 Da</td>
                    <td>
                      <a class="btn btn-primary1">Cancel</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-2 mx-auto">
                <a href="./my_information.html">
                  <button class="btn button_primary text-center">
                    Proceed
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
