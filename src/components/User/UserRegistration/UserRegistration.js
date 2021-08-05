import React from "react";
import Layout from "../../Layout/Layout";
import "./UserRegistration.css";

const UserRegistration = () => {
  return (
    <Layout>
      <section class="customer_form_area row">
        <div class="customer_login_form col-lg-6 col-md-6">
          <form class="p-3 mt-5">
            <h2 class="text-center">Log in</h2>
            <hr />
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
            <div class="text-center">
              <button type="submit" class="btn">
                Login
              </button>
            </div>

            <a class="d-block text-center mt-1">Forgot your Password ?</a>
          </form>
        </div>
        <div class="customer_sign_up_from col-lg-6 col-md-6 mb-4">
          <form class="p-3 mt-5">
            <h2 class="text-center">Customer Registration</h2>
            <hr />
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
                Confirm Password <span class="text-danger">*</span>{" "}
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
            <div class="text-center">
              <button type="submit" class="btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default UserRegistration;
