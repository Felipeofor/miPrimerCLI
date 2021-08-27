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
                return(
                    {id:documento.id,...documento.data()}
                )
                
                })
            setProducts(documentos)
            })
    })

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