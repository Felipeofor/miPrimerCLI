import React from 'react';
import Item from './Item'

const ItemDetail = ({ product }) => {

  console.log(product);
  return (
    <>
    <Item
      // key={product.id} 
      // image={product.image} 
      // stock={product.stock} 
      // title={product.title} 
      // description={product.descripcion} 
      // category={product.categoria}
      // price={product.price}
      // <h3>{title}</h3>
      // <p>${price}</p>
      // <img src={image} alt="foto" style={{ width: 200 }} />
      />
    </>
  );
};

export default ItemDetail;