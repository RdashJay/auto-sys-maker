import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/mayon-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Discover Albay's Hidden Gems
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Navigate the beauty of Albay with smart location guidance and real-time directions
        </p>
        
        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
          <div className="flex gap-2">
            <Input 
              placeholder="Search destinations, hotels, or restaurants..." 
              className="border-0 text-lg h-14 bg-transparent"
            />
            <Button size="lg" className="h-14 px-8">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center text-white">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            ⛰️ Nature Spots
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            🏛️ Cultural Sites
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            🎯 Adventure
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            🍜 Local Food
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
