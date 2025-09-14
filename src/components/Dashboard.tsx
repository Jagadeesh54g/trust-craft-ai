import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Shield, 
  FileText, 
  Trophy, 
  TrendingUp, 
  Bell,
  Settings,
  Search,
  Plus,
  Verified
} from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gradient-hero py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Dashboard Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Alex</h1>
            <p className="text-muted-foreground">Your professional verification journey continues</p>
          </div>
          
          <div className="flex items-center gap-4 animate-slide-up">
            <Button variant="glass" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="glass" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={<Shield className="w-6 h-6" />}
            label="Verified Skills"
            value="12"
            change="+3 this week"
            positive={true}
          />
          <StatCard 
            icon={<Trophy className="w-6 h-6" />}
            label="Trust Score"
            value="94%"
            change="+8% this month"
            positive={true}
          />
          <StatCard 
            icon={<FileText className="w-6 h-6" />}
            label="Resume Views"
            value="156"
            change="+12 today"
            positive={true}
          />
          <StatCard 
            icon={<TrendingUp className="w-6 h-6" />}
            label="Profile Rank"
            value="Top 5%"
            change="Industry position"
            positive={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content (Feed) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Skills Verification */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Skills Verification</h2>
                <Button variant="primary" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </div>
              
              <div className="space-y-4">
                <SkillItem skill="React Development" level="Expert" verified={true} progress={95} />
                <SkillItem skill="TypeScript" level="Advanced" verified={true} progress={88} />
                <SkillItem skill="Node.js" level="Intermediate" verified={false} progress={65} />
                <SkillItem skill="Python" level="Beginner" verified={false} progress={40} />
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <ActivityItem 
                  action="Completed TypeScript verification test"
                  time="2 hours ago"
                  type="success"
                />
                <ActivityItem 
                  action="Resume viewed by TechCorp recruiter"
                  time="5 hours ago"
                  type="info"
                />
                <ActivityItem 
                  action="Added new project: E-commerce Platform"
                  time="1 day ago"
                  type="success"
                />
                <ActivityItem 
                  action="Trust score increased to 94%"
                  time="2 days ago"
                  type="success"
                />
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            {/* Profile Summary */}
            <Card className="glass-card p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold">Alex Johnson</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Profile Completion</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="glass" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Take Skill Test
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Update Resume
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Jobs
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, label, value, change, positive }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) => {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-muted-foreground">{icon}</div>
        <Badge variant={positive ? "default" : "secondary"} className="text-xs">
          {change}
        </Badge>
      </div>
      <div>
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </Card>
  );
};

const SkillItem = ({ skill, level, verified, progress }: {
  skill: string;
  level: string;
  verified: boolean;
  progress: number;
}) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-medium">{skill}</span>
          {verified && <Verified className="w-4 h-4 text-success" />}
          <Badge variant={verified ? "default" : "secondary"} className="text-xs">
            {level}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      {!verified && (
        <Button variant="primary" size="sm">
          Verify
        </Button>
      )}
    </div>
  );
};

const ActivityItem = ({ action, time, type }: {
  action: string;
  time: string;
  type: 'success' | 'info';
}) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
      <div className={`w-2 h-2 rounded-full mt-2 ${type === 'success' ? 'bg-success' : 'bg-accent'}`}></div>
      <div className="flex-1">
        <p className="text-sm">{action}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
};