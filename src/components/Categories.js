import React from 'react'
/**para poder darle utilidad a nuestra URL params 
 * ademas de poder reutilizarlo multiples veses el componente
 * podemos usar el Hook useParams
 *  */
import { useParams } from 'react-router-dom'

import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Categories() {
    const [productsCategory,setProductsCategory] = useState([]);

 
    /**para usar useParams debemos usar la sintaxys puesta abajo 
     * y colocar el nombre el params que usamos en el Switch
     */
    const {categoryByID} = useParams();
    console.log(useParams())

    const getCategory = async () =>{
        let llamada = fetch(`../JSON/Datalist.json/${categoryByID}`);
        llamada = await llamada;
        llamada = await llamada.text();
        setProductsCategory(JSON.parse(llamada));
    };

    useEffect(() => {
        getCategory();
    },[]);

    return (
        <div className='containerCategory'>
            <h1>CATEGORIA {categoryByID}</h1>
            {productsCategory.map(element =>{
                return (
                        <Link to={`/ItemDetailConteiner/${element.id}`}><p> {element.title}</p>
                        </Link>
                )
            })}
        </div>
    )
}
