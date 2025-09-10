import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  X, 
  Briefcase,
  MapPin,
  Users,
  Verified
} from "lucide-react";

export const NetworkSuggestions = () => {
  const suggestions = [
    {
      id: 1,
      name: "Jennifer Liu",
      role: "Senior Frontend Developer",
      company: "Meta",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      verified: true,
      mutualConnections: 12,
      skills: ["React", "TypeScript", "GraphQL"],
      reason: "Works at Meta • Similar interests"
    },
    {
      id: 2,
      name: "David Park",
      role: "Full Stack Engineer",
      company: "Stripe",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      verified: true,
      mutualConnections: 8,
      skills: ["Node.js", "Python", "AWS"],
      reason: "Similar skills • University of Texas alumnus"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "DevOps Engineer",
      company: "Netflix",
      location: "Los Angeles, CA",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      verified: false,
      mutualConnections: 5,
      skills: ["Docker", "Kubernetes", "Terraform"],
      reason: "Works at Netflix • Lives in Los Angeles, CA"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Product Manager",
      company: "Airbnb",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      verified: true,
      mutualConnections: 15,
      skills: ["Product Strategy", "Analytics", "Leadership"],
      reason: "Product Manager • Similar background"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">People You May Know</h2>
        <Button variant="glass">View All</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {suggestions.map((person) => (
          <Card key={person.id} className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback>
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{person.name}</h3>
                    {person.verified && <Verified className="w-4 h-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Briefcase className="w-3 h-3" />
                    <span>{person.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{person.location}</span>
                  </div>
                </div>
              </div>
              <Button variant="glass" size="sm">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                <Users className="w-4 h-4" />
                <span>{person.mutualConnections} mutual followers</span>
              </div>
              <p className="text-sm text-muted-foreground">{person.reason}</p>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {person.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2">
              <Button variant="primary" className="flex-1">
                <UserPlus className="w-4 h-4 mr-2" />
                Follow
              </Button>
              <Button variant="glass" className="flex-1">
                Message
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};