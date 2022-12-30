
import './App.css';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Login } from './pages/Login';
import { Private } from './pages/Private';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Site</h1>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/private">Página Privada</Link>
        </nav>
        <hr/>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/private' element={<Private/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
