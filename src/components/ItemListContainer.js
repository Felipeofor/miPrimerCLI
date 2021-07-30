import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import PulseLoader from "react-spinners/PulseLoader";
import { getFirestore } from "../firebase"

function ItemListContainer() {

    const [producto, setProducto] = useState({});

    useEffect(() => {
        const firestore = getFirestore();
        const collection = firestore.collection("productos");
        const query =  collection.get();
        
        query
            .then ((resultado) => {
                resultado.forEach(documento =>{
                    setProducto(documento.data())
            })
        })
    })

    // const [products, setProducts] = useState([])

    // // API CALL  - Llamado a un archivo .JSON local
    // // Creo una función asincrónica
    // // No se puede invocar Await sin un Async
    // const getProducts = async () => {
    //     // Espero a que la data se fetchee
    //     const data = await fetch('../JSON/Datalist.json')
    //     // Aplico el método JSON() para extraer la respuesta a la petición
    //     const responseData = await data.json()
    //     // Vemos qué llegó
    //     setProducts(responseData)
    // }


    // useEffect(() => {
    //     setTimeout(() => getProducts(), 2000)
    // }, [])
    
    return(
        <div className='containerItemListContainer'>
            { producto.length === 0 
                ? <PulseLoader
                />
                : <ItemList producto={producto}/>
            }
        </div>
    )
}
export default ItemListContainer;