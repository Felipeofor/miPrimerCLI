import React, { useState , useEffect} from "react";
import "./Item.scss";

export default function App() {
  
  const [myItem, setMyItem] = useState({})

  useEffect(()=>{
    fetch('./productos.json')
    .then((itemMl)=> { 
         let itemFinal= itemMl.json() 
         return itemFinal
        })
      .then((itemJson)=>{
        setMyItem(itemJson)
      })
  },[])
  

  console.log("myItem-->",myItem )

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
  
  
  return (
    <div className="Cards">
           <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100 mx-3">
                <img src={myItem.pictureUrl} class="card-img-top" alt="Producto n°1"/>
                <div className="card-body">
                    <h5 className="card-title">{myItem.title}</h5>
                    <p className="card-text">{myItem.description}</p>
                </div>
                <div className="card-footer">{myItem.price}
                <div>
                <h2 className={counter}>{counter}</h2>
                <div className="botones" >
                    <button onClick={quitar} >-</button>
                    <button onClick={agregar} >+</button> 
                </div><button className="caracteristicas-btn" >Ver caracteristicas</button>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
  );
}
