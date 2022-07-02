import "./App.css";
import Navbar from "./components/NavBar";
// import Body from "./components/Body";
import Welcome from "./components/Welcome";
// import ItemListContainer from "./components/ItemListContainer";
// import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemilDetailContainer";



function App() {
  return (
    <>
      <Navbar />
      <Welcome hola="Profe" />
      {/* <ItemListContainer greetings='Capacitaciones Ser Impersonal'/> */}
      <ItemDetailContainer/>
      {/* <ItemCount stock={5}/> */}
      {/* <Body/> */}
    </>
  );
}

export default App;