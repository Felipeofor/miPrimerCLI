import react from 'react';
import './ItemList.scss';
import Item from '../Item';


export default function ItemListContainer (props) {

  const {myItem, loading} = props;

    return (
        <div>
             {loading ?
            <div>Cargando productos...</div> : (
                <div>
                    {myItem.map((myItem) => {
                        return <Item 
                        title = {myItem.title}
                        key = {myItem.id}
                        price = {myItem.price}
                        description = {myItem.description}
                        pictureUrl = {myItem.pictureUrl}
                        />
                })}
            </div>
            )}
        </div>
    )
}
