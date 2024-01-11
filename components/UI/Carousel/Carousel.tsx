"use client";
import useMouseControl from "@/utils/hooks/useMouseControl";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../svg";
import { CarouselProps, TimingFunction } from "@/model/Carousel";
import Slide from "./partials/Slide";
import useTouchSlide from "@/utils/hooks/useTouchSlide";
import useKeyboardNavigation from "@/utils/hooks/useKeyboardNavigation";

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoScrollInterval = 0,
  transition = {
    duration: 0.3,
    timingFunction: TimingFunction.EASE_IN,
    delay: 0,
  },
  showIndicators = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseOver, handleMouseEnter, handleMouseLeave] = useMouseControl();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };
  const { onTouchEnd, onTouchMove, onTouchStart } = useTouchSlide({
    autoScrollInterval,
    nextSlide,
    prevSlide,
  });

  const isKeyPressed = useKeyboardNavigation({
    prevAction: prevSlide,
    nextAction: nextSlide,
  });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    console.log("ok");
    const handleAutoScroll = () => {
      if (!isMouseOver && autoScrollInterval > 0) {
        nextSlide();
      }
    };

    if (autoScrollInterval > 0) {
      intervalId = setInterval(handleAutoScroll, autoScrollInterval * 1000);
    }

    return () => clearInterval(intervalId);
  }, [isMouseOver, autoScrollInterval, isKeyPressed]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  const duration = `duration-${transition.duration}`;
  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className={`flex `}
          style={{
            transform: `translateX(-${100 * currentIndex}%)`,
            transition: `transform ${transition.duration}s ${transition.timingFunction} ${transition.delay}s`,
          }}
        >
          {children.map((child, index) => (
            <Slide key={index} index={index}>
              {child}
            </Slide>
          ))}
        </div>
      </div>

      <button
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-3 rounded-lg focus:outline-none ${
          isMouseOver
            ? "opacity-100 hover:bg-white hover:bg-opacity-20"
            : "opacity-50"
        }`}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ArrowLeft />
      </button>
      <button
        className={`absolute top-1/2 right-2 transform -translate-y-1/2  text-white p-3 rounded-lg focus:outline-none hover:bg-white ${
          isMouseOver
            ? "opacity-100 hover:bg-white hover:bg-opacity-20"
            : "opacity-50"
        }`}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ArrowRight />
      </button>
      {/* Indicators */}
      {showIndicators && (
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
          aria-label="Slide Indicators"
        >
          {children.map((_, index) => (
            <div
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                index === currentIndex ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              role="button"
              aria-label={`Go to Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
