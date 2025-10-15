import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import DestinationCard from "@/components/DestinationCard";
import SafetyInfo from "@/components/SafetyInfo";
import Footer from "@/components/Footer";

import cagsawaImage from "@/assets/cagsawa-ruins.jpg";
import donsolImage from "@/assets/donsol-beach.jpg";
import sumlangImage from "@/assets/sumlang-lake.jpg";
import foodImage from "@/assets/food-bicol.jpg";
import cultureImage from "@/assets/culture-festival.jpg";

type Category = "all" | "nature" | "culture" | "adventure" | "food";

const destinations = [
  {
    id: 1,
    name: "Cagsawa Ruins",
    location: "Daraga, Albay",
    rating: 4.8,
    reviews: 1243,
    category: "culture",
    image: cagsawaImage,
    description: "Historic Spanish church ruins with stunning views of Mayon Volcano. A testament to resilience and natural beauty.",
  },
  {
    id: 2,
    name: "Donsol Whale Shark Interaction",
    location: "Donsol, Albay",
    rating: 4.9,
    reviews: 2156,
    category: "adventure",
    image: donsolImage,
    description: "Swim with gentle giants in crystal-clear waters. An unforgettable wildlife experience in pristine beaches.",
  },
  {
    id: 3,
    name: "Sumlang Lake",
    location: "Camalig, Albay",
    rating: 4.7,
    reviews: 892,
    category: "nature",
    image: sumlangImage,
    description: "Serene lake surrounded by lush mountains. Perfect for kayaking, boating, and peaceful nature walks.",
  },
  {
    id: 4,
    name: "Bicol Express Food Tour",
    location: "Legazpi City, Albay",
    rating: 4.9,
    reviews: 1567,
    category: "food",
    image: foodImage,
    description: "Taste authentic Bicolano cuisine including the famous spicy Bicol Express and coconut-based dishes.",
  },
  {
    id: 5,
    name: "Albay Cultural Festival",
    location: "Various Locations, Albay",
    rating: 4.8,
    reviews: 945,
    category: "culture",
    image: cultureImage,
    description: "Experience vibrant traditional dances, music, and celebrations showcasing Albay's rich cultural heritage.",
  },
  {
    id: 6,
    name: "Mayon Volcano ATV Adventure",
    location: "Camalig, Albay",
    rating: 4.7,
    reviews: 1089,
    category: "adventure",
    image: cagsawaImage,
    description: "Thrilling ATV rides across volcanic terrain with breathtaking views of the perfect cone volcano.",
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredDestinations = destinations.filter((dest) => {
    if (activeCategory === "all") return true;
    return dest.category === activeCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <section id="destinations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover the best of Albay - from majestic volcanoes to pristine beaches
            </p>
            <CategoryFilter onCategoryChange={setActiveCategory} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No destinations found in this category. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      <SafetyInfo />
      
      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Wanderer</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Wanderer is a smart tourism platform designed to optimize your journey through Albay. 
              We provide real-time navigation, comprehensive destination information, and safety guidelines 
              to ensure you have the best possible experience exploring this beautiful province.
            </p>
            <p className="text-lg text-muted-foreground">
              From the iconic Mayon Volcano to hidden cultural gems, Wanderer helps you discover 
              Albay's diverse attractions while supporting local businesses and promoting sustainable tourism.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
