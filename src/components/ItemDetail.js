import React from 'react';
import ItemCount  from "./ItemCount";

const ItemDetail = ({ id, image, stock, title, description, categoria, price }) => {

  return (
    <section className="itemDetail">
      <img src={image}/>
    <div className="ItemDetail__description"> 
      {title} 
      <p>Descripción: {description}</p>
      <p>Precio: {price}</p>
    </div>
    <ItemCount stock={ stock } initial={ 1 }/>
    </section>
  );
};

export default ItemDetail; 