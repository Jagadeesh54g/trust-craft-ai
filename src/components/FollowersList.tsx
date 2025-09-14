import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MessageCircle, 
  MoreHorizontal,
  Users
} from "lucide-react";

export const FollowersList = () => {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Users className="w-5 h-5" />
            Your Followers
          </h2>
          <p className="text-sm text-muted-foreground">0 total</p>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search followers..."
          className="pl-10"
        />
      </div>

      <div className="text-center py-12 text-muted-foreground">
        <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>No followers yet</p>
        <p className="text-sm">Start building your network to gain followers</p>
      </div>

      <Button variant="glass" className="w-full mt-4">
        Find People to Follow
      </Button>
    </Card>
  );
};