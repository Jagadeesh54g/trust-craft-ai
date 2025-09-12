import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { 
  UserPlus, 
  Check, 
  X, 
  Clock, 
  MessageSquare,
  Star,
  Shield,
  ArrowRight
} from "lucide-react";

interface CollaborationRequest {
  id: string;
  project: {
    id: string;
    title: string;
    description: string;
  };
  from: {
    id: string;
    name: string;
    avatar: string;
    trustScore: number;
    verified: boolean;
  };
  to: {
    id: string;
    name: string;
    avatar: string;
    trustScore: number;
    verified: boolean;
  };
  message: string;
  status: 'pending' | 'accepted' | 'declined' | 'withdrawn';
  createdAt: string;
  type: 'sent' | 'received';
}

export const CollaborationRequests = () => {
  const [activeTab, setActiveTab] = useState<'received' | 'sent'>('received');
  const [replyMessage, setReplyMessage] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);

  // Mock data - will be replaced with Supabase data
  const requests: CollaborationRequest[] = [
    {
      id: "1",
      project: {
        id: "proj1",
        title: "AI-Powered Task Manager",
        description: "Building an intelligent task management system..."
      },
      from: {
        id: "user1",
        name: "Sarah Chen", 
        avatar: "/api/placeholder/40/40",
        trustScore: 875,
        verified: true
      },
      to: {
        id: "currentUser",
        name: "You",
        avatar: "/api/placeholder/40/40",
        trustScore: 0,
        verified: false
      },
      message: "Hi! I saw your React and TypeScript skills and think you'd be a great fit for our AI task manager project. We're looking for someone to help with the frontend architecture and component design. Would you be interested in collaborating?",
      status: "pending",
      createdAt: "2024-01-22T10:30:00Z",
      type: "received"
    },
    {
      id: "2",
      project: {
        id: "proj2", 
        title: "Sustainable Fashion Marketplace",
        description: "Creating a platform connecting sustainable fashion brands..."
      },
      from: {
        id: "currentUser",
        name: "You",
        avatar: "/api/placeholder/40/40",
        trustScore: 0,
        verified: false
      },
      to: {
        id: "user2",
        name: "Marcus Johnson",
        avatar: "/api/placeholder/40/40",
        trustScore: 650,
        verified: false
      },
      message: "I'd love to help with the UI/UX design for your sustainable fashion marketplace. I have experience in e-commerce design and am passionate about sustainability.",
      status: "pending",
      createdAt: "2024-01-21T14:15:00Z",
      type: "sent"
    }
  ];

  const receivedRequests = requests.filter(r => r.type === 'received');
  const sentRequests = requests.filter(r => r.type === 'sent');

  const handleAcceptRequest = (requestId: string) => {
    // TODO: Implement Supabase update
    console.log('Accepting request:', requestId);
  };

  const handleDeclineRequest = (requestId: string) => {
    // TODO: Implement Supabase update  
    console.log('Declining request:', requestId);
  };

  const handleWithdrawRequest = (requestId: string) => {
    // TODO: Implement Supabase update
    console.log('Withdrawing request:', requestId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'text-green-600 bg-green-100';
      case 'declined': return 'text-red-600 bg-red-100';
      case 'withdrawn': return 'text-gray-600 bg-gray-100';
      default: return 'text-yellow-600 bg-yellow-100';
    }
  };

  const getTrustBadgeColor = (score: number) => {
    if (score >= 800) return 'text-green-600 bg-green-100';
    if (score >= 500) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-primary" />
            Collaboration Requests
          </h2>
          <p className="text-muted-foreground">Manage project collaboration invitations</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        <Button
          variant={activeTab === 'received' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('received')}
          className="rounded-md"
        >
          Received ({receivedRequests.length})
        </Button>
        <Button
          variant={activeTab === 'sent' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('sent')}
          className="rounded-md"
        >
          Sent ({sentRequests.length})
        </Button>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {(activeTab === 'received' ? receivedRequests : sentRequests).map((request) => (
          <Card key={request.id} className="glass-card p-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{request.project.title}</h3>
                    <Badge className={`text-xs ${getStatusColor(request.status)}`}>
                      <Clock className="w-3 h-3 mr-1" />
                      {request.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {request.project.description}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(request.createdAt).toLocaleDateString()}
                </div>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={activeTab === 'received' ? request.from.avatar : request.to.avatar} />
                  <AvatarFallback>
                    {(activeTab === 'received' ? request.from.name : request.to.name)
                      .split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">
                      {activeTab === 'received' 
                        ? `Request from ${request.from.name}` 
                        : `Request to ${request.to.name}`}
                    </span>
                    {activeTab === 'received' && request.from.verified && (
                      <Shield className="w-4 h-4 text-primary" />
                    )}
                    {activeTab === 'received' && (
                      <Badge className={`text-xs ${getTrustBadgeColor(request.from.trustScore)}`}>
                        <Star className="w-3 h-3 mr-1" />
                        {request.from.trustScore}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    {activeTab === 'received' ? (
                      <>
                        <span>{request.from.name}</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>You</span>
                      </>
                    ) : (
                      <>
                        <span>You</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>{request.to.name}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="text-sm">{request.message}</p>
                </div>
              </div>

              {/* Actions */}
              {request.status === 'pending' && (
                <div className="flex gap-2 pt-2">
                  {activeTab === 'received' ? (
                    <>
                      <Button 
                        onClick={() => handleAcceptRequest(request.id)}
                        className="flex-1"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Accept
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleDeclineRequest(request.id)}
                        className="flex-1"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Decline
                      </Button>
                      <Button 
                        variant="ghost"
                        onClick={() => setSelectedRequest(
                          selectedRequest === request.id ? null : request.id
                        )}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Reply
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="outline"
                      onClick={() => handleWithdrawRequest(request.id)}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Withdraw Request
                    </Button>
                  )}
                </div>
              )}

              {/* Reply Section */}
              {selectedRequest === request.id && (
                <div className="space-y-3 pt-4 border-t">
                  <Textarea
                    placeholder="Write a reply..."
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    className="min-h-[80px]"
                  />
                  <div className="flex gap-2">
                    <Button size="sm">Send Reply</Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedRequest(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {(activeTab === 'received' ? receivedRequests : sentRequests).length === 0 && (
        <Card className="glass-card p-12 text-center">
          <UserPlus className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <h3 className="text-xl font-medium mb-2">
            No {activeTab === 'received' ? 'Received' : 'Sent'} Requests
          </h3>
          <p className="text-muted-foreground">
            {activeTab === 'received' 
              ? 'When others invite you to collaborate, you\'ll see them here'
              : 'Start collaborating by requesting to join projects that match your skills'}
          </p>
        </Card>
      )}
    </div>
  );
};