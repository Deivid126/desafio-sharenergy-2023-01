
import './App.css';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Login } from './pages/Login';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import  {UsuariosList} from './pages/ListarUsuarios';
import { CatsApi } from './pages/CatStatus';
import { RandonUser } from './pages/RandomUser';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Site</h1>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/private">Página Privada</Link>
          <Link to="/listar">Lista de Usuarios</Link>
          <Link to="/cats">Status Cats</Link>
          <Link to="/dogs"> Randon Dogs</Link>
        </nav>
        <hr/>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/private' element={<RequireAuth><Private/></RequireAuth>}></Route>
          <Route path='/listar' element={<UsuariosList/>}></Route>
          <Route path='/cats' element={<CatsApi/>}></Route>
          <Route path='/dogs' element={<RandonUser/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
