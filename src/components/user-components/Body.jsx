import React from 'react'
import './styles/Body.css'
function Body() {

    
  return (
    <div className='body-container-user'>
        <h1 className='body-title-user'>Galeria de Fotos</h1>
        <div className='gallery'>
            <img className="gallery-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="imagen de ejemplo" />
            <img className="gallery-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="imagen de ejemplo" />
            <img className="gallery-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="imagen de ejemplo" />
        </div>
                <h1 className='body-title-user'>Mision</h1>
                <p className='body-subtitle-user'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi soluta eos error voluptate cumque illum harum! Vitae expedita impedit nisi possimus, aliquam quod deleniti totam delectus qui quasi necessitatibus?
                </p>
                <h1 className='body-title-user-right'>Vision</h1>
                <p className='body-subtitle-user'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi soluta eos error voluptate cumque illum harum! Vitae expedita impedit nisi possimus, aliquam quod deleniti totam delectus qui quasi necessitatibus?
                </p>
                <h1 className='body-title-user'>Valores</h1>
                <p className='body-subtitle-user'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi soluta eos error voluptate cumque illum harum! Vitae expedita impedit nisi possimus, aliquam quod deleniti totam delectus qui quasi necessitatibus?
                </p>

<div className='contact-container'>

    <h1 className='contact-title'>Contactanos:</h1>
    <div className='contact-info'>
                <span className='contact-form-title-left'>Informacion de Contacto</span>

        <p className='contact-info-text'><b>Correo Electronico:</b><br />ejemplo@gmail.com</p>
        <p className='contact-info-text'><b>Direccion:</b><br />C/2 Calle 2</p>
        <p className='contact-info-text'><b>Telefono:</b><br />809-123-456</p>
    </div>
    <div className='contact-form'>
        <span className='contact-form-title'>Formulario de Contacto</span>
        <input type="text" placeholder='Correo Electronico'/><br />
        <input type="text" placeholder='Asunto'/><br />
        <input type="text" placeholder='Mensaje'/><br />
        <button type='submit'>Enviar</button>
    </div>
</div>

    </div>
  )
}

export default Body