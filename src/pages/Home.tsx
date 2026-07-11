import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const PRODUCTS = [
  {
    id: "1",
    title: "Cyber UI Kit - Premium Tailwind Components",
    category: "UI Kit",
    price: 49,
    badge: "Bestseller",
    cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "Neon Device Mockups Bundle",
    category: "Mockup",
    price: 29,
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "React SaaS Dashboard Template",
    category: "UI Kit",
    price: 59,
    badge: "Updated",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    title: "The Ultimate Freelancer Guide (PDF)",
    category: "E-book",
    price: 19,
    cover: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-48 bg-[#050505] overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none opacity-50 animate-[pulse-glow_4s_ease-in-out_infinite]" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Premium Digital Assets <br />
                for <span className="text-gradient">Creators</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl font-medium leading-relaxed">
                Elevate your projects with our high-quality UI kits, mockups, and e-books.
                <br className="hidden sm:inline" />
                <span className="font-bold text-zinc-200">Instant Access. Lifetime Updates.</span>
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="h-14 px-8 text-lg shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.7)] transition-all hover:-translate-y-1" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Library
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="w-full py-8 bg-black/40 border-y border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-sm text-zinc-500 font-bold tracking-[0.2em] uppercase">Trusted by 10,000+ top designers</p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-[#050505] flex items-center justify-center overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="flex text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-sm font-bold text-zinc-200 ml-2">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="relative w-full py-16 md:py-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
            <h2 className="text-3xl font-extrabold tracking-tight">Latest Releases</h2>
            <div className="flex space-x-2 p-1 bg-zinc-900/50 rounded-lg border border-white/5 backdrop-blur-md">
              <Badge variant="secondary" className="cursor-pointer bg-primary/20 text-primary hover:bg-primary/30">All</Badge>
              <Badge variant="ghost" className="cursor-pointer text-zinc-400 hover:text-white">UI Kits</Badge>
              <Badge variant="ghost" className="cursor-pointer text-zinc-400 hover:text-white">Mockups</Badge>
              <Badge variant="ghost" className="cursor-pointer text-zinc-400 hover:text-white">E-books</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <Card key={product.id} className="group relative overflow-hidden bg-zinc-950 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.3)] rounded-2xl">
                <Link to={`/product/${product.id}`}>
                  <CardHeader className="p-0 relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src={product.cover} 
                        alt={product.title} 
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {product.badge && (
                      <Badge className="absolute top-3 right-3 z-20 bg-primary/90 text-primary-foreground backdrop-blur-md shadow-lg">
                        {product.badge}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="text-xs text-primary mb-2 font-bold uppercase tracking-wider">{product.category}</div>
                    <h3 className="font-bold text-lg leading-tight line-clamp-2 min-h-[3rem] text-zinc-100 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                  </CardContent>
                  <CardFooter className="p-5 pt-0 flex justify-between items-center">
                    <span className="text-xl font-black text-white">${product.price}</span>
                    <Button variant="ghost" size="icon" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
