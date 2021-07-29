import React from 'react';

const ItemDetail = (products) => {
  return (
    <>
      <h3>{products.title}</h3>
      <p>${products.price}</p>
      <img src={products.image} alt="foto" style={{ width: 200 }} />
    </>
  );
};

export default ItemDetail;