import react from 'react'
import './ItemListContainer.scss'

export default function ItemListContainer (props) {

console.log(props)

    return (
        <div>
          <h2>{props.greeting}</h2>  
        </div>
    )
}
