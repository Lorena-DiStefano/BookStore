import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import { ItemDetailContainer } from "./Components/ItemDetailContainer";
import {ItemListContainer } from "./Components/ItemListContainer";
import Home from "./Components/Home";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home text1={'Sólo para locos, la entrada cuesta la razón'} text2={'Hermann Hesse - El Lobo Estepario'} />} />
        <Route path={"/genre/:id"} element={<ItemListContainer />} />
        <Route path={"/saga/:id"} element={<ItemListContainer />} />
        <Route path={"/id/:id"} element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
