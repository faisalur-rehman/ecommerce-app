import React from "react";

const OrderReceived = () => {
  return (
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
          <button class="btn button_primary1" id="sidebarToggle">
            <i class="fa fa-home fa-2x" aria-hidden="true"></i>
          </button>
          <div></div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="seller_order_area">
          <h2 class="text-center">Orders Received</h2>
          <div class="row">
            <div class="seller_order_table col-lg-10 col-md-10 col-sm-12 mx-auto mb-4">
              <div class="table-responsive">
                <table class="table table-hover table-fixed fixed table-bordered text-center">
                  <thead>
                    <th width="120px">Orders</th>
                    <th width="120px">Date</th>
                    <th width="120px">Amount</th>
                    <th width="120px">Status</th>
                    <th width="120px">Order Detail</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Order-1</td>
                      <td>22-06-2021</td>
                      <td>2000 Da</td>
                      <td>Deliver</td>
                      <td>
                        <a href="./seller_order_recieved_details.html">
                          <i
                            class="fa fa-search fa-2x text-dark"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Order-2</td>
                      <td>22-06-2021</td>
                      <td>2000 Da</td>
                      <td>Deliver</td>
                      <td>
                        <a href="./seller_order_recieved_details.html">
                          <i
                            class="fa fa-search fa-2x text-dark"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Order-3</td>
                      <td>22-06-2021</td>
                      <td>2000 Da</td>
                      <td>Deliver</td>
                      <td>
                        <a href="./seller_order_recieved_details.html">
                          <i
                            class="fa fa-search fa-2x text-dark"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </td>
                    </tr>
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

export default OrderReceived;
