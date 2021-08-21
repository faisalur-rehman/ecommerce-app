import { Field } from "formik";
import React from "react";
import AppForm from "../../AppForm/AppForm";
import Layout from "../../Layout/Layout";
import "./UserRegistration.css";

const UserRegistrationScreen = ({
  initialValues,
  handleSubmit,
  error,
  data,
}) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields data={data} error={error} />
    </AppForm>
  );
};

export default UserRegistrationScreen;

function FormFields({ data, error }) {
  console.log("data", data);
  console.log("error", error);
  return (
    <Layout>
      <section class="customer_form_area row">
        <div class="customer_login_form col-lg-6 col-md-6">
          <div className="form p-3 mt-5">
            <h2 class="text-center">Log in</h2>
            <hr />
            <div class="form-group">
              <label>
                Mail address <span class="text-danger">*</span>
              </label>
              <Field name="loginEmail" type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Password <span class="text-danger">*</span>{" "}
              </label>
              <Field
                name="loginPassword"
                type="password"
                class="form-control"
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn">
                Login
              </button>
            </div>

            <a class="d-block text-center mt-1">Forgot your Password ?</a>
          </div>
        </div>
        <div class="customer_sign_up_from col-lg-6 col-md-6 mb-4">
          <div class="form p-3 mt-5">
            <h2 class="text-center">Customer Registration</h2>
            <hr />
            <div class="form-group">
              <label>
                Mail address <span class="text-danger">*</span>
              </label>
              <Field name="email" type="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Password <span class="text-danger">*</span>{" "}
              </label>
              <Field name="password" type="password" class="form-control" />
            </div>
            <div class="form-group">
              <label>
                Confirm Password <span class="text-danger">*</span>{" "}
              </label>
              <Field
                name="confirmPassword"
                type="password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>First Name</label>
              <Field name="firstName" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <Field name="lastName" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Phone</label>
              <Field name="number" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Address</label>
              <Field name="address" type="text" class="form-control" />
            </div>
            <div class="text-center">
              <button type="submit" class="btn">
                Register
              </button>
            </div>
            <p style={{ color: "red", margin: 5 }}>
              {error.data && error.data.message}
            </p>
            <p style={{ color: "green", margin: 5 }}>{data && data.message}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
