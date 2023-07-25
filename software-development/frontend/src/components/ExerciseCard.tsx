import React from "react";
import { exerciseProps } from "../App";

interface CategoriesProps {
  exercise: exerciseProps;
}

const ExerciseCard: React.FC<CategoriesProps> = ({ exercise }) => {
  return (
    <div className="w-11/12 p-5 aspect-square md:mb-8 md:h-fit bg-[#ebf1ff] rounded-3xl hover-category">
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
    </div>
  );
};

export default ExerciseCard;
