import { Globe, MapPin, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Countries = () => {
  const countries = [
    {
      name: "Iraq",
      region: "Middle East",
      sectors: ["Construction", "Cleaning Services", "Transportation", "General Labor"],
      demand: "High",
      workers: "500+",
      description: "Strong demand in Kurdistan Region and Baghdad for skilled workers"
    },
    {
      name: "Saudi Arabia",
      region: "Middle East",
      sectors: ["Construction", "Healthcare", "Hospitality", "Manufacturing"],
      demand: "High",
      workers: "1000+",
      description: "Largest recruitment market with diverse opportunities across sectors"
    },
    {
      name: "United Arab Emirates",
      region: "Middle East",
      sectors: ["Construction", "Hospitality", "Retail", "Security Services"],
      demand: "Very High",
      workers: "800+",
      description: "Premium opportunities in Dubai and Abu Dhabi"
    },
    {
      name: "Qatar",
      region: "Middle East",
      sectors: ["Construction", "Oil & Gas", "Hospitality", "Transportation"],
      demand: "High",
      workers: "600+",
      description: "Ongoing infrastructure projects creating continuous demand"
    },
    {
      name: "Oman",
      region: "Middle East",
      sectors: ["Construction", "Agriculture", "Manufacturing", "Services"],
      demand: "Medium",
      workers: "300+",
      description: "Growing opportunities in construction and agriculture"
    },
    {
      name: "Malaysia",
      region: "Southeast Asia",
      sectors: ["Manufacturing", "Plantation", "Construction", "Services"],
      demand: "High",
      workers: "400+",
      description: "Industrial and plantation sectors with competitive packages"
    },
    {
      name: "Singapore",
      region: "Southeast Asia",
      sectors: ["Construction", "Marine", "Manufacturing", "Services"],
      demand: "Medium",
      workers: "200+",
      description: "Higher wage market with strict quality standards"
    },
    {
      name: "Jordan",
      region: "Middle East",
      sectors: ["Manufacturing", "Construction", "Services"],
      demand: "Medium",
      workers: "150+",
      description: "Emerging market with steady demand"
    }
  ];

  const regions = [
    {
      name: "Middle East",
      countries: 6,
      workers: "3500+",
      icon: "🏜️"
    },
    {
      name: "Southeast Asia",
      countries: 2,
      workers: "600+",
      icon: "🌴"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <section className="relative py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Countries We Serve</h1>
            <p className="text-xl text-white/90">
              Connecting Bangladeshi talent with opportunities across continents
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {regions.map((region, index) => (
                <Card key={index} className="bg-gradient-primary text-white">
                  <CardHeader>
                    <div className="text-4xl mb-2">{region.icon}</div>
                    <CardTitle className="text-2xl">{region.name}</CardTitle>
                    <CardDescription className="text-white/80">
                      {region.countries} Countries • {region.workers} Workers Deployed
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Destination Countries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries.map((country, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <MapPin className="w-8 h-8 text-primary" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          country.demand === "Very High" 
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100" 
                            : country.demand === "High"
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                        }`}>
                          {country.demand} Demand
                        </span>
                      </div>
                      <CardTitle>{country.name}</CardTitle>
                      <CardDescription>{country.region}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="font-medium">{country.workers} deployed</span>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Key Sectors:</h4>
                          <div className="flex flex-wrap gap-2">
                            {country.sectors.map((sector, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-muted text-xs rounded-md"
                              >
                                {sector}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {country.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mb-4" />
                <CardTitle className="text-2xl">Why These Countries?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>✓ <strong>Established Partnerships:</strong> We have verified demand letters and strong relationships with employers</p>
                <p>✓ <strong>Legal Compliance:</strong> All placements follow Bangladesh and destination country regulations</p>
                <p>✓ <strong>Worker Protection:</strong> We ensure fair contracts, proper wages, and safe working conditions</p>
                <p>✓ <strong>Support Network:</strong> Our team provides assistance before, during, and after deployment</p>
                <p>✓ <strong>Proven Track Record:</strong> Thousands of successful placements with satisfied workers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countries;
