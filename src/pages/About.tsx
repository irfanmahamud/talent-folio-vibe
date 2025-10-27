import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, MapPin } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  const bangladeshInfo = [
    { label: t('about.bangladesh.capital'), value: "Dhaka" },
    { label: t('about.bangladesh.population'), value: "170+ Million" },
    { label: t('about.bangladesh.area'), value: "148,460 sq. km" },
    { label: t('about.bangladesh.independence'), value: "26 March 1971" },
    { label: t('about.bangladesh.language'), value: "Bengali" },
    { label: t('about.bangladesh.currency'), value: "Taka (BDT)" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.hero.title')}</h1>
            <p className="text-xl text-gray-100">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">License No. RL-1831</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.overview.title')}</h2>
              <p className="text-muted-foreground text-lg mb-6">
                {t('about.overview.paragraph1')}
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                {t('about.overview.paragraph2')}
              </p>
              <p className="text-muted-foreground text-lg">
                {t('about.overview.paragraph3')}
              </p>
            </div>

            <div className="animate-slide-in-right">
              <img
                src={aboutImage}
                alt={t('about.overview.imageAlt')}
                className="rounded-2xl shadow-strong w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/20 hover:shadow-strong transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
                <p className="text-muted-foreground text-lg">
                  {t('about.mission.description')}
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-accent/20 hover:shadow-strong transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h3>
                <p className="text-muted-foreground text-lg">
                  {t('about.vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Bangladesh */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium text-secondary">{t('about.bangladesh.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.bangladesh.title')}</h2>
              <p className="text-muted-foreground text-lg">
                {t('about.bangladesh.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {bangladeshInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-medium transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">{info.value}</div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">{t('about.bangladesh.whyTitle')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.bangladesh.whyParagraph1')}
                </p>
                <p className="text-muted-foreground">
                  {t('about.bangladesh.whyParagraph2')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
