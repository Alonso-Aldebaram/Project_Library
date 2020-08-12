import React from 'react';
import '../css/Book.css';

function Book(props) {
return (
<div className="libro">
    <h3>Titulo: {props.titulo}</h3>
    <p>Autor: {props.autor}</p>
    <p>N° de paginas: {props.page}</p>
    <p>Estado: {props.state} leído</p>
</div>
)
}

export default Book;