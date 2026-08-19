"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  index?: number;
  className?: string;
}

export function AnimatedCard({
  children,
  direction = "up",
  index = 0,
  className = "",
}: AnimatedCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const getInitialTransform = () => {
    if (direction === "left") return "-translate-x-8 opacity-0";
    if (direction === "right") return "translate-x-8 opacity-0";
    return "translate-y-8 opacity-0 scale-[0.98]";
  };

  const delayMs = Math.min(index * 100, 300);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isInView ? `${delayMs}ms` : "0ms" }}
      className={cn(
        "will-change-transform transition-all duration-700 ease-out",
        isInView ? "opacity-100 translate-x-0 translate-y-0 scale-100" : getInitialTransform(),
        className
      )}
    >
      {children}
    </div>
  );
}
