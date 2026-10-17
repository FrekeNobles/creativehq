
"use client";

import { useEffect, useState } from "react";

type CountUpProps = {
  value: string;
  duration?: number;
  startAnimation: boolean;
};

export default function CountUp({
  value,
  duration = 2000,
  startAnimation,
}: CountUpProps) {
  const target = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  
useEffect(() => {
  if (!startAnimation || !Number.isFinite(target)) {
    setCount(0);
    return;
  }

  let startTime: number | null = null;
  let animationFrame: number;

  function animate(currentTime: number) {
    if (startTime === null) {
      startTime = currentTime;
    }

    const progress = Math.min(
      (currentTime - startTime) / duration,
      1
    );

    setCount(Math.floor(progress * target));

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
    }
  }

  animationFrame = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationFrame);
}, [target, duration, startAnimation]);


  return (
    <>
      {count}
      {suffix}
    </>
  );
}
