import React from "react";
import capture from "../../../Assets/images/Capture.PNG";

const OrdersScreen = ({ data, handleCancelOrder }) => {
  return (
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
          <button class="btn button_primary1" id="sidebarToggle">
            <i class="fa fa-home fa-2x" aria-hidden="true">
              {" "}
            </i>
          </button>
          <div></div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="my_order_area">
          <div class="row">
            <div
              class="
                  my_order_table
                  col-lg-10 col-md-10 col-sm-12
                  mx-auto
                  mb-4
                "
            >
              <h2 class="text-center">My Orders</h2>
              <div class="table-responsive">
                <table
                  class="
                      table table-hover table-fixed table-bordered
                      fixed
                      text-center
                    "
                >
                  <thead>
                    <th width="120px">Ordered</th>
                    <th width="180px">Item</th>
                    <th width="120px">Date</th>
                    <th width="120px">Amount</th>
                    <th width="120px">Status</th>
                    <th width="120px"></th>
                  </thead>
                  <tbody>
                    {data.orderhistory.map((order) => (
                      <tr>
                        <td>{order.storeId.shopName}</td>
                        <td class="d-flex justify-content-lg-between">
                          <p>{order.articleId.articleDescription}</p>
                          <img src={capture} alt="" />
                        </td>
                        <td>12-6-2021</td>
                        <td>{order.price} Da</td>
                        <td>{order.status}</td>
                        <td>
                          <a
                            onClick={() => handleCancelOrder(order._id)}
                            class="btn button_danger"
                          >
                            Cancel
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersScreen;
