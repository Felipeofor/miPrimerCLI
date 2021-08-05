import React, { useContext, useState} from 'react';
export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, qty) =>{
        if(cartItems.some(product = product.title === item.title)){
            const copy = [...cartItems]
            const repeteadIndex = cartItems.findeIndex (product => product.title === item.title);
            copy[repeteadIndex] = {
                ...copy[repeteadIndex],
                count: copy[repeteadIndex].qty + qty
            };
            setCartItems(copy)
        }

        else{
         setCartItems([...cartItems,{...item, qty }]);   
        }

        setCartCount(prev => prev + qty);
    }

    return(
        <CartContext.Provider value= {{ cartCount, cartItems , addToCart }}>{children}</CartContext.Provider>
    )
};

export default CartProvider;