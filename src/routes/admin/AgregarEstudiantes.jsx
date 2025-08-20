import React from 'react'
import AgregarEstudianteForm from '../../components/admin-components/agregarEstudianteForm'
import AdminNav from '../../components/admin-components/adminNav'
function AgregarEstudiantes() {
  return (
    <div className='agregarEstudiantes-container'>
        <AdminNav />
        <AgregarEstudianteForm />

    </div>
  )
}

export default AgregarEstudiantes