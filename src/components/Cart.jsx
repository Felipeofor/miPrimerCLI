import React from 'react'
import { useCartContext } from '../Context';

function Cart() {
    const {items} = useCartContext();
    console.log(items)
    return(
      <div>
      {items.length > 0 ?
      items.map(item => {
       <div>
       <h5>{ items.title }</h5>
       <p> { items.cnt }</p>
       </div>
      })
       : 
       <h3>El carrito esta vacio :</h3>}
</div>)
}

export default Cart;
