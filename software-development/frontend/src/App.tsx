import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    //TODO: Hook theming up to redux so that it selects
    <div className="App">
      <Navbar />
      <Hero />
      <Search />
    </div>
  );
}

export default App;
