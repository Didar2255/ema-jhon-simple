import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, price, img, seller, stock, star } = props.product
    return (
        <div className='products'>
            <div>
                <img src={img} alt="" />


            </div>
            <div className='product-information'>
                <h3 className='product-name'>Name : {name}</h3>
                <p>by : {seller}</p>
                <h4>Price : $ {price}</h4>
                <p>Only {stock} left in stock -order soon</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating>
                <br />
                <button onClick={() => props.button(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;