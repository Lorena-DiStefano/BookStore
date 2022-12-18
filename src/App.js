import React from "react";
import { NavBar, Footer, AppRouter } from './Components/index'
import { CartContextProvider } from "./Context/CartContext";


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <NavBar />
      <AppRouter />
      <Footer />
      </CartContextProvider>
    </div>
  );
}

export default App;
