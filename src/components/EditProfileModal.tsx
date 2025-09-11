import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useProfile } from "@/contexts/ProfileContext";
import { Edit, Upload, Save } from "lucide-react";

interface EditProfileModalProps {
  type: 'name' | 'headline' | 'location' | 'bio' | 'avatar' | 'cover';
  children: React.ReactNode;
}

export const EditProfileModal = ({ type, children }: EditProfileModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { profile, updateProfile } = useProfile();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    switch (type) {
      case 'name':
        updateProfile({
          firstName: formData.get('firstName') as string,
          lastName: formData.get('lastName') as string,
        });
        break;
      case 'headline':
        updateProfile({
          headline: formData.get('headline') as string,
        });
        break;
      case 'location':
        updateProfile({
          location: formData.get('location') as string,
        });
        break;
      case 'bio':
        updateProfile({
          bio: formData.get('bio') as string,
        });
        break;
      case 'avatar':
        // Handle file upload for avatar
        const avatarFile = formData.get('avatar') as File;
        if (avatarFile && avatarFile.size > 0) {
          const avatarUrl = URL.createObjectURL(avatarFile);
          updateProfile({ avatar: avatarUrl });
        }
        break;
      case 'cover':
        // Handle file upload for cover
        const coverFile = formData.get('cover') as File;
        if (coverFile && coverFile.size > 0) {
          const coverUrl = URL.createObjectURL(coverFile);
          updateProfile({ coverImage: coverUrl });
        }
        break;
    }

    toast({
      title: "Profile Updated",
      description: `Your ${type} has been updated successfully!`,
    });
    setIsOpen(false);
  };

  const renderForm = () => {
    switch (type) {
      case 'name':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  name="firstName"
                  defaultValue={profile.firstName}
                  placeholder="Enter your first name" 
                  required 
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  name="lastName"
                  defaultValue={profile.lastName}
                  placeholder="Enter your last name" 
                  required 
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Name
            </Button>
          </form>
        );

      case 'headline':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="headline">Professional Headline</Label>
              <Input 
                id="headline" 
                name="headline"
                defaultValue={profile.headline}
                placeholder="e.g. Senior Software Engineer at TechCorp" 
                required 
              />
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Headline
            </Button>
          </form>
        );

      case 'location':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                name="location"
                defaultValue={profile.location}
                placeholder="e.g. San Francisco, CA" 
                required 
              />
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Location
            </Button>
          </form>
        );

      case 'bio':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea 
                id="bio" 
                name="bio"
                defaultValue={profile.bio}
                placeholder="Tell people about yourself and what you do..." 
                rows={4}
                required 
              />
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Bio
            </Button>
          </form>
        );

      case 'avatar':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="avatar">Profile Picture</Label>
              <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-4 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <Input type="file" name="avatar" accept=".jpg,.jpeg,.png" className="hidden" id="avatarFile" />
                <Button type="button" variant="outline" onClick={() => document.getElementById('avatarFile')?.click()}>
                  Choose Profile Picture
                </Button>
                <p className="text-xs text-muted-foreground mt-2">JPG, JPEG, PNG (Max 5MB)</p>
              </div>
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Picture
            </Button>
          </form>
        );

      case 'cover':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="cover">Cover Image</Label>
              <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-4 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <Input type="file" name="cover" accept=".jpg,.jpeg,.png" className="hidden" id="coverFile" />
                <Button type="button" variant="outline" onClick={() => document.getElementById('coverFile')?.click()}>
                  Choose Cover Image
                </Button>
                <p className="text-xs text-muted-foreground mt-2">JPG, JPEG, PNG (Max 5MB)</p>
              </div>
            </div>
            <Button type="submit" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Cover
            </Button>
          </form>
        );

      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'name': return 'Edit Name';
      case 'headline': return 'Edit Headline';
      case 'location': return 'Edit Location';
      case 'bio': return 'Edit Bio';
      case 'avatar': return 'Change Profile Picture';
      case 'cover': return 'Change Cover Image';
      default: return 'Edit Profile';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>
        {renderForm()}
      </DialogContent>
    </Dialog>
  );
};