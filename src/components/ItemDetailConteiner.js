import React from "react";
import ItemDetail  from "./ItemDetail";
import ItemCount  from "./ItemCount";

function ItemDetailConteiner(products) {

    return (
        <div className='containerItemListContainer'>
            <ItemDetail products={products.id}/>
            <ItemCount/>
        </div>
    )
}

export default ItemDetailConteiner;