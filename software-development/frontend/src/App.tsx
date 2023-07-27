import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import ExerciseDetail from "./ExerciseDetail";

function App() {
  return (
    <div className="App pb-40">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
