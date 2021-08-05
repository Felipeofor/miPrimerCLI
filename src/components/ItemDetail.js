import React from 'react';
import ItemCount  from "./ItemCount";

const ItemDetail = ({ image, stock, title, description, price }) => {

  return (
    <section className="itemDetail">
      <img src={image}/>
    <div className="ItemDetail__description"> 
      <h3>{title} </h3>
      <p>Descripción: {description}</p>
      <p>Precio: ${price}</p>
    </div>
    <ItemCount stock={ stock } initial={ 1 }/>
    </section>
  );
};

export default ItemDetail; 
