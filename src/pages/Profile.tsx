import { Navigation } from "@/components/Navigation";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileContent } from "@/components/ProfileContent";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          <ProfileHeader />
          <ProfileContent />
        </div>
      </div>
    </div>
  );
};

export default Profile;