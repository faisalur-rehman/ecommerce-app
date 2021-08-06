import React from "react";
import capture from "../../../Assets/images/Capture.PNG";

const Orders = () => {
  return (
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
                  <tr>
                    <td>Shop Ryad N1234</td>
                    <td class="d-flex justify-content-lg-between">
                      <p>PULL ROUGHT ZARA</p>
                      <img src={capture} alt="" />
                    </td>
                    <td>12-6-2021</td>
                    <td>2000 Da</td>
                    <td>Validated</td>
                    <td>
                      <a class="btn button_danger">Cancel</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Shop Ryad N1234</td>
                    <td class="d-flex justify-content-lg-between">
                      <p>PULL ROUGHT ZARA</p>
                      <img src={capture} alt="" />
                    </td>
                    <td>12-6-2021</td>
                    <td>2000 Da</td>
                    <td>Validated</td>
                    <td>
                      <a class="btn button_danger">Cancel</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Shop Ryad N1234</td>
                    <td class="d-flex justify-content-lg-between">
                      <p>PULL ROUGHT ZARA</p>
                      <img src={capture} alt="" />
                    </td>
                    <td>12-6-2021</td>
                    <td>2000 Da</td>
                    <td>Validated</td>
                    <td>
                      <a class="btn button_danger">Cancel</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
