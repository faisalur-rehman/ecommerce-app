import React from "react";
import Layout from "../../Layout/Layout";
import Login from "./UserLogin/Login";
import Register from "./UserRegister/Register";
import "./UserRegistration.css";

const UserRegistrationScreen = () => {
  return (
    <Layout>
      <section class="customer_form_area row">
        <Login />
        <Register />
      </section>
    </Layout>
  );
};

export default UserRegistrationScreen;
