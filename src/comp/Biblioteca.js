import React from 'react';
import '../css/Biblioteca.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
    { id: 1, libro: "CLEAN CODER", autor: "Robert C. Martin", paginas: "234", estado: "No leido" },
    { id: 2, libro: "YOU DON’T KNOW JAVASCRIPT", autor: "Kyle Simpson", paginas: "655", estado: "No leido" },
    { id: 3, libro: "ELOQUENT JAVASCRIPT", autor: "Marijn Haverbeke", paginas: "529", estado: "No leido" },
  ];

class Biblioteca extends React.Component{
state={
    data: data,
    form: {
        id:'',
        libro:'',
        autor:'',
        paginas:'',
        estado:''
    },
    modalinsertar: false,
    modalEditar: false,
};

handleChange=e=>{
    this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value,
        }
    });
}

mostrarModalInsertar=()=>{
    this.setState({modalinsertar: true});
}
ocultarModalInsertar=()=>{
    this.setState({modalinsertar: false});
}

mostrarModalEditar=(registro)=>{
    this.setState({modalEditar: true, form: registro});
}
ocultarModalEditar=()=>{
    this.setState({modalEditar: false});
}

insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalinsertar:false});
}

editar=(dato)=>{
    var contador=0;
    var lista=this.state.data;
    lista.map((registro)=>{
        if(dato.id==registro.id){
            lista[contador].libro=dato.libro;
            lista[contador].autor=dato.autor;
            lista[contador].paginas=dato.paginas;
            lista[contador].estado=dato.estado;
        }
        contador++;
    });
    this.setState({data:lista, modalEditar: false});
}

eliminar=(dato)=>{
    var opcion=window.confirm("¿Deseas eliminar el libro "+dato.id+"?");
    if(opcion){
        var contador=0;
        var lista = this.state.data;
        lista.map((registro)=>{
            if(registro.id==dato.id){
                lista.splice(contador, 1);
            }
            contador++;
        });
        this.setState({data: lista});
    }
}
    render(){
        return(
            <>
            <Container>
            <br/>
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Nuevo Libro</Button>
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
                    {this.state.data.map((elemento)=>(
                        <tr>
                        <td>{elemento.id}</td>
                        <td>{elemento.libro}</td>
                        <td>{elemento.autor}</td>
                        <td>{elemento.paginas}</td>
                        <td>{elemento.estado}</td>
                        <td><Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>{"  "}
                            <Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>
            <Modal isOpen={this.state.modalinsertar}>
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
                        <input className="formu-input" name="libro" type="text" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Autor:</label>
                        <input className="formu-input" name="autor" type="text" onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Paginas:</label>
                        <input className="formu-input" name="paginas" type="text" onChange={this.handleChange}/>
                    </FormGroup>
                    
                    <h5>Estado de lectura:</h5>
                    <FormGroup>
                        <label>
                            <input className="formu-radio" name="estado" type="radio" value="Si leido" onChange={this.handleChange}/>{' '}
                            Si leido
                        </label>
                        <br/>
                        <label>
                            <input className="Formu-radio" name="estado" type="radio" value="No leido" onChange={this.handleChange}/>{' '}
                            No Leido
                        </label>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={()=>this.insertar()}>Agregar</Button>
                    <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar Libro</h3>
                    </div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Id:</label>
                        <input classname="formu-input" readOnly type="text" value={this.state.form.id}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Libro:</label>
                        <input className="formu-input" name="libro" type="text" onChange={this.handleChange} value={this.state.form.libro}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Autor:</label>
                        <input className="formu-input" name="autor" type="text" onChange={this.handleChange} value={this.state.form.autor}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Paginas:</label>
                        <input className="formu-input" name="paginas" type="text" onChange={this.handleChange} value={this.state.form.paginas}/>
                    </FormGroup>

                    <h5>Estado de lectura:</h5>
                    <FormGroup>
                        <label>
                            <input className="formu-radio" name="estado" type="radio" value="Si leido" onChange={this.handleChange}/>{' '}
                            Si leido
                        </label>
                        <br/>
                        <label>
                            <input className="Formu-radio" name="estado" type="radio" value="No leido" onChange={this.handleChange}/>{' '}
                            No Leido
                        </label>
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={()=>this.editar(this.state.form)}>Editar</Button>
                    <Button color="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default Biblioteca