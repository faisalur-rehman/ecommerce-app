import React from "react";
import sweater from "../../../Assets/images/sweater.png";

const Articles = () => {
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
        <div class="my_messages_area">
          <h2 class="text-center">My Articles</h2>
          <div class="row">
            <div class="my_messages_table col-lg-10 col-md-10 col-sm-12 mx-auto mb-4">
              <div class="table-responsive">
                <table class="table table-hover table-fixed fixed table-bordered text-center">
                  <thead>
                    <th width="120px">Article</th>
                    <th width="120px">Photo</th>
                    <th width="120px">Price</th>
                    <th width="120px">Detail</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pull rough Zara</td>
                      <td>
                        <img src={sweater} height="60px" width="60px" alt="" />
                      </td>
                      <td>2000 Da</td>
                      <td>
                        <a href="./add_item.html">
                          <i
                            class="fa fa-search fa-2x text-dark"
                            aria-hidden="true"
                          ></i>{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Pull rough Zara</td>
                      <td>
                        <img src={sweater} height="60px" width="60px" alt="" />
                      </td>
                      <td>2000 Da</td>
                      <td>
                        <a href="./add_item.html">
                          <i
                            class="fa fa-search fa-2x text-dark"
                            aria-hidden="true"
                          ></i>{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Pull rough Zara</td>
                      <td>
                        <img src={sweater} height="60px" width="60px" alt="" />
                      </td>
                      <td>2000 Da</td>
                      <td>
                        <a href="./add_item.html">
                          <i
                            class="fa fa-search fa-2x text-dark"
                            aria-hidden="true"
                          ></i>{" "}
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

export default Articles;
