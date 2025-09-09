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
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face" />
              <AvatarFallback className="text-2xl">AJ</AvatarFallback>
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
            <h1 className="text-3xl font-bold">Alex Johnson</h1>
            <Verified className="w-6 h-6 text-primary" />
            <Badge className="bg-success/20 text-success border-success/30">
              <Trophy className="w-3 h-3 mr-1" />
              Top 5% Performer
            </Badge>
          </div>

          <p className="text-xl text-muted-foreground mb-4">
            Full Stack Developer | AI Enthusiast | Open Source Contributor
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Joined March 2023</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>342 connections</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>1,247 profile views</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Passionate full-stack developer with 5+ years of experience building scalable web applications. 
            Specialized in React, Node.js, and cloud technologies. Recently completed AI/ML certification 
            and actively contributing to open-source projects. Always excited to tackle challenging problems 
            and mentor upcoming developers.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-muted/20">
              <div className="text-2xl font-bold text-primary">94%</div>
              <div className="text-sm text-muted-foreground">Trust Score</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20">
              <div className="text-2xl font-bold text-success">12</div>
              <div className="text-sm text-muted-foreground">Verified Skills</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20">
              <div className="text-2xl font-bold text-warning">8</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/20">
              <div className="text-2xl font-bold text-accent">15</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};