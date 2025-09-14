import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Home, 
  Briefcase, 
  MessageSquare, 
  Users, 
  User, 
  Building,
  Bell,
  Search,
  Menu
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    { path: "/feed", label: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/jobs", label: "Jobs", icon: <Briefcase className="w-5 h-5" /> },
    { path: "/messages", label: "Messages", icon: <MessageSquare className="w-5 h-5" /> },
    { path: "/network", label: "Network", icon: <Users className="w-5 h-5" /> },
    { path: "/profile", label: "Profile", icon: <User className="w-5 h-5" /> },
    { path: "/recruiter", label: "Recruiter", icon: <Building className="w-5 h-5" /> }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/feed" className="flex items-center gap-3">
            <img 
              src="/src/assets/Credify.png" 
              alt="Credify Logo" 
              style={{height: 'auto', width: 'auto', maxHeight: '130px', maxWidth: '130px', borderRadius: 0, boxShadow: 'none', background: 'none'}}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "primary" : "glass"}
                  size="sm"
                  className="relative"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden lg:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search professionals..."
                className="pl-10 pr-4 py-2 bg-muted/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all w-64"
              />
            </div>

            {/* Notifications */}
            <Button variant="glass" size="sm">
              <Bell className="w-4 h-4" />
            </Button>

            {/* Profile / Auth */}
            {isAuthenticated ? (
              <>
                <Link to="/profile">
                  <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all">
                    <AvatarImage src="" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Link>
                <Button variant="glass" size="sm" onClick={logout}>Logout</Button>
              </>
            ) : (
              <Link to="/">
                <Button variant="primary" size="sm">Login</Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="glass"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant={isActive(item.path) ? "primary" : "glass"}
                  className="w-full justify-start"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};