import React, { useEffect, useState } from "react";
import CartScreen from "./CartScreen";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    function fetchData() {
      setCartProducts(JSON.parse(localStorage.getItem("cart")));
    }
    fetchData();
  }, []);

  function handleCancel(id) {
    setCartProducts([
      ...cartProducts.filter((product) => product.articleId !== id),
    ]);
    localStorage.setItem(
      "cart",
      JSON.stringify(cartProducts.filter((product) => product.articleId !== id))
    );
  }

  return (
    <div>
      {cartProducts && (
        <CartScreen products={cartProducts} handleCancel={handleCancel} />
      )}
    </div>
  );
};

export default Cart;
