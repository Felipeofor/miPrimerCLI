
import { Link, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

// import ItemCount from './ItemCount';
  
function Item(products){

    const [product,setProduct] = useState([]);
        /**para usar useParams debemos usar la sintaxys puesta abajo 
     * y colocar el nombre el params que usamos en el Switch
     */
         const {productByID} = useParams();



         const getProduct = async () => {
             // Espero a que la llamda se fetchee
             const llamada = await fetch('../../JSON/Datalist.json');
             // Aplico el método JSON() para extraer la respuesta a la petición
             const responsellamada = await llamada.json()
             // Vemos qué llegó
             setProduct(responsellamada.filter((product) => product === productByID));
         }
     
         useEffect(() => {
             getProduct();
         },[productByID]);
     

    return(
            <div className='containerCard card mx-1 my-1' >
                <Link to={`/Productos/Categoria/ItemDetail/${products.title}`} className='linkCard col-12'>
                <div className='imageCard col-12' style={{backgroundImage:`url(${products.image})`, width: '80%'}}></div>
                <h3 key={products.id} >{products.title}</h3>
                <h4>{`$${products.price}`}</h4>
                <h5>{products.product}</h5>
                </Link>
            </div>
    )
}

export default Item