//Importamos los componentes
import react from 'react'
import './Item.scss';
import React, { useRef } from "react";
import ReactDom from "react-dom";


export const Item = ({ setShowModal, elements}) => {
  console.log(elements)
  // Cerrramos el modal cuando hacemos click fuera de el
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };


  /*Imagen y caracteristicas del pokemon dentro del modal */
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="description">
          <h1>{user.title}</h1>
         </div> 
         <button className="comprar">Comprar</button>
      </div>
      </div>
      ,document.getElementById("Item")
  );
};
export default Item;