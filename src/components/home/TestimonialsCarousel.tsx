import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  country: string;
  image?: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Construction Worker",
    country: "Saudi Arabia",
    rating: 5,
    text: "AL-ROTAN helped me find an excellent position in Riyadh. The entire process was transparent, and they supported me every step of the way. I'm now earning a good salary and supporting my family back home.",
    date: "2024"
  },
  {
    id: 2,
    name: "Fatima Rahman",
    role: "Healthcare Professional",
    country: "UAE",
    rating: 5,
    text: "Professional service from start to finish. They helped with all documentation, training, and even post-arrival support in Dubai. I highly recommend AL-ROTAN for anyone seeking overseas employment.",
    date: "2024"
  },
  {
    id: 3,
    name: "Mohammad Ali",
    role: "Hospitality Manager",
    country: "Qatar",
    rating: 5,
    text: "Thanks to AL-ROTAN, I secured a management position in Doha. Their ethical recruitment practices and ongoing support made the transition smooth. Truly a trustworthy agency.",
    date: "2023"
  },
  {
    id: 4,
    name: "Nazia Begum",
    role: "Manufacturing Supervisor",
    country: "Malaysia",
    rating: 5,
    text: "AL-ROTAN exceeded my expectations. From interview preparation to visa processing, everything was handled professionally. Now I'm thriving in my role in Kuala Lumpur.",
    date: "2023"
  },
  {
    id: 5,
    name: "Karim Sheikh",
    role: "Engineering Technician",
    country: "Oman",
    rating: 5,
    text: "I was skeptical about overseas recruitment agencies, but AL-ROTAN proved me wrong. Transparent fees, honest communication, and excellent placement. I'm grateful for their service.",
    date: "2024"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-500/5 to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Star className="h-5 w-5 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real people who trusted us with their career journey
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-strong">
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-6 w-6 ${
                      index < currentTestimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    } animate-scale-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-center mb-8">
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  "{currentTestimonial.text}"
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {currentTestimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{currentTestimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {currentTestimonial.role} • {currentTestimonial.country}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{currentTestimonial.date}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Navigation */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isAutoPlaying ? "⏸ Pause auto-play" : "▶ Resume auto-play"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
