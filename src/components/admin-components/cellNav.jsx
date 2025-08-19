import React from 'react'
import { Link } from 'react-router-dom'
import './cellNav.css'
function CellNav() {
  return (
    <div className='cellNav-container'>
        <nav className='cellNav'>
                <ul className='cellNav-list'>
                    <li><Link to="/acerca-de" className='cellNav-link'>Acerca de</Link></li>
                    <li><Link to="/acerca-de" className='cellNav-link'>Contacto</Link></li>
                    <li><Link to="/acerca-de" className='cellNav-link'>Ayuda</Link></li>
                </ul>
            </nav>
    </div>
  )
}

export default CellNav