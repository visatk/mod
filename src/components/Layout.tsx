
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full glass">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-extrabold sm:inline-block text-xl tracking-tight text-gradient">
                cybercoderbd.com
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                to="/"
                className="transition-all hover:text-primary hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)] text-foreground/80"
              >
                UI Kits
              </Link>
              <Link
                to="/"
                className="transition-all hover:text-primary hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)] text-foreground/80"
              >
                Mockups
              </Link>
              <Link
                to="/"
                className="transition-all hover:text-primary hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)] text-foreground/80"
              >
                E-books
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <Button variant="ghost" className="hidden sm:flex text-sm">
                Login
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by cybercoderbd.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
