import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Users, 
  Briefcase, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Github,
  Chrome,
  Linkedin
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import credifyLogo from "@/assets/credify-logo.png";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI-Powered Skill Verification",
      description: "Take comprehensive AI assessments to verify your technical skills. Get certified with blockchain-secured credentials that employers trust."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trust-First Professional Network", 
      description: "Connect only with verified professionals. Every profile goes through AI validation to ensure authenticity and credibility."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Intelligent Job Matching",
      description: "Advanced AI algorithms match your verified skills with perfect opportunities. Get personalized recommendations based on your credibility score."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Auto-Generated ATS Resumes",
      description: "Instantly generate ATS-friendly resumes from your verified data. AI optimizes content for each job application automatically."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Blockchain Credential Storage",
      description: "All your achievements are stored on blockchain for permanent verification. Certificates, skills, and experience that can't be faked."
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Real-Time Credibility Score",
      description: "Dynamic scoring based on verified skills, peer endorsements, and project contributions. Higher scores unlock premium opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex">
      {/* Left Side - Features */}
      <div className="hidden lg:flex flex-1 flex-col justify-center px-12 py-24">
        <div className="max-w-lg">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 mb-8">
            <img src={credifyLogo} alt="Credify" className="w-12 h-12" />
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Credify
            </h1>
          </div>
          
          <div className="mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Shield className="w-4 h-4 mr-2" />
              Trust-First Professional Network
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Where Skills Meet Verification
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Join the future of professional networking with AI-powered skill verification, 
              trusted connections, and instant resume generation.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-success" />
            <span>Trusted by 50,000+ professionals worldwide</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 lg:max-w-md flex items-center justify-center px-6 py-8">
        <Card className="w-full max-w-md glass-card">
          <CardHeader className="text-center">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-6">
              <img src={credifyLogo} alt="Credify" className="w-10 h-10" />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Credify
              </h1>
            </div>
            
            <CardTitle className="text-2xl">
              {isLogin ? "Welcome back" : "Join Credify"}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? "Sign in to your professional network" 
                : "Create your verified professional profile"
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full" size="lg">
                <Chrome className="w-5 h-5 mr-3" />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Linkedin className="w-5 h-5 mr-3" />
                Continue with LinkedIn
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Github className="w-5 h-5 mr-3" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground">
                OR
              </span>
            </div>

            {/* Email Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email"
                  className="h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                  className="h-11"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="Confirm your password"
                    className="h-11"
                  />
                </div>
              )}

              <Link to="/feed">
                <Button 
                  type="submit" 
                  className="w-full h-11 bg-primary hover:bg-primary/90"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </form>

            <div className="text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>

            {isLogin && (
              <div className="text-center">
                <button className="text-sm text-primary hover:underline">
                  Forgot your password?
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;