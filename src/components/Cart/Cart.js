import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    let totalQuentity = 0
    let total = 0
    for (const product of cart) {
        if (!product.quentity) {
            product.quentity = 1;
        }
        total = total + product.price + product.quentity;
        totalQuentity = totalQuentity + product.quentity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10
    const grandTotal = (total + shipping + tax)
    return (
        <div className="cart-container">
            <div className="cart-order">
                <h2>Order Summary</h2>
                <p>Items ordered : {totalQuentity} </p>
            </div>
            <h2> Items :$ {total.toFixed(2)}</h2>
            <p>Shipping : $ {shipping}</p>
            <p>Tax : $ {tax.toFixed(2)}</p>
            <h2 style={{ color: 'brown' }}>Order Total : $ {grandTotal.toFixed(2)}</h2>
            <h1>{props.children}</h1>
        </div>
    );
};

export default Cart;