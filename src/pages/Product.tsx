import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ShieldCheck, FileIcon, Monitor, Download } from "lucide-react";

// Mock data to simulate fetching a product
const PRODUCTS: Record<string, any> = {
  "1": {
    title: "Cyber UI Kit - Premium Tailwind Components",
    category: "UI Kit",
    price: 49,
    description: "A futuristic, cyber-themed UI kit built with React and Tailwind CSS. Perfect for modern web apps, dashboards, and landing pages.",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    features: ["200+ Components", "Dark/Light Mode", "Fully Responsive", "Free Lifetime Updates"],
    specs: { format: ".Figma, .TSX", size: "125 MB", compatibility: "Figma, React, Tailwind v4" },
  },
  // Add fallback or generic product details
};

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [license, setLicense] = useState<"personal" | "commercial">("personal");

  // Fallback if not found in our mock data
  const product = PRODUCTS[id || "1"] || PRODUCTS["1"];
  
  const currentPrice = license === "personal" ? product.price : product.price * 2.5;

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative">
        {/* Left Column: Visuals & Preview */}
        <div className="lg:col-span-3 space-y-6">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
            <img 
              src={product.cover} 
              alt={product.title} 
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 relative z-10" 
            />
          </div>
          
          <div className="flex justify-center md:justify-start">
            <Button variant="outline" className="w-full md:w-auto h-12 rounded-full px-8 border-white/20 hover:border-primary hover:bg-primary/10 transition-all text-white">
              <Monitor className="w-4 h-4 mr-2 text-primary" /> Live Preview
            </Button>
          </div>
          
          <div className="pt-8">
             <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">Overview</h2>
             <p className="text-zinc-400 text-lg leading-relaxed">{product.description}</p>
          </div>
        </div>

        {/* Right Column: Details & Checkout */}
        <div className="lg:col-span-2">
          <div className="flex flex-col space-y-8 sticky top-24">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">{product.category}</Badge>
                <Badge variant="outline" className="text-emerald-400 border-emerald-400/20 bg-emerald-400/10">Instant Delivery</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-white">{product.title}</h1>
            </div>

            {/* Pricing & License Selection (Glass Card) */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
              {/* Subtle animated border top */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-white">${currentPrice}</span>
                <span className="text-zinc-400 text-sm font-medium">USD / one-time</span>
              </div>

              <Tabs defaultValue="personal" className="w-full" onValueChange={(v) => setLicense(v as "personal" | "commercial")}>
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/40 border border-white/5 p-1 rounded-xl">
                  <TabsTrigger value="personal" className="rounded-lg data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Personal</TabsTrigger>
                  <TabsTrigger value="commercial" className="rounded-lg data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Commercial</TabsTrigger>
                </TabsList>
                <TabsContent value="personal" className="text-sm text-zinc-300 space-y-3 animate-in fade-in slide-in-from-left-2 duration-300">
                  <div className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span className="leading-tight">Use in unlimited personal projects</span></div>
                  <div className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span className="leading-tight">End product cannot be sold</span></div>
                </TabsContent>
                <TabsContent value="commercial" className="text-sm text-zinc-300 space-y-3 animate-in fade-in slide-in-from-right-2 duration-300">
                  <div className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span className="leading-tight">Use in unlimited commercial projects</span></div>
                  <div className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span className="leading-tight">Sell the end product (SaaS, themes, etc.)</span></div>
                </TabsContent>
              </Tabs>

              <Button 
                size="lg" 
                className="w-full h-14 text-lg mt-8 rounded-xl font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all bg-primary hover:bg-primary/90 text-white"
                onClick={() => navigate('/checkout')}
              >
                Buy Now
              </Button>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center justify-center p-4 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <FileIcon className="w-6 h-6 mb-2 text-primary" />
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Format</span>
                <span className="text-sm font-semibold text-center text-zinc-200">{product.specs.format}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <Download className="w-6 h-6 mb-2 text-primary" />
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Size</span>
                <span className="text-sm font-semibold text-center text-zinc-200">{product.specs.size}</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <Monitor className="w-6 h-6 mb-2 text-primary" />
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Works With</span>
                <span className="text-sm font-semibold text-center text-zinc-200">{product.specs.compatibility}</span>
              </div>
            </div>

            {/* Refund Policy / Trust */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/20 backdrop-blur-sm">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white tracking-wide">14-Day Money-Back Guarantee</h4>
                <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                  We stand behind our digital products. If you're not satisfied, we'll refund your purchase within 14 days.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
