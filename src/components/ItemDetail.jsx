import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import ItemCount  from "./ItemCount";
import { useCartContext } from '../Context';

const ItemDetail = ({ image, stock, title, description, price, producto }) => {

  const[agregar, agregarCarrito] = useState(false)

  const { addItems } = useCartContext();
  
  function onAdd(qty){
    console.log(qty);
    agregarCarrito(true);
    addItems(qty,producto);
  }
  

  return (
    <section className="itemDetail">
      <img alt="imagen del producto" src={image}/>
    <div className="ItemDetail__description"> 
      <h3>{title} </h3>
      <p>Descripción: {description}</p>
      <p>Precio: ${price}</p>
    </div>
    {agregar ? <Link to= "/Cart" className ='mt-2 mb-2' size="lg">Ir al carrito</Link>
    : <ItemCount stock={ stock } initial={ 1 } onAdd={onAdd} product={producto}/>
    }
    
    </section>
  );
};

export default ItemDetail; 
