import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
// import { useCartContext } from '../Context';

function ItemCount(props){
    const[qty, setQty] = useState(0)

    // const { updateCartCount } = userCartContext();
    
    const onIncrease = () => {
        const newValue = qty+1
        if (newValue <= props.stock){
            setQty(newValue)
        }
    }

    const onDecrease = () => {
        const newValue = qty-1
        if(props.initial <= newValue){
            setQty(newValue)
        }
    }

    const onAdd = () => {
        const message = `Agregaste ${ qty } producto`
        if(props.stock !== 0) {
            (qty === 1) ? alert(message) : alert(message + `s`)
        }
    }

    return(
        <div className= 'containerItemCount'>
            <div className= 'itemCount mt-2 '>
            <Button color="danger" size="lg" active onClick={ onDecrease } >-</Button>{' '}
            <div className='boxQuantity'>{ qty }</div>
            <Button color="primary" size="lg" active  onClick={ onIncrease } >+</Button>{' '}
            </div>
            <Button color="success" className ='mt-2 mb-2' size="lg" active  onClick={ onAdd } >Agregar al Carrito</Button>
            <Link to= "/Cart" className ='mt-2 mb-2' size="lg">Ir al carrito</Link>
        </div>
    )
}
export default ItemCount