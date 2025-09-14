import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Code, 
  Database, 
  Palette, 
  Shield, 
  Clock, 
  Trophy,
  Play,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export const SkillsVerification = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="secondary" className="glass-card px-4 py-2 mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Assessment
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Skills Verification Center</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prove your expertise through AI-generated assessments tailored to your skill level
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Assessment Categories */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6">Available Assessments</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AssessmentCard 
                  icon={<Code className="w-6 h-6" />}
                  title="Frontend Development"
                  skills={["React", "TypeScript", "CSS"]}
                  duration="45 min"
                  difficulty="Advanced"
                  status="available"
                />
                <AssessmentCard 
                  icon={<Database className="w-6 h-6" />}
                  title="Backend Development"
                  skills={["Node.js", "PostgreSQL", "APIs"]}
                  duration="60 min"
                  difficulty="Expert"
                  status="available"
                />
                <AssessmentCard 
                  icon={<Palette className="w-6 h-6" />}
                  title="UI/UX Design"
                  skills={["Figma", "Design Systems", "Prototyping"]}
                  duration="30 min"
                  difficulty="Intermediate"
                  status="completed"
                />
                <AssessmentCard 
                  icon={<Brain className="w-6 h-6" />}
                  title="Machine Learning"
                  skills={["Python", "TensorFlow", "Data Analysis"]}
                  duration="90 min"
                  difficulty="Expert"
                  status="locked"
                />
              </div>
            </Card>

            {/* Recent Test Results */}
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6">Recent Test Results</h3>
              
              <div className="space-y-4">
                <TestResult 
                  skill="React Development"
                  score={94}
                  date="2 days ago"
                  status="passed"
                  badge="Expert"
                />
                <TestResult 
                  skill="TypeScript"
                  score={87}
                  date="1 week ago"
                  status="passed"
                  badge="Advanced"
                />
                <TestResult 
                  skill="System Design"
                  score={72}
                  date="2 weeks ago"
                  status="review"
                  badge="Intermediate"
                />
                <TestResult 
                  skill="GraphQL"
                  score={65}
                  date="3 weeks ago"
                  status="failed"
                  badge=""
                />
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Assessment Stats */}
            <Card className="glass-card p-6">
              <h3 className="font-semibold mb-4">Your Assessment Stats</h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">94%</div>
                  <div className="text-sm text-muted-foreground">Average Score</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold">12</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">8</div>
                    <div className="text-xs text-muted-foreground">Verified</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Expert</span>
                    <span>76%</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Upcoming Tests */}
            <Card className="glass-card p-6">
              <h3 className="font-semibold mb-4">Upcoming Tests</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <Clock className="w-4 h-4 text-primary" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Node.js Assessment</div>
                    <div className="text-xs text-muted-foreground">Scheduled for tomorrow</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                  <Clock className="w-4 h-4 text-primary" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">AWS Certification</div>
                    <div className="text-xs text-muted-foreground">In 3 days</div>
                  </div>
                </div>
              </div>
              
              <Button variant="glass" className="w-full mt-4">
                Schedule New Test
              </Button>
            </Card>

            {/* Achievement Badges */}
            <Card className="glass-card p-6">
              <h3 className="font-semibold mb-4">Recent Achievements</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-lg bg-success/10">
                  <Trophy className="w-6 h-6 text-success mx-auto mb-2" />
                  <div className="text-xs">React Expert</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/10">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xs">Verified Pro</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const AssessmentCard = ({ 
  icon, 
  title, 
  skills, 
  duration, 
  difficulty, 
  status 
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  duration: string;
  difficulty: string;
  status: 'available' | 'completed' | 'locked';
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'available': return 'text-primary';
      case 'completed': return 'text-success';
      case 'locked': return 'text-muted-foreground';
      default: return 'text-primary';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'available': return <Play className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'locked': return <AlertCircle className="w-4 h-4" />;
      default: return <Play className="w-4 h-4" />;
    }
  };

  return (
    <Card className="glass-card p-4 group hover:scale-105 transition-transform duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="text-primary group-hover:text-primary-glow transition-colors">
          {icon}
        </div>
        <Badge variant={status === 'completed' ? 'default' : 'secondary'} className="text-xs">
          {difficulty}
        </Badge>
      </div>
      
      <h4 className="font-semibold mb-2">{title}</h4>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{duration}</span>
        <Button 
          variant={status === 'available' ? 'primary' : 'glass'} 
          size="sm"
          disabled={status === 'locked'}
          className={getStatusColor()}
        >
          {getStatusIcon()}
          <span className="ml-2 text-xs">
            {status === 'available' ? 'Start' : status === 'completed' ? 'Review' : 'Locked'}
          </span>
        </Button>
      </div>
    </Card>
  );
};

const TestResult = ({ 
  skill, 
  score, 
  date, 
  status, 
  badge 
}: {
  skill: string;
  score: number;
  date: string;
  status: 'passed' | 'failed' | 'review';
  badge: string;
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'passed': return 'text-success';
      case 'failed': return 'text-destructive';
      case 'review': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/20">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium">{skill}</span>
          {badge && <Badge variant="secondary" className="text-xs">{badge}</Badge>}
        </div>
        <div className="text-xs text-muted-foreground">{date}</div>
      </div>
      
      <div className="text-right">
        <div className={`text-lg font-bold ${getStatusColor()}`}>{score}%</div>
        <div className="text-xs capitalize">{status}</div>
      </div>
    </div>
  );
};