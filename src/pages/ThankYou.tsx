
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Download, ArrowRight, LayoutDashboard, Mail } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
      <div className="flex flex-col items-center text-center space-y-6 animate-in zoom-in-95 duration-700">
        <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.3)] relative">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping opacity-50 duration-1000" />
          <CheckCircle2 className="w-12 h-12 text-emerald-500 relative z-10" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">Payment Successful!</h1>
        <p className="text-xl text-zinc-400 max-w-lg font-medium">
          Thank you for your purchase. Your premium digital products are ready.
        </p>
        
        <div className="flex items-center justify-center gap-3 text-sm font-bold text-white bg-zinc-900 py-3 px-6 rounded-full border border-white/10 shadow-lg">
          <Mail className="w-5 h-5 text-primary" /> A receipt has been sent to your email.
        </div>

        <div className="w-full mt-16 space-y-6 text-left animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Download className="w-6 h-6 text-primary" /> Your Downloads
          </h2>
          
          <Card className="glass-card overflow-hidden group">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left w-full">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-zinc-800 shrink-0 shadow-xl border border-white/10">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200" alt="Product thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col justify-center space-y-2">
                    <h3 className="text-xl font-bold text-white leading-tight">Cyber UI Kit - Premium Tailwind Components</h3>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                      <Badge variant="outline" className="text-zinc-400 border-white/10">Version 1.2</Badge>
                      <Badge variant="outline" className="text-zinc-400 border-white/10">125 MB</Badge>
                      <Badge className="bg-primary/20 text-primary border-none">.ZIP</Badge>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="w-full sm:w-auto h-16 px-8 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all bg-primary hover:bg-primary/90 text-white shrink-0 mt-6 sm:mt-0">
                  <Download className="w-5 h-5 mr-2 animate-bounce" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 w-full mt-12 animate-in fade-in duration-700 delay-500 fill-mode-both">
          <Link to="/">
            <Button variant="outline" size="lg" className="w-full h-14 gap-2 border-white/20 text-white hover:bg-white/5">
              <LayoutDashboard className="w-4 h-4" /> Go to Dashboard
            </Button>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="lg" className="w-full h-14 gap-2 text-zinc-300 hover:text-white">
              Explore More Products <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
