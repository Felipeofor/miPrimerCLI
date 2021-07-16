import React, { useState , useEffect } from "react";
import "./Item.scss";
import productos from "../productos.json";
import { ItemDetail } from "../ItemDetail";
import { BrowserRouter as Link} from 'react-router-dom';

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
    <div className="Item">
      
      {productos.map(function (producto){
        return  <div className="Item_card" key={producto.id}>
           <div className="col">
                <div className="card h-100 mx-3">
                 <Link to={ "/Productos/" + producto.id }><img width={300} height={250}src={producto.pictureUrl} class="card-img-top" alt={producto.id}/></Link>
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                </div>
                <div className="card-footer">{producto.price}
                <div>
                <h2 className={counter}>{counter}</h2>
                <div className="botones" >
                    <button onClick={quitar} >-</button>
                    <button onClick={agregar} >+</button> 
                </div><Link to={ "/Productos/" + producto.id }><button className="caracteristicas_btn" >Ver mas</button></Link>
                </div>
                </div>
                </div>
            </div>
            </div>
      })
           }</div>
  );
}
