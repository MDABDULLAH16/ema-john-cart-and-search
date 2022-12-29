import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";

const OrderReview = () => {
  const [products] = useProducts([]);
  const [cart, setCart] = useCart(products);
  const handleDeleteProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="products-item-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleDeleteProduct={handleDeleteProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}>
          <Link to="/manageInventory">
            <button className="cheekOut-button">Proceed CheekOut</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
