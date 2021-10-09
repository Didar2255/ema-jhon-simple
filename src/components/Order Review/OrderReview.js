import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import { deleteFromDb, clearTheCart } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProduct()
    const [carts, setCarts] = useCart(products)
    const hendelRemove = (key) => {
        const newCart = carts.filter(product => product.key !== key)
        setCarts(newCart)
        deleteFromDb(key)
    }
    const history = useHistory()
    const hendelPlace = () => {
        history.push('/shipping')
        // setCarts([])
        // clearTheCart()
    }
    return (
        <div className='shop-continer'>
            <div className='product-container'>
                {carts.map(product => <ReviewItem
                    key={product.key}
                    product={product}
                    hendelRemove={hendelRemove}
                ></ReviewItem>)}
            </div>
            <div>
                <Cart cart={carts}>
                    <button className='btn-regular' onClick={hendelPlace}>Proceed to Shipping</button>
                </Cart>
            </div>


        </div>
    );
};

export default OrderReview;