import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Users, FileText, AlertCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect personal information that you voluntarily provide when using our services, including: full name, date of birth, contact details (phone number, email address, physical address), passport information, educational qualifications, work experience, skills and certifications, photographs, and emergency contact information."
        },
        {
          subtitle: "Employment-Related Information",
          text: "We collect employment history, professional references, salary expectations, job preferences, language proficiencies, medical examination results (as required for overseas employment), and police clearance certificates."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we may automatically collect certain information including IP address, browser type and version, pages visited, time and date of visit, time spent on pages, and referring website addresses."
        }
      ]
    },
    {
      icon: Database,
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "Recruitment Services",
          text: "We use your information to match you with suitable employment opportunities, process job applications, conduct background verifications, facilitate interviews with potential employers, arrange medical examinations and documentation, and provide pre-departure orientation and training."
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to communicate about job opportunities, send updates about your application status, provide important information about deployment, respond to your inquiries and requests, and send service-related notifications."
        },
        {
          subtitle: "Legal Compliance",
          text: "We process your information to comply with Bangladesh labor laws and regulations, fulfill requirements of destination countries, meet obligations under international labor agreements, and respond to legal requests from authorities."
        },
        {
          subtitle: "Service Improvement",
          text: "We analyze information to improve our services, understand user preferences and needs, develop new services and features, and enhance user experience on our website."
        }
      ]
    },
    {
      icon: Users,
      title: "3. Information Sharing and Disclosure",
      content: [
        {
          subtitle: "With Employers",
          text: "We share your information with potential employers and recruiting companies in destination countries who are seeking to hire workers. This is essential for facilitating employment opportunities."
        },
        {
          subtitle: "With Service Providers",
          text: "We may share information with third-party service providers who assist us with medical examination centers, training institutes, travel agencies, visa processing centers, document verification services, and background check agencies."
        },
        {
          subtitle: "With Government Authorities",
          text: "We share information with the Ministry of Expatriates' Welfare and Overseas Employment, Bangladesh Overseas Employment and Services Limited (BOESL), embassies and consulates, immigration authorities, and other regulatory bodies as required by law."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, to protect our legal rights, to prevent fraud or abuse, to protect the safety of our users, and in connection with any legal proceedings."
        }
      ]
    },
    {
      icon: Lock,
      title: "4. Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include secure storage systems, encrypted data transmission, access controls and authentication, regular security assessments, and staff training on data protection."
        },
        {
          subtitle: "Limitations",
          text: "While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data."
        }
      ]
    },
    {
      icon: Eye,
      title: "5. Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access your personal information held by us, request corrections to inaccurate or incomplete information, and update your information at any time."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal information, subject to our legal obligations to retain certain records for specified periods under Bangladesh law and international agreements."
        },
        {
          subtitle: "Withdrawal of Consent",
          text: "You may withdraw your consent for processing your information at any time. However, this may affect our ability to provide services to you."
        },
        {
          subtitle: "Communication Preferences",
          text: "You can opt out of receiving promotional communications from us while still receiving essential service-related messages."
        }
      ]
    },
    {
      icon: Database,
      title: "6. Data Retention",
      content: [
        {
          subtitle: "Retention Periods",
          text: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements."
        },
        {
          subtitle: "Specific Timeframes",
          text: "Application records are typically retained for 5-7 years after employment completion or application withdrawal. Financial records are kept for periods required by tax and accounting regulations. Communication records are retained for the duration necessary for service provision and legal compliance."
        }
      ]
    },
    {
      icon: Users,
      title: "7. Children's Privacy",
      content: [
        {
          subtitle: "Age Restrictions",
          text: "Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information."
        }
      ]
    },
    {
      icon: FileText,
      title: "8. International Data Transfers",
      content: [
        {
          subtitle: "Cross-Border Transfers",
          text: "As part of our recruitment services, your information may be transferred to and processed in countries outside Bangladesh where our clients and partner organizations are located. We ensure appropriate safeguards are in place for such transfers."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "9. Cookies and Tracking Technologies",
      content: [
        {
          subtitle: "Use of Cookies",
          text: "Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and remember your preferences. You can control cookie settings through your browser preferences."
        }
      ]
    },
    {
      icon: Shield,
      title: "10. Changes to Privacy Policy",
      content: [
        {
          subtitle: "Policy Updates",
          text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a new 'Last Updated' date."
        },
        {
          subtitle: "Your Continued Use",
          text: "Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy."
        }
      ]
    },
    {
      icon: Phone,
      title: "11. Contact Us",
      content: [
        {
          subtitle: "Privacy Inquiries",
          text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:"
        },
        {
          subtitle: "Contact Details",
          text: "AL-ROTAN (Pvt.) Limited\nHouse #6, Road #02, Block #L, Banani, Dhaka-1213, Bangladesh\nPhone: +8801714-465613, +8801725-294060\nEmail: info@al-rotan.com\n\nWe will respond to your inquiries within a reasonable timeframe."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information"
        backgroundImage="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1920"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    At AL-ROTAN (Pvt.) Limited, we are committed to protecting your privacy and ensuring the security 
                    of your personal information. This Privacy Policy explains how we collect, use, share, and protect 
                    your personal data when you use our recruitment services.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    By using our services, you consent to the collection and use of your information as described in 
                    this Privacy Policy. We comply with applicable data protection laws in Bangladesh and respect 
                    international privacy standards.
                  </p>
                  <p className="text-base text-muted-foreground italic">
                    Last Updated: November 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-medium transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mt-2">{section.title}</h2>
                    </div>
                    <div className="space-y-6 ml-16">
                      {section.content.map((item, cIndex) => (
                        <div key={cIndex}>
                          <h3 className="text-lg font-semibold mb-2 text-foreground">{item.subtitle}</h3>
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Commitment Notice */}
            <Card className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-4">Our Privacy Commitment</h3>
                <p className="text-muted-foreground mb-4">
                  We are committed to maintaining the confidentiality, integrity, and security of your personal 
                  information. We will only use your information for legitimate business purposes and in accordance 
                  with this Privacy Policy and applicable laws.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  AL-ROTAN (Pvt.) Limited is licensed by the Ministry of Expatriates' Welfare and Overseas Employment 
                  (License No. RL-1831) and adheres to all applicable data protection regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
