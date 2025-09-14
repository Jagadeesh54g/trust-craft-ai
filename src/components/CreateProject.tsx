import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus, 
  X, 
  Rocket, 
  Users, 
  Code, 
  Link,
  Save,
  Eye
} from "lucide-react";

interface ProjectSkill {
  name: string;
  requiredLevel: number;
  isPrimary: boolean;
}

export const CreateProject = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    status: "planning",
    maxCollaborators: 5,
    isPublic: true,
    repositoryUrl: "",
    demoUrl: ""
  });

  const [skills, setSkills] = useState<ProjectSkill[]>([]);
  const [newSkill, setNewSkill] = useState({
    name: "",
    requiredLevel: 3,
    isPrimary: false
  });

  const availableSkills = [
    "React", "TypeScript", "Node.js", "Python", "UI/UX Design", 
    "PostgreSQL", "GraphQL", "Docker", "AWS", "Machine Learning",
    "Vue.js", "Angular", "Java", "C#", "Ruby", "Go", "Rust",
    "MongoDB", "Redis", "Kubernetes", "DevOps", "Mobile Development"
  ];

  const addSkill = () => {
    if (newSkill.name && !skills.find(s => s.name === newSkill.name)) {
      setSkills([...skills, { ...newSkill }]);
      setNewSkill({ name: "", requiredLevel: 3, isPrimary: false });
    }
  };

  const removeSkill = (skillName: string) => {
    setSkills(skills.filter(s => s.name !== skillName));
  };

  const togglePrimarySkill = (skillName: string) => {
    setSkills(skills.map(s => 
      s.name === skillName ? { ...s, isPrimary: !s.isPrimary } : s
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase project creation
    console.log('Creating project:', { ...projectData, skills });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'planning': return 'bg-blue-500';
      case 'completed': return 'bg-purple-500';
      case 'paused': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Rocket className="w-6 h-6 text-primary" />
            Create New Project
          </h2>
          <p className="text-muted-foreground">Start a collaborative project and find skilled partners</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Project Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="title">Project Title *</Label>
              <Input
                id="title"
                value={projectData.title}
                onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                placeholder="Enter project title..."
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={projectData.description}
                onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                placeholder="Describe your project, goals, and what you're building..."
                className="min-h-[120px]"
                required
              />
            </div>

            <div>
              <Label htmlFor="status">Project Status</Label>
              <Select 
                value={projectData.status} 
                onValueChange={(value) => setProjectData({...projectData, status: value})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="maxCollaborators">Max Collaborators</Label>
              <Select 
                value={projectData.maxCollaborators.toString()} 
                onValueChange={(value) => setProjectData({...projectData, maxCollaborators: parseInt(value)})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="repositoryUrl">Repository URL (Optional)</Label>
              <Input
                id="repositoryUrl"
                value={projectData.repositoryUrl}
                onChange={(e) => setProjectData({...projectData, repositoryUrl: e.target.value})}
                placeholder="https://github.com/username/repo"
              />
            </div>

            <div>
              <Label htmlFor="demoUrl">Demo/Design URL (Optional)</Label>
              <Input
                id="demoUrl"
                value={projectData.demoUrl}
                onChange={(e) => setProjectData({...projectData, demoUrl: e.target.value})}
                placeholder="https://figma.com/design-link or demo URL"
              />
            </div>
          </div>
        </Card>

        {/* Skills Required */}
        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5" />
            Skills Required
          </h3>
          
          {/* Add New Skill */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
            <div className="md:col-span-2">
              <Select 
                value={newSkill.name} 
                onValueChange={(value) => setNewSkill({...newSkill, name: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select skill..." />
                </SelectTrigger>
                <SelectContent>
                  {availableSkills
                    .filter(skill => !skills.find(s => s.name === skill))
                    .map(skill => (
                      <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            
            <Select 
              value={newSkill.requiredLevel.toString()} 
              onValueChange={(value) => setNewSkill({...newSkill, requiredLevel: parseInt(value)})}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Beginner (L1)</SelectItem>
                <SelectItem value="2">Basic (L2)</SelectItem>
                <SelectItem value="3">Intermediate (L3)</SelectItem>
                <SelectItem value="4">Advanced (L4)</SelectItem>
                <SelectItem value="5">Expert (L5)</SelectItem>
              </SelectContent>
            </Select>

            <Button type="button" onClick={addSkill} disabled={!newSkill.name}>
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>

          {/* Skills List */}
          {skills.length > 0 && (
            <div className="space-y-3">
              <Label>Required Skills ({skills.length})</Label>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-muted/30 rounded-lg px-3 py-2"
                  >
                    <Badge
                      variant={skill.isPrimary ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => togglePrimarySkill(skill.name)}
                    >
                      {skill.name} L{skill.requiredLevel}
                      {skill.isPrimary && " (Primary)"}
                    </Badge>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSkill(skill.name)}
                      className="p-1 h-auto"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Click on skill badges to mark them as primary skills for this project
              </p>
            </div>
          )}
        </Card>

        {/* Project Preview */}
        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Project Preview
          </h3>
          
          <div className="bg-muted/20 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-lg">{projectData.title || "Untitled Project"}</h4>
              <div className={`w-2 h-2 rounded-full ${getStatusColor(projectData.status)}`} />
            </div>
            
            <p className="text-muted-foreground">
              {projectData.description || "No description provided"}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>0/{projectData.maxCollaborators} collaborators</span>
              </div>
              {projectData.repositoryUrl && (
                <div className="flex items-center gap-1">
                  <Code className="w-4 h-4" />
                  <span>Repository</span>
                </div>
              )}
              {projectData.demoUrl && (
                <div className="flex items-center gap-1">
                  <Link className="w-4 h-4" />
                  <span>Demo</span>
                </div>
              )}
            </div>
            
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {skills.map(skill => (
                  <Badge
                    key={skill.name}
                    variant={skill.isPrimary ? "default" : "outline"}
                    className="text-xs"
                  >
                    {skill.name} L{skill.requiredLevel}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </Card>

        {/* Submit Actions */}
        <div className="flex gap-3">
          <Button type="submit" className="flex-1" disabled={!projectData.title || !projectData.description}>
            <Save className="w-4 h-4 mr-2" />
            Create Project
          </Button>
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
};