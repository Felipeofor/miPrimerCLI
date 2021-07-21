import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Spinner } from 'reactstrap';

function ItemListContainer() {

    const [products, setProducts] = useState([])

    // API CALL  - Llamado a un archivo .JSON local
    // Creo una función asincrónica
    // No se puede invocar Await sin un Async
    const getProducts = async () => {
        // Espero a que la data se fetchee
        const data = await fetch('../JSON/Datalist.json')
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responseData = await data.json()
        // Vemos qué llegó
        console.log("Soy la data del JSON:", responseData)
        setProducts(responseData)
    }


    useEffect(() => {
        setTimeout(() => getProducts(), 2000)
    }, [])
    
    return(
        <div className='containerItemListContainer'>
            { products.length === 0 
                ? <Spinner color="light"/>
                : <ItemList products={products}/>
            }
        </div>
    )
}
export default ItemListContainer