import React from "react";
import Layout from "../../Layout/Layout";
import "./Cart.css";
import sweater from "../../../Assets/images/sweater.png";

const CartScreen = ({ products, handleCancel }) => {
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
                  {products.length > 0 ? (
                    products.map((product) => (
                      <tr>
                        <td class="d-flex justify-content-lg-between">
                          <img
                            src={sweater}
                            height="60px"
                            width="60px"
                            alt=""
                          />
                          <p>{product.articleName}</p>
                        </td>
                        <td>{product.finalPrice} Da</td>
                        <td>{product.quantity}</td>
                        <td>{product.finalPrice} Da</td>
                        <td>
                          <button
                            onClick={() => handleCancel(product.articleId)}
                            class="btn btn-primary1"
                            href="#1"
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p>No Item in the Cart</p>
                  )}
                </tbody>
              </table>
            </div>
            {products.length > 0 && (
              <div class="row">
                <div class="col-2 mx-auto">
                  <a href="./my_information.html">
                    <button class="btn button_primary text-center">
                      Proceed
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartScreen;
