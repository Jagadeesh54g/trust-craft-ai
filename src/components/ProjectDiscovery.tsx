import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Rocket, 
  Users, 
  Star, 
  Calendar,
  MapPin,
  Github,
  ExternalLink,
  UserPlus,
  Shield
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'active' | 'completed' | 'paused';
  creator: {
    id: string;
    name: string;
    avatar: string;
    trustScore: number;
    verified: boolean;
  };
  skills: Array<{
    name: string;
    level: number;
    isPrimary: boolean;
  }>;
  collaborators: number;
  maxCollaborators: number;
  repositoryUrl?: string;
  demoUrl?: string;
  createdAt: string;
}

export const ProjectDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Mock data - will be replaced with Supabase data
  const projects: Project[] = [
    {
      id: "1",
      title: "AI-Powered Task Manager",
      description: "Building an intelligent task management system with natural language processing and automated scheduling.",
      status: "active",
      creator: {
        id: "user1",
        name: "Sarah Chen",
        avatar: "/api/placeholder/40/40",
        trustScore: 875,
        verified: true
      },
      skills: [
        { name: "React", level: 4, isPrimary: true },
        { name: "Python", level: 5, isPrimary: true },
        { name: "Machine Learning", level: 4, isPrimary: false },
        { name: "UI/UX Design", level: 3, isPrimary: false }
      ],
      collaborators: 2,
      maxCollaborators: 4,
      repositoryUrl: "https://github.com/sarahchen/ai-task-manager",
      createdAt: "2024-01-15"
    },
    {
      id: "2", 
      title: "Sustainable Fashion Marketplace",
      description: "Creating a platform connecting sustainable fashion brands with conscious consumers.",
      status: "planning",
      creator: {
        id: "user2",
        name: "Marcus Johnson",
        avatar: "/api/placeholder/40/40",
        trustScore: 650,
        verified: false
      },
      skills: [
        { name: "React", level: 3, isPrimary: true },
        { name: "Node.js", level: 4, isPrimary: true },
        { name: "PostgreSQL", level: 3, isPrimary: false },
        { name: "UI/UX Design", level: 4, isPrimary: true }
      ],
      collaborators: 1,
      maxCollaborators: 5,
      demoUrl: "https://figma.com/sustainable-fashion-wireframes",
      createdAt: "2024-01-20"
    }
  ];

  const availableSkills = [
    "React", "TypeScript", "Node.js", "Python", "UI/UX Design", 
    "PostgreSQL", "GraphQL", "Docker", "AWS", "Machine Learning"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'planning': return 'bg-blue-500';
      case 'completed': return 'bg-purple-500';
      case 'paused': return 'bg-yellow-500';
      default: return 'bg-gray-500';
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
            <Rocket className="w-6 h-6 text-primary" />
            Discover Projects
          </h2>
          <p className="text-muted-foreground">Find projects that match your skills and interests</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="glass-card p-6">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Filter by Skills</h3>
            <div className="flex flex-wrap gap-2">
              {availableSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    setSelectedSkills(prev => 
                      prev.includes(skill) 
                        ? prev.filter(s => s !== skill)
                        : [...prev, skill]
                    );
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Creator Info */}
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={project.creator.avatar} />
                  <AvatarFallback>
                    {project.creator.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{project.creator.name}</span>
                  {project.creator.verified && (
                    <Shield className="w-4 h-4 text-primary" />
                  )}
                  <Badge className={`text-xs ${getTrustBadgeColor(project.creator.trustScore)}`}>
                    <Star className="w-3 h-3 mr-1" />
                    {project.creator.trustScore}
                  </Badge>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-medium mb-2">Skills Needed</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={skill.isPrimary ? "default" : "outline"}
                      className="text-xs"
                    >
                      {skill.name} L{skill.level}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.collaborators}/{project.maxCollaborators}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {project.repositoryUrl && (
                    <Button variant="ghost" size="sm" className="p-1">
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button variant="ghost" size="sm" className="p-1">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button className="flex-1">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Request to Join
                </Button>
                <Button variant="glass">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {projects.length === 0 && (
        <Card className="glass-card p-12 text-center">
          <Rocket className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
          <h3 className="text-xl font-medium mb-2">No Projects Found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search criteria or create your own project
          </p>
          <Button variant="primary">
            Create New Project
          </Button>
        </Card>
      )}
    </div>
  );
};