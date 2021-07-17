import './Navbar.scss'
import CartWidget from '../CartWidget'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div id="header">
			<Router>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  				<div className="container-fluid d-flex justify-content-center">
    				<Link to="/"><a className="navbar-brand ms-1">Super virtual</a></Link>
   				 		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" 	data-bs-target="#navbarSupportedContent" 	aria-controls="navbarSupportedContent" aria-expanded="false" 	aria-label="Toggle navigation">
      						<span className="navbar-toggler-icon"></span>
   	 					</button>
   	 				<div className="collapse navbar-collapse align-items-center justify-content-center" 	id="navbarSupportedContent">
      					<ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
        					<li className="nav-item">
          						<Link to="/"><a className="nav-link active" aria-current="page">Home</a></Link>
        					</li>
       	 					<li className="nav-item">
          						<Link to="/Productos"><a className="nav-link" href="#">Productos</a></Link>
        					</li>
        					<li className="nav-item dropdown">
          						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias
         						</a>
          					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            					<li><a className="dropdown-item" href="#">Congelados</a></li>
            					<li><a className="dropdown-item" href="#">Ofertas</a></li>
            					<li><a className="dropdown-item" href="#">2x1</a></li>
          					</ul>
       	 					</li>
     	 				</ul>
						  <CartWidget/>
    				</div>
  				</div>
			</nav>
			</Router>
		</div>
    )
}
