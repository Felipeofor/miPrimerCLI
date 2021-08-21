import React from 'react'
import { useCartContext } from '../Context';

function Cart() {
  const {items, total, removeItems} = useCartContext();
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
                  
                  <button className="Cart__button" onClick={() => removeItems(item)}>Quitar</button>
                </div>
              <img alt="imagen producto" className="Cart__img" src={item.image}/>
              </div>
            )
          })
        ) : (
          <h3 className="Cart__h3">El carrito esta vacio :(</h3>
        )
      }
      <p className="Cart__total">Total: {total()}</p>
    </div>
  )
}

export default Cart;
