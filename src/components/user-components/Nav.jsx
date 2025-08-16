import './Nav.css'
import { Link } from 'react-router-dom'

/* import all the icons in Free Solid, Free Regular, and Brands styles */

//Icons


function Nav() {
  return (
    <div className='nav-container'>
<nav>
        <Link to="/" className='navLink'>Inicio</Link>
        <Link to="/contacto" className='navLink'>Contacto</Link>
        <Link to="/acerca-de" className='navLink'>Acerca</Link>
                <Link to="/login" className='navLink' style={{marginLeft: 'auto' }}>Registrarse / Iniciar Sesion</Link>

        

</nav>


    </div>
  )
}

export default Nav