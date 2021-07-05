import react from 'react'
import './Navbar.scss'
import CartWidget from '../CartWidget'

export default function Navbar(){
    return(
        <div id="header">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  				<div className="container-fluid d-flex justify-content-center">
    				<a className="navbar-brand ms-1" href="#">Llevate todooo!!</a>
   				 		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" 	data-bs-target="#navbarSupportedContent" 	aria-controls="navbarSupportedContent" aria-expanded="false" 	aria-label="Toggle navigation">
      						<span className="navbar-toggler-icon"></span>
   	 					</button>
   	 				<div className="collapse navbar-collapse align-items-center justify-content-center" 	id="navbarSupportedContent">
      					<ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
        					<li className="nav-item">
          						<a className="nav-link active" aria-current="page" 	href="#">Home</a>
        					</li>
       	 					<li className="nav-item">
          						<a className="nav-link" href="#">Nosotros</a>
        					</li>
        					<li className="nav-item dropdown">
          						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos
         						</a>
          					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            					<li><a className="dropdown-item" href="#">1er categoria</a></li>
            					<li><a className="dropdown-item" href="#">2da categoria</a></li>
            					<li><hr className="dropdown-divider"/></li>
            					<li><a className="dropdown-item" href="#">3ra categoria</a></li>
          					</ul>
       	 					</li>
        					<li className="nav-item">
          						<a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contacto</a>
        					</li>
     	 				</ul>
						  <CartWidget/>
    				</div>
  				</div>
			</nav>
		</div>
    )
}