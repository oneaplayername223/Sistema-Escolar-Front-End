import React from "react";
import { Link } from "react-router-dom";

import { FaHouseChimney } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { IoSchool } from "react-icons/io5";






import './styles/adminNav.css'
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
                        <li> <IoPersonAdd className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/agregar/profesor" className="adminNav-link">Agregar Profesores</Link></li>

            <li> <FaChalkboardTeacher  className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/ver/profesores" className="adminNav-link">Ver Profesores</Link></li>
            
            <span className="fastLink">Estudiantes</span>
                        <li><IoIosAdd className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/agregar/estudiante" className="adminNav-link">Agregar Estudiantes</Link></li>

            <li><PiStudentBold className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/ver/estudiantes" className="adminNav-link">Ver Estudiantes</Link></li>

            <span className="fastLink">Preferencias</span>
            <li> <IoIosSettings className="adminNav-icon" size={24} color="#ffffffff" /><Link to="/login" className="adminNav-link">Cerrar Sesion</Link></li>
        </ul>
        
    </nav>
  
</div>
 
</>
    )
}

export default AdminNav