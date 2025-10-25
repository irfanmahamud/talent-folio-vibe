import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, TrendingUp, Award, Globe } from "lucide-react";

const SuccessStories = () => {
  const achievements = [
    {
      icon: Plane,
      title: "180 Workers Deployed",
      description: "Successfully sent to Iraq on inaugural flight",
    },
    {
      icon: Globe,
      title: "Market Reopening",
      description: "Iraq labor market reopened after 7 years",
    },
    {
      icon: Award,
      title: "National Recognition",
      description: "Featured in major news outlets and television",
    },
    {
      icon: TrendingUp,
      title: "Growing Presence",
      description: "Expanding to new international markets",
    },
  ];

  const mediaHighlights = [
    {
      outlet: "National Television",
      title: "Managing Director Interview",
      description: "Mr. Khorshed Alam (Mojid) discusses the reopening of Iraq's labor market",
    },
    {
      outlet: "National Television",
      title: "Overseas Director Feature",
      description: "Mr. Biko Hossain shares insights on international partnerships",
    },
    {
      outlet: "The Daily Inqilab",
      title: "Thriving Manpower Sector",
      description: "Coverage of AL-ROTAN's role in reopening vital destination",
    },
    {
      outlet: "The Nation",
      title: "Iraq's Labour Market Reopens",
      description: "Creating new opportunities for Bangladeshi workforce",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur hover:bg-white/30">Historic Achievement</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-gray-100">
              Celebrating milestones in connecting Bangladeshi talent with global opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Main Success Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-strong animate-fade-in">
              <div className="h-3 bg-gradient-primary" />
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <Badge className="mb-4 px-4 py-2 bg-accent">2024 Milestone</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Iraq Labor Market Reopening</h2>
                  <p className="text-xl text-muted-foreground">
                    A historic achievement after 7 years of closure
                  </p>
                </div>

                <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    With the long-term efforts and activities of AL-ROTAN (Pvt.) Limited and the cooperation of the
                    Ministry of Expatriates' Welfare and Overseas Employment, the Iraqi labor market was opened for
                    Bangladeshi workers after 7 long years.
                  </p>

                  <p className="text-lg leading-relaxed">
                    About 180 workers left the country for Iraq on the inaugural flight, marking a significant
                    milestone in Bangladesh's manpower export sector. With the overall support of the Ministry and the
                    initiative of AL-ROTAN (Pvt.) Ltd., it became possible to send workers again to this vital Middle
                    Eastern destination.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Stakeholders expressed happiness saying the resumption of this vital destination is good news for
                    the manpower sector. This achievement demonstrates AL-ROTAN's commitment to creating new
                    opportunities and expanding Bangladesh's global workforce presence.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="text-center p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Recognition</h2>
              <p className="text-muted-foreground text-lg">
                Our achievement has been widely recognized in national media
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaHighlights.map((media, index) => (
                <Card
                  key={index}
                  className="hover:shadow-medium transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <Badge className="mb-4" variant="outline">
                      {media.outlet}
                    </Badge>
                    <h3 className="font-semibold text-xl mb-3">{media.title}</h3>
                    <p className="text-muted-foreground">{media.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="text-6xl text-primary/20 mb-6">"</div>
                <blockquote className="text-xl md:text-2xl font-medium mb-6 text-foreground">
                  Reopening Iraq labour market for our manpower is good news. This demonstrates the government's
                  commitment to strengthening diplomatic efforts to expand opportunities for Bangladeshi workers
                  globally.
                </blockquote>
                <p className="text-muted-foreground">
                  <strong>Ali Haider Chowdhury</strong>
                  <br />
                  Freedom Fighter, Former Secretary General of BAIRA
                  <br />
                  Director, East West Human Resource Center Ltd.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-xl text-gray-100 mb-8">
              Building on our success, AL-ROTAN continues to explore new markets and strengthen partnerships worldwide
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Market Expansion",
                  description: "Opening new opportunities in UAE, Singapore, and beyond",
                },
                {
                  title: "Enhanced Services",
                  description: "Improving training programs and support systems",
                },
                {
                  title: "Stronger Partnerships",
                  description: "Building lasting relationships with global employers",
                },
              ].map((goal, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">{goal.title}</h3>
                  <p className="text-gray-200 text-sm">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
