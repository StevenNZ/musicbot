import React from "react";
import Search from "./components/Search";
import Exercises from "./components/Exercises";
import { useState } from "react";
import Hero from "./components/Hero";

export interface exerciseProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

const Home = () => {
  const [exercises, setExercises] = useState<exerciseProps[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("");

  return (
    <div className="pb-40">
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
};

export default Home;
