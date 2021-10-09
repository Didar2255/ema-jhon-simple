import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])

    const hendelAddtoCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key)
        let newCart = []
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key)
            exists.quentity += 1;
            newCart = [...rest, product]
        }
        else {
            product.quentity = 1
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDb(product.key);
    }
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quentity = savedCart[key]
                    addedProduct.quentity = quentity;
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const hendelEvent = event => {
        const searchText = event.target.value
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchProduct)
    }

    return (
        <div>
            <div className="serach-container">
                <input className='input-field'
                    onChange={hendelEvent}
                    type="text"
                    placeholder='Search Your Product Name' />
                <FontAwesomeIcon className='icon' icon={faShoppingCart} />
            </div>
            <div className='shop-continer'>
                <div className="product-container">
                    {displayProducts.map(product => <Product
                        button={hendelAddtoCart}
                        key={product.key}
                        product={product}
                    >

                    </Product>)}
                </div>

                <div>
                    <Cart
                        cart={cart}
                    >
                        <Link to='/orderReview'>
                            <button className='btn-regular'>Review order</button>
                        </Link>
                    </Cart>

                </div>
            </div>
        </div>
    );
};

export default Shop;



