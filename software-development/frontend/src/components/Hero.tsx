import React from "react";

const Hero = () => {
  return (
    <section className="text-white pt-[100px] banner-image lg:h-screen">
      <div
        className="w-10/12 min-h-[400px] mx-auto flex flex-col text-center sm:min-h-[600px] lg:max-w-[75%]"
        title="Workout Equipment image by Rochak Shukla on Freepik"
      >
        <h1 className=" text-xl sm:text-4xl lg:text-7xl lg:pt-20 lg:pb-16 font-bold pb-6">
          Discover, Customize, and Conquer Your Fitness Journey!
        </h1>
        <button className="btn primary-colour-bg w-fit mx-auto text-xl lg:text-4xl">
          JOIN NOW!
        </button>
      </div>
    </section>
  );
};

export default Hero;
