import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, MapPin } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const bangladeshInfo = [
    { label: "Capital", value: "Dhaka" },
    { label: "Population", value: "170+ Million" },
    { label: "Area", value: "148,460 sq. km" },
    { label: "Independence", value: "26 March 1971" },
    { label: "Language", value: "Bengali" },
    { label: "Currency", value: "Taka (BDT)" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AL-ROTAN</h1>
            <p className="text-xl text-gray-100">
              Building bridges between Bangladeshi talent and global opportunities since 2021
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground text-lg mb-6">
                AL-ROTAN (Pvt.) Limited is a government-approved recruiting agency in Bangladesh, officially licensed
                under the Ministry of Expatriates' Welfare and Overseas Employment on February 4, 2024 (License No.
                RL-1831).
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Since our inception, AL-ROTAN has earned a solid reputation for supplying skilled, semi-skilled, and
                unskilled manpower to various sectors including construction, manufacturing, agriculture, hospitality,
                and tourism across the Middle East, Gulf States, South East Asia, and beyond.
              </p>
              <p className="text-muted-foreground text-lg">
                With a strong commitment to professionalism, transparency, and ethical recruitment practices, AL-ROTAN
                strives to bridge the gap between global employers and the talented Bangladeshi workforce, ensuring
                mutual growth and success.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <img
                src={aboutImage}
                alt="AL-ROTAN Team"
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
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To provide reliable, efficient, and ethical manpower recruitment services by connecting Bangladeshi
                  job seekers with reputable international employers, ensuring fair employment opportunities, worker
                  welfare, and client satisfaction through continuous improvement and innovation.
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
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To become one of Bangladesh's leading and most trusted global recruitment agencies, recognized for
                  excellence, integrity, and social responsibility in building sustainable international employment
                  partnerships that contribute to national economic development.
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
                <span className="text-sm font-medium text-secondary">Our Homeland</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Bangladesh</h2>
              <p className="text-muted-foreground text-lg">
                People's Republic of Bangladesh - A nation of resilience, culture, and skilled workforce
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
                <h3 className="text-xl font-bold mb-4">Why Bangladeshi Workers?</h3>
                <p className="text-muted-foreground mb-4">
                  Bangladeshi workers are widely recognized for their hard work, dedication, and adaptability in diverse
                  working environments. They possess a natural ability to learn quickly, follow instructions, and
                  maintain discipline, making them valuable assets to any organization.
                </p>
                <p className="text-muted-foreground">
                  With a strong foundation in technical and vocational skills, coupled with a positive work ethic and
                  cost-effectiveness, Bangladeshi manpower offers excellent productivity and reliability. The Government
                  of Bangladesh ensures strict compliance with international labor standards and ethical recruitment
                  practices.
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
