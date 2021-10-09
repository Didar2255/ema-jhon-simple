import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quentity, key } = props.product
    const { hendelRemove } = props
    return (
        <div className='products'>
            <div className='product-information'>
                <h3 className='product-name'>{name}</h3>
                <p>{price}</p>
                <p>{quentity}</p>
                <button onClick={() => hendelRemove(key)}>Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;