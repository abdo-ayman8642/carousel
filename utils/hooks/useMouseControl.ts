import { useState } from "react";
import { Carousel } from "@material-tailwind/react";

const useMouseControl = (): [boolean, () => void, () => void] => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return [isMouseOver, handleMouseEnter, handleMouseLeave];
};

export default useMouseControl;
