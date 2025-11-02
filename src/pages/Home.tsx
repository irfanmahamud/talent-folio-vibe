import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Globe, Shield, TrendingUp, CheckCircle, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollingCountries from "../components/home/ScrollingCountries";
import GallerySection from "@/components/home/GallerySection";
import StatCounter from "@/components/StatCounter";
import HeroSection from "@/components/home/HeroSection";
import ParticleNetwork from "@/components/home/ParticleNetwork";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import ClientLogosMarquee from "@/components/home/ClientLogosMarquee";
import InteractiveCountryMap from "@/components/home/InteractiveCountryMap";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "10K+", label: t('home.workersDeployed'), icon: "users" as const },
    { value: "50+", label: t('home.countriesServed'), icon: "globe" as const },
    { value: "98%", label: t('home.clientSatisfaction'), icon: "award" as const },
    { value: "15+", label: t('home.yearsExperience'), icon: "calendar" as const },
  ];

  const services = [
    {
      icon: Users,
      title: t('home.skilledManpower'),
      description: t('home.skilledManpowerDesc'),
      benefits: [
        t('home.constructionEngineering'),
        t('home.healthcareNursing'),
        t('home.hospitalityService'),
        t('home.manufacturingProduction')
      ]
    },
    {
      icon: Globe,
      title: t('home.globalReach'),
      description: t('home.globalReachDesc'),
      benefits: [
        t('home.countriesWorldwide'),
        t('home.middleEastExpertise'),
        t('home.asianMarketPresence'),
        t('home.europeanConnections')
      ]
    },
    {
      icon: Shield,
      title: t('home.ethicalRecruitment'),
      description: t('home.ethicalRecruitmentDesc'),
      benefits: [
        t('home.governmentCertified'),
        t('home.fairContractTerms'),
        t('home.noHiddenFees'),
        t('home.legalCompliance')
      ]
    },
    {
      icon: TrendingUp,
      title: t('home.careerGrowth'),
      description: t('home.careerGrowthDesc'),
      benefits: [
        t('home.skillDevelopmentPrograms'),
        t('home.careerPathPlanning'),
        t('home.continuousSupport'),
        t('home.promotionOpportunities')
      ]
    },
  ];

  const features = [
    t('home.governmentApproved'),
    t('home.transparentProcess'),
    t('home.postDeploymentSupport'),
    t('home.preDepartureTraining'),
    t('home.legalDocumentation'),
    t('home.assistance24_7'),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary relative overflow-hidden">
        {/* Background Particle Network */}
        <ParticleNetwork />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                value={stat.value}
                label={stat.label}
                index={index}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background overflow-hidden">

        {/* <div className="relative">
          <div className="flex gap-8 animate-scroll">
            <div className="flex gap-8 shrink-0">
              {[
                { code: "IQ", name: t("countries.iraq") },
                { code: "SA", name: t("countries.saudiArabia") },
                { code: "AE", name: t("countries.uae") },
                { code: "QA", name: t("countries.qatar") },
                { code: "OM", name: t("countries.oman") },
                { code: "MY", name: t("countries.malaysia") },
                { code: "SG", name: t("countries.singapore") },
                { code: "JO", name: t("countries.jordan") },
              ].map((country) => (
                <div
                  key={country.code}
                  className="flex flex-col items-center gap-3 min-w-[120px]"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-medium">
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <span className="font-semibold text-sm">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <GallerySection/>

      </section>
      
      {/* Countries Section */}
      <ScrollAnimationWrapper animation="fade-in-up" threshold={0.2}>
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-4 mb-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('countries.destinationCountries')}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t('countries.subtitle')}
              </p>
            </div>
          </div>

          <ScrollingCountries t={t} />
        </section>
      </ScrollAnimationWrapper>

      {/* Services Section */}
      <ScrollAnimationWrapper animation="fade-in-up" threshold={0.2}>
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.ourServices')}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t('home.servicesDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* Interactive Country Map */}
      <InteractiveCountryMap />

      {/* Client Logos Marquee */}
      <ClientLogosMarquee />

      {/* Process Timeline Section */}
      <ProcessTimeline />

      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel />

      {/* Why Choose Us Section */}
      <ScrollAnimationWrapper animation="fade-in-up" threshold={0.2}>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">{t('home.governmentApprovedAgency')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('home.whyChoose')}
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  {t('home.whyChooseDesc')}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" asChild className="shadow-medium">
                  <Link to="/about">
                    {t('home.learnMoreAbout')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="animate-slide-in-right">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="space-y-6 p-0">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{t('home.ourCommitment')}</h3>
                      <p className="text-muted-foreground">
                        {t('home.commitmentDesc')}
                      </p>
                      <div className="space-y-3 pt-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm">
                            <strong>{t('home.professionalism')}:</strong> {t('home.professionalismDesc')}
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <p className="text-sm">
                            <strong>{t('home.transparency')}:</strong> {t('home.transparencyDesc')}
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <p className="text-sm">
                            <strong>{t('home.fairness')}:</strong> {t('home.fairnessDesc')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.readyToStart')}</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {t('home.readyToStartDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 shadow-strong">
              <Link to="/contact">{t('home.contactUsToday')}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 text-white"
            >
              <Link to="/success-stories">{t('home.viewSuccessStories')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
