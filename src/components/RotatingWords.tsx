"use client"

import { useEffect, useState } from "react";

const words = ["Backends", "WebApps", "Systems"];

export const RotatingWords = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % words.length);

      // Stop animation after it's done
      setTimeout(() => setIsAnimating(false), 600);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative inline-block top-2 h-[1.5em] w-24 rounded text-center inset-shadow-sm inset-shadow-neutral-300 dark:inset-shadow-indigo-500 overflow-hidden px-1">
      {/* Previous word sliding down */}
      {isAnimating && (
        <div
          key={prevIndex}
          className="absolute inset-0 transition-all duration-500 ease-in translate-y-0 opacity-100"
          style={{ transform: "translateY(100%)", opacity: 0 }}
        >
          {words[prevIndex]}
        </div>
      )}

      {/* Current word sliding in from top */}
      <div
        key={index}
        className={`absolute inset-0 transition-all duration-500 ease-out ${
          isAnimating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
        style={{
          transform: isAnimating ? "translateY(0%)" : "translateY(0%)",
          opacity: 1,
        }}
      >
        {words[index]}
      </div>
    </div>
  );
};