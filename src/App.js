import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarRouting from "./components/NavBarRouting";
import Home from "./components/Pages/Home/Home";
import Capacitaciones from "./components/Pages/Capacitaciones/Capacitaciones";
import Blog from "./components/Pages/Blog/Blog";
import About from "./components/Pages/About/About";
import Contacto from "./components/Pages/Contacto/Contacto";
import NotFound from "./components/Pages/NotFound/NotFound";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBarRouting />
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route
            exact
            path="/capacitaciones"
            element={<Capacitaciones />}
          ></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/nosotros" element={<About />}></Route>
          <Route exact path="/contacto" element={<Contacto />}></Route>
          <Route
            path="/"
            element={
              <ItemListContainer greetings="Capacitaciones Ser Impersonal" />
            }
          />
          <Route
            path="/category/:idcategoria"
            element={<ItemListContainer greetings="Filtrado" />}
          />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
