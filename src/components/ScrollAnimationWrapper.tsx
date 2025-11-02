import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'fade-in' | 'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimationWrapper = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  className = '',
}: ScrollAnimationWrapperProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
