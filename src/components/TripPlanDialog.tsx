import { useState } from "react";
import { Calendar, Users, MapPin, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface TripPlanDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TripPlanDialog = ({ open, onOpenChange }: TripPlanDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "1",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Trip Plan Submitted!",
      description: "We'll send your personalized itinerary to your email shortly.",
    });
    
    setFormData({
      name: "",
      email: "",
      destination: "",
      startDate: "",
      endDate: "",
      travelers: "1",
      notes: "",
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Plan Your Trip to Albay</DialogTitle>
          <DialogDescription>
            Tell us about your travel preferences and we'll help you create the perfect itinerary.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Preferred Destinations
            </Label>
            <Input
              id="destination"
              placeholder="e.g., Mayon Volcano, Cagsawa Ruins, Donsol"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="travelers" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Number of Travelers
            </Label>
            <Input
              id="travelers"
              type="number"
              min="1"
              value={formData.travelers}
              onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Special Requests or Preferences</Label>
            <Textarea
              id="notes"
              placeholder="Any specific interests, dietary requirements, or accessibility needs..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            <Send className="h-4 w-4 mr-2" />
            Submit Trip Plan
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TripPlanDialog;
