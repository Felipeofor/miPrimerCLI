import { Link } from 'react-router-dom';
import { useCartContext } from '../Context';

function CartWidget() {

	const {items, cantidadItems} = useCartContext();

    return(
        <div className='CartWidget'>			{
        items.length > 0 ? (<Link to= "/Cart" >{ cantidadItems() }
           <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart me-5" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff0000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  							<circle cx="6" cy="19" r="2" />
  							<circle cx="17" cy="19" r="2" />
  							<path d="M17 17h-11v-14h-2" />
  							<path d="M6 5l14 1l-1 7h-13" />
							</svg> </Link>) : (<></>)}
        </div>
    )
}
export default CartWidget;