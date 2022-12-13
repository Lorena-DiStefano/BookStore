import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import {ItemDetailContainer} from "./Components/ItemDetailContainer";
import { ItemListByGenre } from "./Components/ItemListByGenre";
import Home from "./Components/Home";
import { ItemListByLanguage } from "./Components/ItemListByLanguage";
import { ItemListBySaga } from "./Components/ItemListBySaga";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home text1={'Sólo para locos, la entrada cuesta la razón'} text2={'Hermann Hesse - El Lobo Estepario'} />} />
        <Route path={"/genre/:id"} element={<ItemListByGenre />} />
        <Route path={"/language/:id"} element={<ItemListByLanguage />} />
        <Route path={"/saga/:id"} element={<ItemListBySaga />} />     
        <Route path={"/id/:id"} element={<ItemDetailContainer />}/>     
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
