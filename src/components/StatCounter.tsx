import { useCountUp } from "@/hooks/useCountUp";

interface StatCounterProps {
  value: string;
  label: string;
  index: number;
}

const StatCounter = ({ value, label, index }: StatCounterProps) => {
  // Extract numeric value and suffix (K, +, %)
  const numericMatch = value.match(/(\d+(?:\.\d+)?)/);
  const suffix = value.replace(/[\d.]/g, '');
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  
  const { count, elementRef } = useCountUp({
    end: numericValue,
    duration: 3000,
    startOnView: true,
  });

  // Format the count with the same suffix
  const formattedCount = `${count}${suffix}`;

  return (
    <div
      ref={elementRef}
      className="text-center animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {formattedCount}
      </div>
      <div className="text-white/90 text-sm md:text-base">{label}</div>
    </div>
  );
};

export default StatCounter;
