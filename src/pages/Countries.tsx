import { Globe, MapPin, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Countries = () => {
  const { t } = useTranslation();
  
  const countries = [
    {
      name: t('countries.iraq'),
      region: t('countries.middleEast'),
      sectors: [t('services.construction'), "Cleaning Services", "Transportation", "General Labor"],
      demand: t('countries.highDemand'),
      workers: "500+",
      description: t('countries.iraqDesc')
    },
    {
      name: t('countries.saudiArabia'),
      region: t('countries.middleEast'),
      sectors: [t('services.construction'), t('services.healthcare'), t('services.hospitality'), t('services.manufacturing')],
      demand: t('countries.highDemand'),
      workers: "1000+",
      description: t('countries.saudiDesc')
    },
    {
      name: t('countries.uae'),
      region: t('countries.middleEast'),
      sectors: [t('services.construction'), t('services.hospitality'), "Retail", "Security Services"],
      demand: t('countries.veryHighDemand'),
      workers: "800+",
      description: t('countries.uaeDesc')
    },
    {
      name: t('countries.qatar'),
      region: t('countries.middleEast'),
      sectors: [t('services.construction'), "Oil & Gas", t('services.hospitality'), "Transportation"],
      demand: t('countries.highDemand'),
      workers: "600+",
      description: t('countries.qatarDesc')
    },
    {
      name: t('countries.oman'),
      region: t('countries.middleEast'),
      sectors: [t('services.construction'), t('services.agriculture'), t('services.manufacturing'), "Services"],
      demand: t('countries.mediumDemand'),
      workers: "300+",
      description: t('countries.omanDesc')
    },
    {
      name: t('countries.malaysia'),
      region: t('countries.southeastAsia'),
      sectors: [t('services.manufacturing'), "Plantation", t('services.construction'), "Services"],
      demand: t('countries.highDemand'),
      workers: "400+",
      description: t('countries.malaysiaDesc')
    },
    {
      name: t('countries.singapore'),
      region: t('countries.southeastAsia'),
      sectors: [t('services.construction'), "Marine", t('services.manufacturing'), "Services"],
      demand: t('countries.mediumDemand'),
      workers: "200+",
      description: t('countries.singaporeDesc')
    },
    {
      name: t('countries.jordan'),
      region: t('countries.middleEast'),
      sectors: [t('services.manufacturing'), t('services.construction'), "Services"],
      demand: t('countries.mediumDemand'),
      workers: "150+",
      description: t('countries.jordanDesc')
    }
  ];

  const regions = [
    {
      name: t('countries.middleEast'),
      countries: 6,
      workers: "3500+",
      icon: "🏜️"
    },
    {
      name: t('countries.southeastAsia'),
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
            <h1 className="text-5xl font-bold mb-6">{t('countries.title')}</h1>
            <p className="text-xl text-white/90">
              {t('countries.subtitle')}
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
                      {region.countries} {t('countries.countriesLabel')} • {region.workers} {t('countries.workersDeployed')}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">{t('countries.destinationCountries')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries.map((country, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <MapPin className="w-8 h-8 text-primary" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          country.demand === t('countries.veryHighDemand')
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100" 
                            : country.demand === t('countries.highDemand')
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                        }`}>
                          {country.demand}
                        </span>
                      </div>
                      <CardTitle>{country.name}</CardTitle>
                      <CardDescription>{country.region}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="font-medium">{country.workers} {t('countries.deployed')}</span>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm mb-2">{t('countries.keySectors')}</h4>
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
                <CardTitle className="text-2xl">{t('countries.whyTheseCountries')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>✓ <strong>{t('countries.established')}:</strong> {t('countries.establishedDesc')}</p>
                <p>✓ <strong>{t('countries.legalCompliance')}:</strong> {t('countries.legalComplianceDesc')}</p>
                <p>✓ <strong>{t('countries.workerProtection')}:</strong> {t('countries.workerProtectionDesc')}</p>
                <p>✓ <strong>{t('countries.supportNetwork')}:</strong> {t('countries.supportNetworkDesc')}</p>
                <p>✓ <strong>{t('countries.provenTrack')}:</strong> {t('countries.provenTrackDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countries;