import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import Footer from "@/components/layout/Footer";
import { 
  Search, Plus, Filter, SlidersHorizontal,
  BookOpen, Beaker, Calculator, Ruler, Shirt
} from "lucide-react";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceType, setPriceType] = useState("all");

  const categories = [
    { value: "all", label: "All Categories", icon: null },
    { value: "books", label: "Books & Notes", icon: BookOpen },
    { value: "lab", label: "Lab Equipment", icon: Beaker },
    { value: "calculators", label: "Calculators", icon: Calculator },
    { value: "instruments", label: "Drawing Instruments", icon: Ruler },
    { value: "clothing", label: "Lab Coats & Uniforms", icon: Shirt },
  ];

  const items = [
    {
      id: 1,
      name: "Scientific Calculator",
      category: "Calculators",
      condition: "Good",
      price: 350,
      priceType: "sell",
      seller: "Priya K.",
      department: "ECE",
      year: "4th Year",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Engineering Drawing Kit",
      category: "Drawing Instruments",
      condition: "New",
      price: 0,
      priceType: "free",
      seller: "Amit R.",
      department: "MECH",
      year: "3rd Year",
      image: "https://images.unsplash.com/photo-1611784728558-6c7d9e4a5a3e?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "White Lab Coat (M)",
      category: "Lab Coats & Uniforms",
      condition: "Good",
      price: 50,
      priceType: "rent",
      seller: "Sneha M.",
      department: "CHEM",
      year: "2nd Year",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Data Structures Book",
      category: "Books & Notes",
      condition: "Used",
      price: 150,
      priceType: "sell",
      seller: "Rahul S.",
      department: "CSE",
      year: "3rd Year",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Chemistry Lab Kit",
      category: "Lab Equipment",
      condition: "Good",
      price: 500,
      priceType: "sell",
      seller: "Kavya P.",
      department: "CHEM",
      year: "4th Year",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Graphing Calculator",
      category: "Calculators",
      condition: "New",
      price: 800,
      priceType: "sell",
      seller: "Vijay K.",
      department: "MATH",
      year: "2nd Year",
      image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=400&h=300&fit=crop",
    },
  ];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "all" || item.category.toLowerCase().includes(category);
    const matchesPriceType = priceType === "all" || item.priceType === priceType;
    return matchesSearch && matchesCategory && matchesPriceType;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DashboardNavbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Marketplace
            </h1>
            <p className="text-muted-foreground mt-1">
              Find and exchange academic essentials with verified students
            </p>
          </div>
          <Link to="/upload-item">
            <Button variant="hero" className="w-full md:w-auto">
              <Plus className="h-5 w-5" />
              Post Item
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl border p-4 mb-6 shadow-card animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {/* Price Type Filter */}
            <Select value={priceType} onValueChange={setPriceType}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Price Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sell">For Sale</SelectItem>
                <SelectItem value="rent">For Rent</SelectItem>
                <SelectItem value="free">Free</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredItems.length} items
        </p>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group bg-card rounded-2xl border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${
                    item.priceType === "free" 
                      ? "bg-status-approved text-secondary-foreground" 
                      : item.priceType === "rent"
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {item.priceType === "free" ? "Free" : item.priceType === "rent" ? "Rent" : "Sale"}
                </Badge>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  <Badge variant="outline" className="text-xs flex-shrink-0">
                    {item.condition}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {item.category}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    {item.priceType === "free" ? (
                      <span className="text-lg font-bold text-status-approved">Free</span>
                    ) : item.priceType === "rent" ? (
                      <span className="text-lg font-bold text-accent">₹{item.price}/day</span>
                    ) : (
                      <span className="text-lg font-bold text-foreground">₹{item.price}</span>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{item.seller}</p>
                    <p className="text-xs text-muted-foreground">{item.department} • {item.year}</p>
                  </div>
                </div>
                
                <Button variant="soft" className="w-full mt-4">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex p-4 rounded-2xl bg-muted mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filters
            </p>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setCategory("all");
              setPriceType("all");
            }}>
              Clear filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;
