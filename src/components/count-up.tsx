"use client";

import ReactCountUp, { type CountUpProps } from "react-countup";

export function CountUp({ end, duration = 2.75, ...props }: CountUpProps) {
  return <ReactCountUp end={end} duration={duration} {...props} />;
}
