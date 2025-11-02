import { useCountUp } from "@/hooks/useCountUp";
import { Users, Globe, Award, Calendar, LucideIcon } from "lucide-react";

interface StatCounterProps {
  value: string;
  label: string;
  index: number;
  icon?: "users" | "globe" | "award" | "calendar";
}

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  globe: Globe,
  award: Award,
  calendar: Calendar,
};

const StatCounter = ({ value, label, index, icon }: StatCounterProps) => {
  // Extract numeric value and suffix (K, +, %)
  const numericMatch = value.match(/(\d+(?:\.\d+)?)/);
  const suffix = value.replace(/[\d.]/g, '');
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const isPercentage = suffix.includes('%');
  
  const { count, elementRef } = useCountUp({
    end: numericValue,
    duration: 2000,
    startOnView: true,
  });

  // Format the count with the same suffix
  const formattedCount = `${count}${suffix}`;
  
  // Calculate progress percentage for circle
  const progressPercentage = isPercentage ? numericValue : 100;
  const currentProgress = isPercentage ? count : (count / numericValue) * 100;
  
  // Circle SVG properties
  const size = 140;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (currentProgress / 100) * circumference;

  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div
      ref={elementRef}
      className="text-center animate-fade-in group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Progress Circle */}
      <div className="relative inline-flex items-center justify-center mb-4">
        {/* Background Circle */}
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {IconComponent && (
            <IconComponent className="h-8 w-8 text-white/80 mb-2 animate-pulse-slow group-hover:scale-110 transition-transform" />
          )}
          <div className="text-3xl md:text-4xl font-bold text-white">
            {formattedCount}
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="text-white/90 text-sm md:text-base font-medium px-2">
        {label}
      </div>
    </div>
  );
};

export default StatCounter;
