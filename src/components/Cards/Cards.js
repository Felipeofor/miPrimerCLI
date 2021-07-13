import react from 'react';
import './Cards.scss';
import {useState} from 'react';




export default function Cards () {

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
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                <div>
                <h2 className={counter}>{counter}</h2>
                <div className="botones" >
                    <button onClick={quitar} >-</button>
                    <button onClick={agregar} >+</button>
                    
                </div><button className="comprar" onAdd={counter}>Comprar</button>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}