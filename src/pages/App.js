import React from 'react';
import '../css/App.css';

function App() {
  let biblioteca = []

  function Book(titulo, autor, paginas, leido) {
      this.titulo = titulo
      this.autor = autor
      this.paginas = paginas
      this.leido = leido
      this.info = function() {
          console.log(titulo, autor, paginas, leido)
      }
  }

  function agregarLibro () {

  }


  const book1 = new Book('CLEAN CODE', 'Robert C. Martin', '250', 'aún no leído')
  const book2 = new Book('THE CLEAN CODER', 'Robert C. Martin', '298', 'aún no leído')

  book1.info()
  book2.info()
  return (
    <div className="App">
      <h3></h3>
    </div>
  );
}

export default App;
