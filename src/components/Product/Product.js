import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import ProductScreen from "./ProductScreen";
import * as api from "../../apis/api";

const initialValues = {
  size: "",
};

const Product = () => {
  const history = useHistory();
  const { request, data } = useApi(api.getSingleArticle);
  const [quantity, setQuantity] = useState(1);
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
    //logic for adding items to cart
    // let prevCart = JSON.parse(localStorage.getItem("cart"));
    let cartObj = {
      storeId: data.article.storeId._id,
      articleId: data.article._id,
      quantity,
      size: formValues.size,
      articleName: data.article.articleName,
      price: data.article.finalPrice,
    };
    localStorage.setItem("cart", JSON.stringify(cartObj));

    // if (prevCart) {
    //   let found = prevCart.findIndex(
    //     (element) => element.articleId === data.article._id
    //   );
    //   if (+found === -1) {
    //     localStorage.setItem("cart", JSON.stringify([...prevCart, cartObj]));
    //   } else {
    //     prevCart[found] = cartObj;

    //     localStorage.setItem("cart", JSON.stringify([...prevCart]));
    //   }
    // } else {
    //   console.log("caty", cartObj);
    //   localStorage.setItem("cart", JSON.stringify([cartObj]));
    // }
    history.push("/cart");
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
