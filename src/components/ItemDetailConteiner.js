import React, {useState, useEffect} from "react";
import ItemDetail  from "./ItemDetail";
import ItemCount  from "./ItemCount";
import PulseLoader from "react-spinners/PulseLoader";

function ItemDetailConteiner() {

    const [products, setProducts] = useState([])

    // API CALL  - Llamado a un archivo .JSON local
    // Creo una función asincrónica
    // No se puede invocar Await sin un Async
    const getProducts = async () => {
        // Espero a que la data se fetchee
        const data = await fetch('../../../Json/Data.json')
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        setProducts(responseData)
    }


    useEffect(() => {
        setTimeout(() => getProducts(), 500)
    }, [])

    return (
        <div className='containerItemListContainer'>
           {products.length === 0 ? <PulseLoader/> : 
              <> 
              <h3>hola</h3> 
              <ItemDetail key={products.id} 
                        id={products.id} 
                        image={products.image} 
                        stock={products.stock} 
                        title={products.title} 
                        description={products.descripcion} 
                        category={products.categoria}
                        price={products.price}/>
             <ItemCount stock={ products.stock } initial={ 1 }/></>
           }
        </div>
    )
}

export default ItemDetailConteiner;