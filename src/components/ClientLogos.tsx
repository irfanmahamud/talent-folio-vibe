const ClientLogos = () => {
  const logos = [
    { id: 1, name: "Saudi Aramco", icon: "🏢" },
    { id: 2, name: "Emirates Airlines", icon: "✈️" },
    { id: 3, name: "Qatar Airways", icon: "🛫" },
    { id: 4, name: "Burj Al Arab", icon: "🏨" },
    { id: 5, name: "Petronas", icon: "⛽" },
    { id: 6, name: "Dubai Mall", icon: "🏬" },
    { id: 7, name: "IKEA Middle East", icon: "🛋️" },
    { id: 8, name: "Marriott Hotels", icon: "🏩" },
  ];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted By Leading Companies</h2>
        <p className="text-muted-foreground">
          Partnering with industry leaders across the Middle East and Asia
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />

        <div className="flex gap-8 animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-40 h-28 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center gap-2 grayscale hover:grayscale-0 cursor-pointer"
            >
              <div className="text-4xl">{logo.icon}</div>
              <p className="text-xs font-medium text-muted-foreground">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
