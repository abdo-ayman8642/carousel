import React, { useEffect, useRef, useState } from "react";

interface TouchHandlers {
  onTouchStart: React.TouchEventHandler<HTMLDivElement>;
  onTouchMove: React.TouchEventHandler<HTMLDivElement>;
  onTouchEnd: React.TouchEventHandler<HTMLDivElement>;
  isTouched: boolean;
}

interface TouchSlideProps {
  autoScrollInterval: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

const useTouchSlide = ({
  autoScrollInterval,
  nextSlide,
  prevSlide,
}: TouchSlideProps): TouchHandlers => {
  const touchStartX = useRef<number | null>(null);
  const [isTouched, setIsTouched] = useState(false);

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsTouched((prev) => !prev);
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (touchStartX.current !== null) {
      const deltaX = e.touches[0].clientX - touchStartX.current;
      if (Math.abs(deltaX) > 50) {
        // Swipe distance threshold reached
        deltaX > 0 ? prevSlide() : nextSlide();
        touchStartX.current = null; // Reset the start position
      }
    }
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    touchStartX.current = null;
  };

  return { onTouchStart, onTouchMove, onTouchEnd, isTouched };
};

export default useTouchSlide;
