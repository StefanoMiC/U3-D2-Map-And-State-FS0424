import "bootstrap/dist/css/bootstrap.min.css";
// ATTENZIONE CHE BOOTSTRAP DEVE ESSERE IMPORTATO PRIMA DEL NOSTRO CSS!
import "./App.scss";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
// import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <TopBar claim="Niente secondi piatti" />

      {/* esempio di utilizzo di state */}
      {/* <Counter /> */}

      <Home />
    </div>
  );
}

export default App;
