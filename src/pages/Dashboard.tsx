import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import Footer from "@/components/layout/Footer";
import { 
  Plus, MessageCircle, Search, ShoppingBag, Users, Trophy,
  Clock, CheckCircle2, XCircle, ChevronRight, Sparkles
} from "lucide-react";

const Dashboard = () => {
  const quickActions = [
    {
      icon: Plus,
      label: "Post an Item",
      description: "Sell or rent your items",
      to: "/upload-item",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: MessageCircle,
      label: "Ask a Doubt",
      description: "Get help from seniors",
      to: "/community",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Search,
      label: "Explore Opportunities",
      description: "Find competitions & teams",
      to: "/opportunities",
      color: "bg-accent/10 text-accent",
    },
  ];

  const notifications = [
    {
      type: "approved",
      icon: CheckCircle2,
      title: "Scientific Calculator approved",
      description: "Your item is now live in the marketplace",
      time: "2 hours ago",
    },
    {
      type: "pending",
      icon: Clock,
      title: "Lab Coat pending review",
      description: "Admin will review within 24 hours",
      time: "5 hours ago",
    },
    {
      type: "reply",
      icon: MessageCircle,
      title: "New reply on your doubt",
      description: "Priya from 4th year CSE replied",
      time: "Yesterday",
    },
  ];

  const stats = [
    { icon: ShoppingBag, label: "Items Posted", value: "3" },
    { icon: Users, label: "Doubts Answered", value: "12" },
    { icon: Trophy, label: "Teams Joined", value: "2" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DashboardNavbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-sm text-muted-foreground">Welcome back</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Hello, Rahul! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            CSE • 3rd Year • Day Scholar
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border p-4 text-center shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-2 rounded-lg bg-primary/10 mb-2">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.to}>
                <div className="group bg-card rounded-xl border p-5 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${action.color} group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {action.label}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {action.description}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View all
            </Button>
          </div>
          
          <div className="bg-card rounded-xl border shadow-card divide-y">
            {notifications.map((notification, index) => (
              <div 
                key={index}
                className="p-4 flex items-start gap-4 hover:bg-muted/50 transition-colors animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-2 rounded-lg ${
                  notification.type === "approved" 
                    ? "bg-status-approved/10" 
                    : notification.type === "pending"
                    ? "bg-status-pending/10"
                    : "bg-primary/10"
                }`}>
                  <notification.icon className={`h-5 w-5 ${
                    notification.type === "approved" 
                      ? "text-status-approved" 
                      : notification.type === "pending"
                      ? "text-status-pending"
                      : "text-primary"
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground truncate">
                      {notification.title}
                    </h4>
                    {notification.type === "approved" && (
                      <Badge variant="outline" className="text-status-approved border-status-approved/30 bg-status-approved/10 text-xs">
                        Approved
                      </Badge>
                    )}
                    {notification.type === "pending" && (
                      <Badge variant="outline" className="text-status-pending border-status-pending/30 bg-status-pending/10 text-xs">
                        Pending
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {notification.description}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {notification.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
