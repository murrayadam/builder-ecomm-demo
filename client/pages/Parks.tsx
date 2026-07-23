import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Mountain } from "lucide-react";

const parks = [
  {
    name: "Zion National Park",
    image: "https://images.pexels.com/photos/4959950/pexels-photo-4959950.jpeg",
    description:
      "Follow the paths of the ancients. Zion's massive sandstone cliffs of cream, pink, and red soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon, hike along a steep ridge, or watch the sunset light up the Watchman.",
    trail: {
      name: "Angels Landing Trail",
      details: "Strenuous • 5.4 miles • 1,488 ft elevation gain",
    },
    bestTime: "April to October for hiking, winter for solitude.",
  },
  {
    name: "Yosemite National Park",
    image: "https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg",
    description:
      "Towering granite walls, ancient sequoias, and thundering waterfalls define Yosemite's high country. From the mist of Vernal Fall to the summit of Half Dome, this park is a proving ground for climbers, hikers, and dreamers alike.",
    trail: {
      name: "Mist Trail to Nevada Fall",
      details: "Strenuous • 5.4 miles • 2,000 ft elevation gain",
    },
    bestTime: "May to September for waterfalls and clear high-country access.",
  },
  {
    name: "Grand Teton National Park",
    image: "https://images.pexels.com/photos/34748280/pexels-photo-34748280.jpeg",
    description:
      "The jagged spires of the Teton Range rise abruptly from the valley floor, unbroken by foothills. Alpine lakes, glacier-carved canyons, and abundant wildlife make this one of the most iconic backcountry destinations in North America.",
    trail: {
      name: "Cascade Canyon Trail",
      details: "Moderate • 9.1 miles • 1,100 ft elevation gain",
    },
    bestTime: "June to September for wildflowers and open passes.",
  },
  {
    name: "Rocky Mountain National Park",
    image: "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg",
    description:
      "With over 60 peaks above 12,000 feet, Rocky Mountain National Park offers a true taste of the high alpine. Traverse tundra ecosystems on Trail Ridge Road or chase elk through subalpine meadows in the crisp fall air.",
    trail: {
      name: "Sky Pond via Glacier Gorge",
      details: "Strenuous • 9.0 miles • 1,780 ft elevation gain",
    },
    bestTime: "July to September for snow-free trails and wildlife viewing.",
  },
];

export default function Parks() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-primary mb-6">National Parks</h1>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            America's national parks are more than protected landscapes — they are living testaments
            to the wild beauty that inspired Vista Outfitters from the very beginning.
          </p>
          <p>
            Our park guides are built for explorers at every level — whether you're planning your
            first overnight backpack or returning to a beloved summit for the tenth time.
            Discover trail recommendations, gear checklists, and tips from the Vista community.
          </p>
        </div>
      </section>

      {parks.map((park, index) => (
        <section
          key={park.name}
          className={`py-20 ${index % 2 === 0 ? "bg-muted/30" : "bg-background"}`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col items-center gap-12 lg:gap-20 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={park.image}
                    alt={park.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full -z-10 blur-2xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-2xl" />
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-secondary font-medium tracking-wide uppercase text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Featured Destination</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                  {park.name}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {park.description}
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-primary">
                      <Mountain className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{park.trail.name}</h4>
                      <p className="text-sm text-muted-foreground">{park.trail.details}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-primary">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Best Time to Visit</h4>
                      <p className="text-sm text-muted-foreground">{park.bestTime}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Explore Park Guide
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}
