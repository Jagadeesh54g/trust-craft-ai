import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { 
  Image, 
  FileText, 
  Calendar, 
  Award,
  Send
} from "lucide-react";
import { useState } from "react";

export const CreatePost = () => {
  const [content, setContent] = useState("");

  return (
    <Card className="glass-card p-6">
      <div className="flex gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-4">
          <Textarea
            placeholder="Share your professional insights, achievements, or career updates..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[120px] resize-none border-glass-border bg-muted/20 focus:bg-muted/30 transition-colors"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="glass" size="sm">
                <Image className="w-4 h-4 mr-2" />
                Photo
              </Button>
              <Button variant="glass" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Document
              </Button>
              <Button variant="glass" size="sm">
                <Award className="w-4 h-4 mr-2" />
                Achievement
              </Button>
              <Button variant="glass" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Event
              </Button>
            </div>
            
            <Button 
              variant="primary" 
              disabled={!content.trim()}
              className="disabled:opacity-50"
            >
              <Send className="w-4 h-4 mr-2" />
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};