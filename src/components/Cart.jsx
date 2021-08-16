import React from 'react'
import { useCartContext } from '../Context';
import ItemCount from './ItemCount';

function Cart() {
  const {items} = useCartContext();
  console.log(items)
  return(
    <div className="Cart">
      {
        items.length > 0 ? (
          items.map(item => {
            return(
              <div className="Cart_conteiner">
                <div className="Cart__info">
                  <h3>{item.title}</h3>
                  <p>Precio: {item.price}</p>
                </div>
              <img className="Cart__img" src={item.image}/>
              </div>
              
            )
          })
        ) : (
          <h3>El carrito esta vacio :(</h3>
        )
      }
    </div>
  )
}

export default Cart;
