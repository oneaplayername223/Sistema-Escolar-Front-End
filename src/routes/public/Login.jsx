import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
function Login() {

const navigate = useNavigate();

const onSubmit = (data) => {    
    console.log(data);
    if(data.email === 'admin@gmail.com' && data.password === 'admin@gmail.com'){
        return navigate('/index');
    }else{
        console.log('error');
    }
  };

    const { register, handleSubmit } = useForm();
  return (
    <div className='login-container'>
        <h1>Iniciar Sesion</h1>
        <form action="" className='login-form' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Correo Electronico' {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}/><br />
            <input type="password" placeholder='Contraseña' {...register("password", { required: true })}/><br />
            <button type='submit'>Iniciar Sesion</button>
        </form>
        <Link style={{color: 'black', textDecoration: 'none', padding: '10px'}} to="/">Volver</Link>
    </div>
  )
}

export default Login