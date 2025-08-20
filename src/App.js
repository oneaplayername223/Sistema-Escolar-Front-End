import './App.css';

//Dependencies
import { Link, Route, Routes } from 'react-router-dom';

//Routes
import Index from './routes/public/Index';
import Login from './routes/public/Login';
import IndexAdmin from './routes/admin/Index';
import AgregarProfesores from './routes/admin/AgregarProfesores';
import VerProfesores from './routes/admin/VerProfesores';
import AgregarEstudiantes from './routes/admin/AgregarEstudiantes';

function App() {
  return (
    <div className="App">
      <Routes >
     <Route path="/" element={<Index />} />
     <Route path="/login" element={<Login />} />
     <Route path='/index' element={<IndexAdmin />} />
     <Route path='/agregar/profesor' element={<AgregarProfesores />} />
     <Route path='/ver/profesores' element={<VerProfesores />} />
     <Route path='/agregar/estudiante' element={<AgregarEstudiantes />} />
     <Route path='*' element={<div>
<h1>Error 404:</h1><br />
<p>La pagina que estas buscando no existe</p>
<Link to="/">Volver al inicio</Link>

     </div>} />

     </Routes>

    </div>
  );
}

export default App;
