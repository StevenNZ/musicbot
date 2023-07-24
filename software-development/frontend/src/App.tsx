import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Exercises from "./components/Exercises";

export interface exerciseProps {
  bodyPart: string;
  equipment: string;
  name: string;
  target: string;
}

function App() {
  const [exercises, setExercises] = useState<exerciseProps[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("");

  return (
    <div className="App pb-40">
      <Navbar />
      <Hero />
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
}

export default App;
