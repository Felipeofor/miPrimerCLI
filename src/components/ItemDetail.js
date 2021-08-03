import React from 'react';
import Item from './Item'

const ItemDetail = ({ id }) => {

  return (
    <>
    <Item
      key={id.id} 
      image={id.image} 
      stock={id.stock} 
      title={id.title} 
      description={id.descripcion} 
      category={id.categoria}
      price={id.price}
      />
    </>
  );
};

export default ItemDetail; 