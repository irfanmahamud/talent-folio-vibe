import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileCheck,
  UserCheck,
  Stethoscope,
  Plane,
  FileText,
  GraduationCap,
  Shield,
  HeadphonesIcon,
  Construction,
  Factory,
  Hotel,
  Leaf,
} from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
  const sectors = [
    { icon: Construction, name: t('services.construction'), description: t('services.constructionDesc') },
    { icon: Factory, name: t('services.manufacturing'), description: t('services.manufacturingDesc') },
    { icon: Hotel, name: t('services.hospitality'), description: t('services.hospitalityDesc') },
    { icon: Leaf, name: t('services.agriculture'), description: t('services.agricultureDesc') },
    { icon: Stethoscope, name: t('services.healthcare'), description: t('services.healthcareDesc') },
    { icon: Factory, name: t('services.industrial'), description: t('services.industrialDesc') },
  ];

  const recruitmentSteps = [
    {
      icon: FileCheck,
      title: t('services.step1Title'),
      description: t('services.step1Desc'),
    },
    {
      icon: Shield,
      title: t('services.step2Title'),
      description: t('services.step2Desc'),
    },
    {
      icon: UserCheck,
      title: t('services.step3Title'),
      description: t('services.step3Desc'),
    },
    {
      icon: Stethoscope,
      title: t('services.step4Title'),
      description: t('services.step4Desc'),
    },
    {
      icon: FileText,
      title: t('services.step5Title'),
      description: t('services.step5Desc'),
    },
    {
      icon: GraduationCap,
      title: t('services.step6Title'),
      description: t('services.step6Desc'),
    },
    {
      icon: FileCheck,
      title: t('services.step7Title'),
      description: t('services.step7Desc'),
    },
    {
      icon: Plane,
      title: t('services.step8Title'),
      description: t('services.step8Desc'),
    },
  ];

  const whyBangladeshi = [
    t('services.quickLearn'),
    t('services.strongWorkEthic'),
    t('services.disciplineReliability'),
    t('services.technicalSkills'),
    t('services.costEffective'),
    t('services.governmentCompliance'),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h1>
            <p className="text-xl text-gray-100">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.sectorsWeServe')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('services.sectorsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <Card
                key={index}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <sector.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{sector.name}</h3>
                  <p className="text-muted-foreground">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2">{t('services.transparentProcessBadge')}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.recruitmentProcess')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('services.processDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {recruitmentSteps.map((step, index) => (
              <Card
                key={index}
                className="hover:shadow-medium transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bangladeshi Workers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-6 px-4 py-2">{t('services.workforceExcellence')}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('services.whyHireBangladeshi')}</h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t('services.whyHireBangladeshiDesc')}
              </p>

              <div className="space-y-4">
                {whyBangladeshi.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-base font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img
                src={servicesImage}
                alt={t('services.workforceExcellence')}
                className="rounded-2xl shadow-strong w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Post-Deployment Support */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <HeadphonesIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('services.ongoingSupport')}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t('services.ongoingSupportDesc')}
            </p>
            <Card className="bg-background/80 backdrop-blur border-primary/20">
              <CardContent className="p-8">
                <p className="text-muted-foreground italic">
                  "{t('services.ongoingSupportQuote')}"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;