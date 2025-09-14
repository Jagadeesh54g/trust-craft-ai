import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Eye, 
  TrendingUp, 
  Users,
  Calendar,
  Bookmark
} from "lucide-react";
import { useProfile } from "@/contexts/ProfileContext";

export const FeedSidebar = () => {
  const { profile } = useProfile();
  
  return (
    <div className="space-y-6">
      {/* Profile Quick View */}
      <Card className="glass-card p-6">
        <div className="text-center mb-4">
          <Avatar className="w-16 h-16 mx-auto mb-3">
            <AvatarImage src={profile.avatar} />
            <AvatarFallback>
              {profile.firstName ? profile.firstName[0] : 'U'}
              {profile.lastName ? profile.lastName[0] : ''}
            </AvatarFallback>
          </Avatar>
          <h3 className="font-semibold">
            {profile.firstName || profile.lastName 
              ? `${profile.firstName} ${profile.lastName}`.trim() 
              : 'Your Name'
            }
          </h3>
          <p className="text-sm text-muted-foreground">
            {profile.headline || 'Add your professional headline'}
          </p>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Profile views
            </span>
            <span className="font-medium">0</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trust Score
            </span>
            <span className="font-medium text-success">
              {profile.skills.filter(skill => skill.level === 'advanced' || skill.level === 'expert').length > 0 ? '85%' : '0%'}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Followers
            </span>
            <span className="font-medium">0</span>
          </div>
        </div>
        
        <Button variant="primary" className="w-full">
          <User className="w-4 h-4 mr-2" />
          View Profile
        </Button>
      </Card>

      {/* Recent Activity */}
      <Card className="glass-card p-6">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <div className="text-sm text-muted-foreground">No recent activity</div>
      </Card>

      {/* Upcoming Events */}
      <Card className="glass-card p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Upcoming
        </h3>
        <div className="text-sm text-muted-foreground">No upcoming items</div>
      </Card>

      {/* Saved Posts */}
      <Card className="glass-card p-6">
        <Button variant="glass" className="w-full justify-start">
          <Bookmark className="w-4 h-4 mr-2" />
          Saved Posts
        </Button>
      </Card>
    </div>
  );
};