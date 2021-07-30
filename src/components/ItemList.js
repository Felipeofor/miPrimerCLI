import Item from './Item'

function ItemList({ producto }){ //destruturing
    return(
        <div className='containerItemList'>
            {producto.map(producto => {
                return(
                    <Item 
                        key={producto.id} 
                        id={producto.id} 
                        image={producto.image} 
                        stock={producto.stock} 
                        title={producto.title} 
                        description={producto.descripcion} 
                        category={producto.categoria}
                        price={producto.price}
                    />
                )
            })}
        </div>
    )
}
export default ItemList