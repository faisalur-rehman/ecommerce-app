import React, { useState } from "react";
import Aside from "./Aside/Aside";
import UserAccount from "./UserAccount";

const Account = () => {
  const [toggled, setToggled] = useState(false);
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <div>
      <Aside toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
      <UserAccount
        handleToggleSidebar={handleToggleSidebar}
        toggled={toggled}
      />
    </div>
  );
};

export default Account;
