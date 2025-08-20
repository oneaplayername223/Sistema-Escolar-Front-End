import React from 'react'
import './styles/verProfesoresBody.css'
function VerProfesoresBody() {
  return (
    <div className='verProfesoresBody-container'>
      <h1 className='header-title-text'>Ver Profesores</h1>
      <table className='verProfesores-table'>
        <thead className='verProfesores-table-header'>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Celular</th>
            <th>Correo Electronico</th>
            <th>Carnet</th>
            <th>Foto de Perfil</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className='verProfesores-table-body'>
          <tr className='verProfesores-table-row'>
            <td>Jose Antonio</td>
            <td>Cruz Ramirez</td>
            <td>12/12/2000</td>
            <td>12345678910</td>
            <td>H3yX9@example.com</td>
            <td>12345</td>
            <td>Foto de Perfil</td>
            <td><button className='delete-button'>Eliminar</button><button className='edit-button'>Editar</button></td>
          </tr>
          <tr className='verProfesores-table-row'>
            <td>Jose Antonio </td>
            <td>Cruz Ramirez</td>
            <td>12/12/2000</td>
            <td>12345678910</td>
            <td>H3yX9@example.com</td>
            <td>12345</td>
            <td>Foto de Perfil</td>
            <td><button className='delete-button'>Eliminar</button><button className='edit-button'>Editar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default VerProfesoresBody