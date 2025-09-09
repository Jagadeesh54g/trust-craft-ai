import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { SkillsVerification } from "@/components/SkillsVerification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Dashboard />
      <SkillsVerification />
    </div>
  );
};

export default Index;