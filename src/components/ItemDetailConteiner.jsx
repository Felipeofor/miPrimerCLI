import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import ItemDetail  from "./ItemDetail";
import { getFirestore } from "../firebase"

function ItemDetailConteiner() {

    const [products, setProducts] = useState([])
    const {productById} = useParams();

    useEffect(() => {
        const firestore = getFirestore();
        const collection =  firestore.collection("Productos");
        const query = collection.get();
        
        query
        .then((resultado) => {
            resultado.forEach(documento => {
               setProducts(documento.data())
            })
        })
    })

    // // API CALL  - Llamado a un archivo .JSON local
    // // Creo una función asincrónica
    // // No se puede invocar Await sin un Async
    // const getProducts = async () => {
    //     // Espero a que la data se fetchee
    //     const data = await fetch('../../../Json/Datalist.json')
    //     // Aplico el método JSON() para extraer la respuesta a la petición
    //     const responseData = await data.json()
    //     // Vemos qué llegó
    //     setProducts(responseData.filter((items) => items.title === productById)[0]);
    // }


    useEffect(() => {
        setTimeout(() => getFirestore(), 500)
    }, [productById])

    return (
        <div className='containerDetailContainer'>
           { products.length === 0 ? <PulseLoader/> : 
              <div className='containerDetailContainer__Product'>  
              <ItemDetail key={products.id} 
                        id={products.id} 
                        image={products.image} 
                        stock={products.stock} 
                        title={products.title} 
                        description={products.descripcion} 
                        category={products.categoria}
                        price={products.price}
                        producto={products}/>
             </div>
           }
        </div>
    )
}

export default ItemDetailConteiner;