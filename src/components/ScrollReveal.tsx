import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "fade-in" | "scale-in";
  delay?: number;
  className?: string;
}

const animationMap = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
};

const ScrollReveal = ({ children, animation = "fade-in-up", delay = 0, className = "" }: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const animationClass = animationMap[animation];

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? animationClass : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
