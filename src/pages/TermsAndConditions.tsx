import { Card, CardContent } from "@/components/ui/card";
import { FileText, Shield, Users, AlertCircle } from "lucide-react";
import PageHero from "@/components/PageHero";

const TermsAndConditions = () => {
  const sections = [
    {
      icon: Users,
      title: "1. Services Provided",
      content: [
        "AL-ROTAN (Pvt.) Limited is a licensed recruiting agency (License No. RL-1831) authorized by the Ministry of Expatriates' Welfare and Overseas Employment of Bangladesh.",
        "We provide recruitment services for overseas employment in various sectors including construction, manufacturing, hospitality, healthcare, and other industries.",
        "Our services include candidate selection, screening, documentation, medical examinations, pre-departure orientation, and deployment assistance."
      ]
    },
    {
      icon: FileText,
      title: "2. Terms of Engagement",
      content: [
        "All applicants must provide accurate and truthful information during the application process.",
        "Candidates must meet the eligibility criteria set by the destination country and employer.",
        "All required documents must be genuine and verified. Any fraudulent documentation will result in immediate disqualification.",
        "Applicants must undergo and pass required medical examinations and skill assessments.",
        "Service fees and charges will be clearly communicated before engagement and must be paid as per the agreed schedule."
      ]
    },
    {
      icon: Shield,
      title: "3. Client Obligations",
      content: [
        "Clients (workers) must attend all scheduled interviews, training sessions, and orientations.",
        "Workers must comply with all laws and regulations of both Bangladesh and the destination country.",
        "Employment contracts must be read, understood, and signed by the worker before deployment.",
        "Workers are responsible for maintaining valid travel documents throughout their employment period.",
        "Any changes in personal circumstances must be immediately communicated to AL-ROTAN."
      ]
    },
    {
      icon: AlertCircle,
      title: "4. Company Obligations",
      content: [
        "AL-ROTAN will ensure all recruitment processes comply with Bangladesh labor laws and international standards.",
        "We will provide transparent information about job positions, salaries, benefits, and working conditions.",
        "We will facilitate proper documentation, visa processing, and travel arrangements.",
        "We will provide pre-departure orientation covering cultural adaptation, work expectations, and legal rights.",
        "We will offer post-deployment support and assistance for the duration specified in service agreements."
      ]
    },
    {
      icon: FileText,
      title: "5. Fees and Payments",
      content: [
        "All fees and charges are clearly outlined in our service agreement and comply with government regulations.",
        "Payment schedules and methods will be agreed upon before service commencement.",
        "Refund policies, if applicable, will be clearly stated in the service agreement.",
        "No hidden charges or additional fees will be imposed beyond those agreed upon in writing.",
        "Receipt of all payments will be provided to clients."
      ]
    },
    {
      icon: Shield,
      title: "6. Cancellation and Refund Policy",
      content: [
        "Cancellation requests must be submitted in writing to AL-ROTAN.",
        "Refund eligibility depends on the stage of the recruitment process at the time of cancellation.",
        "Non-refundable expenses (government fees, visa costs, medical examination fees) will be deducted from any refunds.",
        "If deployment is cancelled due to AL-ROTAN's inability to fulfill obligations, a full refund will be provided.",
        "Specific refund terms will be detailed in individual service agreements."
      ]
    },
    {
      icon: Users,
      title: "7. Liability and Disclaimers",
      content: [
        "AL-ROTAN is not liable for decisions made by foreign employers, embassies, or immigration authorities.",
        "We cannot guarantee visa approval or employment placement, though we make every effort to facilitate successful outcomes.",
        "Workers are responsible for their conduct and performance in their employment abroad.",
        "AL-ROTAN is not liable for any losses, damages, or injuries that occur during employment overseas.",
        "We recommend all workers obtain appropriate insurance coverage for overseas employment."
      ]
    },
    {
      icon: FileText,
      title: "8. Confidentiality",
      content: [
        "All personal information provided by clients will be handled in accordance with our Privacy Policy.",
        "Client information will only be shared with relevant authorities, employers, and service providers as necessary.",
        "We maintain strict confidentiality of all business and personal information.",
        "Clients must also maintain confidentiality of any proprietary information shared by AL-ROTAN."
      ]
    },
    {
      icon: AlertCircle,
      title: "9. Dispute Resolution",
      content: [
        "Any disputes arising from our services will first be addressed through good faith negotiations.",
        "If disputes cannot be resolved amicably, they will be subject to arbitration in accordance with Bangladesh law.",
        "The jurisdiction for any legal proceedings will be Dhaka, Bangladesh.",
        "Both parties agree to act in good faith to resolve any disagreements promptly and professionally."
      ]
    },
    {
      icon: Shield,
      title: "10. Modifications to Terms",
      content: [
        "AL-ROTAN reserves the right to modify these terms and conditions at any time.",
        "Clients will be notified of any significant changes to these terms.",
        "Continued use of our services after modifications constitutes acceptance of the updated terms.",
        "Individual service agreements may contain additional specific terms that supplement these general terms."
      ]
    },
    {
      icon: FileText,
      title: "11. Governing Law",
      content: [
        "These terms and conditions are governed by the laws of Bangladesh.",
        "All services are provided in compliance with the Bangladesh Overseas Employment and Migrants Act.",
        "We adhere to all regulations set by the Ministry of Expatriates' Welfare and Overseas Employment.",
        "International labor standards and bilateral agreements between Bangladesh and destination countries are also observed."
      ]
    },
    {
      icon: Users,
      title: "12. Contact Information",
      content: [
        "For questions or concerns regarding these terms and conditions, please contact:",
        "AL-ROTAN (Pvt.) Limited",
        "House #6, Road #02, Block #L, Banani, Dhaka-1213, Bangladesh",
        "Phone: +8801714-465613, +8801725-294060",
        "Email: info@al-rotan.com"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Terms and Conditions"
        subtitle="Please read these terms carefully before using our services"
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <Card className="mb-12 border-primary/20">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    Welcome to AL-ROTAN (Pvt.) Limited. These Terms and Conditions outline the rules and regulations 
                    for the use of our recruitment services and website.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    By accessing and using our services, you accept and agree to be bound by these terms. If you do not 
                    agree with any part of these terms, please do not use our services.
                  </p>
                  <p className="text-base text-muted-foreground italic">
                    Last Updated: November 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Terms Sections */}
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
                    <div className="space-y-3 ml-16">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Acceptance Notice */}
            <Card className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-4">Acceptance of Terms</h3>
                <p className="text-muted-foreground">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by 
                  these Terms and Conditions. These terms constitute a legally binding agreement between you and 
                  AL-ROTAN (Pvt.) Limited.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
