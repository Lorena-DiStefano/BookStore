import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import {ItemDetailContainer} from "./Components/ItemDetailContainer";
import { ItemListContainer } from "./Components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/genre/:id"} element={<ItemListContainer />} />
        <Route path={"/id/:id"} element={<ItemDetailContainer />}/>            
        
      </Routes>

    </div>
  );
}

export default App;
