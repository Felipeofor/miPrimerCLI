import React from 'react';

export const ItemDetail = ({ title, price, image }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>${price}</p>
      <img src={image} alt="foto" style={{ width: 200 }} />
    </>
  );
};
