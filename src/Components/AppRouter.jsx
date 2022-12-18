import { Routes, Route } from "react-router-dom";
import { Home, ItemListContainer, ItemDetailContainer } from './index';

export const AppRouter = () => {
    return (
        <>
        <Routes>
            <Route path={"/"} element={<Home text1={'Sólo para locos, la entrada cuesta la razón'} text2={'Hermann Hesse - El Lobo Estepario'} />} />
            <Route path={"/genre/:id"} element={<ItemListContainer />} />
            <Route path={"/saga/:id"} element={<ItemListContainer />} />
            <Route path={"/id/:id"} element={<ItemDetailContainer />} />
            </Routes>
        </>
    )
}

