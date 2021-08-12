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
                        <Route exact path = '/'  component={ItemListContainer}/>
                        <Route exact path = '/Productos' component={ ItemListContainer } />
                        <Route exact path = '/Productos/Categoria/:categoryByID'  component={ Categories } />
                        <Route exact path = '/Productos/Categoria/ItemDetail/:productById'  component={ ItemDetailConteiner }/>
                        <Route exact path = '/cart' exact component={Cart} />
                        <Route path = { '*' } component={ItemListContainer}/>
                    </Switch>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
