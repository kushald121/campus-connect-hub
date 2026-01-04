import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowLeft, User, Users } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("junior");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-scale-in">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* Card */}
        <div className="bg-card rounded-2xl shadow-lg border p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-md">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">
                Campus<span className="text-primary">Connect</span>
              </span>
            </Link>
            <h1 className="text-xl font-semibold text-foreground">Create your account</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Join your campus community today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">College Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-3">
              <Label>I am a...</Label>
              <RadioGroup value={role} onValueChange={setRole} className="grid grid-cols-2 gap-4">
                <Label
                  htmlFor="junior"
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    role === "junior" 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <RadioGroupItem value="junior" id="junior" className="sr-only" />
                  <div className={`p-2 rounded-lg ${role === "junior" ? "bg-primary/10" : "bg-muted"}`}>
                    <User className={`h-5 w-5 ${role === "junior" ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <span className={`text-sm font-medium ${role === "junior" ? "text-primary" : "text-foreground"}`}>
                    Junior
                  </span>
                  <span className="text-xs text-muted-foreground text-center">
                    1st - 2nd year
                  </span>
                </Label>
                <Label
                  htmlFor="senior"
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    role === "senior" 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <RadioGroupItem value="senior" id="senior" className="sr-only" />
                  <div className={`p-2 rounded-lg ${role === "senior" ? "bg-primary/10" : "bg-muted"}`}>
                    <Users className={`h-5 w-5 ${role === "senior" ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <span className={`text-sm font-medium ${role === "senior" ? "text-primary" : "text-foreground"}`}>
                    Senior
                  </span>
                  <span className="text-xs text-muted-foreground text-center">
                    3rd - 4th year
                  </span>
                </Label>
              </RadioGroup>
            </div>

            <Button type="submit" variant="hero" className="w-full" size="lg">
              Create account
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Already have an account?
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <Link to="/login">
            <Button variant="outline" className="w-full" size="lg">
              Sign in instead
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Signup;
