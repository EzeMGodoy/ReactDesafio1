import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarRouting from "./components/NavBarRouting";
import Home from "./components/Pages/Home/Home";
import Capacitaciones from "./components/Pages/Capacitaciones/Capacitaciones";
import Blog from "./components/Pages/Blog/Blog";
import About from "./components/Pages/About/About";
import Contacto from "./components/Pages/Contacto/Contacto";
import Container from "./components/Container/Container";
import Swal from "sweetalert2";
// import Navbar from "./components/NavBar";
// import Body from "./components/Body";
// import Welcome from "./components/Welcome";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
// import ItemDetailContainer from "./components/ItemilDetailContainer";

function App() {

  const agregarCarrito = (cantidad) => {
    if (cantidad === 1) {
      Swal.fire({
        title: "Genial",
        text: `Agregaste al carrito ${cantidad} producto.`,
        icon: "success",
        confirmButtonText: "Cool",
      });
    } else {
      Swal.fire({
        title: "Genial",
        text: `Agregaste al carrito ${cantidad} productos.`,
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <NavBarRouting />
      <Routes>
        <Route path="/" element={<Container />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/capacitaciones" element={<Capacitaciones />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/nosotros" element={<About />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
      {/* <Welcome hola="Profe" /> */}
      <ItemListContainer greetings='Capacitaciones Ser Impersonal'/>
      {/* <ItemDetailContainer/> */}
      <ItemCount stock={5} initial={1} onAdd={agregarCarrito} />
      {/* <Body/> */}
    </>
  );
}

export default App;
