import { Field } from "formik";
import React from "react";
import AppForm from "../../AppForm/AppForm";
import Layout from "../../Layout/Layout";

const DeliveryScreen = ({
  setDeliveryType,
  deliveryType,
  initialValues,
  handleSubmit,
}) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields
        setDeliveryType={setDeliveryType}
        deliveryType={deliveryType}
      />
    </AppForm>
  );
};

export default DeliveryScreen;

function FormFields({ error, setDeliveryType, deliveryType }) {
  console.log("error", error);
  return (
    <Layout>
      <div class="container">
        <div class="my_information_area" style={{ padding: 80 }}>
          <h2 class="text-center mt-5">Delivery Option</h2>
          <div class="mt-3">
            <p class="font-weight-bold">Select Delivery Option</p>
            <div class="row mb-1 bg-white p-3 m-1">
              <div class="col">
                <label style={{ width: 180 }}>Pick up at the store</label>
                <input
                  type="radio"
                  name="delivery_option"
                  value="store"
                  onChange={({ target }) => setDeliveryType(target.value)}
                />
                <br />
                <label style={{ width: 180 }}>Delivery</label>
                <input
                  type="radio"
                  name="delivery_option"
                  value="delivery"
                  onChange={({ target }) => setDeliveryType(target.value)}
                />
              </div>
            </div>
            <div class="row mb-1">
              <div class="col"></div>
            </div>
            {deliveryType === "delivery" && (
              <>
                <div class="row mb-1">
                  <div class="col">
                    <label>Address</label>
                    <Field
                      name="deliveryAddress"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <label>City</label>
                    <Field
                      name="deliveryCity"
                      type="text"
                      required
                      class="form-control"
                    />
                  </div>
                </div>
              </>
            )}
            <div class="row mb-3">
              <div class="col-lg-2 col-md-2 col-sm-2 mx-auto">
                <button
                  type="submit"
                  class="btn button_primary text-center"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
