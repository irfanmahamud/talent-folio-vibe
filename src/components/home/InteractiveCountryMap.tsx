import { useState } from "react";
import { MapPin, Users, Building2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ReactCountryFlag from "react-country-flag";

interface Country {
  code: string;
  name: string;
  workers: string;
  companies: string;
  sectors: string[];
  region: string;
}

const countries: Country[] = [
  {
    code: "SA",
    name: "Saudi Arabia",
    workers: "3,500+",
    companies: "45+",
    sectors: ["Construction", "Healthcare", "Engineering"],
    region: "Middle East"
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    workers: "2,800+",
    companies: "38+",
    sectors: ["Hospitality", "Construction", "Healthcare"],
    region: "Middle East"
  },
  {
    code: "QA",
    name: "Qatar",
    workers: "1,200+",
    companies: "22+",
    sectors: ["Construction", "Oil & Gas", "Hospitality"],
    region: "Middle East"
  },
  {
    code: "OM",
    name: "Oman",
    workers: "900+",
    companies: "18+",
    sectors: ["Manufacturing", "Construction", "Services"],
    region: "Middle East"
  },
  {
    code: "IQ",
    name: "Iraq",
    workers: "1,500+",
    companies: "25+",
    sectors: ["Construction", "Oil & Gas", "Engineering"],
    region: "Middle East"
  },
  {
    code: "JO",
    name: "Jordan",
    workers: "600+",
    companies: "15+",
    sectors: ["Healthcare", "Education", "Services"],
    region: "Middle East"
  },
  {
    code: "MY",
    name: "Malaysia",
    workers: "1,800+",
    companies: "30+",
    sectors: ["Manufacturing", "Technology", "Healthcare"],
    region: "Asia"
  },
  {
    code: "SG",
    name: "Singapore",
    workers: "700+",
    companies: "20+",
    sectors: ["Technology", "Finance", "Healthcare"],
    region: "Asia"
  },
];

const InteractiveCountryMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const middleEastCountries = countries.filter(c => c.region === "Middle East");
  const asiaCountries = countries.filter(c => c.region === "Asia");

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Global Presence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where We Place Our Workers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Click on any country to see detailed placement statistics
          </p>
        </div>

        {/* Regional Cards Layout - Responsive */}
        <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Middle East Region */}
          <Card className="border-2 border-primary/20 shadow-strong bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Middle East</h3>
                  <p className="text-sm text-muted-foreground">6 Countries</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {middleEastCountries.map((country) => {
                  const isSelected = selectedCountry?.code === country.code;
                  const isHovered = hoveredCountry === country.code;

                  return (
                    <div
                      key={country.code}
                      className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? "bg-primary/20 border-2 border-primary shadow-strong scale-105"
                          : isHovered
                          ? "bg-primary/10 border-2 border-primary/50 shadow-medium scale-105"
                          : "bg-white/50 dark:bg-gray-800/50 border-2 border-transparent hover:border-primary/30"
                      }`}
                      onClick={() => setSelectedCountry(country)}
                      onMouseEnter={() => setHoveredCountry(country.code)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    >
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-strong animate-scale-in">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      )}
                      
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-16 h-16 rounded-full overflow-hidden border-3 ${
                          isSelected ? "border-primary" : "border-white"
                        } shadow-medium transition-all`}>
                          <ReactCountryFlag
                            countryCode={country.code}
                            svg
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p className={`text-xs font-semibold text-center ${
                          isSelected ? "text-primary" : ""
                        }`}>
                          {country.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Asia Region */}
          <Card className="border-2 border-secondary/20 shadow-strong bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Southeast Asia</h3>
                  <p className="text-sm text-muted-foreground">2 Countries</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {asiaCountries.map((country) => {
                  const isSelected = selectedCountry?.code === country.code;
                  const isHovered = hoveredCountry === country.code;

                  return (
                    <div
                      key={country.code}
                      className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                        isSelected
                          ? "bg-secondary/20 border-2 border-secondary shadow-strong scale-105"
                          : isHovered
                          ? "bg-secondary/10 border-2 border-secondary/50 shadow-medium scale-105"
                          : "bg-white/50 dark:bg-gray-800/50 border-2 border-transparent hover:border-secondary/30"
                      }`}
                      onClick={() => setSelectedCountry(country)}
                      onMouseEnter={() => setHoveredCountry(country.code)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    >
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center shadow-strong animate-scale-in">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      )}
                      
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-16 h-16 rounded-full overflow-hidden border-3 ${
                          isSelected ? "border-secondary" : "border-white"
                        } shadow-medium transition-all`}>
                          <ReactCountryFlag
                            countryCode={country.code}
                            svg
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p className={`text-xs font-semibold text-center ${
                          isSelected ? "text-secondary" : ""
                        }`}>
                          {country.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Country Details */}
        {selectedCountry ? (
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-strong animate-fade-in-up">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 md:gap-6 flex-col md:flex-row">
                {/* Flag */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-medium flex-shrink-0 border-4 border-primary/20 mx-auto md:mx-0">
                  <ReactCountryFlag
                    countryCode={selectedCountry.code}
                    svg
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 w-full">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                    {selectedCountry.name}
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </h3>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 md:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:shadow-medium transition-all">
                      <Users className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-primary">
                          {selectedCountry.workers}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Workers Placed
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 md:p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 hover:shadow-medium transition-all">
                      <Building2 className="h-6 w-6 md:h-8 md:w-8 text-accent flex-shrink-0" />
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-accent">
                          {selectedCountry.companies}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Partner Companies
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 md:p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20 hover:shadow-medium transition-all">
                      <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-secondary flex-shrink-0" />
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-secondary">
                          {selectedCountry.sectors.length}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Key Sectors
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sectors */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                      <div className="w-1 h-4 bg-primary rounded-full" />
                      Leading Sectors
                    </h4>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {selectedCountry.sectors.map((sector, index) => (
                        <span
                          key={index}
                          className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-primary text-white rounded-full text-xs md:text-sm font-medium shadow-medium hover:shadow-strong hover:scale-105 transition-all"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center p-8 md:p-12 max-w-2xl mx-auto bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur border border-primary/10">
            <MapPin className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-primary animate-bounce" />
            <p className="text-muted-foreground text-base md:text-lg font-medium">
              👆 Click on any country to view detailed statistics
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">
              Explore our global presence across {countries.length} countries
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveCountryMap;
