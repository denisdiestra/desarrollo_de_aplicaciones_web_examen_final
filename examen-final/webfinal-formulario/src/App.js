
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  {id: 1, personal: "Laura Baca", puesto: "Programadora 1"},
  {id: 2, personal: "Denis Diestra", puesto: "Programadora 2"},
  {id: 3, personal: "Manuel Inga", puesto: "Programadora 3"},
  {id: 4, personal: "Kevin Vilchez", puesto: "Programadora 4"},
  {id: 5, personal: "Eli silva", puesto: "Diseño 1"},
  {id: 6, personal: "Marin Vildal", puesto: "Diseño 2"},

]

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      personal: "",
      puesto: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].personal = dato.personal;
        arreglo[contador].puesto = dato.puesto;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>

      <body className='colorbody'>
        <Container className='colortodo' >

          <h1 className='fw-bold text-center mt-2' >Mantenimiento de Personal</h1>
        <br />
        <div className='d-grid gap-2 col-6 mx-auto'>
          <Button className='btn btn-info '  onClick={()=>this.mostrarModalInsertar()}>Ingresar Nuevo Pesonal</Button>
          </div>
          <br />
          <br />
          <Table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Personal</th>
                <th>Puesto</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.personal}</td>
                  <td>{dato.puesto}</td>
                  <td>
                    <Button
                      className='btn btn-warning'
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{"  |  "}
                    <Button className='btn btn-danger' onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        </body>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Personal: 
              </label>
              <input
                className="form-control"
                name="personal"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.personal}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Puesto: 
              </label>
              <input
                className="form-control"
                name="puesto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.puesto}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Personal</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Personal: 
              </label>
              <input
                className="form-control"
                name="personal"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Puesto: 
              </label>
              <input
                className="form-control"
                name="puesto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;