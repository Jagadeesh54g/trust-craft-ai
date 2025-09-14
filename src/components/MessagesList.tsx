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
  const conversations: any[] = [];

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

      <div className="overflow-y-auto flex-1 flex items-center justify-center">
        {conversations.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted/20 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium mb-2">No conversations yet</h3>
            <p className="text-sm text-muted-foreground">
              Start networking to begin conversations with professionals.
            </p>
          </div>
        ) : (
          conversations.map((conversation) => (
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
                      {conversation.name.split(' ').map((n: string) => n[0]).join('')}
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
          ))
        )}
      </div>
    </Card>
  );
};