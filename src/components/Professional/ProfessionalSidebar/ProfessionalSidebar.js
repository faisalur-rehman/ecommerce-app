import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import Messages from "../../User/Messages/Messages";

import ProfessionalAccount from "../Account/ProfessionalAccount";
import AddItem from "../AddItem/AddItem";
import Articles from "../Articles/Articles";
import CompletedOrders from "../CompletedOrders/CompletedOrders";
import OrderReceived from "../OrderReceived/OrderReceived";

const ProfessionalSidebar = () => {
  const [account, setAccount] = useState(true);
  const [completedOrders, setCompletedOrders] = useState(false);
  const [messages, setMessages] = useState(false);
  const [orderReceived, setOrderReceived] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const [articles, setArticles] = useState(false);

  function handleActiveComponent(value) {
    if (value === "ordersReceived") {
      setOrderReceived(true);
      setAccount(false);
      setMessages(false);
      setCompletedOrders(false);
      setAddItem(false);
      setArticles(false);
    } else if (value === "messages") {
      setOrderReceived(false);
      setAccount(false);
      setMessages(true);
      setCompletedOrders(false);
      setAddItem(false);
      setArticles(false);
    } else if (value === "ordersCompleted") {
      setOrderReceived(false);
      setAccount(false);
      setMessages(false);
      setCompletedOrders(true);
      setAddItem(false);
      setArticles(false);
    } else if (value === "add") {
      setOrderReceived(false);
      setAccount(false);
      setMessages(false);
      setCompletedOrders(false);
      setAddItem(true);
      setArticles(false);
    } else if (value === "articles") {
      setOrderReceived(false);
      setAccount(false);
      setMessages(false);
      setCompletedOrders(false);
      setAddItem(false);
      setArticles(true);
    } else {
      setOrderReceived(false);
      setCompletedOrders(false);
      setAccount(true);
      setMessages(false);
      setAddItem(false);
      setArticles(false);
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
              p-3 ${orderReceived && "activeclass"}`}
              onClick={() => handleActiveComponent("ordersReceived")}
            >
              Order Received
            </p>
            <p
              className={`
              list-group-item list-group-item-action list-group-item-light
              p-3 ${messages && "activeclass"}`}
              onClick={() => handleActiveComponent("messages")}
            >
              My Mesaages
            </p>
            <p
              className={`
              list-group-item list-group-item-action list-group-item-light
              p-3 ${completedOrders && "activeclass"}`}
              onClick={() => handleActiveComponent("ordersCompleted")}
            >
              Completed Orders
            </p>
            <p
              className={`
              list-group-item list-group-item-action list-group-item-light
              p-3 ${addItem && "activeclass"}`}
              onClick={() => handleActiveComponent("add")}
            >
              Add Item
            </p>
            <p
              className={`
              list-group-item list-group-item-action list-group-item-light
              p-3 ${articles && "activeclass"}`}
              onClick={() => handleActiveComponent("articles")}
            >
              My Articles
            </p>
          </div>
        </div>
        {account && <ProfessionalAccount />}
        {messages && <Messages />}
        {orderReceived && <OrderReceived />}
        {completedOrders && <CompletedOrders />}
        {addItem && <AddItem />}
        {articles && <Articles />}
      </div>
    </Layout>
  );
};

export default ProfessionalSidebar;
