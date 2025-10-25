import { Shield, CheckCircle, FileText, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Licenses = () => {
  const licenses = [
    {
      title: "Recruiting License",
      number: "RL-1831",
      authority: "Ministry of Expatriates' Welfare and Overseas Employment",
      status: "Active",
      description: "Government-approved recruiting license for overseas employment"
    },
    {
      title: "Certificate of Incorporation",
      number: "C-153192/2019",
      authority: "Registrar of Joint Stock Companies & Firms",
      date: "July 10, 2019",
      description: "Incorporated under the Companies Act (Act XVIII) of 1994"
    },
    {
      title: "BAIRA Membership",
      authority: "Bangladesh Association of International Recruiting Agencies",
      status: "Active Member",
      description: "Certified member of the national recruiting agencies association"
    },
    {
      title: "Trade License",
      authority: "Dhaka City Corporation",
      status: "Renewed",
      description: "Valid trade license for recruitment operations"
    }
  ];

  const accreditations = [
    "ISO 9001:2015 Certified Quality Management",
    "Government Approved Recruiting Agency",
    "Member of BAIRA (Bangladesh Association of International Recruiting Agencies)",
    "Certified by Ministry of Expatriates' Welfare",
    "Registered with Bangladesh Embassy Abroad",
    "Compliance with International Labour Standards"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <section className="relative py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Licenses & Certifications</h1>
            <p className="text-xl text-white/90">
              Fully licensed and certified by the Government of Bangladesh and international bodies
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Official Licenses</h2>
              <p className="text-lg text-muted-foreground">
                Our credentials demonstrate our commitment to legal and ethical recruitment practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {licenses.map((license, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <FileText className="w-10 h-10 text-primary mb-4" />
                      {license.status && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full text-sm font-medium">
                          {license.status}
                        </span>
                      )}
                    </div>
                    <CardTitle>{license.title}</CardTitle>
                    {license.number && (
                      <CardDescription className="text-lg font-semibold text-primary">
                        {license.number}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">{license.authority}</p>
                      {license.date && (
                        <p className="text-sm text-muted-foreground">Issued: {license.date}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-3">{license.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-primary text-white">
              <CardHeader>
                <Award className="w-12 h-12 mb-4" />
                <CardTitle className="text-2xl">Accreditations & Compliance</CardTitle>
                <CardDescription className="text-white/80">
                  We maintain the highest standards of compliance and quality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {accreditations.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licenses;
