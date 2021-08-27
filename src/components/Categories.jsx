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
        const query = collection.where('categoria', '==', categoryByID)
        query.get()
	        .then((resultado) => {
                const documentos = resultado.docs.map(documento => {
                return{
                    ...documento.data()
                }
                documento.data()
                })
            setProducts(documentos)
            })
    },[categoryByID])

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
