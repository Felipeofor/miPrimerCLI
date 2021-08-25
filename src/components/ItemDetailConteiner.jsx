import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import ItemDetail  from "./ItemDetail";
import { getFirestore } from "../firebase"

function ItemDetailConteiner() {

    const [products, setProducts] = useState([])
    const {productById} = useParams();

    useEffect((productById) => {
        const firestore = getFirestore();
        // const collection =  firestore.collection("Productos");
        // const query = collection.get();
        firestore.collection("Productos").doc(productById).get()

            .then((resultado) => {
                const documentos = resultado.data()
            setProducts(documentos);
              console.log(documentos);
            })
    })

  

    useEffect(() => {
        setTimeout(() => getFirestore(), 500)
    }, [productById])

    return (
        <div className='containerDetailContainer'>
           { products.stock > 0 ? <PulseLoader/> : 
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