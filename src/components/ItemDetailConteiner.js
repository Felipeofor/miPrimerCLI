import React, {useState, useEffect} from "react";
import ItemDetail  from "./ItemDetail";
import ItemCount  from "./ItemCount";
import PulseLoader from "react-spinners/PulseLoader";
import { useParams } from 'react-router-dom';

function ItemDetailConteiner() {

    const [products, setProducts] = useState([])

    const {productById} = useParams();

    // API CALL  - Llamado a un archivo .JSON local
    // Creo una función asincrónica
    // No se puede invocar Await sin un Async
    const getProducts = async () => {
        // Espero a que la data se fetchee
        const data = await fetch('../../../Json/Datalist.json')
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        setProducts(responseData.filter((products) => products.id === productById)[0]);
        console.log();
    }


    useEffect(() => {
        setTimeout(() => getProducts(), 500)
    }, [productById])

    return (
        <div className='containerDetailContainer'>
           {products.length === 0 ? <PulseLoader/> : 
              <div className='containerDetailContainer__Product'>  
              <ItemDetail key={products[0]} 
                        id={products[0]} 
                        image={products[0]} 
                        stock={products[0]} 
                        title={products[0]} 
                        description={products[0]} 
                        category={products[0]}
                        price={products[0]}/>
                        <p>Descripción: {products[0]}</p>
             <ItemCount stock={ products[0] } initial={ 1 }/>
             </div>
           }
        </div>
    )
}

export default ItemDetailConteiner;