import React, { FC } from "react";

interface BouncingDotProps {
  size?: string;
  color?: string;
  delay?: string;
}

const BouncingDot: FC<BouncingDotProps> = ({
  size = "h-8 w-8",
  color = "bg-black",
  delay = "",
}) => (
  <div
    className={`${size} ${color} rounded-full animate-bounce`}
    style={{ animationDelay: delay }}
  ></div>
);

export default BouncingDot;
