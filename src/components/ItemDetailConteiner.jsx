import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import ItemDetail  from "./ItemDetail";
import { getFirestore } from "../firebase"

function ItemDetailConteiner() {

    const [products, setProducts] = useState({stock:0})
    const {productById} = useParams();
    const [show, setShow] = useState(false)

    useEffect(() => {
        const firestore = getFirestore();
        firestore.collection("Productos").doc(productById).get()

            .then((resultado) => {
                const documentos = resultado.data()
                
            setProducts(documentos);
            setShow(true);
             documentos.id = productById
            })
    }, [productById])

    return (
        <div className='containerDetailContainer'>
           { !show ? <PulseLoader/> : 
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