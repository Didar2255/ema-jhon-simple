import React from 'react';
import img from '../../images/giphy.gif'
import './PlaceOrder.css'

const PlaceOrder = () => {
    return (
        <div className='place-order'>
            <h2>Remove your all product</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;