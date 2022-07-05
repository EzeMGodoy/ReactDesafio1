import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarRouting from "./components/NavBarRouting";
import Home from "./components/Pages/Home/Home";
import Capacitaciones from "./components/Pages/Capacitaciones/Capacitaciones";
import Blog from "./components/Pages/Blog/Blog";
import About from "./components/Pages/About/About";
import Contacto from "./components/Pages/Contacto/Contacto";
import Container from "./components/Container/Container";
import NotFound from "./components/Pages/NotFound/NotFound";
import Detail from "./components/Detail/Detail";
// import Swal from "sweetalert2";
// import Navbar from "./components/NavBar";
// import Body from "./components/Body";
// import Welcome from "./components/Welcome";
import ItemListContainer from "./components/ItemListContainer";
// import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemilDetailContainer";

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
    <>
      {/* <Navbar /> */}
      <NavBarRouting />
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/capacitaciones" element={<Capacitaciones />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/nosotros" element={<About />}></Route>
        <Route exact path="/contacto" element={<Contacto />}></Route>
        <Route path="/" element={<Container />}></Route>
        <Route exact path="/personajes/:characterId" element={<Detail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Welcome hola="Profe" /> */}
      <ItemListContainer greetings='Capacitaciones Ser Impersonal'/>
      <ItemDetailContainer/>
      {/* <ItemCount stock={5} initial={1} onAdd={agregarCarrito} /> */}
      {/* <Body/> */}
    </>
  );
}

export default App;
