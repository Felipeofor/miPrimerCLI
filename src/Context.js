import React, { useContext, useState} from 'react';
export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    // const updateCartCount = qty =>{
    //     setCartCount(prev =  prev + qty);
    // }

        else{
         setCartItems([...cartItems,{...item, qty }]);   
        }

        setCartCount(prev => prev + qty);
    }

    return(
        <CartContext.Provider value= {{ cartCount }}>{children}</CartContext.Provider>
    )
};

export default CartProvider;