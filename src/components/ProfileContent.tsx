import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  FileText,
  Plus,
  Verified,
  ExternalLink,
  Calendar
} from "lucide-react";

export const ProfileContent = () => {
  return (
    <Tabs defaultValue="about" className="space-y-6">
      <TabsList className="glass-card">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="certificates">Certificates</TabsTrigger>
      </TabsList>

      <TabsContent value="about" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">About</h2>
            <Button variant="glass" size="sm">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer with a strong background in modern web technologies and a 
            growing expertise in artificial intelligence. Over the past 5 years, I've had the privilege of 
            working with diverse teams to build scalable applications that serve millions of users.
            <br /><br />
            My journey in tech started during my computer science studies, where I discovered my love for 
            problem-solving and creating digital solutions. I'm particularly drawn to the intersection of 
            frontend user experience and backend architecture, always striving to build applications that 
            are both beautiful and performant.
            <br /><br />
            When I'm not coding, you'll find me contributing to open-source projects, mentoring junior 
            developers, or exploring the latest advancements in AI and machine learning.
          </p>
        </Card>
      </TabsContent>

      <TabsContent value="experience" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Experience</h2>
            <Button variant="glass" size="sm">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 pb-6 border-b border-glass-border last:border-b-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">Senior Full Stack Developer</h3>
                    <p className="text-primary">TechCorp Inc.</p>
                  </div>
                  <Badge variant="outline">Current</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2022 - Present • 2 years 8 months</span>
                </div>
                <p className="text-muted-foreground">
                  Led development of a microservices architecture serving 2M+ users. Implemented AI-powered 
                  recommendation system that increased user engagement by 40%. Mentored 3 junior developers.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">Node.js</Badge>
                  <Badge variant="outline" className="text-xs">AWS</Badge>
                  <Badge variant="outline" className="text-xs">TypeScript</Badge>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pb-6 border-b border-glass-border last:border-b-0">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">Full Stack Developer</h3>
                    <p className="text-accent">StartupXYZ</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>Jun 2020 - Dec 2021 • 1 year 7 months</span>
                </div>
                <p className="text-muted-foreground">
                  Developed and deployed web applications from concept to production. Built responsive 
                  interfaces and RESTful APIs. Reduced page load times by 60% through optimization.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="skills" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Skills</h2>
            <Button variant="glass" size="sm">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">React Development</span>
                  <Verified className="w-4 h-4 text-success" />
                  <Badge className="bg-success/20 text-success border-success/30 text-xs">Expert</Badge>
                </div>
                <span className="text-sm text-success font-medium">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>

            <div className="p-4 rounded-lg bg-muted/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">TypeScript</span>
                  <Verified className="w-4 h-4 text-success" />
                  <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">Advanced</Badge>
                </div>
                <span className="text-sm text-success font-medium">88%</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>

            <div className="p-4 rounded-lg bg-muted/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Node.js</span>
                  <Badge className="bg-muted/50 text-muted-foreground border-muted text-xs">Intermediate</Badge>
                </div>
                <Button variant="primary" size="sm">Verify</Button>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="projects" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Projects</h2>
            <Button variant="glass" size="sm">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card p-4">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
                alt="Project"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">AI-Powered Analytics Dashboard</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Real-time analytics platform with machine learning insights and predictive modeling.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">Python</Badge>
                </div>
                <Button variant="glass" size="sm">
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </Card>

            <Card className="glass-card p-4">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
                alt="Project"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold mb-2">E-commerce Platform</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Full-stack e-commerce solution with payment integration and inventory management.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <Badge variant="outline" className="text-xs">Next.js</Badge>
                  <Badge variant="outline" className="text-xs">Stripe</Badge>
                </div>
                <Button variant="glass" size="sm">
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="certificates" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Certificates</h2>
            <Button variant="glass" size="sm">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">AWS Solutions Architect</h3>
                <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                <p className="text-xs text-muted-foreground">Issued Dec 2023 • Valid until Dec 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <Verified className="w-4 h-4 text-success" />
                <Button variant="glass" size="sm">
                  <FileText className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Machine Learning Specialization</h3>
                <p className="text-sm text-muted-foreground">Stanford University</p>
                <p className="text-xs text-muted-foreground">Issued Nov 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <Verified className="w-4 h-4 text-success" />
                <Button variant="glass" size="sm">
                  <FileText className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};