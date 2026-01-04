import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import Footer from "@/components/layout/Footer";
import { 
  Search, Plus, MessageCircle, ThumbsUp, Clock, 
  Shield, ArrowUp, ChevronRight, Sparkles, User
} from "lucide-react";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const discussions = [
    {
      id: 1,
      title: "How to prepare for TCS NQT exam?",
      author: "Rahul S.",
      authorYear: "2nd Year",
      department: "CSE",
      isSenior: false,
      tags: ["Placements", "TCS"],
      replies: 12,
      upvotes: 24,
      time: "2 hours ago",
      preview: "Can anyone share their experience and tips for TCS NQT? I'm appearing next month...",
    },
    {
      id: 2,
      title: "Best resources for learning Data Structures",
      author: "Priya K.",
      authorYear: "4th Year",
      department: "CSE",
      isSenior: true,
      tags: ["DSA", "Resources"],
      replies: 28,
      upvotes: 56,
      time: "5 hours ago",
      preview: "Here's a comprehensive list of resources I used to master DSA during my preparation...",
    },
    {
      id: 3,
      title: "Physics lab viva questions for EM waves",
      author: "Amit R.",
      authorYear: "1st Year",
      department: "ECE",
      isSenior: false,
      tags: ["Physics", "Lab"],
      replies: 8,
      upvotes: 15,
      time: "Yesterday",
      preview: "Has anyone given the EM waves lab viva recently? What questions were asked?",
    },
    {
      id: 4,
      title: "Tips for final year project selection",
      author: "Sneha M.",
      authorYear: "4th Year",
      department: "IT",
      isSenior: true,
      tags: ["Projects", "Guidance"],
      replies: 34,
      upvotes: 78,
      time: "2 days ago",
      preview: "As someone who recently completed my FYP, here are my suggestions for juniors...",
    },
  ];

  const mentors = [
    {
      id: 1,
      name: "Priya Krishnan",
      department: "CSE",
      year: "4th Year",
      expertise: ["DSA", "Web Dev", "Placements"],
      doubtsAnswered: 156,
    },
    {
      id: 2,
      name: "Vikram Singh",
      department: "ECE",
      year: "4th Year",
      expertise: ["Embedded", "IoT", "Arduino"],
      doubtsAnswered: 89,
    },
    {
      id: 3,
      name: "Sneha Mehta",
      department: "IT",
      year: "3rd Year",
      expertise: ["UI/UX", "Frontend", "React"],
      doubtsAnswered: 67,
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
              Community
            </h1>
            <p className="text-muted-foreground mt-1">
              Ask doubts, share knowledge, connect with seniors
            </p>
          </div>
          <Button variant="hero" className="w-full md:w-auto">
            <Plus className="h-5 w-5" />
            Ask a Question
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-6 animate-slide-up">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="discussions" className="animate-slide-up">
          <TabsList className="w-full md:w-auto mb-6">
            <TabsTrigger value="discussions" className="flex-1 md:flex-none gap-2">
              <MessageCircle className="h-4 w-4" />
              Discussions
            </TabsTrigger>
            <TabsTrigger value="mentors" className="flex-1 md:flex-none gap-2">
              <Shield className="h-4 w-4" />
              Mentors
            </TabsTrigger>
          </TabsList>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-4">
            {discussions.map((discussion, index) => (
              <div 
                key={discussion.id}
                className="group bg-card rounded-xl border p-5 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {discussion.author.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {discussion.title}
                      </h3>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {discussion.preview}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {discussion.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-foreground">{discussion.author}</span>
                        {discussion.isSenior && (
                          <Badge className="bg-secondary/10 text-secondary text-[10px] px-1.5 py-0">
                            Senior
                          </Badge>
                        )}
                      </div>
                      <span>•</span>
                      <span>{discussion.department}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="hidden sm:inline">{discussion.authorYear}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-4 pt-4 border-t text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <ArrowUp className="h-4 w-4" />
                    <span>{discussion.upvotes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4" />
                    <span>{discussion.replies} replies</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <Clock className="h-4 w-4" />
                    <span>{discussion.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Mentors Tab */}
          <TabsContent value="mentors" className="space-y-4">
            <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/20 animate-fade-in">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Connect with Mentors</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    These experienced seniors are here to help you with guidance and doubt resolution.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mentors.map((mentor, index) => (
                <div 
                  key={mentor.id}
                  className="group bg-card rounded-xl border p-5 shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {mentor.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{mentor.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {mentor.department} • {mentor.year}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm">
                      <span className="font-semibold text-foreground">{mentor.doubtsAnswered}</span>
                      <span className="text-muted-foreground"> doubts answered</span>
                    </div>
                    <Button variant="soft" size="sm">
                      Connect
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
