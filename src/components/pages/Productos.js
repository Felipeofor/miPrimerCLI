import productos from "../productos.json";
import styles from "./Productos.scss";

export default function Productos(){
    return(

    <div className={"productos_conteiner"}>
        <h1>hola</h1>
        {/* <img className="productos_columna productos_img " width={200} height={400} src={productos.[0].pictureUrl} alt={productos.title}/>
        <div className="productos_columna">
            <p>{productos.[0].title}</p>
            <p>{productos.[0].description}</p>
            <p>{productos.[0].price}</p>
        </div> */}
    </div>
    )
}