import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MessageCircle,
  MoreHorizontal,
  Verified,
  Circle
} from "lucide-react";

export const ConnectionsList = () => {
  const connections: any[] = [];

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Your Connections</h3>
        <span className="text-sm text-muted-foreground">{connections.length} total</span>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Search connections..."
          className="pl-10 bg-muted/20 border-glass-border"
        />
      </div>

      <div className="space-y-3">
        {connections.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Users className="w-8 h-8 mx-auto mb-2 opacity-60" />
            <div>No connections yet</div>
            <div className="text-sm">Find and follow people to build your network.</div>
          </div>
        ) : (
          connections.map((connection) => (
            <div key={connection.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors">
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={connection.avatar} />
                  <AvatarFallback>
                    {connection.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {connection.online && (
                  <Circle className="absolute -bottom-1 -right-1 w-3 h-3 fill-success text-success" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium truncate">{connection.name}</h4>
                  {connection.verified && <Verified className="w-3 h-3 text-primary" />}
                </div>
                <p className="text-sm text-muted-foreground truncate">{connection.role}</p>
                <p className="text-xs text-muted-foreground">Connected {connection.connected}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="glass" size="sm">
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button variant="glass" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      <Button variant="glass" className="w-full mt-4">
        View All Connections
      </Button>
    </Card>
  );
};