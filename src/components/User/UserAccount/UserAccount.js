import React from "react";
import Layout from "../../Layout/Layout";
// import "../../Assets/Style.css";

const UserAccount = () => {
  return (
    <Layout>
      <div class="d-flex" id="wrapper" style={{ padding: 100 }}>
        <div class="border-end bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading border-bottom bg-light"></div>
          <div class="list-group list-group-flush">
            <a
              class="
              list-group-item list-group-item-action list-group-item-light
              p-3
              activeclass
            "
              href="#!"
            >
              My Account
            </a>
            <a
              class="
              list-group-item list-group-item-action list-group-item-light
              p-3
            "
              href="./my_orders.html"
            >
              My Orders
            </a>
            <a
              class="
              list-group-item list-group-item-action list-group-item-light
              p-3
            "
              href="./my_messages.html"
            >
              My Mesaages
            </a>
          </div>
        </div>
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
            <section class="my_account_area">
              <h2 class="text-center">My Account</h2>
              <div class="row">
                <div
                  class="
                  my_account_edit_form
                  col-lg-8 col-md-8 col-sm-12
                  mx-auto
                  mb-4
                "
                >
                  <form class="p-3 mt-2">
                    <div class="form-group">
                      <label>
                        Mail address <span class="text-danger">*</span>
                      </label>
                      <input type="email" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>
                        Password <span class="text-danger">*</span>{" "}
                      </label>
                      <input type="password" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>
                        Confirm Password <span class="text-danger">*</span>
                      </label>
                      <input type="password" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>First Name</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>Phone</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label>Address</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div>
                      <button type="submit" class="btn button_primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserAccount;
