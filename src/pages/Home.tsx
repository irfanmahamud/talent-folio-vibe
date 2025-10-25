import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Globe, Shield, TrendingUp, CheckCircle, Award } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const Home = () => {
  const stats = [
    { value: "10K+", label: "Workers Deployed" },
    { value: "50+", label: "Countries Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" },
  ];

  const services = [
    {
      icon: Users,
      title: "Skilled Manpower",
      description: "Expert workers in construction, manufacturing, healthcare, and more",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting talent with opportunities across Middle East, Gulf, and Southeast Asia",
    },
    {
      icon: Shield,
      title: "Ethical Recruitment",
      description: "Transparent, government-approved processes ensuring worker welfare",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Training and development opportunities for continuous improvement",
    },
  ];

  const features = [
    "Government Approved (RL-1831)",
    "Transparent Process",
    "Post-Deployment Support",
    "Pre-Departure Training",
    "Legal Documentation",
    "24/7 Assistance",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Building Global Careers,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Connecting Nations
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              AL-ROTAN - Your trusted partner in international manpower recruitment. Licensed by the Government of
              Bangladesh (RL-1831)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 shadow-strong">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 text-white"
              >
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/90 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive recruitment solutions tailored to meet your manpower needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Government Approved Agency</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose AL-ROTAN?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 15 years of experience and a proven track record, we are committed to excellence,
                transparency, and the welfare of every worker we deploy.
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
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="space-y-6 p-0">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Our Commitment</h3>
                    <p className="text-muted-foreground">
                      We believe that every Bangladeshi worker possesses immense potential. Through proper guidance,
                      training, and ethical recruitment practices, they can become valuable assets to any organization
                      around the world.
                    </p>
                    <div className="space-y-3 pt-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm">
                          <strong>Professionalism:</strong> Maintaining highest standards in all interactions
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <p className="text-sm">
                          <strong>Transparency:</strong> Clear communication throughout the recruitment process
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <p className="text-sm">
                          <strong>Fairness:</strong> Ethical practices ensuring dignity and welfare
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Global Career?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join thousands of Bangladeshi workers who have found success through AL-ROTAN
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 shadow-strong">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 text-white"
            >
              <Link to="/success-stories">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
