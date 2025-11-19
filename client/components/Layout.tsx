import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="text-xl font-serif font-bold text-primary tracking-tight">
              Vista
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/parks" className="text-sm font-medium hover:text-primary transition-colors">
              Parks
            </Link>
            <Link to="/events" className="text-sm font-medium hover:text-primary transition-colors">
              Events
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute top-0 right-0 h-2 w-2 bg-secondary rounded-full" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link 
                    to="/shop" 
                    className="text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link 
                    to="/parks" 
                    className="text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Parks
                  </Link>
                  <Link 
                    to="/events" 
                    className="text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Events
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="text-xl font-serif font-bold text-primary">
                  Vista
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Equipping you for the wild. Inspired by the grandeur of our national parks.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/shop" className="hover:text-primary">All Products</Link></li>
                <li><Link to="/shop" className="hover:text-primary">Apparel</Link></li>
                <li><Link to="/shop" className="hover:text-primary">Gear</Link></li>
                <li><Link to="/shop" className="hover:text-primary">Accessories</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/parks" className="hover:text-primary">National Parks</Link></li>
                <li><Link to="/events" className="hover:text-primary">Events</Link></li>
                <li><Link to="/about" className="hover:text-primary">Our Story</Link></li>
                <li><Link to="/about" className="hover:text-primary">Journal</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold mb-4">Stay Connected</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for trail guides and gear drops.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 h-9 px-3 rounded-md border bg-background text-sm"
                />
                <Button size="sm">Join</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vista Outfitters. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
