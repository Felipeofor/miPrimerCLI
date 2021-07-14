import react, { useEffect } from 'react';
import './ItemList.scss';
import { useState } from 'react';
import { Item } from '../Item/Item';




export default function ItemList () {

        /*Item*/

        const [showModal, setShowModal] = useState(false);
        const openModal = (props) => {
          setShowModal(true, props);
        };

        /*Contador*/

    const [counter,setCounter] = useState(0);
    const stock = 5;
    function agregar(){
        if(counter < stock){
          setCounter(counter+1)
        }
      }

    function quitar(){
        if(counter > 0){
          setCounter(counter-1)
        }
      }

      const [users, SetUsers] = ItemList ([]);

      useEffect (() =>{
        db1();
      }, []);

      const db1 = () => {
        const call = fetch('../productos');
        call 
          .then(res => {
            console.log(res);
            const response = res.json();
            return response;
          })
          .then(response => setUsers(response));
      };


    return (
        <div className="Cards">
           <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100 mx-3">
                <img src="https://jumboargentina.vteximg.com.br/arquivos/ids/614663-1000-1000/Aceite-De-Girasol-Cocinero-900-Ml-1-32670.jpg?v=637409202878630000" class="card-img-top" alt="Producto n°1"/>
                <div className="card-body">
                    <h5 className="card-title">{user.title}</h5>
                    <p className="card-text">Aceite de cocina de primera calidad </p>
                </div>
                <div className="card-footer">
                <div>
                <h2 className={counter}>{counter}</h2>
                <div className="botones" >
                    <button onClick={quitar} >-</button>
                    <button onClick={agregar} >+</button>
                    
                </div><button className="caracteristicas-btn" onClick={openModal} 
            >Ver caracteristicas</button>
            {showModal ? <Item setShowModal={setShowModal}
            /> : null}
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}