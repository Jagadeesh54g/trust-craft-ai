import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Bookmark,
  Building,
  Users,
  Zap
} from "lucide-react";

export const JobBoard = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      aiMatch: 94,
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=40&h=40&fit=crop",
      applicants: 12,
      featured: true
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      posted: "1 day ago",
      skills: ["React", "Vue.js", "CSS", "JavaScript"],
      aiMatch: 89,
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=40&h=40&fit=crop",
      applicants: 8,
      featured: false
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Austin, TX",
      type: "Contract",
      salary: "$80 - $120/hr",
      posted: "3 days ago",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      aiMatch: 76,
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=40&h=40&fit=crop",
      applicants: 15,
      featured: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recommended Jobs</h2>
        <Button variant="glass">
          <Bookmark className="w-4 h-4 mr-2" />
          Saved Jobs
        </Button>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className={`glass-card p-6 hover:scale-[1.01] transition-transform duration-300 ${job.featured ? 'border-primary/50' : ''}`}>

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <img 
                  src={job.logo} 
                  alt={job.company}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building className="w-4 h-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.posted}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job.applicants} applicants
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg font-semibold flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  {job.salary}
                </div>
                <div className="text-sm text-muted-foreground">{job.type}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button variant="primary" className="flex-1">
                Apply Now
              </Button>
              <Button variant="glass">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};