import React from 'react';
import '../css/AddBook.css'

function AddBook (){
    return(
        <div className="agregar">
            <h2>Añadir nuevo libro:</h2>
        <form>
        <p>
         <label>Titulo:<input type="text" name="titulo" /></label><br/>
         <label>Autor:<input type="text" name="autor" /></label><br/>
         <label>N° de paginas:<input type="number" name="pages" /></label><br/>
         Estado de lectura:<br/>
         <input type="radio" name="estado" value="si"/>Si lo he leído<br/>
         <input type="radio" name="estado" value="no"/>No lo he leído<br/>
        </p>  
        </form>
        <input type="submit" value="Enviar" />
        </div>
    )
}

export default AddBook;