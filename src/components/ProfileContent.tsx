import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useProfile } from "@/contexts/ProfileContext";
import { useToast } from "@/hooks/use-toast";
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
import { useAuth } from "@/contexts/AuthContext";
import { useResumeVersions, uploadResume } from "@/lib/resume";
import { useSkills } from "@/lib/skills";
import { useExperiences } from "@/lib/experience";
import { useProjects } from "@/lib/projects";
import { useCertificates } from "@/lib/certificates";

export const ProfileContent = () => {
  const { profile, updateProfile } = useProfile();
  const { toast } = useToast();
  const { user } = useAuth();
  const { versions, loading: resumeLoading, refresh } = useResumeVersions();
  const { skills, loading: skillsLoading, addSkill } = useSkills();
  const { items: experiences, loading: expLoading, addExperience } = useExperiences();
  const { projects, loading: projectsLoading, addProject } = useProjects();
  const { certs, loading: certsLoading, addCertificate } = useCertificates();

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
                name="about"
                placeholder="Tell people about yourself and what you do..."
                className="mt-2"
                rows={4}
                defaultValue={profile.bio}
              />
            </div>
            <Button 
              type="submit" 
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                const form = e.currentTarget.closest('form') as HTMLFormElement;
                if (form) {
                  const formData = new FormData(form);
                  updateProfile({ bio: formData.get('about') as string });
                  toast({ title: "Bio updated successfully!" });
                }
              }}
            >
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
          {expLoading ? (
            <div className="text-sm text-muted-foreground">Loading...</div>
          ) : experiences.length > 0 ? (
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-primary/20 pl-4 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">{exp.job_title}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.start_date} - {exp.end_date || 'Present'}
                      </p>
                    </div>
                    <Button variant="glass" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No experience added yet</p>
              <p className="text-sm">Add your work experience to build your professional profile</p>
            </div>
          )}
        </Card>
      </TabsContent>

      <TabsContent value="skills" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Skills
            </h2>
            <Button
              variant="primary"
              onClick={async () => {
                const name = prompt('Enter skill name');
                if (!name) return;
                try {
                  await addSkill(name, 'beginner');
                  toast({ title: 'Skill added' });
                } catch (err: any) {
                  toast({ title: 'Failed to add skill', description: err.message, variant: 'destructive' });
                }
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Skill
            </Button>
          </div>
          {skillsLoading ? (
            <div className="text-sm text-muted-foreground">Loading...</div>
          ) : skills.length > 0 ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="p-4 border border-glass-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{skill.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                      <Button variant="glass" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                    {skill.description && (
                      <p className="text-sm text-muted-foreground mt-2">{skill.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No skills added yet</p>
              <p className="text-sm">Add skills and take AI-powered verification tests</p>
            </div>
          )}
        </Card>
      </TabsContent>

      <TabsContent value="projects" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              Projects
            </h2>
            <Button
              variant="primary"
              onClick={async () => {
                const title = prompt('Enter project title');
                if (!title) return;
                try {
                  await addProject({ title });
                  toast({ title: 'Project added' });
                } catch (err: any) {
                  toast({ title: 'Failed to add project', description: err.message, variant: 'destructive' });
                }
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>
          {projectsLoading ? (
            <div className="text-sm text-muted-foreground">Loading...</div>
          ) : projects.length > 0 ? (
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="p-6 border border-glass-border rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.technologies}</p>
                    </div>
                    <Button variant="glass" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.live_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <FolderOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No projects added yet</p>
              <p className="text-sm">Showcase your work and let AI verify your contributions</p>
            </div>
          )}
        </Card>
      </TabsContent>

      <TabsContent value="certificates" className="space-y-6">
        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certificates
            </h2>
            <Button
              variant="primary"
              onClick={async () => {
                const name = prompt('Enter certificate name');
                if (!name) return;
                try {
                  await addCertificate({ name });
                  toast({ title: 'Certificate added' });
                } catch (err: any) {
                  toast({ title: 'Failed to add certificate', description: err.message, variant: 'destructive' });
                }
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Certificate
            </Button>
          </div>
          {certsLoading ? (
            <div className="text-sm text-muted-foreground">Loading...</div>
          ) : certs.length > 0 ? (
            <div className="space-y-4">
              {certs.map((cert) => (
                <div key={cert.id} className="p-6 border border-glass-border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">Issued {cert.issue_date}</p>
                      {cert.credential_id && (
                        <p className="text-xs text-muted-foreground mt-1">ID: {cert.credential_id}</p>
                      )}
                    </div>
                    <Button variant="glass" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                  {cert.file_path && (
                    <Badge variant="secondary" className="mt-2">
                      Certificate File Uploaded
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No certificates added yet</p>
              <p className="text-sm">Upload certificates for AI-powered verification</p>
            </div>
          )}
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
                <Input 
                  id="firstName" 
                  value={profile.firstName}
                  onChange={(e) => updateProfile({ firstName: e.target.value })}
                  placeholder="Enter your first name" 
                  className="mt-2" 
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  value={profile.lastName}
                  onChange={(e) => updateProfile({ lastName: e.target.value })}
                  placeholder="Enter your last name" 
                  className="mt-2" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={profile.email}
                  onChange={(e) => updateProfile({ email: e.target.value })}
                  placeholder="Enter your email" 
                  className="mt-2" 
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  value={profile.phone}
                  onChange={(e) => updateProfile({ phone: e.target.value })}
                  placeholder="Enter your phone number" 
                  className="mt-2" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  value={profile.location}
                  onChange={(e) => updateProfile({ location: e.target.value })}
                  placeholder="City, State/Country" 
                  className="mt-2" 
                />
              </div>
              <div>
                <Label htmlFor="website">Website/Portfolio</Label>
                <Input 
                  id="website" 
                  value={profile.website}
                  onChange={(e) => updateProfile({ website: e.target.value })}
                  placeholder="https://yourwebsite.com" 
                  className="mt-2" 
                />
              </div>
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input 
                id="linkedin" 
                value={profile.linkedin}
                onChange={(e) => updateProfile({ linkedin: e.target.value })}
                placeholder="https://linkedin.com/in/username" 
                className="mt-2" 
              />
            </div>
            <div>
              <Label htmlFor="github">GitHub Profile</Label>
              <Input 
                id="github" 
                value={profile.github}
                onChange={(e) => updateProfile({ github: e.target.value })}
                placeholder="https://github.com/username" 
                className="mt-2" 
              />
            </div>
            <Button 
              variant="primary"
              onClick={() => toast({ title: "Personal details saved successfully!" })}
            >
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
              <label className="inline-flex items-center justify-center cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file || !user) return;
                    try {
                      await uploadResume(file, user.id);
                      toast({ title: "Resume uploaded" });
                      refresh();
                    } catch (err: any) {
                      toast({ title: "Upload failed", description: err.message, variant: "destructive" });
                    } finally {
                      e.currentTarget.value = "";
                    }
                  }}
                />
                <Button variant="primary">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
              </label>
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

            <div className="p-4 rounded-lg border border-glass-border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Your Resume Versions</h4>
                {resumeLoading && <span className="text-sm text-muted-foreground">Loading...</span>}
              </div>
              {versions.length === 0 ? (
                <p className="text-sm text-muted-foreground">No resumes uploaded yet.</p>
              ) : (
                <div className="space-y-2">
                  {versions.map((v) => (
                    <div key={v.id} className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {new Date(v.created_at).toLocaleString()}
                      </div>
                      {v.signed_url && (
                        <Button asChild size="sm" variant="outline">
                          <a href={v.signed_url} target="_blank" rel="noopener noreferrer">Download</a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};