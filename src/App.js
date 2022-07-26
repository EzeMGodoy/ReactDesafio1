import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarRouting from "./components/NavBarRouting";
import Home from "./components/Pages/Home/Home";
import Capacitaciones from "./components/Pages/Capacitaciones/Capacitaciones";
import Blog from "./components/Pages/Blog/Blog";
import About from "./components/Pages/About/About";
import Contacto from "./components/Pages/Contacto/Contacto";
// import Container from "./components/Container/Container";
import NotFound from "./components/Pages/NotFound/NotFound";
// import Detail from "./components/Detail/Detail";
// import Swal from "sweetalert2";
import Navbar from "./components/Navbar";
// import Body from "./components/Body";
// import Welcome from "./components/Welcome";
import ItemListContainer from "./components/ItemListContainer";
// import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./components/Context/CartContext";
import Container from "./components/Container/Container";
import Cart from "./components/Cart";

function App() {
  // const agregarCarrito = (cantidad) => {
  //   if (cantidad === 1) {
  //     Swal.fire({
  //       title: "Genial",
  //       text: `Agregaste al carrito ${cantidad} producto.`,
  //       icon: "success",
  //       confirmButtonText: "Cool",
  //     });
  //   } else {
  //     Swal.fire({
  //       title: "Genial",
  //       text: `Agregaste al carrito ${cantidad} productos.`,
  //       icon: "success",
  //       confirmButtonText: "Cool",
  //     });
  //   }
  // };

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

          {/* <Route path="*" element={<Navigate to="/home"></Navigate>} />  Esta ruta me lleva a home si pongo cualquier ruta. Para que funcione, comentar la de notFound L-44*/}

          {/* <Route path="/" element={<Container />}></Route> */}
          {/* <Welcome hola="Profe" /> */}
          {/* <ItemCount stock={5} initial={1} onAdd={agregarCarrito} /> */}
          {/* <Body/> */}
          {/* <Route path="/container" element={<Container/>}/> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
