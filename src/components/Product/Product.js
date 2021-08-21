import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import ProductScreen from "./ProductScreen";
import * as api from "../../apis/api";

const initialValues = {
  size: "",
};

const Product = () => {
  const { request, data } = useApi(api.getSingleArticle);
  const [quantity, setQuantity] = useState(1);
  const [, setValues] = useState(initialValues);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        await request({ articleId: id });
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  async function handleSubmit({ formValues }) {
    let cartObj = {
      storeId: data.article.storeId._id,
      articleId: data.article._id,
      quantity,
      size: formValues.size,
    };
    localStorage.setItem("cart", JSON.stringify(cartObj));
  }

  return (
    <div>
      {data && (
        <ProductScreen
          data={data}
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
    </div>
  );
};

export default Product;
