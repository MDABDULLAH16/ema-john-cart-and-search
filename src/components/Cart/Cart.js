import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div >
           <h4 className='order-text'>Order Summary </h4>
           <div>
           <p><small>Cart: {cart.length}</small></p>
           </div>
        </div>
    );
};

export default Cart;