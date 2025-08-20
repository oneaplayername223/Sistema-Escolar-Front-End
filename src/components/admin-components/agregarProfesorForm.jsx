import React from 'react'
import './styles/agregarProfesorForm.css'
import { useForm } from 'react-hook-form'
import Carnet from './carnet';
function AgregarProfesorForm() {

const onSubmit = (data) => {    
        console.log(data);
    };

    const { register, handleSubmit, watch } = useForm();
  return (
    <div className='agregarProfesores-container'>
        <h1 className="header-title-text">Agregar Profesores</h1>
        <form action="" className='agregarProfesor-form' onSubmit={handleSubmit(onSubmit)} >
           <input type='text' className='agregarProfesor-input' placeholder='Nombre' {...register("nombre", { required: true })}/><br />
           <input type='text' className='agregarProfesor-input' placeholder='Apellido' {...register("apellido", { required: true })}/><br />
           <input type='date' className='agregarProfesor-input' placeholder='Fecha de Nacimiento' {...register("fecha-nacimiento", { required: true })}/><br />
           <input type='text' className='agregarProfesor-input' placeholder='Celular' {...register("celular", { required: true })}/><br />
           <input type='text' className='agregarProfesor-input' placeholder='Correo Electronico' {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}/><br />
           <input type='text' className='agregarProfesor-input' placeholder='Carnet' {...register("carnet", { required: true })}/><br />
           <span className='agregarProfesor-label'>Foto de Perfil</span>
           <input type='file' className='agregarProfesor-input' placeholder='Foto' {...register("foto", { required: true })}/><br />
           <button type='submit' className='agregarProfesor-button'>Agregar Profesor</button>
        </form>

        <Carnet nombre={watch(`nombre`)} apellido={watch(`apellido`)} fecha_nacimiento={watch(`fecha-nacimiento`)} celular={watch(`celular`)} email={watch(`email`)} carnet={watch(`carnet`)} foto={watch(`foto`)}/>
    </div>
  )
}

export default AgregarProfesorForm