import React from "react";
import { NavBar, Footer, AppRouter } from './Components/index';
import { CartContextProvider } from "./Context/CartContext";


function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <NavBar />
        <AppRouter />
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
