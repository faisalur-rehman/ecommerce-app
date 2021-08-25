import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import * as api from "../../../apis/api";
import OrdersScreen from "./OrdersScreen";

const Orders = () => {
  const { request, data } = useApi(api.getOrderHistory);
  const deleteHistory = useApi(api.deleteOrderHistory);
  console.log("here in account");

  useEffect(() => {
    async function fetchData() {
      console.log("hello");
      await request();
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  const handleCancelOrder = async (id) => {
    console.log("id", id);
    try {
      await deleteHistory.request({ orderHistoryId: id });
      window.location.reload();
    } catch (_) {}
  };
  return (
    <div>
      {data && (
        <OrdersScreen data={data} handleCancelOrder={handleCancelOrder} />
      )}
    </div>
  );
};

export default Orders;
