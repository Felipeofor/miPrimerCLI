import React from 'react'
import { useCartContext } from '../Context';


function Cart() {

    const {items} = useCartContext();

    return(
        <>
        {items.length > 0 ? (
            <>
               <h1>{items[0].title}</h1>
               <p>{items[0].cnt}</p>
               </>
        ) 
        : (
            <h1>El carrito esta vacio :(</h1>
        )}
        </>
    )
}

export default Cart;
