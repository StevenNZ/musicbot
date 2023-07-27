import React from "react";
import { exerciseProps } from "../Home";
import { Link } from "react-router-dom";

interface CategoriesProps {
  exercise: exerciseProps;
}

const ExerciseCard: React.FC<CategoriesProps> = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="w-11/12 p-5 aspect-square md:mb-8 md:h-fit bg-[#ebf1ff] rounded-3xl hover-category"
      target="_blank"
    >
      <div className="mx-auto">
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          className="w-9/12 aspect-square object-contain mx-auto mb-3"
        />
        <div className="grid grid-flow-col grid-cols-2 justify-items-center pb-5">
          <h3 className="tag primary-colour-bg">{exercise.bodyPart}</h3>
          <h3 className="tag primary-colour-bg">{exercise.target}</h3>
        </div>
        <h2 className="w-fit mx-auto capitalize font-bold text-2xl">
          {exercise.name}
        </h2>
      </div>
    </Link>
  );
};

export default ExerciseCard;
