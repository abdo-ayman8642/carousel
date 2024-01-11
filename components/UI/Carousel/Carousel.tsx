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
  nextIcon = <ArrowRight />,
  prevIcon = <ArrowLeft />,
  showIndicators = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseOver, handleMouseEnter, handleMouseLeave] = useMouseControl(); // to pause slideshow when mouse is over

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };
  const { onTouchEnd, onTouchMove, onTouchStart, isTouched } = useTouchSlide({
    autoScrollInterval,
    nextSlide,
    prevSlide,
  }); // handling any events related to touch

  const isKeyPressed = useKeyboardNavigation({
    prevAction: prevSlide,
    nextAction: nextSlide,
  }); // just only to know wheter a key is pressed to reset the interval and begin the auto count from beginning

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    const handleAutoScroll = () => {
      if (!isMouseOver && autoScrollInterval > 0) {
        // if mouse is over then freeze auto scroll
        nextSlide();
      }
    };

    if (autoScrollInterval > 0) {
      intervalId = setInterval(handleAutoScroll, autoScrollInterval * 1000); // cause autoscroll value is in sec
    }

    return () => clearInterval(intervalId);
  }, [isMouseOver, autoScrollInterval, isKeyPressed, isTouched]);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  }; // on pressing on any one of indicators

  return (
    <div
      className="relative flex size-2/3 mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="overflow-hidden ">
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
        className={`absolute top-1/2 left-1 transform -translate-y-1/2 text-white p-1 rounded-lg focus:outline-none ${
          isMouseOver
            ? "opacity-100 hover:bg-white hover:bg-opacity-20"
            : "opacity-50"
        } sm:left-1 sm:p-1 sm:rounded-lg md:left-2 md:p-2 md:rounded-lg lg:left-4 lg:p-3 lg:rounded-lg xl:left-8 xl:p-4 xl:rounded-lg`}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        {prevIcon}
      </button>
      <button
        className={`absolute top-1/2 right-1 transform -translate-y-1/2 text-white p-1 rounded-lg focus:outline-none ${
          isMouseOver
            ? "opacity-100 hover:bg-white hover:bg-opacity-20"
            : "opacity-50"
        } sm:right-1 sm:p-1 sm:rounded-lg md:right-2 md:p-2 md:rounded-lg lg:right-4 lg:p-3 lg:rounded-lg xl:right-8 xl:p-4 xl:rounded-lg`}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        {nextIcon}
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
                index === currentIndex
                  ? " w-4 sm:w-6 md:w-8 lg:w-12 xl:w-16 bg-white"
                  : " w-2  sm:w-3 md:w-4 lg:w-6 xl:w-8 bg-white/50"
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
