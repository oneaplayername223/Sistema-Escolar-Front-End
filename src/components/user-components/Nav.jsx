import './styles/Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='nav-container'>
<nav>
        <Link to="/" className='navLink'>Inicio</Link>
        <Link to="/contacto" className='navLink'>Contacto</Link>
        <Link to="/acerca-de" className='navLink'>Acerca</Link>
        <Link to="/login" className='navLink' style={{marginLeft: 'auto' }}>Iniciar Sesion</Link>

        

</nav>


    </div>
  )
}

export default Nav