import React from 'react'
import './styles/agregarEstudianteForm.css'
import { useForm } from 'react-hook-form'
function AgregarEstudianteForm() {

const onSubmit = (data) => {    
        console.log(data);
    };

    const { register, handleSubmit, watch } = useForm();
  return (
    <div className='agregarProfesores-container'>
        <h1 className="header-title-text">Agregar Estudiantes</h1>
        <form action="" className='agregarProfesor-form' onSubmit={handleSubmit(onSubmit)} >
           <input type='text' className='agregarProfesor-input' placeholder='Nombre' {...register("nombre", { required: true })}/><br />
           <input type='text' className='agregarProfesor-input' placeholder='Apellido' {...register("apellido", { required: true })}/><br />
           <input type='date' className='agregarProfesor-input' placeholder='Fecha de Nacimiento' {...register("fecha-nacimiento", { required: true })}/><br />
           <input type='text' className='agregarProfesor-input' placeholder='Celular' {...register("celular", { required: true })}/><br />
           <input type='text' className='agregarProfesor-input' placeholder='Correo Electronico' {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}/><br />
           <input type='text' className='agregarProfesor-input' placeholder='Carnet' {...register("carnet", { required: true })}/><br />
           <span className='agregarProfesor-label'>Foto de Perfil</span>
           <input type='file' className='agregarProfesor-input' placeholder='Foto' {...register("foto", { required: true })}/><br />
           <button type='submit' className='agregarProfesor-button'>Agregar</button>
        </form>
        <div className='carnet-container'>
            <h3 className='carnet-header-text'>Informacion de Carnet</h3>
        <span className='carnet-text'><b>Nombre Completo:</b> {watch(`nombre`) + ' ' + watch('apellido')}</span><br />
        <span className='carnet-text'><b>Fecha de Nacimiento:</b> {watch(`fecha-nacimiento`)}</span><br />
        <span className='carnet-text'><b>Celular:</b> {watch(`celular`)}</span><br />
        <span className='carnet-text'><b>Carnet:</b> {watch(`carnet`)}</span>
        <img className='carnet-image' src={watch(`foto`)} alt="imagen" />
        
        
        </div>
    </div>
  )
}

export default AgregarEstudianteForm