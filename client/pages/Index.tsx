import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.pexels.com/photos/34748280/pexels-photo-34748280.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/90 backdrop-blur-sm rounded-full">
            New Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 max-w-2xl leading-tight">
            Find Your Path in the Wild
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl text-white/90 font-light">
            Premium gear inspired by the rugged beauty of the Grand Tetons. 
            Lightweight, durable, and ready for your next expedition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-none min-w-[160px]">
                Shop Gear
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 min-w-[160px]">
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Most Popular</h2>
              <p className="text-muted-foreground">Essentials for every camper's kit.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-primary font-medium hover:underline">
              View all products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Card className="group overflow-hidden border-none shadow-none bg-transparent">
              <CardContent className="p-0 relative aspect-square overflow-hidden rounded-xl bg-muted">
                <img 
                  src="https://images.pexels.com/photos/17827044/pexels-photo-17827044.jpeg" 
                  alt="Alpine Expedition Tent" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                  Best Seller
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4 px-0">
                <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                  Alpine Expedition Tent
                </h3>
                <p className="text-sm text-muted-foreground mb-2">Ultralight 2-person shelter</p>
                <span className="font-medium text-primary">$299.00</span>
              </CardFooter>
            </Card>

            {/* Product 2 */}
            <Card className="group overflow-hidden border-none shadow-none bg-transparent">
              <CardContent className="p-0 relative aspect-square overflow-hidden rounded-xl bg-muted">
                <img 
                  src="https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg" 
                  alt="Summit Hiker Backpack" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4 px-0">
                <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                  Summit Hiker Backpack
                </h3>
                <p className="text-sm text-muted-foreground mb-2">45L multi-day pack</p>
                <span className="font-medium text-primary">$149.00</span>
              </CardFooter>
            </Card>

            {/* Product 3 */}
            <Card className="group overflow-hidden border-none shadow-none bg-transparent">
              <CardContent className="p-0 relative aspect-square overflow-hidden rounded-xl bg-muted">
                <img 
                  src="https://images.pexels.com/photos/20425232/pexels-photo-20425232.jpeg" 
                  alt="Trailblazer Multi-Tool" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4 px-0">
                <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                  Trailblazer Multi-Tool
                </h3>
                <p className="text-sm text-muted-foreground mb-2">Stainless steel essential</p>
                <span className="font-medium text-primary">$45.00</span>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link to="/shop">
              <Button variant="outline" className="w-full">View all products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Park Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4959950/pexels-photo-4959950.jpeg" 
                  alt="Zion National Park" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full -z-10 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-2xl" />
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-2 text-secondary font-medium tracking-wide uppercase text-sm">
                <MapPin className="h-4 w-4" />
                <span>Featured Destination</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Zion National Park
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Follow the paths of the ancients. Zion's massive sandstone cliffs of cream, pink, and red soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon, hike along a steep ridge, or watch the sunset light up the Watchman.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-primary">
                    <Mountain className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Angels Landing Trail</h4>
                    <p className="text-sm text-muted-foreground">Strenuous • 5.4 miles • 1,488 ft elevation gain</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Best Time to Visit</h4>
                    <p className="text-sm text-muted-foreground">April to October for hiking, winter for solitude.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/parks">
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Explore Park Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Teaser */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join the Adventure</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Connect with fellow outdoor enthusiasts. From gear workshops to group hikes, 
            find your community in the wild.
          </p>
          <Link to="/events">
            <Button variant="secondary" size="lg" className="font-semibold">
              View Upcoming Events
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
