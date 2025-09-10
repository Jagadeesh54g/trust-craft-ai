import { Navigation } from "@/components/Navigation";
import { NetworkSuggestions } from "@/components/NetworkSuggestions";
import { FollowersList } from "@/components/FollowersList";

const Network = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Network Suggestions */}
          <div className="lg:col-span-2">
            <NetworkSuggestions />
          </div>
          
          {/* Current Followers */}
          <div className="lg:col-span-1">
            <FollowersList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;