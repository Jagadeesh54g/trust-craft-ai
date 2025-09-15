import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal,
  Verified,
  TrendingUp,
  Award
} from "lucide-react";

export const SocialFeed = () => {
  const posts: any[] = [];

  return (
    <div className="space-y-6">
      {posts.length === 0 ? (
        <Card className="glass-card p-12 text-center">
          <div className="text-muted-foreground">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No Posts Yet</h3>
            <p>Be the first to share something with your network</p>
          </div>
        </Card>
      ) : (
        posts.map((post) => (
          <Card key={post.id} className="glass-card p-6 hover:scale-[1.01] transition-transform duration-300">
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{post.author}</h4>
                    {post.verified && <Verified className="w-4 h-4 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{post.role}</p>
                  <p className="text-xs text-muted-foreground">{post.time} ago</p>
                </div>
              </div>
              <Button variant="glass" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Achievement Badge */}
            {post.achievement && (
              <div className="mb-4">
                <Badge className="bg-success/20 text-success border-success/30">
                  <Award className="w-3 h-3 mr-1" />
                  {post.achievement}
                </Badge>
              </div>
            )}

            {/* Hiring Badge */}
            {post.hiring && (
              <div className="mb-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  We're Hiring!
                </Badge>
              </div>
            )}

            {/* Post Content */}
            <p className="mb-4 leading-relaxed">{post.content}</p>

            {/* Post Image */}
            {post.image && (
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Post content" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            {/* Engagement Stats */}
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 pt-4 border-t border-glass-border">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments • {post.shares} shares</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-glass-border">
              <Button variant="glass" className="flex-1 mx-1">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="glass" className="flex-1 mx-1">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </Button>
              <Button variant="glass" className="flex-1 mx-1">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};