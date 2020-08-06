import React from 'react';
import '../css/Book.css';

function Book(props) {
return (
<div className="libro">
    <h1>Titulo: {props.titulo}</h1>
    <h2>Autor: {props.autor}</h2>
    <h3>N° de paginas: {props.page}</h3>
    <h3>Estado: {props.state} leído</h3>
</div>
)
}

export default Book;