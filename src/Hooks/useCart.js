import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = products => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = []
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    // set quentity
                    const quentity = savedCart[key]
                    addedProduct.quentity = quentity;
                    storedCart.push(addedProduct)
                }

            }
            setCarts(storedCart);
        }
    }, [products]);
    return [carts, setCarts];
}

export default useCart;