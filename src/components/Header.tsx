import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo-al-rotan.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { to: "/about", label: t("header.about") },
    { to: "/leadership", label: t("header.leadership") },
    { to: "/team", label: t("header.team") },
    { to: "/services", label: t("header.services") },
    { to: "/success-stories", label: t("header.successStories") },
    { to: "/licenses", label: t("header.licenses") },
    { to: "/job-openings", label: t("header.jobOpenings") },
    { to: "/countries", label: t("header.countries") },
    { to: "/gallery", label: t("header.gallery") },
    { to: "/contact", label: t("header.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="AL-ROTAN Logo" 
              className="w-12 h-12 rounded-full shadow-medium transition-all group-hover:scale-105"
            />
            <div className="hidden md:block">
              <div className="font-bold text-xl text-foreground">AL-ROTAN</div>
              <div className="text-xs text-muted-foreground">{t("header.tagline")}</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={toggleLanguage}
              className="shadow-medium"
            >
              <Languages className="h-5 w-5 mr-2" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="w-full mt-4"
            >
              <Languages className="h-5 w-5 mr-2" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
