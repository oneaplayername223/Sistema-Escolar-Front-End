import './App.css';

//Dependencies
import { Link, Route, Routes } from 'react-router-dom';

//Routes
import Index from './routes/guess/Index';
import Login from './routes/guess/Login';
import IndexAdmin from './routes/admin/Index';
function App() {
  return (
    <div className="App">
      <Routes >
     <Route path="/" element={<Index />} />
     <Route path="/login" element={<Login />} />
     <Route path='/index' element={<IndexAdmin />} />
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
