import { Field } from "formik";
import React from "react";
import AppForm from "../../../AppForm/AppForm";

const UserRegisterScreen = ({
  initialValues,
  handleSubmit,
  error,
  data,
  response,
}) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields data={data} error={error} response={response} />
    </AppForm>
  );
};

export default UserRegisterScreen;

function FormFields({ data, error, response }) {
  console.log("data", data);
  console.log("error", error);
  return (
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
          <Field name="confirmPassword" type="password" class="form-control" />
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
        <p style={{ color: "red", margin: 5 }}>{response}</p>
        <p style={{ color: "green", margin: 5 }}>{data && data.message}</p>
      </div>
    </div>
  );
}
