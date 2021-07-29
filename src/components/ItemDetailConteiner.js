import React from "react";
import ItemDetail  from "./ItemDetail";
import ItemCount  from "./ItemCount";

function ItemDetailConteiner(products) {

    return (
        <div className='containerItemListContainer'>
            <ItemDetail key={products.id} 
                        id={products.id} 
                        image={products.image} 
                        stock={products.stock} 
                        title={products.title} 
                        description={products.descripcion} 
                        category={products.categoria}
                        price={products.price}/>
            <ItemCount
            />
        </div>
    )
}

export default ItemDetailConteiner;