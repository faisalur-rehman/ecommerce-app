import React, { useState } from "react";
import UserRegistrationScreen from "./UserRegistrationScreen";
import * as api from "../../../apis/api";
import useApi from "../../../hooks/useApi";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  number: "",
  address: "",
};

const UserRegistration = () => {
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
    <div>
      <UserRegistrationScreen
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        data={data}
        error={error}
        response={response}
      />
    </div>
  );
};

export default UserRegistration;
