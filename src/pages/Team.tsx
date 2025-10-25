import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    { name: "KAZI ATIKUR RAHMAN", position: "CHAIRMAN" },
    { name: "MD KHORSHED ALAM (MOJID)", position: "MANAGING DIRECTOR" },
    { name: "MD BIKO HOSSAIN", position: "OVERSEAS DIRECTOR" },
    { name: "MD TITON SIKDER", position: "DIRECTOR (HUMAN RESOURCE)" },
    { name: "MEER M M SHAMEEM", position: "DIRECTOR (MARKETING)" },
    { name: "MOHAMMED YEASHIN", position: "DIRECTOR (BUSINESS DEVELOPMENT)" },
    { name: "MD. AL AMIN", position: "ACCOUNTANT" },
    { name: "MD. IMRAN HOSSAIN", position: "COMPUTER OPERATOR" },
    { name: "MD MASRUF PARVEZ", position: "SENIOR OFFICE ASSISTANT" },
    { name: "RASEL AHMMED RAJU", position: "BMET REPRESENTATIVE" },
    { name: "ASHRAFUL ISLAM", position: "DATA OPERATOR" },
    { name: "MD SABBIR HASAN", position: "OFFICE ASSISTANT" },
    { name: "MASUM MIAH", position: "MLSS" },
  ];

  const departments = [
    { name: "Executive Leadership", count: 3, color: "primary" },
    { name: "Operations", count: 4, color: "accent" },
    { name: "Support Staff", count: 6, color: "secondary" },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("");
  };

  const getColorClass = (index: number) => {
    const colors = ["bg-gradient-primary", "bg-gradient-accent", "bg-gradient-to-br from-secondary to-secondary/80"];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">13 Dedicated Professionals</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-100">
              Meet the dedicated professionals working tirelessly to connect Bangladeshi talent with global opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-medium transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{dept.count}</div>
                  <div className="text-sm font-medium text-muted-foreground">{dept.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Members</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our diverse team brings together expertise, dedication, and a shared commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-20 h-20 rounded-full ${getColorClass(
                        index
                      )} flex items-center justify-center text-white text-xl font-bold mb-4 shadow-medium group-hover:scale-110 transition-transform`}
                    >
                      {getInitials(member.name)}
                    </div>
                    <h3 className="font-semibold text-base mb-2 leading-tight">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Team Culture</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg">
                    At AL-ROTAN, our team is our greatest strength. We foster a culture of collaboration,
                    professionalism, and continuous learning. Every team member plays a vital role in our mission to
                    provide world-class recruitment services.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    {[
                      {
                        title: "Collaborative Spirit",
                        description: "Working together to achieve common goals and support each other's growth",
                      },
                      {
                        title: "Professional Excellence",
                        description: "Maintaining the highest standards in all aspects of our work",
                      },
                      {
                        title: "Continuous Learning",
                        description: "Embracing new challenges and opportunities for development",
                      },
                      {
                        title: "Client-Focused",
                        description: "Dedicated to exceeding expectations and building lasting relationships",
                      },
                    ].map((value, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                          <p className="text-sm">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
