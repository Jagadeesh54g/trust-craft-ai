import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Star, 
  CheckCircle, 
  Clock, 
  Award,
  Users,
  Briefcase,
  BookOpen,
  Trophy
} from "lucide-react";

interface SkillVerification {
  id: string;
  skill: {
    name: string;
    category: string;
  };
  level: number;
  verified: boolean;
  verifications: Array<{
    id: string;
    verifiedBy: {
      name: string;
      avatar: string;
      trustScore: number;
    };
    type: 'peer' | 'project' | 'assessment';
    score: number;
    notes?: string;
    project?: {
      title: string;
    };
    createdAt: string;
  }>;
  totalVerifications: number;
  averageScore: number;
}

export const SkillVerification = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Mock data - will be replaced with Supabase data
  const userSkills: SkillVerification[] = [
    {
      id: "1",
      skill: {
        name: "React",
        category: "Frontend"
      },
      level: 4,
      verified: true,
      verifications: [
        {
          id: "v1",
          verifiedBy: {
            name: "Sarah Chen",
            avatar: "/api/placeholder/32/32",
            trustScore: 875
          },
          type: "project",
          score: 4,
          notes: "Excellent component architecture and state management",
          project: {
            title: "AI Task Manager"
          },
          createdAt: "2024-01-15T10:30:00Z"
        },
        {
          id: "v2", 
          verifiedBy: {
            name: "Marcus Johnson",
            avatar: "/api/placeholder/32/32",
            trustScore: 650
          },
          type: "peer",
          score: 5,
          notes: "Outstanding React skills demonstrated in code review",
          createdAt: "2024-01-10T14:20:00Z"
        }
      ],
      totalVerifications: 2,
      averageScore: 4.5
    },
    {
      id: "2",
      skill: {
        name: "TypeScript", 
        category: "Programming"
      },
      level: 3,
      verified: false,
      verifications: [
        {
          id: "v3",
          verifiedBy: {
            name: "System",
            avatar: "/api/placeholder/32/32",
            trustScore: 1000
          },
          type: "assessment",
          score: 3,
          notes: "Completed TypeScript fundamentals assessment",
          createdAt: "2024-01-12T09:15:00Z"
        }
      ],
      totalVerifications: 1,
      averageScore: 3.0
    }
  ];

  const getVerificationTypeIcon = (type: string) => {
    switch (type) {
      case 'peer': return Users;
      case 'project': return Briefcase;  
      case 'assessment': return BookOpen;
      default: return Shield;
    }
  };

  const getVerificationTypeColor = (type: string) => {
    switch (type) {
      case 'peer': return 'text-blue-600 bg-blue-100';
      case 'project': return 'text-green-600 bg-green-100';
      case 'assessment': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 4.5) return 'text-green-600';
    if (score >= 3.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            Skill Verification
          </h2>
          <p className="text-muted-foreground">Track and showcase your verified skills</p>
        </div>
        <Button variant="primary">
          <Award className="w-4 h-4 mr-2" />
          Take Assessment
        </Button>
      </div>

      {/* Skills Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userSkills.map((skill) => (
          <Card 
            key={skill.id} 
            className={`glass-card p-6 cursor-pointer transition-all duration-200 ${
              selectedSkill === skill.id ? 'ring-2 ring-primary' : 'hover:scale-[1.02]'
            }`}
            onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{skill.skill.name}</h3>
                    {skill.verified && (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs mt-1">
                    {skill.skill.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Level {skill.level}</div>
                  <div className="flex items-center gap-1">
                    <Star className={`w-3 h-3 ${getScoreColor(skill.averageScore)}`} />
                    <span className={`text-xs ${getScoreColor(skill.averageScore)}`}>
                      {skill.averageScore.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Skill Level</span>
                  <span>{skill.level}/5</span>
                </div>
                <Progress value={skill.level * 20} className="h-2" />
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{skill.totalVerifications} verifications</span>
                <Badge className={skill.verified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                  {skill.verified ? 'Verified' : 'Pending'}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Detailed Verification View */}
      {selectedSkill && (
        <Card className="glass-card p-6">
          {(() => {
            const skill = userSkills.find(s => s.id === selectedSkill);
            if (!skill) return null;
            
            return (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {skill.skill.name} Verifications
                      {skill.verified && <CheckCircle className="w-5 h-5 text-green-600" />}
                    </h3>
                    <p className="text-muted-foreground">
                      {skill.totalVerifications} verifications • Average score: {skill.averageScore.toFixed(1)}/5
                    </p>
                  </div>
                  <Button variant="outline">
                    Request Verification
                  </Button>
                </div>

                <div className="space-y-4">
                  {skill.verifications.map((verification) => {
                    const Icon = getVerificationTypeIcon(verification.type);
                    
                    return (
                      <Card key={verification.id} className="p-4 bg-muted/20">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={verification.verifiedBy.avatar} />
                            <AvatarFallback>
                              {verification.verifiedBy.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{verification.verifiedBy.name}</span>
                                <Badge className={`text-xs ${getVerificationTypeColor(verification.type)}`}>
                                  <Icon className="w-3 h-3 mr-1" />
                                  {verification.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`w-3 h-3 ${
                                        star <= verification.score 
                                          ? 'text-yellow-500 fill-current' 
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm font-medium">
                                  {verification.score}/5
                                </span>
                              </div>
                            </div>
                            
                            {verification.notes && (
                              <p className="text-sm text-muted-foreground">
                                {verification.notes}
                              </p>
                            )}
                            
                            {verification.project && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Briefcase className="w-3 h-3" />
                                <span>Project: {verification.project.title}</span>
                              </div>
                            )}
                            
                            <div className="text-xs text-muted-foreground">
                              {new Date(verification.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {skill.verifications.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No verifications yet</p>
                    <p className="text-sm">Complete projects or take assessments to get verified</p>
                  </div>
                )}
              </div>
            );
          })()}
        </Card>
      )}

      {/* Quick Actions */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          Boost Your Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="justify-start h-auto p-4">
            <div className="text-left">
              <div className="font-medium">Take Assessment</div> 
              <div className="text-sm text-muted-foreground">Complete skill tests</div>
            </div>
          </Button>
          <Button variant="outline" className="justify-start h-auto p-4">
            <div className="text-left">
              <div className="font-medium">Join Projects</div>
              <div className="text-sm text-muted-foreground">Get verified through work</div>
            </div>
          </Button>
          <Button variant="outline" className="justify-start h-auto p-4">
            <div className="text-left">
              <div className="font-medium">Peer Review</div>
              <div className="text-sm text-muted-foreground">Request skill verification</div>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
};