import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MoreHorizontal,
  Circle
} from "lucide-react";

interface MessagesListProps {
  onSelectChat: (chatId: string) => void;
  selectedChat: string | null;
}

export const MessagesList = ({ onSelectChat, selectedChat }: MessagesListProps) => {
  const conversations = [
    {
      id: "1",
      name: "Sarah Chen",
      role: "Senior Developer at TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Thanks for the connection! Would love to discuss the React position.",
      timestamp: "10:30 AM",
      unread: 2,
      online: true
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      role: "Product Manager at StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      lastMessage: "The team would love to have you join us for a quick chat.",
      timestamp: "Yesterday",
      unread: 0,
      online: false
    },
    {
      id: "3",
      name: "Emily Zhang",
      role: "Recruiter at TechFlow",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      lastMessage: "I saw your profile and think you'd be perfect for our opening.",
      timestamp: "Tuesday",
      unread: 1,
      online: true
    }
  ];

  return (
    <Card className="glass-card h-full">
      <div className="p-4 border-b border-glass-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Messages</h2>
          <Button variant="glass" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search conversations..."
            className="pl-10 bg-muted/20 border-glass-border"
          />
        </div>
      </div>

      <div className="overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`p-4 border-b border-glass-border cursor-pointer hover:bg-muted/20 transition-colors ${
              selectedChat === conversation.id ? 'bg-muted/30' : ''
            }`}
            onClick={() => onSelectChat(conversation.id)}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={conversation.avatar} />
                  <AvatarFallback>
                    {conversation.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {conversation.online && (
                  <Circle className="absolute -bottom-1 -right-1 w-4 h-4 fill-success text-success" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium truncate">{conversation.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                    {conversation.unread > 0 && (
                      <Badge className="w-5 h-5 p-0 text-xs bg-primary flex items-center justify-center">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{conversation.role}</p>
                <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};