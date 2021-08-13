import React from 'react'
import { useCartContext } from '../Context';
import ItemCount from './ItemCount';

function Cart() {

    const {items} = useCartContext();

    return(
        <>
        {items.length > 0 ? 
            <><div className="counter__style">
               <h5>{items[0].title}</h5>
               <p>{items[0].cnt}</p><ItemCount/></div>
               </> 
         
        : 
            <h1>El carrito esta vacio :</h1>
        }
        </>
    )
}

export default Cart;
