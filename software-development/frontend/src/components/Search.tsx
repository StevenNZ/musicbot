import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  //   const handleSearch = async () => {
  //         if (search)
  //   }

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
            placeholder="Search an exercise"
            value={search}
            onChange={(value) => {
              setSearch(value.target.value);
            }}
          ></input>
          <button
            className="primary-colour-bg rounded-l-none lg:px-12"
            //  onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
