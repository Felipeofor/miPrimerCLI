// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import { Link } from 'react-router-dom';
// import ItemCount from './ItemCount';
  
function Item({ id, image,  title, category, price, stock }){
    return(
            <div className='containerCard card col-3 mx-1 my-1' >
                <Link to='/ItemDetailConteiner' className='linkCard col-12'>
                <div className='imageCard col-12' style={{backgroundImage:`url(${image})`, width: '80%'}}></div>
                <h3 key={id} >{title}</h3>
                <h4>{`$${price}`}</h4>
                <h5>{category}</h5>
                </Link>
                {/* <ItemCount stock={ stock } initial={ 1 }/> */}
            </div>
    )
}

export default Item