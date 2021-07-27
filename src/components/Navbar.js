import { Link } from 'react-router-dom';



import CartWidget from './CartWidget';

function NavBar(){


    return(
        <div id="header">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  				<div className="container-fluid d-flex justify-content-center">
    				<Link to="/Home" className="navbar-brand">El super del Taekwondo</Link>
   				 		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" 	data-bs-target="#navbarSupportedContent" 	aria-controls="navbarSupportedContent" aria-expanded="false" 	aria-label="Toggle navigation">
      						<span className="navbar-toggler-icon"></span>
   	 					</button>
   	 				<div className="collapse navbar-collapse align-items-center justify-content-center" 	id="navbarSupportedContent">
      					<ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
        					<li className="nav-item">
          						<Link to="/Home" className="nav-link active">Home</Link>
        					</li>
       	 					<li className="nav-item">
          						<Link to="/Productos" className="nav-link">Productos</Link>
        					</li>
        					<li className="nav-item dropdown">
          						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias
         						</a>
          					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							  <Link to="/Productos/Categoria/Proteccion" className="dropdown-item">Protección</Link>
							  <Link to="/Productos/Categoria/Doboks" className="dropdown-item">Doboks</Link>
							  <Link to="/Productos/Categoria/Manoplas" className="dropdown-item">Manoplas</Link>
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