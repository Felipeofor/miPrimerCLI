import React from 'react'
import { useCartContext } from '../Context';
import ItemCount from './ItemCount';

function Cart(props) {
    const {items} = useCartContext();
    return(
        <>
        {items.length > 0 ? 
            <>
               <h1>{items.props.title}</h1>
               <p>{items.props.cnt}</p>
               </>
        : 
            <h1>El carrito esta vacio :</h1>}
        </>
    )
}

export default Cart;
