import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shield, Zap, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Hero Badge */}
        <div className="animate-fade-in mb-8">
          <Badge variant="secondary" className="glass-card px-6 py-3 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Professional Verification
          </Badge>
        </div>

        {/* Hero Title */}
        <div className="animate-slide-up mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Trust-First
            <br />
            Professional Network
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Credify uses advanced AI to verify skills, authenticate achievements, and build 
            tamper-proof professional profiles that recruiters can trust.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ animationDelay: '0.3s' }}>
          <Button variant="primary" size="lg" className="px-8 py-4 text-lg font-semibold">
            Start Verification
            <Shield className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="glass" size="lg" className="px-8 py-4 text-lg">
            View Demo
            <Zap className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <FeatureCard 
            icon={<Shield className="w-8 h-8" />}
            title="AI Skill Verification"
            description="Multi-level assessments powered by advanced AI algorithms ensure authentic skill validation."
          />
          <FeatureCard 
            icon={<Sparkles className="w-8 h-8" />}
            title="Smart Resume Builder"
            description="AI-generated, ATS-optimized resumes that adapt to specific roles and industries."
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8" />}
            title="Recruiter Trust Score"
            description="Transparent credibility metrics that help recruiters identify top talent instantly."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="glass-card p-6 text-left group">
      <div className="text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};