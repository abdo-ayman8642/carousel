import React from "react";

interface SlideProps {
  children: React.ReactElement;
  index: number;
}

const Slide: React.FC<SlideProps> = ({ children, index }) => (
  <div key={index} className="w-full flex-shrink-0">
    {React.cloneElement(children, { alt: `Slide ${index + 1}` })}
  </div>
);

export default Slide;
