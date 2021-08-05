import React from "react";
import Layout from "../../Layout/Layout";

const UserInformation = () => {
  return (
    <Layout>
      <div class="container">
        <div class="my_information_area" style={{ padding: 80 }}>
          <h2 class="text-center mt-5">My Information</h2>
          <form action="./delivery_option.html">
            <div class="row mb-1">
              <div class="col">
                <label>
                  Mail Address <span class="text-danger">*</span>
                </label>
                <input type="email" name="mailAddress" class="form-control" />
              </div>
            </div>
            <div class="row mb-1">
              <div class="col">
                <label>
                  Last Name <span class="text-danger">*</span>
                </label>
                <input type="text" name="lastName" class="form-control" />
              </div>
            </div>
            <div class="row mb-1">
              <div class="col">
                <label>
                  First Name <span class="text-danger">*</span>
                </label>
                <input type="text" name="firstName" class="form-control" />
              </div>
            </div>
            <div class="row mb-1">
              <div class="col">
                <label>
                  Phone No <span class="text-danger">*</span>
                </label>
                <input type="text" name="phoneNo" class="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col-2 mx-auto mt-3">
                <button type="submit" class="btn button_primary text-center">
                  Proceed{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default UserInformation;
