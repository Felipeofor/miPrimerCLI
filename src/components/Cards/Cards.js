import react from 'react';
import './Cards.scss';
import {useState} from 'react';




export default function Cards () {

    const [counter,setCounter] = useState(0);
    const noHayStock = 5;

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
                <h2 className={counter < 0 ? 'Ingresa un valor valido' : counter > 0 ? {noHayStock} : null }>{counter}</h2>
                <div className="botones" >
                    <button onClick={()=>setCounter(counter-1)} >-</button>
                    <button onClick={()=>setCounter(counter+1)} >+</button>
                </div>
                </div>
                    <button className="comprar" onAdd={counter}>Comprar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}