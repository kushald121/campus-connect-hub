import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ShoppingBag, Users, Trophy, ArrowRight, CheckCircle2, 
  BookOpen, Beaker, Calculator, Shield, Sparkles, Heart
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Buy & Sell Essentials",
      description: "Exchange lab coats, calculators, books, and more with verified students.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Ask Seniors",
      description: "Get guidance, resolve doubts, and learn from experienced students.",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Trophy,
      title: "Find Opportunities",
      description: "Discover competitions, hackathons, and form winning teams.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  const struggles = [
    "Finding affordable academic resources",
    "Getting guidance from seniors",
    "Discovering competitions & events",
    "Building project teams",
  ];

  const categories = [
    { icon: BookOpen, label: "Books & Notes", count: "120+ items" },
    { icon: Beaker, label: "Lab Equipment", count: "85+ items" },
    { icon: Calculator, label: "Calculators", count: "45+ items" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              For day scholars, by day scholars
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Connect. Share. Grow
              <span className="block text-primary">Together on Campus</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A verified campus platform for exchanging resources, getting senior guidance, 
              and discovering opportunities. Made exclusively for your college.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/marketplace">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Explore Marketplace
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Join Community
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-secondary" />
                <span>College-verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-destructive" />
                <span>Student-first</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                No hostel? <span className="text-primary">No problem.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We understand the unique challenges day scholars face
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {struggles.map((struggle, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{struggle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need to thrive
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              One platform for all your campus needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card border shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl ${feature.bg} mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Categories
            </h2>
            <p className="text-muted-foreground text-lg">
              Find what you need from verified students
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to="/marketplace"
                className="group p-6 rounded-2xl bg-card border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{category.label}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center gradient-primary rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to connect with your campus?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Join hundreds of students already using CampusConnect
            </p>
            <Link to="/signup">
              <Button 
                variant="outline" 
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
