import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-al-rotan.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const { toggleLanguage } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="AL-ROTAN Logo" 
                className="w-12 h-12 rounded-full shadow-medium"
              />
              <div>
                <div className="font-bold text-lg">AL-ROTAN</div>
                <div className="text-xs text-muted-foreground">License No. RL-1831</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("header.about")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("header.services")}
                </Link>
              </li>
              <li>
                <Link to="/licenses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("header.licenses")}
                </Link>
              </li>
              <li>
                <Link to="/job-openings" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("header.jobOpenings")}
                </Link>
              </li>
              <li>
                <Link to="/countries" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("header.countries")}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("header.gallery")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.contactInfo")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  {t("footer.address")}
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t("footer.phone")}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t("footer.email")}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t("footer.website")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.workingHours")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("footer.sunToThu")}</li>
              <li className="font-medium text-foreground">{t("footer.timeRange")}</li>
              <li className="mt-4">{t("footer.friToSat")}</li>
              <li className="font-medium text-foreground">{t("footer.closed")}</li>
            </ul>
            
            <div className="mt-6">
              <Button 
                onClick={toggleLanguage}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Languages className="h-4 w-4 mr-2" />
                {t("footer.switchLanguage")}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
