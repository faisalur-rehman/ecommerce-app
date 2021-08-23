import React, { useState } from "react";
import DeliveryScreen from "./DeliveryScreen";
import * as api from "../../../apis/api";
import useApi from "../../../hooks/useApi";

const initialValues = {
  deliveryAddress: "",
  deliveryCity: "",
};

const Delivery = () => {
  const { request } = useApi(api.addOrderHistory);
  const [deliveryType, setDeliveryType] = useState();
  console.log("dei", deliveryType);

  async function handleSubmit({ formValues }) {
    console.log("from", formValues);
    let cart = JSON.parse(localStorage.getItem("cart"));
    try {
      const { data } = await request({
        ...cart,
        ...formValues,
        deliveryOption: deliveryType,
      });
      console.log("data", data);
    } catch (_) {}
  }

  return (
    <div>
      <DeliveryScreen
        setDeliveryType={setDeliveryType}
        deliveryType={deliveryType}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Delivery;
