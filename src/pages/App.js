import React from 'react';
import '../css/App.css';
import Book from '../comp/Book'

function App() {
  return (
    <div className="App">
      <Book titulo="CLEAN CODE" 
            autor="Robert C. Martin"
            page="255"
            state="Si"/>
      <Book titulo="CODERS AT WORK" 
            autor="Peter Seibel"
            page="634"
            state="No"/>
    </div>
  );
}

export default App;
