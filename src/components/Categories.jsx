import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import PulseLoader from "react-spinners/PulseLoader";
import {useState, useEffect} from 'react';
import { getFirestore } from "../firebase";

export default function Categories() {
    // const [productsCategory,setProductsCategory] = useState([]);

    const {categoryByID} = useParams();

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
                documento.data()
                })
            setProducts(documentos)
            })
    })

    // const getCategory = async () => {
    //     // Espero a que la llamda se fetchee
    //     const llamada = await fetch('../../JSON/Datalist.json');
    //     // Aplico el método JSON() para extraer la respuesta a la petición
    //     const responsellamada = await llamada.json()
    //     // Vemos qué llegó
    //     setProductsCategory(responsellamada.filter((product) => product.categoria === categoryByID));
    // }


    useEffect(() => {
        getFirestore();
    },[categoryByID]);

    return (
        <div className='containerCategory'>
            { products.length === 0 
                        ? <PulseLoader
                        />
                        : <ItemList products={products}/>
                    }
        </div>
    )
}
