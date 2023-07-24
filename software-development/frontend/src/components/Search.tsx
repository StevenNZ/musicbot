import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchExercise } from "../api/fetchExercise";
import Categories from "./Categories";

interface CategoriesProps {
  setExercises: React.Dispatch<React.SetStateAction<string[]>>;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<CategoriesProps> = ({
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const bodyPartsData = await fetchExercise(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts([...bodyPartsData]);
    };

    fetchBodyPartsData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchExercise(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const filterExercise = exerciseData.filter((exercise: any) => {
        return (
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
        );
      });

      setSearch("");
      setExercises(filterExercise);
    }
  };

  return (
    <section className="py-20">
      <div className="w-10/12 lg:w-3/4 mx-auto">
        <h1 className="text-4xl font-semibold text-center pb-10">
          Explore new exercises
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            className="block w-8/12 max-w-[1000px] p-4 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 rounded-r-none"
            placeholder="Search an exercise or muscle"
            value={search}
            onChange={(value) => {
              setSearch(value.target.value);
            }}
          ></input>
          <button
            className="primary-colour-bg rounded-l-none lg:px-12"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <Categories
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </section>
  );
};

export default Search;
