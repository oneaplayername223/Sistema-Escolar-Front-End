import React from 'react'
import { useForm } from 'react-hook-form'

function Carnet({ nombre, apellido, fecha_nacimiento, celular, email, carnet, foto }) {
    const { watch } = useForm();
    
  return (
<div className='carnet-container'>
            <h3 className='carnet-header-text'>Informacion de Carnet</h3>
        <span className='carnet-text'><b>Nombre Completo: </b>{nombre + ' ' + apellido}</span><br />
        <span className='carnet-text'><b>Fecha de Nacimiento: </b>{fecha_nacimiento}</span><br />
        <span className='carnet-text'><b>Celular: </b> {celular}</span><br />
        <span className='carnet-text'><b>Carnet: </b> {carnet}</span><br />
        <img className='carnet-image' src={watch(`foto`)} alt="imagen de ejemplo" />
        
        
        </div>  )
}

export default Carnet