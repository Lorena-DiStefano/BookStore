import { Routes, Route } from "react-router-dom";
import { CartDetail, CartOrder, CartGreeting } from "./Cart/index";
import { Cover, ItemListContainer, ItemDetailContainer } from './index';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Cover text1={'Sólo para locos,'} text2={'la entrada cuesta la razón.'} text3={'Hermann Hesse'} />} />
                <Route path={'/genre/:id'} element={<ItemListContainer />} />
                <Route path={'/allBooks'} element={<ItemListContainer />} />
                <Route path={'/id/:id'} element={<ItemDetailContainer />} />
                <Route path={'/CartDetail'} element={<CartDetail />} />
                <Route path={'/CartOrder'} element={<CartOrder />} />
                <Route path={'/CartGreeting/:id'} element={<CartGreeting />} />
            </Routes>
        </>
    )
}

