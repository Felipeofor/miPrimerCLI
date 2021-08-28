import { useState} from 'react'
import { useCartContext } from '../Context';
import { Link } from "react-router-dom";
import { getFirestore } from "../firebase";

function Cart() {
  const {items, total, removeItems} = useCartContext();
  const [confirmacion, setConfirmacion] = useState(false)


  const crearOrden = () => {

    const nueva_orden = {
        buyer: {
            name: "Felipe",
            phone: "115995578",
            email: "prueba@gmail.com"
        },
    }

    const firestore = getFirestore()
    const collection = firestore.collection("ordenes")
    const query = collection.add(nueva_orden)

    query
        .then((resultado) => {
            setConfirmacion(resultado.id)

        })
        .catch((error) => {
            console.log(error)
        })
      }

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
        <button className="Cart__button" onClick={crearOrden}>Generar ticket</button>
        <p >Total: {total()}</p>
        <div className="Cart__info">
        {confirmacion && <p>Confirmacion de compra: {confirmacion}</p>}
        </div>
      </div>)
       : (<></>)}
    </div>
  )
}

export default Cart;
