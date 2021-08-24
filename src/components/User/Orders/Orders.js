import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import * as api from "../../../apis/api";
import OrdersScreen from "./OrdersScreen";

const Orders = () => {
  const { request, data } = useApi(api.getOrderHistory);
  console.log("here in account");

  useEffect(() => {
    async function fetchData() {
      console.log("hello");
      await request();
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return <div>{data && <OrdersScreen data={data} />}</div>;
};

export default Orders;
