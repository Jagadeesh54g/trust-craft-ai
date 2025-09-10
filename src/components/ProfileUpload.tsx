import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Upload, Save } from "lucide-react";

interface ProfileUploadProps {
  type: 'experience' | 'skill' | 'project' | 'certificate';
  children: React.ReactNode;
}

export const ProfileUpload = ({ type, children }: ProfileUploadProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} added successfully!`,
    });
    setIsOpen(false);
  };

  const renderForm = () => {
    switch (type) {
      case 'experience':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="e.g. Senior Developer" required />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="e.g. TechCorp" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="month" required />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input id="endDate" type="month" placeholder="Leave empty if current" />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe your role and achievements..." rows={4} />
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Experience
            </Button>
          </form>
        );

      case 'skill':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="skillName">Skill Name</Label>
              <Input id="skillName" placeholder="e.g. React, Python, Design" required />
            </div>
            <div>
              <Label htmlFor="skillLevel">Proficiency Level</Label>
              <select className="w-full p-2 border rounded-md bg-background">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div>
              <Label htmlFor="skillDescription">How did you acquire this skill?</Label>
              <Textarea id="skillDescription" placeholder="Work experience, courses, projects..." rows={3} />
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Add Skill
            </Button>
          </form>
        );

      case 'project':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" placeholder="e.g. E-commerce Website" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectUrl">Live URL (optional)</Label>
                <Input id="projectUrl" type="url" placeholder="https://example.com" />
              </div>
              <div>
                <Label htmlFor="githubUrl">GitHub URL (optional)</Label>
                <Input id="githubUrl" type="url" placeholder="https://github.com/user/repo" />
              </div>
            </div>
            <div>
              <Label htmlFor="technologies">Technologies Used</Label>
              <Input id="technologies" placeholder="React, Node.js, MongoDB" />
            </div>
            <div>
              <Label htmlFor="projectDescription">Project Description</Label>
              <Textarea id="projectDescription" placeholder="Describe what the project does and your role..." rows={4} required />
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Project
            </Button>
          </form>
        );

      case 'certificate':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="certName">Certificate Name</Label>
              <Input id="certName" placeholder="e.g. AWS Certified Developer" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="issuer">Issuing Organization</Label>
                <Input id="issuer" placeholder="e.g. Amazon Web Services" required />
              </div>
              <div>
                <Label htmlFor="issueDate">Issue Date</Label>
                <Input id="issueDate" type="month" required />
              </div>
            </div>
            <div>
              <Label htmlFor="credentialId">Credential ID (optional)</Label>
              <Input id="credentialId" placeholder="Certificate ID or URL" />
            </div>
            <div>
              <Label htmlFor="certFile">Upload Certificate</Label>
              <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-4 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" id="certFile" />
                <Button type="button" variant="outline" onClick={() => document.getElementById('certFile')?.click()}>
                  Choose Certificate File
                </Button>
                <p className="text-xs text-muted-foreground mt-2">PDF, JPG, PNG (Max 5MB)</p>
              </div>
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Certificate
            </Button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Add {type.charAt(0).toUpperCase() + type.slice(1)}
          </DialogTitle>
        </DialogHeader>
        {renderForm()}
      </DialogContent>
    </Dialog>
  );
};