import productos from "../productos.json";
import styles from "./Productos.scss";

export default function Productos() {
  return (
    <div className={"productos_conteiner"}>
      <h1>Seccion de productos</h1>

      <img
        className="productos_columna productos_img "
        width={200}
        height={400}
        src={productos.pictureUrl}
        alt={productos.title}
      />
      <div className="productos_columna">
        <p>{productos.title}</p>
        <p>{productos.description}</p>
        <p>{productos.price}</p>
      </div>
    </div>
  );
}
