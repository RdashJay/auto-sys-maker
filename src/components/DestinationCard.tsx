import { MapPin, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DestinationCardProps {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  description: string;
}

const DestinationCard = ({
  name,
  location,
  rating,
  reviews,
  category,
  image,
  description,
}: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="font-semibold">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex gap-2">
          <Button className="flex-1">
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
          <Button variant="outline">Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
