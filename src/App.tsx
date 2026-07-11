
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";

export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="flex min-h-screen w-full flex-col bg-slate-50/50 text-slate-900 antialiased dark:bg-zinc-950 dark:text-zinc-50 selection:bg-primary/20">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="thank-you" element={<ThankYou />} />
            </Route>
          </Routes>
          <Toaster position="top-right" closeButton richColors />
        </div>
      </SidebarProvider>
    </Router>
  );
}
