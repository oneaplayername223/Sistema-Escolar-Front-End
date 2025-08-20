import React from 'react'
import './styles/indexBody.css'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { GiTeacher } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";

import { useState } from 'react';

function IndexBody() {
  const [search, setSearch] = useState('');

  const items = [
    {
      title: "Agregar Profesores",
      description: "Crea usuario a los profesores.",
      icon: <IoPersonAdd size={30} color="#141c33" />,
      link: "/agregar/profesor",
      buttonText: "Agregar",
      buttonIcon: <IoMdAdd size={20} className='adminNav-icon' color="#ffffffff" />
    },
    {
      title: "Ver Profesores",
      description: "Visualiza la informacion de los profesores activos.",
      icon: <GiTeacher size={30} color="#141c33" />,
      link: "/ver/profesores",
      buttonText: "Ver",
      buttonIcon: <IoMdPersonAdd size={20} className='adminNav-icon' color="#ffffffff" />
    },
    {
      title: "Agregar Estudiantes",
      description: "Formulario para registrar nuevos estudiantes en el sistema.",
      icon: <IoPersonAdd size={30}  />,
      link: "/agregar/estudiante",
      buttonText: "Agregar",
      buttonIcon: <IoMdAdd size={20} className='adminNav-icon' color="#ffffffff" />
    },
    {
      title: "Configuracion",
      description: "Accede a la configuracion de tu cuenta",
      icon: <IoIosSettings size={30} className='adminNav-icon' color="#141c33" />,
      link: "/contacto",
      buttonText: "Ver",
      buttonIcon: <FaEye size={20} className='adminNav-icon' color="#ffffffff" />
    },
    {
      title: "Ver Usuarios",
      description: "Visualiza la informacion de los usuarios registrados",
      icon: <FaUser size={30} color="#141c33" />,
      link: "/contacto",
      buttonText: "Ver",
      buttonIcon: <FaEye size={20} className='adminNav-icon' color="#ffffffff" />
    },
    {
      title: "Cerrar Sesion",
      description: "Sal de tu cuenta actual",
      icon: <IoLogOut size={30} className='adminNav-icon' color="#141c33" />,
      link: "/contacto",
      buttonText: "Salir",
      buttonIcon: <IoLogOut size={20} className='adminNav-icon' color="#ffffffff" />
    }
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className='header-container'>
        <nav className='navBar'>
          <input
            type="search"
            placeholder="🔍 Buscar funcionalidad"
            className='searchBar'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </nav>
        <div className='fast-links'>
          <Link to="/acerca-de" className='fastLink'>
            <GiTeacher className="adminNav-icon" size={15} color="#2f456f" />Profesores
          </Link>
          <Link to="/acerca-de" className='fastLink'>
            <PiStudentBold className="adminNav-icon" size={15} color="#2f456f" />Estudiantes
          </Link>
          <Link to="/acerca-de" className='fastLink'>
            <IoIosSettings className="adminNav-icon" size={15} color="#2f456f" />Configuración
          </Link>
        </div>
      </div>

      <div className='body-container'>
        {filteredItems.map((item, index) => (
          <div className='item-box' key={index}>
            {item.icon}
            <span className='item-title'>{item.title}</span>
            <p className='item-description'>{item.description}</p>
            <Link to={item.link} className='item-button'>
              {item.buttonIcon}{item.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default IndexBody;