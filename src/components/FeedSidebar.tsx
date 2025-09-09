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

export const FeedSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Profile Quick View */}
      <Card className="glass-card p-6">
        <div className="text-center mb-4">
          <Avatar className="w-16 h-16 mx-auto mb-3">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold">Alex Johnson</h3>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Profile views
            </span>
            <span className="font-medium">156</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trust Score
            </span>
            <span className="font-medium text-success">94%</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Connections
            </span>
            <span className="font-medium">342</span>
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
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>Completed React assessment</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>New connection request</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-warning rounded-full"></div>
            <span>Profile viewed by recruiter</span>
          </div>
        </div>
      </Card>

      {/* Upcoming Events */}
      <Card className="glass-card p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Upcoming
        </h3>
        <div className="space-y-3">
          <div className="text-sm">
            <div className="font-medium">Node.js Assessment</div>
            <div className="text-muted-foreground">Tomorrow at 2:00 PM</div>
          </div>
          <div className="text-sm">
            <div className="font-medium">Tech Meetup</div>
            <div className="text-muted-foreground">Friday, 6:00 PM</div>
          </div>
        </div>
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