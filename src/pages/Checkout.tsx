import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, Mail, CreditCard } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing delay
    setTimeout(() => {
      navigate('/thank-you');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 max-w-5xl">
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-white">Secure Checkout</h1>
        <p className="text-zinc-400 text-lg">You're almost there! Complete your purchase to get instant access.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative">
        {/* Checkout Form */}
        <div className="lg:col-span-3 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <form onSubmit={handleCheckout} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                <div className="p-2 bg-primary/20 rounded-lg text-primary"><Mail className="w-5 h-5" /></div> Contact Info
              </h2>
              <div className="space-y-5 bg-zinc-950/50 p-8 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="grid gap-2 relative">
                  <Label htmlFor="name" className="text-zinc-300">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="h-12 bg-black/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary transition-all text-white" />
                </div>
                <div className="grid gap-2 relative">
                  <Label htmlFor="email" className="text-zinc-300">Email Address <span className="text-xs text-primary ml-1">(Where we send the files)</span></Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-12 bg-black/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary transition-all text-white" />
                </div>
                
                <div className="flex items-start space-x-3 pt-6 border-t border-white/10 mt-6">
                  <Checkbox id="create-account" className="mt-1 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="create-account"
                      className="text-sm font-semibold leading-none text-white cursor-pointer"
                    >
                      Create an account for faster checkout next time
                    </label>
                    <p className="text-sm text-zinc-500">
                      Easily access all your purchased files from your personal dashboard.
                    </p>
                  </div>
                </div>
                <div className="grid gap-2 relative">
                  <Label htmlFor="password" className="text-zinc-300">Password (Optional)</Label>
                  <Input id="password" type="password" placeholder="Create a strong password" className="h-12 bg-black/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary transition-all text-white" />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                <div className="p-2 bg-primary/20 rounded-lg text-primary"><CreditCard className="w-5 h-5" /></div> Payment Method
              </h2>
              <div className="space-y-4 bg-zinc-950/50 p-8 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="grid gap-2 relative">
                  <Label htmlFor="card-element" className="text-zinc-300">Card Details</Label>
                  {/* Fake Stripe Element */}
                  <div className="flex items-center p-4 border border-white/10 rounded-xl bg-black/50 h-14 group-hover:border-primary/50 transition-colors">
                    <span className="text-zinc-400 font-mono tracking-widest text-lg">**** **** **** 4242</span>
                    <span className="ml-auto text-zinc-500 text-sm font-medium">MM/YY CVC</span>
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full h-16 text-xl font-bold rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all bg-primary hover:bg-primary/90 text-white group">
              <Lock className="w-5 h-5 mr-2 group-hover:animate-pulse" /> Complete Order • $49.00
            </Button>
            
            <p className="text-center text-sm text-zinc-500 font-medium flex justify-center items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure 256-bit SSL encryption.
            </p>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
          <div className="glass-card p-8 rounded-2xl sticky top-24">
            <h2 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Order Summary</h2>
            
            <div className="flex gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-zinc-800 shrink-0 shadow-inner">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200" alt="Product thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-white leading-tight line-clamp-2">Cyber UI Kit - Premium Tailwind Components</span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider mt-2">Personal License</span>
              </div>
              <div className="ml-auto font-black text-white text-lg">$49</div>
            </div>

            <div className="space-y-4 text-sm font-medium">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span className="text-white">$49.00</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Tax</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="flex justify-between font-black text-2xl pt-4 border-t border-white/10 text-white">
                <span>Total</span>
                <span>$49.00</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-gradient" />
              <p className="text-sm font-bold text-primary relative z-10">
                You will receive an email with the download link immediately after purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
