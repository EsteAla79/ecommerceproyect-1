import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])

    const addProductsToCart = (product) => {
       let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
       if(!isInCart) {
            setCartListItems(cartListItems => [...cartListItems, product])
        }
    }
    const data = {
        cartListItems,
        addProductsToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }