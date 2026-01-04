import { Link } from "react-router-dom";
import { GraduationCap, Shield, Heart, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Campus<span className="text-primary">Connect</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              A verified campus platform for day scholars to connect, share resources, 
              and grow together. Built by students, for students.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-secondary" />
                <span>Safe & Verified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-destructive" />
                <span>Student-first</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Report Issue
                </a>
              </li>
              <li>
                <a href="mailto:support@campusconnect.edu" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-3 w-3" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CampusConnect. College-exclusive platform.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
