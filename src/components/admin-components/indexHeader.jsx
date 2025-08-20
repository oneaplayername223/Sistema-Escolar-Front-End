import React from 'react'
import './header.css'
import { FaChalkboardTeacher  } from 'react-icons/fa';
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
        <h1 className="header-title-text">Dashboard</h1>
        
            <div className='stats-container'>
            
            <div className='stats'>
            <i className="fa fa-users" aria-hidden="true"></i>
            <FaChalkboardTeacher className="adminNav-icon" size={34} color="#4f5b65ff" />
            <h3 className='stats-text'>Profesores</h3>
        <span className='stats-number'>0</span>
            </div>
            <div className='stats'>
            <PiStudentFill className="adminNav-icon" size={34} color="#141c33" />
            <h3 className='stats-text'>Estudiantes</h3>
        <span className='stats-number'>0</span>

            </div>
            <div className='stats'>
            <SiGoogleclassroom className="adminNav-icon" size={34} color="#2f456f" />
            <h3 className='stats-text'>Cursos</h3>
        <span className='stats-number'>0</span>

            </div>
            <div className='stats'>
            <FaUser className="adminNav-icon" size={34} color="#5374ac" />
            <h3 className='stats-text'>Usuarios</h3>
        <span className='stats-number'>0</span>
                </div>
           </div>
      <nav className='navBar'>
        <input type="search" placeholder="🔍Buscar Funcionalidad" className='searchBar' />
      </nav>
      <div className='fast-links'>
      <Link to="/acerca-de" className='fastLink'>Profesores</Link>
      <Link to="/acerca-de" className='fastLink'>Estudiantes</Link>
      
      <Link to="/acerca-de" className='fastLink'>Ver</Link>
            <Link to="/acerca-de" className='fastLink'>Configuracion</Link>

      <Link to="/acerca-de" className='fastLink'>ajustes</Link>

      </div>
      
      </div>
      
  )
}

export default Header