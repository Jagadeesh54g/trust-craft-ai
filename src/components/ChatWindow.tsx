import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical,
  Phone,
  Video,
  Circle
} from "lucide-react";
import { useState } from "react";

interface ChatWindowProps {
  chatId: string | null;
}

export const ChatWindow = ({ chatId }: ChatWindowProps) => {
  const [message, setMessage] = useState("");

  if (!chatId) {
    return (
      <Card className="glass-card h-full flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Select a conversation</h3>
          <p className="text-muted-foreground">Choose a conversation from the list to start messaging</p>
        </div>
      </Card>
    );
  }

  const messages = [
    {
      id: 1,
      sender: "Sarah Chen",
      content: "Hi Alex! I saw your profile and I'm really impressed with your React skills. We have an opening that might interest you.",
      timestamp: "10:00 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      content: "Thank you for reaching out! I'd love to hear more about the opportunity.",
      timestamp: "10:15 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Sarah Chen",
      content: "Great! It's for a Senior React Developer position at TechCorp. We're building a new AI-powered platform. Are you available for a quick call this week?",
      timestamp: "10:17 AM",
      isOwn: false
    },
    {
      id: 4,
      sender: "You",
      content: "That sounds really interesting! I'm available Thursday or Friday afternoon. What time works best for you?",
      timestamp: "10:30 AM",
      isOwn: true
    }
  ];

  return (
    <Card className="glass-card h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-glass-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Circle className="absolute -bottom-1 -right-1 w-3 h-3 fill-success text-success" />
            </div>
            <div>
              <h3 className="font-semibold">Sarah Chen</h3>
              <p className="text-sm text-success">Online</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="glass" size="sm">
              <Phone className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="sm">
              <Video className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] ${msg.isOwn ? 'order-2' : 'order-1'}`}>
              <div
                className={`p-3 rounded-lg ${
                  msg.isOwn
                    ? 'bg-primary text-primary-foreground ml-auto'
                    : 'bg-muted/30'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
              <p className={`text-xs text-muted-foreground mt-1 ${msg.isOwn ? 'text-right' : 'text-left'}`}>
                {msg.timestamp}
              </p>
            </div>
            {!msg.isOwn && (
              <Avatar className="w-8 h-8 order-1 mr-3 mt-auto">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-glass-border">
        <div className="flex items-center gap-2">
          <Button variant="glass" size="sm">
            <Paperclip className="w-4 h-4" />
          </Button>
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="pr-10 bg-muted/20 border-glass-border"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  // Handle send message
                  setMessage("");
                }
              }}
            />
            <Button 
              variant="glass" 
              size="sm" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Smile className="w-4 h-4" />
            </Button>
          </div>
          <Button 
            variant="primary" 
            size="sm"
            disabled={!message.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};