import { useState } from 'react';
import { Button } from 'reactstrap';


function ItemCount(props){
    const[qty, setQty] = useState(0)
    
    
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

    return(
        <div className= 'containerItemCount'>
            <div className= 'itemCount mt-2 '>
            <Button color="danger" size="lg" active onClick={ onDecrease } >-</Button>{' '}
            <div className='boxQuantity'>{ qty }</div>
            <Button color="primary" size="lg" active  onClick={ onIncrease } >+</Button>{' '}
            </div>
            <Button color="success" className ='mt-2 mb-2' size="lg" active  onClick={ ()=> props.onAdd(qty, props.product) } >Agregar al Carrito</Button>
        </div>
    )
}
export default ItemCount