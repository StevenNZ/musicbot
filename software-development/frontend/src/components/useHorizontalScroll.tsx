import { useRef, useEffect } from "react";

const useHorizontalScroll = (): {
  containerRef: React.RefObject<HTMLDivElement>;
  handleScrollLeft: () => void;
  handleScrollRight: () => void;
} => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = containerRef.current;

    if (element) {
      const onWheel = (event: WheelEvent) => {
        event.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + event.deltaY,
          behavior: "smooth",
        });
      };
      element.addEventListener("wheel", onWheel);
      return () => element.removeEventListener("wheel", onWheel);
    }
  }, []);

  const handleScrollLeft = () => {
    const element = containerRef.current;
    if (element) {
      const scrollDistance = 174;
      element.scrollTo({
        left: element.scrollLeft - scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    const element = containerRef.current;
    if (element) {
      const scrollDistance = 174;
      element.scrollTo({
        left: element.scrollLeft + scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return { containerRef, handleScrollLeft, handleScrollRight };
};

export default useHorizontalScroll;
