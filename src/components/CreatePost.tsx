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
import { useProfile } from "@/contexts/ProfileContext";

export const CreatePost = () => {
  const [content, setContent] = useState("");
  const { profile } = useProfile();

  return (
  <Card className="glass-card p-8 w-full shadow-none border-none">
  <div className="flex gap-4 w-full">
        <Avatar className="w-14 h-14">
          {profile.avatar ? (
            <AvatarImage src={profile.avatar} />
          ) : null}
          <AvatarFallback>
            {(profile.firstName || profile.lastName)
              ? `${profile.firstName?.[0] ?? ''}${profile.lastName?.[0] ?? ''}`.trim() || 'U'
              : 'U'}
          </AvatarFallback>
        </Avatar>

  <div className="flex-1 space-y-4 w-full">
          <Textarea
            placeholder="Share your professional insights, achievements, or career updates..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[120px] h-24 resize-none border-glass-border bg-muted/20 focus:bg-muted/30 transition-colors text-lg px-4 py-3 w-full"
            style={{ width: '100%' }}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
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
              className="disabled:opacity-50 px-6 py-2 text-base"
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