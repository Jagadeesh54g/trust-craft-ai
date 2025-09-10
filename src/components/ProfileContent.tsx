import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Plus, 
  Edit, 
  Upload,
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Award,
  FolderOpen
} from "lucide-react";
import { ProfileUpload } from "./ProfileUpload";

export const ProfileContent = () => {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="grid w-full grid-cols-7">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="certificates">Certificates</TabsTrigger>
        <TabsTrigger value="personal">Personal Details</TabsTrigger>
        <TabsTrigger value="resume">Resume</TabsTrigger>
      </TabsList>

      <TabsContent value="about" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <User className="w-5 h-5" />
              About
            </h2>
            <Button variant="glass" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="about">Professional Summary</Label>
              <Textarea
                id="about"
                placeholder="Tell people about yourself and what you do..."
                className="mt-2"
                rows={4}
              />
            </div>
            <Button variant="primary">
              <Plus className="w-4 h-4 mr-2" />
              Save About Section
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="experience" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Experience
            </h2>
            <ProfileUpload type="experience">
              <Button variant="primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Experience
              </Button>
            </ProfileUpload>
          </div>
          <div className="text-center py-12 text-muted-foreground">
            <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No experience added yet</p>
            <p className="text-sm">Add your work experience to build your professional profile</p>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="skills" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Skills
            </h2>
            <ProfileUpload type="skill">
              <Button variant="primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </ProfileUpload>
          </div>
          <div className="text-center py-12 text-muted-foreground">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No skills added yet</p>
            <p className="text-sm">Add skills and take AI-powered verification tests</p>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="projects" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              Projects
            </h2>
            <ProfileUpload type="project">
              <Button variant="primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </ProfileUpload>
          </div>
          <div className="text-center py-12 text-muted-foreground">
            <FolderOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No projects added yet</p>
            <p className="text-sm">Showcase your work and let AI verify your contributions</p>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="certificates" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certificates
            </h2>
            <ProfileUpload type="certificate">
              <Button variant="primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Certificate
              </Button>
            </ProfileUpload>
          </div>
          <div className="text-center py-12 text-muted-foreground">
            <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No certificates added yet</p>
            <p className="text-sm">Upload certificates for AI-powered verification</p>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="personal" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Details
            </h2>
            <Button variant="glass" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" className="mt-2" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" className="mt-2" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State/Country" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="website">Website/Portfolio</Label>
                <Input id="website" placeholder="https://yourwebsite.com" className="mt-2" />
              </div>
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/in/username" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="github">GitHub Profile</Label>
              <Input id="github" placeholder="https://github.com/username" className="mt-2" />
            </div>
            <Button variant="primary">
              <Plus className="w-4 h-4 mr-2" />
              Save Personal Details
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="resume" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Resume Upload
            </h2>
          </div>
          <div className="space-y-6">
            <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Upload Your Resume</h3>
              <p className="text-muted-foreground mb-4">
                Drag and drop your resume file here, or click to browse
              </p>
              <Button variant="primary">
                <Upload className="w-4 h-4 mr-2" />
                Choose File
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>
            
            <div className="bg-muted/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">AI Resume Analysis</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Once uploaded, our AI will analyze your resume and suggest improvements for better ATS compatibility and professional presentation.
              </p>
              <div className="flex gap-2">
                <Button variant="glass" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate New Resume
                </Button>
                <Button variant="glass" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  AI Resume Writer
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};