import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Exercises from "./components/Exercises";

function App() {
  const [exercises, setExercises] = useState<string[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("");

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises />
    </div>
  );
}

export default App;
