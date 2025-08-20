import React from 'react'
import AdminNav from '../../components/admin-components/adminNav'
import AgregarProfesorForm from '../../components/admin-components/agregarProfesorForm'
function AgregarProfesores() {
  return (
    <div className='agregarProfesores-container'>
        <AdminNav />
        <AgregarProfesorForm />
    </div>
  )
}

export default AgregarProfesores