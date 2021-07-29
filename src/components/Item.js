// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import { Link } from 'react-router-dom';

// import ItemCount from './ItemCount';
  
function Item(products){
    return(
            <div className='containerCard card mx-1 my-1' >
                <Link to={`/Productos/Categoria/ItemDetail/${products.title}`} className='linkCard col-12'>
                <div className='imageCard col-12' style={{backgroundImage:`url(${products.image})`, width: '80%'}}></div>
                <h3 key={products.id} >{products.title}</h3>
                <h4>{`$${products.price}`}</h4>
                <h5>{products.category}</h5>
                </Link>
                {/* <ItemCount stock={ stock } initial={ 1 }/> */}
            </div>
    )
}

export default Item