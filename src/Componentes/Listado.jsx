import {Button, Table} from 'react-bootstrap';

function Listado(props){
    const {lista, modificar, eliminar} = props;
    return(
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
                    <td><Button variant="primary" onClick={()=>modificar(a)}> Modificar</Button></td>
                    <td><Button variant="danger" onClick={()=>eliminar(a.matricula)}> Eliminar</Button></td>
                  </tr>
                )
              }
            </tbody>
        </Table>
      </div>
    );
}


export default Listado;