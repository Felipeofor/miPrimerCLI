// Importamos lo que necesitemos de react-router-dom
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Importamos los componentes
import NavBar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import CartProvider, { CartContext } from "./Context";

//Importamos los estilos
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'

function App() {
    return (
        <div className="App">
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route exact path='/Productos' component={ ItemListContainer } />
                        <Route exact path='/Productos/Categoria/:categoryByID'  component={Categories}/>
                        <Route exact path='/Productos/Categoria/ItemDetail/:productById'  component={ ItemDetailConteiner }/>
                        <Route path="/cart" exact component={Cart} />
                    </Switch>
                {/* Cualquier otra URL que se escriba y no coincida con lo que ya tenemos configurado, nos enviará al componente que coincida que con el path que coloquemos en el Redirect */}
                <Redirect to='/Productos' />
                {/* En este caso, este Redirect nos llevará al renderizado de los productos */}
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
