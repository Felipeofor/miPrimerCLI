// Importamos lo que necesitemos de react-router-dom
import { Link } from "react-router-dom";

function Home() {

    return(
        <div className="home">
        <div className='home_containerCard card mx-1 my-1' >
        <Link to='Productos/Categoria/Proteccion' className='linkCard col-12'>
        <div className='imageCard col-12' style={{backgroundImage:`url(https://www.venta.com.mx/sh-img/crea-tu-equipo-de-proteccion-para-taekwondo-rhingo--D_NQ_NP_899552-MPE25587160960_052017-F_equipo%2Bproteccion%2Btaekwondo.jpg)`, width: '80%'}}></div>
        <h3 >Protección</h3>
        </Link>
        </div>
        <div className='home_containerCard card  mx-1 my-1' >
        <Link to='Productos/Categoria/Doboks' className='linkCard col-12'>
        <div className='imageCard col-12' style={{backgroundImage:`url(https://www.sonnosdeporte.com/Temp/App_WebSite/App_PictureFiles/Items/58001_800.jpg)`, width: '80%'}}></div>
        <h3>Doboks</h3>
        </Link>
        </div>
        <div className='home_containerCard card  mx-1 my-1' >
        <Link to='Productos/Categoria/Manoplas' className='linkCard col-12'>
        <div className='imageCard col-12' style={{backgroundImage:`url(https://http2.mlstatic.com/D_NQ_NP_916354-MLM44625174882_012021-V.jpg)`, width: '80%'}}></div>
        <h3>Manoplas y palchaguis</h3>
        </Link>
        </div>
    </div>
    )
}

export default Home;