import React, { useContext, useState, useEffect} from 'react';
export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) =>{
    const [cartCount, setCartCount] = useState(0);
    const [items, setItems] = useState([])

    useEffect(() => {
    }, [items])

    const isInCart = (id) => {
        const estaEnCart = items.some((x) => x.id === id);
        return estaEnCart;
      };

      const addItems = (qty, product) => {
        if (isInCart(product.id)) {
            updateCartCount(qty)
        } else {
          setItems([...items, { ...product, cnt: qty }]);
        }
      };

      const removeItems = (item) => {
        const newItems = items.filter((x) => x.id !== item);
        setItems(newItems);
      };

      const clearItems = () => setItems([]);
    
    const updateCartCount = qty =>{
        setCartCount(prev => prev + qty)
    };

    function total() {
        const precioFinal = items.reduce((a, b) => a + b.props.precio * b.cnt, 0);
        return precioFinal;
      }

      function cantidadItems() {
        const itemsTotales = items.reduce((a, b) => a + b.cnt, 0);
        
        return itemsTotales;
      }

    return(
        <CartContext.Provider value= {{ cartCount, updateCartCount, isInCart, addItems, removeItems, clearItems, items, cantidadItems }}>{children}</CartContext.Provider>
    )
};

export default CartProvider;