import { Field } from "formik";
import React from "react";
import "../../../Assets/Style.css";
import AppForm from "../../AppForm/AppForm";

const UserAccount = ({ initialValues, handleSubmit, data }) => {
  return (
    <AppForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      enableReinitialize
    >
      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div class="container-fluid">
            <button
              class="btn button_primary1"
              id="sidebarToggle"
              // onClick={() => handleToggleSidebar(true)}
            >
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
            <div class="row ">
              <div
                class="
                  my_account_edit_form
                  col-lg-8 col-md-8 col-sm-12
                  mx-auto
                  mb-4
                  
                "
              >
                <div class=" p-3 mt-2">
                  <div class=" form-group">
                    <label>
                      Mail address <span class="text-danger">*</span>
                    </label>
                    <Field type="email" class="form-control" name="email" />
                  </div>
                  <div class="form-group">
                    <label>
                      Password <span class="text-danger">*</span>{" "}
                    </label>
                    <Field
                      // type="password"
                      name="password"
                      class="form-control"
                    />
                  </div>

                  {/* <div class="form-group">
                    <label>
                      Shop Name <span class="text-danger">*</span>
                    </label>
                    <Field type="text" name="shopName" class="form-control" />
                  </div> */}
                  <div class="form-group">
                    <label>
                      Username <span class="text-danger">*</span>
                    </label>
                    <Field type="text" name="userName" class="form-control" />
                  </div>

                  <div class="form-group">
                    <label>
                      Phone <span class="text-danger">*</span>
                    </label>
                    <Field type="number" name="number" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>
                      Address <span class="text-danger">*</span>
                    </label>
                    <Field type="text" name="address" class="form-control" />
                  </div>
                  <p style={{ color: "green" }}>{data && data.message}</p>
                  <div>
                    <button type="submit" class="btn button_primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppForm>
  );
};

export default UserAccount;
