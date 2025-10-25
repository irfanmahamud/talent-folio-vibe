import { Briefcase, MapPin, DollarSign, Calendar, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const JobOpenings = () => {
  const jobs = [
    {
      title: "Cleaner",
      company: "ARTOSH COMPANY",
      country: "Iraq (KRO)",
      location: "Kurdistan Region",
      positions: 100,
      salary: "300 USD",
      period: "2 years",
      benefits: [
        "Free Accommodation",
        "Free Air Passage (One Way)",
        "Free Transportation",
        "Free Medical Treatment",
        "Free Food from Company",
        "15 Days Yearly Leave"
      ]
    },
    {
      title: "Car Driver",
      company: "Burj Al Khaleej General Co",
      country: "Iraq",
      location: "Al Mansour, Baghdad",
      positions: 59,
      salary: "Competitive",
      period: "2 years",
      benefits: [
        "Free Medical, Accommodation, Food & Transportation",
        "One Way Air Passage",
        "8 hours/day & 48 hours/week",
        "15 Days Vacation per Year",
        "Weekly Holiday (Friday)"
      ]
    },
    {
      title: "Construction Workers",
      company: "Various Clients",
      country: "Middle East",
      location: "UAE, Saudi Arabia, Qatar",
      positions: 50,
      salary: "250-400 USD",
      period: "2 years",
      benefits: [
        "Free Accommodation",
        "Free Medical",
        "Free Transportation",
        "Overtime Pay",
        "Annual Leave"
      ]
    },
    {
      title: "Factory Workers",
      company: "Manufacturing Companies",
      country: "Malaysia",
      location: "Kuala Lumpur",
      positions: 30,
      salary: "350-450 USD",
      period: "2 years",
      benefits: [
        "Free Accommodation",
        "Medical Insurance",
        "Overtime Opportunities",
        "Annual Bonus",
        "Annual Leave"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <section className="relative py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Current Job Openings</h1>
            <p className="text-xl text-white/90">
              Explore international career opportunities with competitive benefits
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {jobs.map((job, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-primary text-primary-foreground">
                        <Users className="w-3 h-3 mr-1" />
                        {job.positions} Positions
                      </Badge>
                      <Badge variant="outline">{job.country}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <CardDescription className="text-base">
                      {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span>{job.salary}/month</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>Contract: {job.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Full Time</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Benefits Package:</h4>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full" asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 bg-gradient-primary text-white">
              <CardHeader>
                <CardTitle className="text-2xl">General Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Probationary Period: 90 days for most positions</p>
                <p>• Contract Duration: Typically 2 years (renewable)</p>
                <p>• Overtime: As per international labor law</p>
                <p>• Medical Treatment: Free basic medical care provided by employer</p>
                <p>• Working Hours: 8 hours/day, 48 hours/week (standard)</p>
                <p>• Weekly Holiday: Usually Friday (may vary by country)</p>
                <p>• Processing Time: 60-90 days from application to deployment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobOpenings;
