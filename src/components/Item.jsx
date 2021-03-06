import { Link } from 'react-router-dom';
  
function Item(products){


    return(
            <div className='containerCard card mx-1 my-1' >
                <Link to={`/Productos/Categoria/ItemDetail/${products.id}`} className='linkCard col-12'>
                <div className='imageCard col-12' style={{backgroundImage:`url(${products.image})`, width: '80%'}}></div>
                <h3 key={products.id} >{products.title}</h3>
                <h4>{`$${products.price}`}</h4>
                <h5>{products.product}</h5>
                </Link>
            </div>
    )
}

export default Item