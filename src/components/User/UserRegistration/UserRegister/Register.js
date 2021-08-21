import React, { useState } from "react";
import useApi from "../../../../hooks/useApi";
import UserRegisterScreen from "./RegisterScreen";
import * as api from "../../../../apis/api";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  number: "",
  address: "",
};

const Register = () => {
  const [response, setResponse] = useState("");
  const { error, data, request } = useApi(api.signupUser);

  async function handleSubmit({ formValues }) {
    console.log(formValues);
    if (formValues.password !== formValues.confirmPassword) {
      setResponse("Password Does not match");
    } else {
      try {
        await request(formValues);
      } catch (errr) {
        console.log(errr.response);
      }
      setResponse("");
    }
  }
  return (
    <UserRegisterScreen
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      data={data}
      error={error}
      response={response}
    />
  );
};

export default Register;
