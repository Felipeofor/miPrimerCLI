import React from 'react';
import { useCartContext } from '../Context'

function Cart() {
    const { cartItems } = useCartContext()
    console.log(CartItems);
    return(
        <>
        Soy el carrito!
        {cartItems.length > 0 && cartItems.map((item, index) =>{
            <p key={index}>{item.title} x {item.qty}</p>
        })}
        </>
    )
}

export default Cart;
