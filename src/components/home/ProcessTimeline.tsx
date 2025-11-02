import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  UserCheck, 
  GraduationCap, 
  Plane, 
  Headphones,
  CheckCircle2 
} from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: typeof FileText;
  details: string[];
}

const ProcessTimeline = () => {
  const { t } = useTranslation();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: t('home.processTimeline.step1.title'),
      description: t('home.processTimeline.step1.description'),
      icon: FileText,
      details: [
        t('home.processTimeline.step1.detail1'),
        t('home.processTimeline.step1.detail2'),
        t('home.processTimeline.step1.detail3'),
        t('home.processTimeline.step1.detail4')
      ]
    },
    {
      id: 2,
      title: t('home.processTimeline.step2.title'),
      description: t('home.processTimeline.step2.description'),
      icon: UserCheck,
      details: [
        t('home.processTimeline.step2.detail1'),
        t('home.processTimeline.step2.detail2'),
        t('home.processTimeline.step2.detail3'),
        t('home.processTimeline.step2.detail4')
      ]
    },
    {
      id: 3,
      title: t('home.processTimeline.step3.title'),
      description: t('home.processTimeline.step3.description'),
      icon: GraduationCap,
      details: [
        t('home.processTimeline.step3.detail1'),
        t('home.processTimeline.step3.detail2'),
        t('home.processTimeline.step3.detail3'),
        t('home.processTimeline.step3.detail4')
      ]
    },
    {
      id: 4,
      title: t('home.processTimeline.step4.title'),
      description: t('home.processTimeline.step4.description'),
      icon: Plane,
      details: [
        t('home.processTimeline.step4.detail1'),
        t('home.processTimeline.step4.detail2'),
        t('home.processTimeline.step4.detail3'),
        t('home.processTimeline.step4.detail4')
      ]
    },
    {
      id: 5,
      title: t('home.processTimeline.step5.title'),
      description: t('home.processTimeline.step5.description'),
      icon: Headphones,
      details: [
        t('home.processTimeline.step5.detail1'),
        t('home.processTimeline.step5.detail2'),
        t('home.processTimeline.step5.detail3'),
        t('home.processTimeline.step5.detail4')
      ]
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && stepRefs.current[index]) {
          observer.unobserve(stepRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">{t('home.processTimeline.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.processTimeline.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('home.processTimeline.description')}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative mb-12 last:mb-0 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connecting Line (except last) */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-24 w-0.5 h-full bg-gradient-to-b from-primary via-purple-500 to-accent -translate-x-1/2 hidden md:block">
                    <div
                      className={`h-0 bg-gradient-to-b from-primary via-purple-500 to-accent transition-all duration-1000 ${
                        isVisible ? "h-full" : ""
                      }`}
                    />
                  </div>
                )}

                {/* Step Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left side (alternates based on index) */}
                  <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
                    {isEven ? (
                      <Card className="border-2 border-primary/20 shadow-medium hover:shadow-strong transition-all hover:-translate-y-1 group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                                  STEP {step.id}
                                </span>
                              </div>
                              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                              <p className="text-muted-foreground text-sm mb-4">
                                {step.description}
                              </p>
                              <ul className="space-y-2">
                                {step.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Center - Step Number Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-strong transition-all duration-500 ${
                        isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                      }`}
                    >
                      <span className="text-white font-bold text-xl">{step.id}</span>
                    </div>
                  </div>

                  {/* Right side (alternates based on index) */}
                  <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
                    {!isEven ? (
                      <Card className="border-2 border-primary/20 shadow-medium hover:shadow-strong transition-all hover:-translate-y-1 group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                                  STEP {step.id}
                                </span>
                              </div>
                              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                              <p className="text-muted-foreground text-sm mb-4">
                                {step.description}
                              </p>
                              <ul className="space-y-2">
                                {step.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Mobile version - show for both even and odd */}
                  <div className="md:hidden col-span-1">
                    <Card className="border-2 border-primary/20 shadow-medium">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                                STEP {step.id}
                              </span>
                            </div>
                            <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                              {step.description}
                            </p>
                            <ul className="space-y-2">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA at the bottom */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            {t('home.processTimeline.cta.text')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-strong transition-all hover:-translate-y-1"
          >
            {t('home.processTimeline.cta.button')}
            <CheckCircle2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
