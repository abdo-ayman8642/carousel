import { useState } from "react";

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
