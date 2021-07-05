import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Cards from './components/Cards';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="body">
            <Navbar/>
            <ItemListContainer greeting="Hola mundo"/>
            <Cards/>
    </div>
  );
}

export default App;
