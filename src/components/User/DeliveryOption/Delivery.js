import React, { useState } from "react";
import DeliveryScreen from "./DeliveryScreen";
import * as api from "../../../apis/api";
import useApi from "../../../hooks/useApi";

const initialValues = {
  deliveryAddress: "",
  deliveryCity: "",
};

const Delivery = () => {
  const { data, request } = useApi(api.addOrderHistory);
  const [deliveryType, setDeliveryType] = useState();

  async function handleSubmit({ formValues }) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    try {
      await request({
        ...cart,
        ...formValues,
        deliveryOption: deliveryType,
      });
      // console.log("data", data);
    } catch (_) {}
  }

  return (
    <div>
      <DeliveryScreen
        setDeliveryType={setDeliveryType}
        deliveryType={deliveryType}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        data={data}
      />
    </div>
  );
};

export default Delivery;
