import React from "react";
import Layout from "../Layout/Layout";
import "./Product.css";
import sweater from "../../Assets/images/sweater.png";
import AppForm from "../AppForm/AppForm";
import { Field } from "formik";

const ProductScreen = ({
  data,
  initialValues,
  handleSubmit,
  quantity,
  setQuantity,
}) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields data={data} quantity={quantity} setQuantity={setQuantity} />
    </AppForm>
  );
};

export default ProductScreen;

function FormFields({ data, quantity, setQuantity }) {
  return (
    <Layout>
      <div class="product-body">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 mt-3">
              <div class="row">
                <figcaption class="col-3">
                  <ul class="d-flex flex-column ">
                    <li class="mb-2">
                      <img class="img-thumbnail" src={sweater} alt="" />
                    </li>
                    <li class="mb-2">
                      <img class="img-thumbnail" src={sweater} alt="" />
                    </li>
                    <li class="mb-2">
                      <img class="img-thumbnail" src={sweater} alt="" />
                    </li>
                  </ul>
                </figcaption>
                <figure class="col-7">
                  <img class="img-thumbnail" src={sweater} alt="" />
                </figure>
              </div>
            </div>
            <div class=" col-lg-6 col-md-6 col-sm-12 bg-white mt-5 mb-5">
              <div class="title">
                <h2 class="text-dark text-center">
                  {data.article.articleName}
                </h2>
              </div>
              <h2 class="text-center">{data.article.indicatedPrice} DA </h2>
              <p class="text-center">
                {" "}
                <del>{data.article.indicatedPrice + 50} DA </del>
              </p>
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-3">
                  <p>Size:</p>
                </div>
                <div class="col-lg-9 col-md-8 col-sm-6">
                  <Field
                    as="select"
                    name="size"
                    class="form-select form-select-lg mb-3"
                    aria-label=" Default select example"
                  >
                    <option disabled selected value="">
                      Select Size
                    </option>
                    {data.article.availableSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
              <div class="input-group row">
                <div class="col-lg-3 col-md-4 col-sm-3">
                  <p>Quantity:</p>
                </div>
                <div class="col-lg-6 col-md-8 col-sm-6">
                  <div class="d-flex">
                    <span class="input-group-prepend">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-number"
                        onClick={() => setQuantity((prev) => prev - 1)}
                        data-type="minus"
                        data-field="quant[1]"
                      >
                        <span class="fa fa-minus"></span>
                      </button>
                    </span>
                    <input
                      value={quantity}
                      type="number"
                      class="form-control input-number"
                      disabled
                      min="1"
                      max="10"
                    />
                    <span class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-number"
                        onClick={() => setQuantity((prev) => prev + 1)}
                      >
                        <span class="fa fa-plus"></span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-4 mb-5 text-center">
                <button type="submit" class="bnt button_primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div class="product-detail">
            <ul class="nav nav-tabs">
              <li class="">
                <a data-toggle="tab" href="#info">
                  Information
                </a>
              </li>
              <li class="">
                <a data-toggle="tab" href="#description">
                  Description
                </a>
              </li>
              <li class="">
                <a data-toggle="tab" href="#vendor-info">
                  Vendor Information
                </a>
              </li>
            </ul>
            <div class="row">
              <div class="tab-content active col-lg-8 col-md-8 col-12">
                <div id="info" class="tab-pane fade show active p-3 ">
                  <div>
                    <span>Category:</span>{" "}
                    <span>{data.article.categoryId.name}</span>
                  </div>
                  <div>
                    <span>Section:</span>{" "}
                    <span>{data.article.sectionId.name}</span>
                  </div>
                  <div>
                    <span>City:</span> <span>{data.article.city} </span>
                  </div>

                  <div>
                    <span>Brand:</span> <span>{data.article.brandName}</span>
                  </div>
                  <div>
                    <span>On-Line:</span>{" "}
                    <span>
                      {new Date(data.article.onlineDate).toDateString()}
                    </span>
                  </div>
                </div>
                <div id="description" class="tab-pane fade show p-3 ">
                  <p>{data.article.articleDescription}</p>
                </div>
                <div id="vendor-info" class="tab-pane fade show p-3">
                  <div>
                    <span>Shop: </span>{" "}
                    <span>{data.article.storeId.shopName}</span>
                  </div>
                  <div>
                    <span>Address: </span>{" "}
                    <span>{data.article.storeId.address}</span>
                  </div>
                  <div>
                    <span>Phone: </span>{" "}
                    <span>{data.article.storeId.number} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
