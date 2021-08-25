import React, { useState, useEffect } from "react";
import useApi from "../../../hooks/useApi";
// import Aside from "./Aside/Aside";
import UserAccount from "./UserAccount";
import * as api from "../../../apis/api";

const userProfile = {
  userName: "",
  shopName: "",
  email: "",
  password: "",
  number: "",
  address: "",
  facebook: "",
  instagram: "",
  sections: [],
};

const Account = () => {
  const { request, data: userProfile } = useApi(api.getUserProfile);
  const updateUser = useApi(api.updateProProfile);
  console.log("here in account");

  useEffect(() => {
    async function fetchData() {
      console.log("hello");
      await request();
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  const [toggled, setToggled] = useState(false);
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const handleSubmit = async ({ formValues }) => {
    console.log("handle submit: ", formValues);
    try {
      await updateUser.request(formValues);
    } catch (_) {}
  };

  return (
    <div>
      <UserAccount
        handleToggleSidebar={handleToggleSidebar}
        toggled={toggled}
        initialValues={userProfile}
        handleSubmit={handleSubmit}
        data={updateUser.data}
      />
    </div>
  );
};

export default Account;
