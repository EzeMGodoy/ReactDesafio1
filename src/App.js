import logo from './favicon.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tienda Ser Impersonal
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/ser.impersonal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita nuestro Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
