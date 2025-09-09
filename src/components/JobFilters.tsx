import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  Filter,
  X
} from "lucide-react";
import { useState } from "react";

export const JobFilters = () => {
  const [salaryRange, setSalaryRange] = useState([50000]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote"];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Executive"];
  const skills = ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "Vue.js", "Angular"];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="space-y-6">
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </h3>
          <Button variant="glass" size="sm">
            <X className="w-4 h-4" />
            Clear All
          </Button>
        </div>

        {/* Location Filter */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location
          </label>
          <Input 
            placeholder="Enter city, state, or country"
            className="bg-muted/20 border-glass-border"
          />
        </div>

        {/* Salary Range */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Minimum Salary: ${salaryRange[0].toLocaleString()}
          </label>
          <Slider
            value={salaryRange}
            onValueChange={setSalaryRange}
            max={200000}
            min={30000}
            step={5000}
            className="mt-2"
          />
        </div>

        {/* Job Type */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-3 block flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Job Type
          </label>
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <label 
                  htmlFor={type} 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-3 block">Experience Level</label>
          <div className="space-y-2">
            {experienceLevels.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={level} />
                <label 
                  htmlFor={level} 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {level}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-3 block">Required Skills</label>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Button
                key={skill}
                variant={selectedSkills.includes(skill) ? "primary" : "glass"}
                size="sm"
                onClick={() => toggleSkill(skill)}
                className="text-xs"
              >
                {skill}
              </Button>
            ))}
          </div>
        </div>

        <Button variant="primary" className="w-full">
          Apply Filters
        </Button>
      </Card>
    </div>
  );
};