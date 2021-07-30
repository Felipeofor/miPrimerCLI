import React from 'react';

const ItemDetail = ({ producto }) => {
  return (
    <>
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <img src={producto.image} alt="foto" style={{ width: 200 }} />
    </>
  );
};

export default ItemDetail;