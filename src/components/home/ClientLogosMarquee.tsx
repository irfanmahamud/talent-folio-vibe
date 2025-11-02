import { Building2 } from "lucide-react";

interface ClientLogo {
  id: number;
  name: string;
  logo?: string;
}

// Sample client data - replace with actual logos
const clients: ClientLogo[] = [
  { id: 1, name: "Saudi Construction Group" },
  { id: 2, name: "Dubai Healthcare Systems" },
  { id: 3, name: "Qatar Manufacturing Corp" },
  { id: 4, name: "Malaysia Tech Industries" },
  { id: 5, name: "Oman Hospitality Group" },
  { id: 6, name: "UAE Engineering Ltd" },
  { id: 7, name: "Jordan Development Co" },
  { id: 8, name: "Singapore Services Inc" },
  { id: 9, name: "Riyadh Infrastructure" },
  { id: 10, name: "Doha Facilities Management" },
];

const ClientLogosMarquee = () => {
  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted By</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Partner Companies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Working with leading organizations across multiple industries
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee hover:pause-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="w-48 h-24 bg-white rounded-lg shadow-medium hover:shadow-strong transition-all duration-300 flex items-center justify-center p-6 grayscale hover:grayscale-0 group-hover:scale-105">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-center">
                    <Building2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-xs font-semibold text-foreground">
                      {client.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
