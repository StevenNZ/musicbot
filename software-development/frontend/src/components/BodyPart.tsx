import React from "react";
import logo from "../assets/weblogo.png";

interface CategoriesProps {
  item: string;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const BodyPart: React.FC<CategoriesProps> = ({
  item,
  bodyPart,
  setBodyPart,
}) => {
  return (
    <div
      className={`w-[150px] h-[150px] my-14 mx-3 flex justify-center bg-[#ebf1ff] rounded-3xl hover-category ${
        item === bodyPart ? "bg-[#a4c0fd]" : ""
      }`}
      onClick={() => setBodyPart(item)}
    >
      <div className=" my-auto">
        <img
          src={logo}
          alt="superset logo"
          className="w-[50px] h-[50px] mb-6 object-contain mx-auto"
        />
        <h2 className="text-2xl font-semibold capitalize text-center">
          {item}
        </h2>
      </div>
    </div>
  );
};

export default BodyPart;
