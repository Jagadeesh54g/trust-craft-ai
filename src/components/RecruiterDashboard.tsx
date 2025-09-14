import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  FileText, 
  Star,
  Search,
  Filter,
  Plus,
  MessageCircle,
  Eye,
  Download,
  Verified,
  MapPin,
  Briefcase
} from "lucide-react";

export const RecruiterDashboard = () => {
  const stats = [
    { label: "Active Job Posts", value: "8", change: "+2 this week", icon: <FileText className="w-5 h-5" /> },
    { label: "Applications", value: "124", change: "+15 today", icon: <Users className="w-5 h-5" /> },
    { label: "Interviews Scheduled", value: "12", change: "This week", icon: <Star className="w-5 h-5" /> },
    { label: "Success Rate", value: "94%", change: "+5% this month", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const candidates = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior React Developer",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face",
      verified: true,
      trustScore: 94,
      skills: ["React", "TypeScript", "Node.js"],
      experience: "5+ years",
      salary: "$120k - $160k",
      status: "Available"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Full Stack Engineer",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
      verified: true,
      trustScore: 89,
      skills: ["Vue.js", "Python", "AWS"],
      experience: "4+ years",
      salary: "$100k - $140k",
      status: "Open to offers"
    },
    {
      id: 3,
      name: "Emily Zhang",
      role: "Frontend Developer",
      location: "Remote",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
      verified: false,
      trustScore: 76,
      skills: ["Angular", "JavaScript", "CSS"],
      experience: "3+ years",
      salary: "$80k - $120k",
      status: "Actively looking"
    }
  ];

  const applications = [
    {
      id: 1,
      candidate: "David Park",
      position: "Senior Full Stack Developer",
      applied: "2 hours ago",
      status: "Under Review",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      match: 92
    },
    {
      id: 2,
      candidate: "Lisa Wang",
      position: "Frontend Engineer", 
      applied: "1 day ago",
      status: "Interview Scheduled",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      match: 88
    },
    {
      id: 3,
      candidate: "James Wilson",
      position: "DevOps Engineer",
      applied: "2 days ago",
      status: "Offer Sent",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      match: 95
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Recruiter Dashboard</h1>
          <p className="text-muted-foreground">Manage your hiring pipeline and discover top talent</p>
        </div>
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-muted-foreground">{stat.icon}</div>
              <Badge variant="outline" className="text-xs">{stat.change}</Badge>
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="candidates" className="space-y-6">
        <TabsList className="glass-card">
          <TabsTrigger value="candidates">Candidate Search</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="jobs">My Job Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="candidates" className="space-y-6">
          {/* Search and Filters */}
          <Card className="glass-card p-6">
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by skills, location, or experience..."
                  className="pl-10 bg-muted/20 border-glass-border"
                />
              </div>
              <Button variant="glass">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </Card>

          {/* Candidate Results */}
          <div className="grid grid-cols-1 gap-6">
            {candidates.map((candidate) => (
              <Card key={candidate.id} className="glass-card p-6 hover:scale-[1.01] transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={candidate.avatar} />
                    <AvatarFallback>
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-semibold">{candidate.name}</h3>
                          {candidate.verified && <Verified className="w-5 h-5 text-primary" />}
                          <Badge className="bg-success/20 text-success border-success/30">
                            {candidate.trustScore}% Trust Score
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{candidate.role}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {candidate.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {candidate.experience}
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          candidate.status === "Available" ? "border-success text-success" :
                          candidate.status === "Actively looking" ? "border-primary text-primary" :
                          "border-warning text-warning"
                        }
                      >
                        {candidate.status}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {candidate.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold">{candidate.salary}</div>
                      <div className="flex gap-2">
                        <Button variant="glass" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Profile
                        </Button>
                        <Button variant="glass" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Resume
                        </Button>
                        <Button variant="primary" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/20">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={app.avatar} />
                    <AvatarFallback>
                      {app.candidate.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">{app.candidate}</h4>
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {app.match}% Match
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{app.position}</p>
                    <p className="text-xs text-muted-foreground">Applied {app.applied}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline"
                      className={
                        app.status === "Under Review" ? "border-warning text-warning" :
                        app.status === "Interview Scheduled" ? "border-primary text-primary" :
                        "border-success text-success"
                      }
                    >
                      {app.status}
                    </Badge>
                    <Button variant="glass" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-6">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Active Job Posts</h3>
              <Button variant="primary" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Create Job
              </Button>
            </div>
            
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Job posts management coming soon...</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};