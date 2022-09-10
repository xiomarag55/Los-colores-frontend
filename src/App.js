import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp  from './components/navegation/NavbarComp';
import Inicio from './components/pages/Inicio';
import Ventas from './components/pages/Ventas';
import Productos from './components/pages/Productos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
              <NavbarComp />
        </Router>
      </header>
    </div>
  );
}

export default App;
