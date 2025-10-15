import { useState } from "react";
import { Mountain, Landmark, Compass, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "nature" | "culture" | "adventure" | "food";

const CategoryFilter = ({ onCategoryChange }: { onCategoryChange: (category: Category) => void }) => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories = [
    { id: "all" as Category, name: "All Destinations", icon: Compass },
    { id: "nature" as Category, name: "Nature", icon: Mountain },
    { id: "culture" as Category, name: "Culture", icon: Landmark },
    { id: "adventure" as Category, name: "Adventure", icon: Compass },
    { id: "food" as Category, name: "Food", icon: Utensils },
  ];

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <Button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            variant={isActive ? "default" : "outline"}
            className="whitespace-nowrap min-w-fit"
          >
            <Icon className="h-4 w-4 mr-2" />
            {category.name}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
