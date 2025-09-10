import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Edit, 
  MapPin, 
  Calendar,
  Verified,
  Trophy,
  Users,
  Eye,
  Share2
} from "lucide-react";

export const ProfileHeader = () => {
  return (
    <Card className="glass-card overflow-hidden">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-primary relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <Button 
          variant="glass" 
          size="sm" 
          className="absolute top-4 right-4"
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit Cover
        </Button>
      </div>

      {/* Profile Content */}
      <div className="p-6 relative">
        {/* Profile Picture */}
        <div className="absolute -top-16 left-6">
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-background">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl">U</AvatarFallback>
            </Avatar>
            <Button 
              variant="glass" 
              size="sm" 
              className="absolute bottom-2 right-2 w-8 h-8 p-0 rounded-full"
            >
              <Edit className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 mb-4">
          <Button variant="glass">
            <Share2 className="w-4 h-4 mr-2" />
            Share Profile
          </Button>
          <Button variant="primary">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        {/* Profile Info */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">Your Name</h1>
            <Button variant="glass" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit Name
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <p className="text-xl text-muted-foreground">Add your professional headline</p>
            <Button variant="glass" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Add Headline
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Add location</span>
              <Button variant="glass" size="sm">
                <Edit className="w-3 h-3" />
              </Button>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Joined {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>0 followers</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>0 profile views</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Add a professional summary to tell people about yourself and what you do.
            </p>
            <Button variant="glass" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Add Bio
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-muted/20">
              <div className="text-2xl font-bold text-primary">0%</div>
              <div className="text-sm text-muted-foreground">Trust Score</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20">
              <div className="text-2xl font-bold text-success">0</div>
              <div className="text-sm text-muted-foreground">Verified Skills</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20">
              <div className="text-2xl font-bold text-warning">0</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20">
              <div className="text-2xl font-bold text-accent">0</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};