import {useState} from 'react';
import { getFirestore } from "../firebase";

function CartCheckOut() {

    const [orden, setOrden] = useState(false)

        const newOrder = {
            buyer: {
                name: "Felipe",
                phone: "115995578",
                email: "prueba@gmail.com"
            },
        }

    const firestore = getFirestore()
    const collection = firestore.collection('ordenes')

    if (orden === '') {
        const query = collection.add(newOrder)
        query
            .then((res) => {
                setOrden(res.id)
                // history.pushState(`/Cart/Checkout/${res.id}`);
            })
            .catch((err) => {
                console.error(err)
            })
    }
    //  else {
    //     const query = collection.doc(orden)

    return(
        <div> 
            {orden}
        </div>
    )

}

export default CartCheckOut;