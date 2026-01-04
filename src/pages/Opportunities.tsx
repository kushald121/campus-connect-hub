import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import Footer from "@/components/layout/Footer";
import { 
  Search, Plus, Trophy, Users, Calendar, MapPin, 
  Clock, ExternalLink, Code, Palette, Brain, Rocket
} from "lucide-react";

const Opportunities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const opportunities = [
    {
      id: 1,
      title: "Smart India Hackathon 2026",
      type: "Hackathon",
      mode: "Offline",
      deadline: "Jan 15, 2026",
      teamSize: "4-6 members",
      icon: Code,
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      tags: ["Government", "Innovation"],
      description: "Solve real-world problems posed by ministries and organizations.",
    },
    {
      id: 2,
      title: "Google Cloud Study Jam",
      type: "Workshop",
      mode: "Online",
      deadline: "Jan 20, 2026",
      teamSize: "Individual",
      icon: Brain,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/10",
      tags: ["Cloud", "Google"],
      description: "Learn cloud computing fundamentals with hands-on labs.",
    },
    {
      id: 3,
      title: "UI/UX Design Sprint",
      type: "Competition",
      mode: "Online",
      deadline: "Jan 25, 2026",
      teamSize: "1-2 members",
      icon: Palette,
      iconColor: "text-accent",
      iconBg: "bg-accent/10",
      tags: ["Design", "Figma"],
      description: "Design innovative solutions for everyday problems.",
    },
    {
      id: 4,
      title: "Startup Weekend Bangalore",
      type: "Hackathon",
      mode: "Offline",
      deadline: "Feb 1, 2026",
      teamSize: "3-5 members",
      icon: Rocket,
      iconColor: "text-destructive",
      iconBg: "bg-destructive/10",
      tags: ["Startup", "Entrepreneurship"],
      description: "Build a startup in 54 hours with mentorship from industry experts.",
    },
  ];

  const teamPosts = [
    {
      id: 1,
      author: "Rahul Sharma",
      department: "CSE",
      year: "3rd Year",
      lookingFor: "Smart India Hackathon",
      skills: ["Frontend", "React", "Node.js"],
      neededSkills: ["ML/AI", "Backend"],
      membersHave: 2,
      membersNeeded: 4,
    },
    {
      id: 2,
      author: "Priya Mehta",
      department: "IT",
      year: "2nd Year",
      lookingFor: "UI/UX Design Sprint",
      skills: ["Figma", "UI Design"],
      neededSkills: ["UX Research"],
      membersHave: 1,
      membersNeeded: 1,
    },
    {
      id: 3,
      author: "Amit Kumar",
      department: "ECE",
      year: "3rd Year",
      lookingFor: "Startup Weekend",
      skills: ["IoT", "Hardware", "Python"],
      neededSkills: ["Business", "Marketing", "Mobile Dev"],
      membersHave: 2,
      membersNeeded: 3,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DashboardNavbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Opportunities
            </h1>
            <p className="text-muted-foreground mt-1">
              Discover competitions, hackathons, and find teammates
            </p>
          </div>
          <Button variant="hero" className="w-full md:w-auto">
            <Plus className="h-5 w-5" />
            Post Team Request
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-6 animate-slide-up">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search opportunities or teams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="opportunities" className="animate-slide-up">
          <TabsList className="w-full md:w-auto mb-6">
            <TabsTrigger value="opportunities" className="flex-1 md:flex-none gap-2">
              <Trophy className="h-4 w-4" />
              Opportunities
            </TabsTrigger>
            <TabsTrigger value="teams" className="flex-1 md:flex-none gap-2">
              <Users className="h-4 w-4" />
              Find Teams
            </TabsTrigger>
          </TabsList>

          {/* Opportunities Tab */}
          <TabsContent value="opportunities" className="space-y-4">
            {opportunities.map((opp, index) => (
              <div 
                key={opp.id}
                className="group bg-card rounded-xl border p-5 shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-xl ${opp.iconBg} flex-shrink-0`}>
                    <opp.icon className={`h-6 w-6 ${opp.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {opp.title}
                      </h3>
                      <Button variant="ghost" size="icon" className="flex-shrink-0 -mr-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {opp.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        {opp.type}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${opp.mode === "Online" ? "border-secondary/30 text-secondary" : "border-primary/30 text-primary"}`}
                      >
                        <MapPin className="h-3 w-3 mr-1" />
                        {opp.mode}
                      </Badge>
                      {opp.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>Deadline: {opp.deadline}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4" />
                        <span>{opp.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-4 pt-4 border-t">
                  <Button variant="soft" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="default" className="flex-1">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Teams Tab */}
          <TabsContent value="teams" className="space-y-4">
            <div className="bg-secondary/5 rounded-xl p-4 mb-6 border border-secondary/20 animate-fade-in">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Looking for teammates?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Connect with students who have complementary skills for your next competition.
                  </p>
                </div>
              </div>
            </div>

            {teamPosts.map((post, index) => (
              <div 
                key={post.id}
                className="group bg-card rounded-xl border p-5 shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <Avatar className="h-12 w-12 flex-shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {post.author.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-semibold text-foreground">{post.author}</h3>
                        <p className="text-sm text-muted-foreground">
                          {post.department} • {post.year}
                        </p>
                      </div>
                      <Badge variant="outline" className="flex-shrink-0">
                        {post.membersHave}/{post.membersHave + post.membersNeeded} members
                      </Badge>
                    </div>
                    
                    <p className="text-sm font-medium text-primary mt-3 mb-3">
                      Looking for team: {post.lookingFor}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-muted-foreground">Has:</span>
                        {post.skills.map((skill) => (
                          <Badge key={skill} className="text-xs bg-secondary/10 text-secondary border-0">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-muted-foreground">Needs:</span>
                        {post.neededSkills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs border-dashed">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-4 pt-4 border-t">
                  <Button variant="outline" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="default" className="flex-1">
                    Request to Join
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Opportunities;
