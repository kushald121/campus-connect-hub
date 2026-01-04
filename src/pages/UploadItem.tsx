import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import { 
  ArrowLeft, Upload, Image as ImageIcon, X, 
  ShoppingBag, Tag, IndianRupee, Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadItem = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("good");
  const [priceType, setPriceType] = useState("sell");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const categories = [
    { value: "books", label: "Books & Notes" },
    { value: "lab", label: "Lab Equipment" },
    { value: "calculators", label: "Calculators" },
    { value: "instruments", label: "Drawing Instruments" },
    { value: "clothing", label: "Lab Coats & Uniforms" },
    { value: "other", label: "Other" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Demo: Just add placeholder images
      const newImages = Array.from(files).map(() => 
        `https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=200&fit=crop&${Date.now()}`
      );
      setImages([...images, ...newImages].slice(0, 4));
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Item submitted for approval",
      description: "Admin will review your item within 24 hours.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Back Link */}
        <Link 
          to="/marketplace" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Marketplace
        </Link>

        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Post an Item
          </h1>
          <p className="text-muted-foreground mt-1">
            List your item for sale, rent, or give it away for free
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
          {/* Image Upload */}
          <div className="space-y-3">
            <Label>Photos (up to 4)</Label>
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, index) => (
                <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <X className="h-6 w-6 text-background" />
                  </button>
                </div>
              ))}
              {images.length < 4 && (
                <label className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer flex flex-col items-center justify-center gap-2 bg-muted/30">
                  <Upload className="h-6 w-6 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="sr-only"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Item Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Item Name</Label>
            <div className="relative">
              <ShoppingBag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                placeholder="e.g., Scientific Calculator, Lab Coat..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Condition */}
          <div className="space-y-3">
            <Label>Condition</Label>
            <RadioGroup value={condition} onValueChange={setCondition} className="flex gap-4">
              {["new", "good", "used"].map((c) => (
                <Label
                  key={c}
                  htmlFor={c}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                    condition === c 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <RadioGroupItem value={c} id={c} />
                  <span className="capitalize">{c}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* Price Type */}
          <div className="space-y-3">
            <Label>How do you want to list this?</Label>
            <RadioGroup value={priceType} onValueChange={setPriceType} className="grid grid-cols-3 gap-3">
              <Label
                htmlFor="sell"
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  priceType === "sell" 
                    ? "border-primary bg-primary/5" 
                    : "border-border hover:border-primary/30"
                }`}
              >
                <RadioGroupItem value="sell" id="sell" className="sr-only" />
                <Tag className={`h-5 w-5 ${priceType === "sell" ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-sm font-medium ${priceType === "sell" ? "text-primary" : "text-foreground"}`}>
                  Sell
                </span>
              </Label>
              <Label
                htmlFor="rent"
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  priceType === "rent" 
                    ? "border-accent bg-accent/5" 
                    : "border-border hover:border-accent/30"
                }`}
              >
                <RadioGroupItem value="rent" id="rent" className="sr-only" />
                <IndianRupee className={`h-5 w-5 ${priceType === "rent" ? "text-accent" : "text-muted-foreground"}`} />
                <span className={`text-sm font-medium ${priceType === "rent" ? "text-accent" : "text-foreground"}`}>
                  Rent
                </span>
              </Label>
              <Label
                htmlFor="free"
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  priceType === "free" 
                    ? "border-secondary bg-secondary/5" 
                    : "border-border hover:border-secondary/30"
                }`}
              >
                <RadioGroupItem value="free" id="free" className="sr-only" />
                <span className={`text-lg ${priceType === "free" ? "text-secondary" : "text-muted-foreground"}`}>🎁</span>
                <span className={`text-sm font-medium ${priceType === "free" ? "text-secondary" : "text-foreground"}`}>
                  Free
                </span>
              </Label>
            </RadioGroup>
          </div>

          {/* Price Input */}
          {priceType !== "free" && (
            <div className="space-y-2 animate-fade-in">
              <Label htmlFor="price">
                {priceType === "rent" ? "Price per day (₹)" : "Price (₹)"}
              </Label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="price"
                  type="number"
                  placeholder="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="pl-10"
                  min="0"
                  required
                />
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea
              id="description"
              placeholder="Add more details about your item..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Info Box */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-foreground">What happens next?</p>
              <p className="text-muted-foreground mt-1">
                Your item will be reviewed by an admin within 24 hours. 
                You'll be notified once it's approved and live.
              </p>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              Submit for Approval
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default UploadItem;
