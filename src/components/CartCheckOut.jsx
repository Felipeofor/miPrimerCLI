import React from 'react';
import { getStore } from "../firebase"

function CartCheckOut() {

    const newOrder = {
        buyer = 
        {
        name, 
        phone,
        email
        },
    items = 
        [{
        id,
        title,
        price
        }],date, total 
    }

    const firestore = getStore()
    const collection = firestore.collection('ordenes')

    if (order === '') {
        const query = collection.add(newOrder)
        query
            .then((res) => {
                setOrder(res.id)
                history.pushState(`/Cart/Checkout/${res.id}`);
            })
            .catch((err) => {
                console.error(err)
            })
    } else {
        const query = collection.doc(order)
    }

    return(
        <div> 
            
        </div>
    )

}

export default CartCheckOut;