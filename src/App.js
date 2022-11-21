import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"No dejes para mañana lo que puedas leer hoy!"} />
    </div>
  );
}

export default App;
