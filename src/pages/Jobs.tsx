import { Navigation } from "@/components/Navigation";
import { JobBoard } from "@/components/JobBoard";
import { JobFilters } from "@/components/JobFilters";

const Jobs = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <JobFilters />
          </div>
          
          {/* Job Listings */}
          <div className="lg:col-span-3">
            <JobBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;