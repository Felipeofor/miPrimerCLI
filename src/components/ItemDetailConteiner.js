import React from "react";
import ItemDetail  from "./ItemDetail";
import ItemCount  from "./ItemCount";


function ItemDetailConteiner(producto) {

    

    return (
        <div className='containerItemListContainer'>
            <ItemDetail key={producto.id} 
                        id={producto.id} 
                        image={producto.image} 
                        stock={producto.stock} 
                        title={producto.title} 
                        description={producto.descripcion} 
                        category={producto.categoria}
                        price={producto.price}/>
            <ItemCount stock={ producto.stock } initial={ 1 }/>
        </div>
    )
}

export default ItemDetailConteiner;