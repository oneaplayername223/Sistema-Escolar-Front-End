import React from 'react'
import { useForm } from 'react-hook-form'


function carnet() {
    const { register, handleSubmit, watch } = useForm();
  return (
<div className='carnet-container'>
            <h3 className='carnet-header-text'>Informacion de Carnet</h3>
        <span className='carnet-text'><b>Nombre Completo:</b> {watch(`nombre`) + ' ' + watch('apellido')}</span><br />
        <span className='carnet-text'><b>Fecha de Nacimiento:</b> {watch(`fecha-nacimiento`)}</span><br />
        <span className='carnet-text'><b>Celular:</b> {watch(`celular`)}</span><br />
        <span className='carnet-text'><b>Carnet:</b> {watch(`carnet`)}</span>
        <img className='carnet-image' src={watch(`foto`)} alt="imagen de ejemplo" />
        
        
        </div>  )
}

export default carnet