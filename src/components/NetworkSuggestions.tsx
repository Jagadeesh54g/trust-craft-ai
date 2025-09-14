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
  const suggestions: any[] = [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">People You May Know</h2>
        <Button variant="glass">View All</Button>
      </div>

      {suggestions.length === 0 ? (
        <Card className="glass-card p-12 text-center">
          <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <h3 className="text-xl font-medium mb-2">No Suggestions Available</h3>
          <p className="text-muted-foreground">
            Start building your network by completing your profile and adding skills.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suggestions.map((person) => (
            <Card key={person.id} className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={person.avatar} />
                    <AvatarFallback>
                      {person.name.split(' ').map((n: string) => n[0]).join('')}
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
                {person.skills.map((skill: string) => (
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
      )}
    </div>
  );
};