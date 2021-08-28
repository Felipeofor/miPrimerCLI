import React from 'react'
import { useCartContext } from '../Context';
import { Link } from "react-router-dom"

function Cart() {
  const {items, total, removeItems} = useCartContext();

  return(
    <div className="Cart">
      {
        items.length > 0 ? (
          items.map(item => {
            return(
              <div className="Cart__conteiner">
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
          <div className="Cart__vacia">
          <h3 className="Cart__h3">El carrito esta vacio!</h3>
          <Link ClassName="Cart__link" to="/">Volver a Home</Link>
          </div>
        )
      }
      {items.length > 0 ? (
      <div className="Cart__total">
        <button className="Cart__button">Generar ticket</button>
        <p >Total: {total()}</p>
      </div>)
       : (<></>)}
    </div>
  )
}

export default Cart;
