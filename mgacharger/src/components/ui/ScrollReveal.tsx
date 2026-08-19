"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div 
      ref={ref} 
      className={cn(
        "transition-all duration-[1200ms] ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
