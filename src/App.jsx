import './App.css';
import logo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Table, Form} from 'react-bootstrap';
//https://sweetalert2.github.io/ 
import Swal from 'sweetalert2';

function App() {

  const [alumno, setAlumno]= useState({
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
      })

  const [lista, setLista]= useState([])
  
  const saveChange=(event)=>{
    setAlumno({
      ...alumno,
      [event.target.name]:event.target.value
    })
  }
  return (
    <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Example #13
          </p>
        </header>

        <div className="Containers">

          <div className="Form">

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Matrícula</Form.Label>
                <Form.Control 
                   placeholder="Ingresa tu matrícula"
                   onChange={saveChange}
                   value={alumno.matricula}
                   name="matricula"
                
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                   placeholder="Ingresa tu nombre completo"
                   onChange={saveChange}
                   value={alumno.nombre}
                   name="nombre"
                />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" 
                   placeholder="Ingresa tu correo"
                   onChange={saveChange}
                   value={alumno.correo}
                   name="correo"
                   />
                <Form.Text className="text-muted">
                  Nunca compartiremos su correo electrónico con nadie más.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Carrera</Form.Label>
                  <Form.Select
                   onChange={saveChange}
                   value={alumno.carrera}
                   name="carrera"
                  >
                    <option value="selecciona">selecciona</option>
                    <option value="Informatica">Informática</option>
                    <option value="Sistemas">Sistemas Computacionales</option>
                    <option value="TICS">TICS</option>
                    <option value="IA">IA </option>
                    <option value="Ciberseguridad">Ciberseguridad</option>
                  </Form.Select>
              </Form.Group>


            </Form>
          </div>


          <div className="List">
             
            <h1>{alumno.matricula}</h1>
            <h1>{alumno.nombre}</h1>
            <h1>{alumno.correo}</h1>
            <h1>{alumno.carrera}</h1>

          </div>

        </div>
    </div>
  );
}

export default App;

/*
Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Alumno agregado',
      showConfirmButton: false,
      timer: 1500
})

Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Llena todos los campos',
      showConfirmButton: false,
      timer: 1500
})

<Button variant="primary" type="submit">
  Enviar
</Button>



<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>




*/