// import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  console.log(props);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="order-containers">
      <div className="cart-info">
        <h4 className="order-text">Order Summary </h4>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total} </p>
        <p>Total Shipping: ${shipping} </p>
        <p>Tex: {tax} </p>
        <h4>Grand Total: {grandTotal}</h4>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
