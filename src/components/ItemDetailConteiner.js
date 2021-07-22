import Item from "./Item";
import { Spinner } from 'reactstrap';
import { useState, useEffect } from "react";

function ItemDetailConteiner() {

    const [products, setProducts] = useState([])

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

    return (
        <div className='containerItemListContainer'>
            { products.length === 0 
                ? <Spinner color="black"/>
                : <Item />
            }
        </div>
    )
}

export default ItemDetailConteiner;