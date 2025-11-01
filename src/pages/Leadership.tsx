import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import chairmanPhoto from "@/assets/chairman-photo.png";
import managingDirectorPhoto from "@/assets/managing-director-photo.jpg";

const Leadership = () => {
  const { t } = useTranslation();
  
  const leaders = [
    {
      name: t('leadership.chairmanName'),
      position: t('leadership.chairman'),
      message: t('leadership.chairmanMessage'),
    },
    {
      name: t('leadership.managingDirectorName'),
      position: t('leadership.managingDirector'),
      message: t('leadership.managingDirectorMessage'),
    },
    {
      name: t('leadership.overseasDirectorName'),
      position: t('leadership.overseasDirector'),
      message: t('leadership.overseasDirectorMessage'),
    },
  ];

  const gradients = [
    "from-primary/10 to-primary/5",
    "from-accent/10 to-accent/5",
    "from-secondary/10 to-secondary/5",
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('leadership.title')}</h1>
            <p className="text-xl text-gray-100">
              {t('leadership.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className={`animate-fade-in ${index % 2 === 0 ? "lg:pr-20" : "lg:pl-20"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className={`overflow-hidden border-2 hover:shadow-strong transition-all duration-300`}>
                  <div className={`h-2 bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="flex-shrink-0">
                        {index === 0 ? (
                          <img 
                            src={chairmanPhoto} 
                            alt={leader.name}
                            className="w-32 h-32 rounded-full object-cover shadow-medium border-4 border-primary/10"
                          />
                        ) : index === 1 ? (
                          <img 
                            src={managingDirectorPhoto} 
                            alt={leader.name}
                            className="w-32 h-32 rounded-full object-cover object-[center_20%] shadow-medium border-4 border-primary/10"
                          />
                        ) : (
                          <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center text-white text-3xl font-bold shadow-medium">
                            {leader.name
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{leader.name}</h2>
                        <p className="text-lg font-medium text-primary">{leader.position}</p>
                      </div>
                      <Quote className="hidden md:block h-12 w-12 text-muted-foreground/20" />
                    </div>

                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      {leader.message.split("\n\n").map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-base md:text-lg">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('leadership.coreValues')}</h2>
            <p className="text-muted-foreground text-lg mb-12">
              {t('leadership.coreValuesDesc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: t('leadership.integrity'),
                  description: t('leadership.integrityDesc'),
                },
                {
                  title: t('leadership.excellence'),
                  description: t('leadership.excellenceDesc'),
                },
                {
                  title: t('leadership.responsibility'),
                  description: t('leadership.responsibilityDesc'),
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-medium transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-3">{value.title}</div>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;