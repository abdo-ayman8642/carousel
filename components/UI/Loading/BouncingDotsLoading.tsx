import React, { FC } from "react";
import BouncingDot from "./partials/BouncingDot";

interface LoadingProps {
  size?: string;
  color?: string;
}

const BouncingDotsLoading: FC<LoadingProps> = ({
  size = "h-8 w-8",
  color = "bg-black",
}) => (
  <div className="flex space-x-2 justify-center items-center bg-white h-screen ">
    <span className="sr-only">Loading...</span>
    <BouncingDot size={size} color={color} />
    <BouncingDot size={size} color={color} delay="-0.15s" />
    <BouncingDot size={size} color={color} delay="-0.3s" />
  </div>
);

export default BouncingDotsLoading;
