import logo from "./assets/favicon.webp";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Body />
    </>
  );
}

export default App;