import { useState, useEffect } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "AL-ROTAN (Pvt.) Limited";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const defaultBackground = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920";

  return (
    <section className="relative py-20 bg-gradient-primary text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage || defaultBackground}')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-orange-900/90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          
          {/* Typing Animation */}
          <div className="mb-6 min-h-[2rem] flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200">
              {typedText}
              <span className="animate-blink ml-1 text-white">|</span>
            </span>
          </div>
          
          {subtitle && (
            <p className="text-xl text-gray-100">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
