import React from "react";
import BodyPart from "./BodyPart";
import useHorizontalScroll from "./useHorizontalScroll";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

interface CategoriesProps {
  data: string[];
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const Categories: React.FC<CategoriesProps> = ({
  data,
  bodyPart,
  setBodyPart,
}) => {
  const { containerRef, handleScrollLeft, handleScrollRight } =
    useHorizontalScroll();
  return (
    <div className="flex items-center mt-4 mx-auto max-w-[1000px]">
      <div>
        <AiOutlineDoubleLeft
          size={60}
          className="scrollbar-arrow mr-3 hover-category"
          onClick={handleScrollLeft}
        />
      </div>
      <div
        ref={containerRef}
        className="flex items-center overflow-auto scroll-smooth"
      >
        <div></div>
        {data.map((item, index) => (
          <div key={index}>
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        ))}
      </div>
      <div>
        <AiOutlineDoubleRight
          size={60}
          className="scrollbar-arrow ml-3 hover-category"
          onClick={handleScrollRight}
        />
      </div>
    </div>
  );
};

export default Categories;
