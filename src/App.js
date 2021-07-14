import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="body">
            <Navbar/>
            <ItemListContainer/>
    </div>
  );
}

export default App;
