import React from 'react';
import '../css/Biblioteca.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
    { id: 1,
      libro: "CLEAN CODER",
      autor: "Robert C. Martin",
      paginas: "234",
      estado: "No leido" },
    { id: 2,
      libro: "YOU DON’T KNOW JAVASCRIPT",
      autor: "Kyle Simpson",
      paginas: "655",
      estado: "No leido" },
    { id: 3, 
      libro: "ELOQUENT JAVASCRIPT",
      autor: "Marijn Haverbeke",
      paginas: "529",
      estado: "No leido" },
    { id: 4,
      libro: "THE PRAGMATIC PROGRAMMER",
      autor: "Andrew Hunt y David Thomas",
      paginas: "789",
      estado: "No leido" },
    { id: 5,
      libro: "DESIGN PATTERNS",
      autor: "Erich Gamma",
      paginas: "425",
      estado: "No leido"},
    { id: 6,
      libro: "USER STORY MAPPING",
      autor: "Jeff Patton",
      paginas: "555",
      estado: "No leido" },
  ];

class Biblioteca extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    // setData=(id, libro, autor, paginas, estado)=>{
    //     this.setState({
    //         selData: 
    //         id,
    //         libro,
    //         autor,
    //         paginas,
    //         estado
    //     })
    // }
    render(){
        return(
            <>
            <Container>
            <br/>
            <Button color="success">Nuevo Libro</Button>
            <br/><br/>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Libro</th>
                        <th>Autor</th>
                        <th>Paginas</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({id, libro, autor, paginas, estado})=>(
                        <tr>
                        <td>{id}</td>
                        <td>{libro}</td>
                        <td>{autor}</td>
                        <td>{paginas}</td>
                        <td>{estado}</td>
                        <td><Button color="primary">Editar</Button>{"  "}
                            <Button color="danger">Eliminar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>
            <Modal>
                <ModalHeader>
                    <div>
                        <h3>Insertar Libro</h3>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input classname="formu-input" readOnly type="text" value={this.state.data.length+1}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Libro:</label>
                        <input className="formu-input" name="libro" type="text"/>
                    </FormGroup>

                    <FormGroup>
                        <label>Autor:</label>
                        <input className="formu-input" name="autor" type="text"/>
                    </FormGroup>

                    <FormGroup>
                        <label>Paginas:</label>
                        <input className="formu-input" name="autor" type="text"/>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary">Agregar</Button>
                    <Button color="danger">Cancelar</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default Biblioteca