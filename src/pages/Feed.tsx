import { Navigation } from "@/components/Navigation";
import { SocialFeed } from "@/components/SocialFeed";
import { FeedSidebar } from "@/components/FeedSidebar";
import { CreatePost } from "@/components/CreatePost";

const Feed = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <FeedSidebar />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <CreatePost />
            <SocialFeed />
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending & Suggestions will go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;