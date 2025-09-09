import { Navigation } from "@/components/Navigation";
import { RecruiterDashboard } from "@/components/RecruiterDashboard";

const Recruiter = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <RecruiterDashboard />
      </div>
    </div>
  );
};

export default Recruiter;