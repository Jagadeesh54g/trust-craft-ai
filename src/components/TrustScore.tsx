import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Star, 
  Award, 
  CheckCircle, 
  Users,
  Briefcase,
  TrendingUp,
  Target
} from "lucide-react";

interface TrustMetric {
  category: string;
  current: number;
  max: number;
  weight: number;
  icon: any;
  description: string;
  color: string;
}

export const TrustScore = () => {
  const currentTrustScore = 725;
  const maxTrustScore = 1000;
  
  const trustMetrics: TrustMetric[] = [
    {
      category: "Verified Skills",
      current: 6,
      max: 10,
      weight: 10,
      icon: Award,
      description: "Skills verified by peers or assessments",
      color: "text-blue-600"
    },
    {
      category: "Completed Projects",
      current: 3,
      max: 10,
      weight: 25,
      icon: Briefcase,
      description: "Successfully completed projects as owner",
      color: "text-green-600"
    },
    {
      category: "Successful Collaborations",
      current: 5,
      max: 15,
      weight: 15,
      icon: Users,
      description: "Projects completed as collaborator",
      color: "text-purple-600"
    },
    {
      category: "Peer Endorsements",
      current: 8,
      max: 20,
      weight: 8,
      icon: CheckCircle,
      description: "Positive endorsements from collaborators",
      color: "text-yellow-600"
    }
  ];

  const getTrustLevel = (score: number) => {
    if (score >= 800) return { level: "Expert", color: "text-green-600", bgColor: "bg-green-100" };
    if (score >= 600) return { level: "Advanced", color: "text-blue-600", bgColor: "bg-blue-100" };
    if (score >= 400) return { level: "Intermediate", color: "text-yellow-600", bgColor: "bg-yellow-100" };
    if (score >= 200) return { level: "Beginner", color: "text-orange-600", bgColor: "bg-orange-100" };
    return { level: "New", color: "text-gray-600", bgColor: "bg-gray-100" };
  };

  const trustLevel = getTrustLevel(currentTrustScore);
  const progressPercentage = (currentTrustScore / maxTrustScore) * 100;

  const nextMilestone = currentTrustScore < 800 ? 800 : 1000;
  const pointsToNext = nextMilestone - currentTrustScore;

  return (
    <div className="space-y-6">
      {/* Trust Score Overview */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Trust Score
            </h2>
            <p className="text-muted-foreground">Your credibility in the network</p>
          </div>
          <Badge className={`text-lg px-4 py-2 ${trustLevel.color} ${trustLevel.bgColor}`}>
            {trustLevel.level}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Score Circle */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-muted stroke-2 opacity-20"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${progressPercentage}, 100`}
                  className="text-primary stroke-2"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">{currentTrustScore}</span>
                <span className="text-sm text-muted-foreground">/ {maxTrustScore}</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center mb-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">{trustLevel.level} Level</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {pointsToNext} points to next level
              </p>
            </div>
          </div>

          {/* Progress Breakdown */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Score Breakdown
            </h3>
            
            {trustMetrics.map((metric) => {
              const Icon = metric.icon;
              const contribution = metric.current * metric.weight;
              const maxContribution = metric.max * metric.weight;
              const percentage = (contribution / maxContribution) * 100;
              
              return (
                <div key={metric.category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${metric.color}`} />
                      <span className="text-sm font-medium">{metric.category}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">{contribution}</span>
                      <span className="text-muted-foreground">/{maxContribution}</span>
                    </div>
                  </div>
                  <Progress value={percentage} className="h-2" />
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Trust Building Actions */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Boost Your Trust Score
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-medium">Quick Wins</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Complete skill assessment</span>
                </div>
                <Badge variant="outline" className="text-xs">+30 pts</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Get peer endorsement</span>
                </div>
                <Badge variant="outline" className="text-xs">+15 pts</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Verify existing skill</span>
                </div>
                <Badge variant="outline" className="text-xs">+10 pts</Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Long-term Growth</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Complete a project</span>
                </div>
                <Badge variant="outline" className="text-xs">+75 pts</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Successful collaboration</span>
                </div>
                <Badge variant="outline" className="text-xs">+45 pts</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Master new skill</span>
                </div>
                <Badge variant="outline" className="text-xs">+50 pts</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 mt-6">
          <Button className="flex-1">
            <Award className="w-4 h-4 mr-2" />
            Take Assessment
          </Button>
          <Button variant="outline" className="flex-1">
            <Briefcase className="w-4 h-4 mr-2" />
            Create Project
          </Button>
        </div>
      </Card>

      {/* Trust History */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Trust Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium">React skill verified by Sarah Chen</p>
              <p className="text-xs text-muted-foreground">2 days ago</p>
            </div>
            <Badge className="bg-green-100 text-green-700">+10</Badge>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium">Completed AI Task Manager project</p>
              <p className="text-xs text-muted-foreground">1 week ago</p>
            </div>
            <Badge className="bg-blue-100 text-blue-700">+75</Badge>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium">Successful collaboration on Fashion Marketplace</p>
              <p className="text-xs text-muted-foreground">2 weeks ago</p>
            </div>
            <Badge className="bg-purple-100 text-purple-700">+45</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};