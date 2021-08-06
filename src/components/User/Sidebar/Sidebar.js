import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import Messages from "../Messages/Messages";
import Orders from "../Orders/Orders";
import UserAccount from "../UserAccount/UserAccount";

const Sidebar = () => {
  const [account, setAccount] = useState(true);
  const [orders, setOrders] = useState(false);
  const [messages, setMessages] = useState(false);

  function handleActiveComponent(value) {
    if (value === "orders") {
      setOrders(true);
      setAccount(false);
      setMessages(false);
    } else if (value === "messages") {
      setOrders(false);
      setAccount(false);
      setMessages(true);
    } else {
      setOrders(false);
      setAccount(true);
      setMessages(false);
    }
  }

  return (
    <Layout>
      <div className="d-flex" id="wrapper" style={{ paddingTop: 80 }}>
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-light"></div>
          <div className="list-group list-group-flush">
            <p
              className={`
              list-group-item list-group-item-action list-group-item-light
              p-3 ${account && "activeclass"}`}
              onClick={() => handleActiveComponent("account")}
            >
              My Account
            </p>
            <p
              className={`
              list-group-item list-group-item-action list-group-item-light
              p-3 ${orders && "activeclass"}`}
              onClick={() => handleActiveComponent("orders")}
            >
              My Orders
            </p>
            <p
              className={`
              list-group-item list-group-item-action list-group-item-light
              p-3 ${messages && "activeclass"}`}
              onClick={() => handleActiveComponent("messages")}
            >
              My Mesaages
            </p>
          </div>
        </div>
        {account && <UserAccount />}
        {messages && <Messages />}
        {orders && <Orders />}
      </div>
    </Layout>
  );
};

export default Sidebar;
