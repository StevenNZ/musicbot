import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchExercise } from "../api/fetchExercise";
import { exerciseProps } from "../Home";
import ExerciseCard from "./ExerciseCard";
import { Pagination } from "@mui/material";

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
  const [currentPage, setCurrentPage] = useState(1);
  const exerciseLimit = 10;

  const lastExercise = currentPage * exerciseLimit;
  const firstExercise = lastExercise - exerciseLimit;
  const currentExercise = exercises.slice(firstExercise, lastExercise);

  const paginate = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1250, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercises = [];

      if (bodyPart === "all" || bodyPart === "") {
        exercises = await fetchExercise(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercises = await fetchExercise(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercises);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <section className="py-10">
      <div className="w-10/12 lg:w-3/4 max-w-[1200px] mx-auto">
        <h1 className="text-center text-4xl font-semibold pb-16">Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {currentExercise.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Pagination
            color="primary"
            boundaryCount={1}
            siblingCount={0}
            count={Math.ceil(exercises.length / exerciseLimit)}
            page={currentPage}
            onChange={paginate}
          />
        </div>
      </div>
    </section>
  );
};

export default Exercises;
