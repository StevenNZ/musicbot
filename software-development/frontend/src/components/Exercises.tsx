import React from "react";
import { exerciseProps } from "../App";
import { log } from "console";

interface CategoriesProps {
  exercises: exerciseProps[];
  setExercises: React.Dispatch<React.SetStateAction<exerciseProps[]>>;
  bodyPart: string;
}

const Exercises: React.FC<CategoriesProps> = ({
  exercises,
  setExercises,
  bodyPart,
}) => {
  console.log(exercises);

  return (
    <section className="py-10">
      <div className="w-10/12 lg:w-3/4 mx-auto">
        <h1 className="text-center text-4xl font-semibold pb-10">Results</h1>
        <div>
          {exercises.map((exercise, index) => (
            <p>{exercise.name}</p>
          ))}
          <p>hi</p>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
