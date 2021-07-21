import React, { useState } from 'react';
import { Link } from 'react-router-dom';



import CartWidget from './CartWidget';

function NavBar(){


    return(
        <div id="header">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  				<div className="container-fluid d-flex justify-content-center">
    				<Link to="/" className="navbar-brand">El super de Taekwondo</Link>
   				 		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" 	data-bs-target="#navbarSupportedContent" 	aria-controls="navbarSupportedContent" aria-expanded="false" 	aria-label="Toggle navigation">
      						<span className="navbar-toggler-icon"></span>
   	 					</button>
   	 				<div className="collapse navbar-collapse align-items-center justify-content-center" 	id="navbarSupportedContent">
      					<ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
        					<li className="nav-item">
          						<Link to="/" className="nav-link active">Home</Link>
        					</li>
       	 					<li className="nav-item">
          						<Link to="/Productos" className="nav-link">Productos</Link>
        					</li>
        					<li className="nav-item dropdown">
          						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias
         						</a>
          					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            					<li><a className="dropdown-item" href="#">Protección</a></li>
            					<li><a className="dropdown-item" href="#">Dobok</a></li>
            					<li><a className="dropdown-item" href="#">Manoplas y palchaguis</a></li>
          					</ul>
       	 					</li>
     	 				</ul>
						  <CartWidget/>
    				</div>
  				</div>
			</nav>
		</div>
    );
}
export default NavBar