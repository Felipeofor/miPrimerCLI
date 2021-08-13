import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import PulseLoader from "react-spinners/PulseLoader";
import {useState, useEffect} from 'react';

export default function Categories() {
    const [productsCategory,setProductsCategory] = useState([]);

 
    /**para usar useParams debemos usar la sintaxys puesta abajo 
     * y colocar el nombre el params que usamos en el Switch
     */
    const {categoryByID} = useParams();



    const getCategory = async () => {
        // Espero a que la llamda se fetchee
        const llamada = await fetch('../../JSON/Datalist.json');
        // Aplico el método JSON() para extraer la respuesta a la petición
        const responsellamada = await llamada.json()
        // Vemos qué llegó
        setProductsCategory(responsellamada.filter((product) => product.categoria === categoryByID));
    }

    useEffect(() => {
        getCategory();
    },[categoryByID]);

    return (
        <div className='containerCategory'>
            { productsCategory.length === 0 
                        ? <PulseLoader
                        />
                        : <ItemList products={productsCategory}/>
                    }
        </div>
    )
}
