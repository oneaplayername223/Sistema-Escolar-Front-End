import './App.css';

//Dependencies
import { Route, Routes } from 'react-router-dom';

//Routes
import Index from './routes/guess/Index';

function App() {
  return (
    <div className="App">
      <Routes >
     <Route path="/" element={<Index />} />
     <Route path="/login" element={<h1>pagina de login</h1>} />
     <Route path='/index' element={<h1>pagina de index registrado</h1>} />
     <Route path='*' element={<h1>pagina no encontrada</h1>} />

     </Routes>

    </div>
  );
}

export default App;
