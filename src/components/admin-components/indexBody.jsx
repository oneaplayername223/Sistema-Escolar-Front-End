import React from 'react'
import './indexBody.css'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { GiTeacher } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";



function IndexBody() {
  return (
    <div className='body-container'>
            <div className='item-box'>
              <IoPersonAdd  className="adminNav-icon" size={30} color="#141c33"  />
              <span className='item-title'>Agregar Profesores</span>
              <p className='item-description'>Crea usuario a los profesores.

</p>
              <Link to="/contacto" className='item-button'>
              <IoMdAdd className="adminNav-icon" size={20} color="#ffffffff"  />Agregar</Link>      
           </div>
            <div className='item-box'>
              <GiTeacher className="adminNav-icon" size={30} color="#141c33"  />
              <span className='item-title'>Ver Profesores</span>
              <p className='item-description'>Visualiza la informacion de los profesores activos.

</p>
              <Link to="/contacto" className='item-button'>
              <IoMdPersonAdd className="adminNav-icon" size={20} color="#ffffffff"  />Ver</Link>      
           </div>
           <div className='item-box'>
            <IoPersonAdd className="adminNav-icon" size={30} color="#141c33" />
            <span className='item-title'>Agregar Estudiantes</span>
            <p className='item-description'>
              Formulario para registrar nuevos estudiantes en el sistema.</p>
           <Link to="/contacto" className='item-button'>
              <IoMdAdd className="adminNav-icon" size={20} color="#ffffffff"  />Agregar</Link>      
            </div>
            <div className='item-box'>
            <IoIosSettings className="adminNav-icon" size={30} color="#141c33" />
            <span className='item-title'>Configuracion</span>
            <p className='item-description'>
                accede a la configuracion de tu cuenta
            </p>
            <Link to="/contacto" className='item-button'>
            <FaEye className="adminNav-icon" size={20} color="#ffffffff" />Ver</Link>
        </div>

  <div className='item-box'>
            <FaUser className="adminNav-icon" size={30} color="#141c33" />
            <span className='item-title'>Ver Usuarios</span>
            <p className='item-description'>
                Visualiza la informacion de los usuarios registrados
            </p>
            <Link to="/contacto" className='item-button'>
            <FaEye className="adminNav-icon" size={20} color="#ffffffff" />Ver</Link>
        </div>
          <div className='item-box'>
            <IoLogOut className="adminNav-icon" size={30} color="#141c33" />
            <span className='item-title'>Cerrar Sesion</span>
            <p className='item-description'>
              Sal de tu cuenta actual
            </p>
            <Link to="/contacto" className='item-button'>
            <IoLogOut className="adminNav-icon" size={20} color="#ffffffff" />Salir</Link>
        
        </div>
    </div>
  )
}

export default IndexBody