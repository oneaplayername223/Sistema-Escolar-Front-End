import React from 'react'
import './indexBody.css'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";


function IndexBody() {
  return (
    <div className='body-container'>
            <div className='item-box'>
            <GiTeacher className="adminNav-icon" size={30} color="#141c33"  />
            <span className='item-title'>Profesores</span>
            <p className='item-description'>Aqui veras la informacion de los docentes</p>
<Link to="/contacto" className='item-button'>
            <FaEye className="adminNav-icon" size={20} color="#ffffffff"  />Ver</Link>      
           </div>
           <div className='item-box'>
            <PiStudentBold className="adminNav-icon" size={30} color="#141c33" />
            <span className='item-title'>Estudiantes</span>
            <p className='item-description'>
                Aqui veras la informacion de los estudiantes del centro</p>
           <Link to="/contacto" className='item-button'>
            <FaEye className="adminNav-icon" size={20} color="#ffffffff" />Ver</Link>
            </div>
            <div className='item-box'>
            <IoIosSettings className="adminNav-icon" size={30} color="#141c33" />
            <span className='item-title'>Configuracion</span>
            <p className='item-description'>
                Visualización de reportes de asistencia y otros datos importantes.
                                Visualización de reportes de asistencia y otros datos importantes.

            </p>
            <Link to="/contacto" className='item-button'>
            <FaEye className="adminNav-icon" size={20} color="#ffffffff" />Ver</Link>
        </div>
    </div>
  )
}

export default IndexBody