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

  const handleSubmit =(event)=>{
    event.preventDefault();
    setLista([...lista,alumno]);
  }

  const eliminar=(id)=>{
    const temporal = lista.filter((al,i)=>al.matricula!==id);
    setLista(temporal);
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

            <Form onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit">
              Enviar
            </Button>

            </Form>
          </div>


          <div className="List">
            
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th># Matricula</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Carrera</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  {
                    lista.map((a,i)=>
                      <tr key={i}>
                        <td>{a.matricula}</td>
                        <td>{a.nombre}</td>
                        <td>{a.correo}</td>
                        <td>{a.carrera}</td>
                        <td><Button variant="primary"> Modificar</Button></td>
                        <td><Button variant="danger" onClick={()=>eliminar(a.matricula)}> Eliminar</Button></td>
                      </tr>
                    )
                  }

                </tbody>
              </Table>

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








*/