import './App.css';
import logo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Table, Form} from 'react-bootstrap';
//https://sweetalert2.github.io/ 
import Swal from 'sweetalert2';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Listado from './Componentes/Listado';

function App() {

  const [alumno, setAlumno]= useState({
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
      })

  const [lista, setLista]= useState([])
  
  const [desh, setDesh] = useState(false);

  const saveChange=(event)=>{
    setAlumno({
      ...alumno,
      [event.target.name]:event.target.value
    })
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    
    const {matricula,nombre,correo,carrera}= alumno;

    if (matricula.length===0 || nombre.length===0 ||correo.length===0 || carrera.length===0 || carrera==="selecciona"){

      Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Llena todos los campos',
            showConfirmButton: false,
            timer: 1500
      })

      return;

    }
    else{

      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Alumno agregado',
          showConfirmButton: false,
          timer: 1500
      })

    }

    setAlumno({
      matricula:"",
      nombre:"",
      correo:"",
      carrera:""
    })

    let temporal = [...lista];
    //let temporal = lista;

    //true=="true"
    if (desh===true){
      temporal = lista.filter((al)=>al.matricula!==alumno.matricula);
    }

    setLista([...temporal,alumno]);

    setDesh(false);
  }

  const eliminar=(id)=>{
    const temporal = lista.filter((al,i)=>al.matricula!==id);
    setLista(temporal);
  }

  const modificar=(alum)=>{
    setAlumno({
      matricula:alum.matricula,
      nombre:alum.nombre,
      correo:alum.correo,
      carrera:alum.carrera
    })
    setDesh(true);

  }
  return (
    <div className="App">
      
      <Header
        logo={logo}
      />

        <div className="Containers">

          <Formulario
            handleSubmit={handleSubmit}
            saveChange={saveChange}
            alumno={alumno}
            desh={desh}
          />

          <Listado
            lista={lista}
            eliminar={eliminar}
            modificar={modificar}
          />
          

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