import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import PulseLoader from "react-spinners/PulseLoader";
import { getFirestore } from "../firebase";

function ItemListContainer() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const firestore = getFirestore();
        const collection =  firestore.collection("Productos");
        const query = collection.get();
        
        query
            .then((resultado) => {
                const documentos = resultado.docs.map(documento => {
                return{
                    ...documento.data()
                }
                })
            setProducts(documentos)
            })
    })

    // // API CALL  - Llamado a un archivo .JSON local
    // // Creo una función asincrónica
    // const getProducts = async () => {
    //     // Espero a que la data se fetchee
    //     const data = await fetch('../JSON/Datalist.json')
    //     // Aplico el método JSON() para extraer la respuesta a la petición
    //     const responseData = await data.json()
    //     // Vemos qué llegó
    //     setProducts(responseData)
    // }


    useEffect(() => {
        setTimeout(() => getFirestore(), 2000)
    }, [])
    
    return(
        <div className='containerItemListContainer'>
            { products.length === 0 
                ? <PulseLoader
                />
                : <ItemList products={products}/>
            }
        </div>
    )
}
export default ItemListContainer