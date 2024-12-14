"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  duration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
  strings?: string[];
  delay?: number;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function HyperText({
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
  strings = ["MUSHTAQ", "A WEB-DEVELOPER", "OBSESSED WITH MAKING PROJECTS"],
  delay = 4500,
}: HyperTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(strings[0].split(""));
  const [trigger, setTrigger] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const iterations = useRef(0);
  const isFirstRender = useRef(true);
  const currentText = strings[currentIndex];

  const triggerAnimation = () => {
    iterations.current = 0;
    setIsCompleted(false);
    setTrigger(true);
  };

  // Handle cycling through strings
  useEffect(() => {
    if (!isCompleted) return;

    const nextStringTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      triggerAnimation();
    }, 2000); // 2 second delay after completion

    return () => clearTimeout(nextStringTimeout);
  }, [isCompleted, strings.length]);

  // Handle text animation
  useEffect(() => {
    if (!trigger) return;

    const interval = setInterval(
      () => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }

        if (iterations.current < currentText.length) {
          setDisplayText((t) =>
            Array.from({ length: currentText.length }, (_, i) =>
              i <= iterations.current
                ? currentText[i]
                : alphabets[getRandomInt(26)]
            )
          );
          iterations.current = iterations.current + 0.1;
        } else {
          setTrigger(false);
          setIsCompleted(true);
          clearInterval(interval);
        }
      },
      duration / (currentText.length * 10)
    );

    return () => clearInterval(interval);
  }, [currentText, duration, trigger, animateOnLoad]);

  // Initial animation trigger
  useEffect(() => {
    if (animateOnLoad) {
      triggerAnimation();
    }
  }, [animateOnLoad]);

  return (
    <div className="flex scale-100 cursor-default overflow-hidden py-2 md:text-2xl font-mono font-bold">
      <AnimatePresence mode="wait">
        <span className="font-system">
          I AM{" "}
          {displayText.map((letter, i) => (
            <motion.span
              key={`${currentIndex}-${i}`}
              className={cn("font-mono", letter === " " ? "w-3" : "", className)}
              {...framerProps}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </AnimatePresence>
    </div>
  );
}