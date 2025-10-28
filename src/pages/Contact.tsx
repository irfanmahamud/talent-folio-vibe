import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Globe, Clock, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(t('contact.messageSent'));
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const offices = [
    {
      name: t('contact.bangladeshOffice'),
      address: "House #6, Road #02, Block #L, Banani, Dhaka-1213, Bangladesh",
      phone: ["+8801714-465613", "+8801725-294060"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9371429426!2d90.40255!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzM3LjMiTiA5MMKwMjQnMDkuMiJF!5e0!3m2!1sen!2sbd!4v1234567890",
    },
    {
      name: t('contact.iraqOffice'),
      address: "M-611, SH-11, D-135, DOUDIYA, AL-MONSUR, BAGHDAD, IRAQ",
      phone: ["+964 782 714 1813"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.876!2d44.3661!3d33.3152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzU0LjciTiA0NMKwMjEnNTguMCJF!5e0!3m2!1sen!2siq!4v1234567890",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phoneNumbers'),
      details: ["+8801714-465613", "+8801725-294060", "+964 782 714 1813"],
    },
    {
      icon: Mail,
      title: t('contact.emailAddress'),
      details: [t('footer.email')],
    },
    {
      icon: Globe,
      title: t('contact.website'),
      details: [t('footer.website')],
    },
  ];

  const whyContactReasons = [
    t('contact.reason1'),
    t('contact.reason2'),
    t('contact.reason3'),
    t('contact.reason4'),
    t('contact.reason5'),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-gray-100">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-background shadow-strong hover:shadow-strong hover:-translate-y-1 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">{t('contact.sendMessage')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('contact.sendMessageDesc')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('contact.fullName')} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.enterFullName')}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t('header.contact')} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.enterEmail')}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t('contact.phoneNumber')}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.phonePlaceholder')}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">{t('contact.subject')} *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.subjectPlaceholder')}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t('contact.message')} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.messagePlaceholder')}
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-medium" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.sending') : t('contact.sendMessage2')}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="animate-slide-in-right space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">{t('contact.workingHours')}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">{t('contact.sundayThursday')}</span>
                      <span className="font-semibold">{t('footer.timeRange')}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">{t('contact.fridaySaturday')}</span>
                      <span className="font-semibold text-destructive">{t('footer.closed')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{t('contact.whyContactUs')}</h3>
                  <ul className="space-y-3">
                    {whyContactReasons.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-3">License No. RL-1831</h3>
                  <p className="text-sm text-gray-100">
                    {t('contact.licenseInfo')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('contact.visitOffice')}</h2>
              <p className="text-muted-foreground">
                {t('contact.visitOfficeDesc')}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-primary text-white p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-6 w-6" />
                        <h3 className="text-xl font-bold">{office.name}</h3>
                      </div>
                      <p className="text-gray-100 mb-3">{office.address}</p>
                      <div className="flex flex-col gap-1">
                        {office.phone.map((phoneNum, idx) => (
                          <a 
                            key={idx}
                            href={`tel:${phoneNum}`}
                            className="text-gray-100 hover:text-white transition-colors flex items-center gap-2"
                          >
                            <Phone className="h-4 w-4" />
                            {phoneNum}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="aspect-video">
                      <iframe
                        src={office.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={office.name}
                      />
                    </div>
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

export default Contact;