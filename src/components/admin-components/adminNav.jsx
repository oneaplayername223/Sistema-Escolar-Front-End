import React from "react";
import { Link } from "react-router-dom";

import { FaHouseChimney } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { IoSchool } from "react-icons/io5";






import './adminNav.css'
function AdminNav (){
    return(
<>

<div className="adminNav-container">
<h1><IoSchool className="adminNav-icon" size={50} color="#ffffffff" /><br />Dashboard  Admin </h1>
    <nav className="adminNav">
        <ul className="adminNav-list">
            <li><FaHouseChimney className="adminNav-icon" size={24} color="#ffffffff" />
<Link to="/index" className="adminNav-link">Inicio</Link></li>

            <span className="fastLink">Profesores</span>
            <li> <FaChalkboardTeacher  className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/contacto" className="adminNav-link">Ver Profesores</Link></li>
            
            <li> <IoPersonAdd className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/acerca-de" className="adminNav-link">Agregar Profesores</Link></li>
            <span className="fastLink">Estudiantes</span>
            <li><PiStudentBold className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/login" className="adminNav-link">Ver Estudiantes</Link></li>
            <li><IoIosAdd className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/acerca-de" className="adminNav-link">Agregar Estudiantes</Link></li>

            <span className="fastLink">Preferencias</span>
            <li> <IoIosSettings className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/acerca-de" className="adminNav-link">Configuracion</Link></li>
        </ul>
        
    </nav>
  
</div>
 
</>
    )
}

export default AdminNav