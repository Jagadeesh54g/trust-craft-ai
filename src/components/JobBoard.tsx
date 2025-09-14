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
  const jobs: any[] = [];

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
        {jobs.length === 0 ? (
          <Card className="glass-card p-12 text-center">
            <div className="text-muted-foreground mb-2">No jobs to show</div>
            <p className="text-sm text-muted-foreground">Adjust filters or check back later for new opportunities.</p>
          </Card>
        ) : (
        jobs.map((job) => (
          <Card key={job.id} className={`glass-card p-6 hover:scale-[1.01] transition-transform duration-300 ${job.featured ? 'border-primary/50' : ''}`}>
            {job.featured && (
              <div className="mb-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Featured Job
                </Badge>
              </div>
            )}

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
                <Badge className="mb-2 bg-success/20 text-success border-success/30">
                  {job.aiMatch}% AI Match
                </Badge>
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
        ))
        )}
      </div>
    </div>
  );
};