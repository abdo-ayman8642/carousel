import { useEffect, useState } from "react";

interface KeyboardNavigationProps {
  prevAction: () => void;
  nextAction: () => void;
}

const useKeyboardNavigation = ({
  prevAction,
  nextAction,
}: KeyboardNavigationProps) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevAction();
      } else if (event.key === "ArrowRight") {
        nextAction();
      }

      setKeyPressed((prev) => !prev); // we just toggling the value of key cause we don't need its value but we want to indicate that key is pressed only to clear interval
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevAction, nextAction]);

  return keyPressed;
};

export default useKeyboardNavigation;
