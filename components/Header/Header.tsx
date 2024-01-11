"use client";

import CarouselDialog from "@/components/UI/DialogModel/CarouselDialogModel";
import { InfoIcon } from "@/components/UI/svg";

import React, { useState } from "react";

export default function Header() {
  const [showDoc, setShowDoc] = useState(false);

  const handleClick = () => {
    setShowDoc(true);
    // Add any other logic you want to execute on click
  };

  return (
    <div className="p-2">
      <h1 className="flex justify-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center font-sans p-5">
        Simple Carousel Component
        <span
          className={`ml-1   hover:cursor-pointer  rounded-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white`}
          onClick={handleClick}
        >
          <InfoIcon />
        </span>
      </h1>
      {<CarouselDialog open={showDoc} onClose={() => setShowDoc(false)} />}
    </div>
  );
}
