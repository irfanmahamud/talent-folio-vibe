import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, benefits, index }: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[320px] perspective-1000 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 backface-hidden border-border shadow-medium hover:shadow-strong transition-shadow">
          <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform animate-icon-float">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-xl mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
            <div className="mt-4 text-xs text-muted-foreground animate-pulse">
              Hover to learn more
            </div>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 border-border bg-gradient-to-br from-primary/10 via-purple-500/10 to-accent/10 shadow-strong">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{title}</h3>
              <ul className="space-y-2 text-sm">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button size="sm" asChild className="w-full mt-4 group">
              <Link to="/services">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceCard;
