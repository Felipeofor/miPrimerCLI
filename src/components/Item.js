
import { Link } from 'react-router-dom';

  
function Item(producto){
    return(
            <div className='containerCard card mx-1 my-1' >
                <Link to={`/Productos/Categoria/ItemDetail/${producto.title}`} className='linkCard col-12'>
                <div className='imageCard col-12' style={{backgroundImage:`url(${producto.image})`, width: '80%'}}></div>
                <h3 key={producto.id} >{producto.title}</h3>
                <h4>{`$${producto.price}`}</h4>
                <h5>{producto.category}</h5>
                </Link>
            </div>
    )
}

export default Item