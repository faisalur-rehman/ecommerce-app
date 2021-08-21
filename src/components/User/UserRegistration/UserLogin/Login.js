import React from "react";
import useApi from "../../../../hooks/useApi";
import * as api from "../../../../apis/api";
import UserLoginScreen from "./UserLoginScreen";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { error, data, request } = useApi(api.loginUser);
  const history = useHistory();
  async function handleSubmit({ formValues }) {
    console.log(formValues);

    try {
      const { data } = await request({ ...formValues, role: "client" });
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.client);
      history.push("/");
    } catch (errr) {
      console.log(errr.response);
    }
  }
  return (
    <UserLoginScreen
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      data={data}
      error={error}
    />
  );
};

export default Login;
