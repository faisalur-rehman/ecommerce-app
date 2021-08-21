import React from "react";
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
  const { error, data, request } = useApi(api.signupUser);
  async function handleSubmit({ formValues }) {
    console.log(formValues);
    try {
      await request(formValues);
    } catch (errr) {
      console.log(errr.response);
    }
  }
  return (
    <div>
      <UserRegistrationScreen
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        data={data}
        error={error}
      />
    </div>
  );
};

export default UserRegistration;
