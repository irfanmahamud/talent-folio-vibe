import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import logo from "@/assets/logo-al-rotan.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              Government-approved recruiting agency connecting Bangladeshi talent with global opportunities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/licenses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Licenses
                </Link>
              </li>
              <li>
                <Link to="/job-openings" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Job Openings
                </Link>
              </li>
              <li>
                <Link to="/countries" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Countries
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  House #6, Road #02, Block #L, Banani, Dhaka-1213, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+8801714-465613</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">alrotanbd2019@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">www.al-rotan.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Sunday - Thursday</li>
              <li className="font-medium text-foreground">9:00 AM - 6:00 PM</li>
              <li className="mt-4">Friday - Saturday</li>
              <li className="font-medium text-foreground">Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} AL-ROTAN (Pvt.) Limited. All rights reserved. | License No. RL-1831
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
