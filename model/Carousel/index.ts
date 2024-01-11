export enum TimingFunction {
  EASE_LINEAR = "linear",
  EASE_IN = "ease-in",
  EASE_OUT = "ease-out",
  EASE_IN_OUT = "ease-in-out",
}

export interface TransitionConfig {
  duration: number;
  timingFunction: TimingFunction;
  delay: number;
}

export interface CarouselProps {
  children: React.ReactElement[];
  autoScrollInterval?: number;
  transition?: TransitionConfig;
  showIndicators?: boolean;
  nextIcon?: React.ReactElement;
  prevIcon?: React.ReactElement;
}
