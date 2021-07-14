import react from 'react'
import './CartWidget.scss';
import Cards from '../ItemList'
import { useContext } from 'react';


export default function CartWidget(){
    return(
        <div className='CartWidget'>
           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart me-5" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
  							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  							<circle cx="6" cy="19" r="2" />
  							<circle cx="17" cy="19" r="2" />
  							<path d="M17 17h-11v-14h-2" />
  							<path d="M6 5l14 1l-1 7h-13" />
							</svg> <h3>{ Cards.comprar }</h3>
        </div>

    )
}