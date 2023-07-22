import React from "react";

const Hero = () => {
  return (
    <section className="text-white pt-[100px] banner-image h-screen">
      <div className="w-10/12 lg:w-3/4 mx-auto">
        <div
          className="min-h-[400px] flex flex-col text-center sm:min-h-[600px] lg:max-w-[75%] lg:text-left lg:w-[500px]"
          title="Workout Equipment image by Rochak Shukla on Freepik"
        >
          <h1 className=" text-3xl sm:text-4xl lg:text-7xl pt-20 pb-16 font-bold">
            Discover, Customize, and Conquer Your Fitness Journey!
          </h1>
          <button className="btn primary-colour-bg w-fit mx-auto text-xl lg:text-4xl lg:ml-0">
            JOIN NOW!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
