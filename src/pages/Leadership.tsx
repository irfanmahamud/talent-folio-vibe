import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const Leadership = () => {
  const { t } = useTranslation();
  
  const leaders = [
    {
      name: "KAZI ATIKUR RAHMAN",
      position: t('leadership.chairman'),
      message: `Since our journey began, our goal has been to contribute meaningfully to the nation's economy by creating global employment opportunities for our skilled, semi-skilled, and unskilled workers. We believe that every Bangladeshi worker possesses immense potential, and through proper guidance, training, and ethical recruitment practices, they can become valuable assets to any organization around the world.

At Al Rotan, we take pride in maintaining professionalism, transparency, and fairness in every step of the recruitment process. Our continuous growth and success reflect the trust and satisfaction of our foreign employers and the dedication of our team members who work tirelessly to uphold our reputation.

As Chairman, I am committed to ensuring that Al Rotan remains a symbol of reliability, quality, and social responsibility. We will continue to explore new markets, enhance our service standards, and strengthen partnerships that promote mutual prosperity.

Together, we move forward — with integrity, dedication, and a shared vision for a better future for Bangladeshi workers and our nation.`,
    },
    {
      name: "MD. KHORSHED ALAM (MOJID)",
      position: t('leadership.managingDirector'),
      message: `It is with great pride and a deep sense of responsibility that I extend my heartfelt greetings to all our valued partners, clients, and well-wishers of Al Rotan (Pvt.) Limited. Since our establishment, our vision has been clear — to create a trusted bridge between the talented workforce of Bangladesh and global employers who seek commitment, integrity, and excellence.

With the approval of the Government of the People's Republic of Bangladesh (License No. RL-1831), we have been working relentlessly to ensure ethical recruitment, transparency, and sustainable employment opportunities abroad.

At Al Rotan, we believe that human resources are the true strength of any nation. By empowering our workers and connecting them with dignified employment across the Middle East, Gulf States, and Southeast Asia, we not only contribute to their personal growth but also to the socio-economic development of Bangladesh.

Our success is built on dedication, professionalism, and the trust of our partners. As we move forward, we reaffirm our commitment to delivering world-class recruitment solutions with honesty, efficiency, and compassion. Together, let us build a brighter future where opportunity knows no boundaries.`,
    },
    {
      name: "MD. BIKO HOSSAIN",
      position: t('leadership.overseasDirector'),
      message: `It gives me immense pleasure to convey my warm greetings on behalf of Al Rotan (Pvt.) Limited to our valued international partners, clients, and well-wishers around the world.

As the Overseas Director, my primary focus has always been to strengthen our global partnerships and ensure smooth coordination between our overseas employers and the talented Bangladeshi workforce. Through mutual trust, transparency, and continuous communication, we have been able to build a solid foundation for long-term collaboration and shared success.

The world of overseas employment is evolving rapidly, and Al Rotan has positioned itself as a reliable partner that understands both the needs of employers and the aspirations of workers. Our commitment to ethical recruitment, quality service, and professional excellence has earned us recognition across the Middle East, Gulf, and Southeast Asian markets.

We remain dedicated to expanding our global footprint, enhancing our service standards, and upholding the dignity and welfare of every Bangladeshi worker we deploy. I firmly believe that with dedication, teamwork, and a shared vision, Al Rotan (Pvt.) Limited will continue to achieve greater heights and contribute to the development of both individuals and nations.`,
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
                        <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold shadow-medium">
                          {leader.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
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