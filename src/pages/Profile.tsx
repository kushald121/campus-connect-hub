import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import Footer from "@/components/layout/Footer";
import { 
  Mail, Calendar, MapPin, ShoppingBag, MessageCircle, Trophy,
  Star, Clock, CheckCircle2, Edit, Settings
} from "lucide-react";

const Profile = () => {
  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@college.edu",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    role: "Junior",
    joinedDate: "August 2024",
    reputation: 156,
    stats: {
      itemsPosted: 8,
      itemsSold: 5,
      doubtsAsked: 12,
      doubtsAnswered: 24,
      teamsJoined: 3,
    },
  };

  const postedItems = [
    {
      id: 1,
      name: "Scientific Calculator",
      status: "approved",
      price: 350,
      date: "2 days ago",
    },
    {
      id: 2,
      name: "Data Structures Book",
      status: "approved",
      price: 150,
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Lab Coat (M)",
      status: "pending",
      price: 0,
      date: "1 day ago",
    },
  ];

  const recentActivity = [
    {
      type: "doubt",
      title: "Answered: How to prepare for TCS NQT?",
      time: "2 hours ago",
    },
    {
      type: "item",
      title: "Posted: Lab Coat for free",
      time: "1 day ago",
    },
    {
      type: "team",
      title: "Joined: Smart India Hackathon team",
      time: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DashboardNavbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-card rounded-2xl border shadow-card p-6 md:p-8 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <Avatar className="h-24 w-24 md:h-28 md:w-28">
              <AvatarFallback className="bg-primary/10 text-primary text-3xl font-semibold">
                RS
              </AvatarFallback>
            </Avatar>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {user.name}
                </h1>
                <Badge className="w-fit bg-primary/10 text-primary border-0">
                  {user.role}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{user.department}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user.joinedDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                  <span className="font-semibold text-foreground">{user.reputation}</span>
                  <span className="text-sm text-muted-foreground">reputation</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="soft">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { icon: ShoppingBag, label: "Items Posted", value: user.stats.itemsPosted },
            { icon: CheckCircle2, label: "Items Sold", value: user.stats.itemsSold },
            { icon: MessageCircle, label: "Doubts Asked", value: user.stats.doubtsAsked },
            { icon: MessageCircle, label: "Doubts Answered", value: user.stats.doubtsAnswered },
            { icon: Trophy, label: "Teams Joined", value: user.stats.teamsJoined },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border p-4 text-center shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="inline-flex p-2 rounded-lg bg-primary/10 mb-2">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="items" className="animate-slide-up">
          <TabsList className="w-full md:w-auto mb-6">
            <TabsTrigger value="items" className="flex-1 md:flex-none gap-2">
              <ShoppingBag className="h-4 w-4" />
              My Items
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex-1 md:flex-none gap-2">
              <Clock className="h-4 w-4" />
              Activity
            </TabsTrigger>
          </TabsList>

          {/* Items Tab */}
          <TabsContent value="items">
            <div className="bg-card rounded-xl border shadow-card divide-y">
              {postedItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground truncate">
                        {item.name}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          item.status === "approved" 
                            ? "text-status-approved border-status-approved/30 bg-status-approved/10" 
                            : "text-status-pending border-status-pending/30 bg-status-pending/10"
                        }`}
                      >
                        {item.status === "approved" ? "Live" : "Pending"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.price === 0 ? "Free" : `₹${item.price}`} • Posted {item.date}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <div className="bg-card rounded-xl border shadow-card divide-y">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index}
                  className="p-4 flex items-center gap-4"
                >
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                    activity.type === "doubt" 
                      ? "bg-secondary/10" 
                      : activity.type === "item"
                      ? "bg-primary/10"
                      : "bg-accent/10"
                  }`}>
                    {activity.type === "doubt" && <MessageCircle className="h-5 w-5 text-secondary" />}
                    {activity.type === "item" && <ShoppingBag className="h-5 w-5 text-primary" />}
                    {activity.type === "team" && <Trophy className="h-5 w-5 text-accent" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.time}
                    </p>
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

export default Profile;
