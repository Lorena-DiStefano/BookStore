import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ItemListContainer from './Components/ItemListContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <App />
    <ItemListContainer greeting={"No dejes para mañana lo que puedes leer hoy!!"} />
  </React.StrictMode>
);
