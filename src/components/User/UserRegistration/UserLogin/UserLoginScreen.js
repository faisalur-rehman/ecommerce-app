import { Field } from "formik";
import React from "react";
import AppForm from "../../../AppForm/AppForm";

const UserLoginScreen = ({
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

export default UserLoginScreen;

function FormFields({ error }) {
  console.log("error", error);
  return (
    <div class="customer_login_form col-lg-6 col-md-6">
      <div className="form p-3 mt-5">
        <h2 class="text-center">Log in</h2>
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
        <p style={{ color: "red" }}>{error.data && error.data.message}</p>
        <div class="text-center">
          <button type="submit" class="btn">
            Login
          </button>
        </div>

        <a class="d-block text-center mt-1">Forgot your Password ?</a>
      </div>
    </div>
  );
}
