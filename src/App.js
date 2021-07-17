import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Productos from './components/pages/Productos';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
            <Navbar/>
            <Switch>
              <Route exact path="/Productos"><Productos/></Route>
              <Route exact path="/"><Home /></Route>
            </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
