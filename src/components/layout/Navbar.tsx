import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, ShoppingBag, Users, Trophy, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/marketplace", label: "Marketplace", icon: ShoppingBag },
    { path: "/community", label: "Community", icon: Users },
    { path: "/opportunities", label: "Opportunities", icon: Trophy },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Campus<span className="text-primary">Connect</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "soft" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm">Sign up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(link.path) ? "soft" : "ghost"}
                    className="w-full justify-start gap-3"
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Button>
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
