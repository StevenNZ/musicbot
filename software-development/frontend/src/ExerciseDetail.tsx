import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchExercise } from "../src/api/fetchExercise";
import { useParams } from "react-router-dom";
import { exerciseProps } from "../src/Home";
import { AiFillStar } from "react-icons/ai";

const ExerciseDetail = () => {
  const [exercise, setExercise] = useState<exerciseProps | null>(null);
  const id: string | undefined = useParams()["id"];

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseData = await fetchExercise(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExercise(exerciseData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <main className="w-10/12 mx-auto mt-[100px] min-h-[calc(100vh-100px)] lg:flex">
      {exercise && (
        <div className="max-w-[1200px] m-auto lg:flex lg:items-center">
          <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="w-10/12 aspect-square max-w-[500px] mx-auto rounded-3xl lg:mr-10 lg:h-[400px]"
          />
          <div className="mt-10 max-w-[800px] lg:mt-0">
            <div className="flex justify-center items-center my-10">
              <h1 className=" text-4xl font-bold mx-5 capitalize w-fit">
                {exercise.name}
              </h1>
              <AiFillStar
                size={50}
                className="text-white cursor-pointer hover-category hover:scale-150 hover:text-yellow-400"
              />
            </div>
            <p className=" text-xl text-center">
              <span className="capitalize">{exercise.name}</span> is an exercise
              that targets {exercise.target}. while engaging the{" "}
              {exercise.bodyPart}.{" "}
              <span className="capitalize">{exercise.equipment}</span> is
              required to perform this exercise. It is essential to maintain
              proper form and technique to prevent injuries and maximize its
              effectiveness.
            </p>
            <div className="grid grid-flow-col grid-cols-3 justify-items-center my-10">
              <h3 className="tag primary-colour-bg">{exercise.bodyPart}</h3>
              <h3 className="tag primary-colour-bg">{exercise.target}</h3>
              <h3 className="tag primary-colour-bg">{exercise.equipment}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ExerciseDetail;
