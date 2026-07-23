import { useEffect, useState } from "react";
import { Content, fetchOneEntry, isPreviewing } from "@builder.io/sdk-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BUILDER_PUBLIC_API_KEY } from "@/lib/builder";
import { customComponents } from "../../builder-registry";
import { Calendar, Loader2, MapPin, Mountain } from "lucide-react";

const parks = [
  {
    name: "Zion National Park",
    image: "https://images.pexels.com/photos/4959950/pexels-photo-4959950.jpeg",
    description:
      "Follow the paths of the ancients. Zion's massive sandstone cliffs of cream, pink, and red soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon, hike along a steep ridge, or watch the sunset light up the Watchman.",
    trail: {
      name: "Angels Landing Trail",
      detail: "Strenuous • 5.4 miles • 1,488 ft elevation gain",
    },
    bestTime: "April to October for hiking, winter for solitude.",
  },
  {
    name: "Yosemite National Park",
    image: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg",
    description:
      "Granite cathedrals, thundering waterfalls, and groves of ancient sequoias. Yosemite Valley's iconic walls have drawn wanderers and climbers for generations — every switchback rewards you with a new vantage on El Capitan or Half Dome.",
    trail: {
      name: "Mist Trail to Nevada Fall",
      detail: "Strenuous • 7 miles • 2,000 ft elevation gain",
    },
    bestTime: "May to September for waterfalls and clear passes.",
  },
  {
    name: "Grand Teton National Park",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    description:
      "The Tetons rise abruptly from the valley floor without foothills — a jagged skyline mirrored in glacial lakes below. Home base for Vista Outfitters, these mountains inspire everything we build.",
    trail: {
      name: "Cascade Canyon Trail",
      detail: "Moderate • 9.1 miles • 1,100 ft elevation gain",
    },
    bestTime: "June to September for wildflowers and open trails.",
  },
  {
    name: "Yellowstone National Park",
    image: "https://images.pexels.com/photos/33109/yellowstone-national-park-wyoming-landscape-scenic.jpg",
    description:
      "The world's first national park is a living laboratory of geysers, mudpots, and roaming bison. Beyond Old Faithful, endless backcountry trails wind through lodgepole pine and past thermal wonders few travelers ever see.",
    trail: {
      name: "Fairy Falls & Grand Prismatic Overlook",
      detail: "Easy • 5 miles • 200 ft elevation gain",
    },
    bestTime: "Late May to September for full road and trail access.",
  },
];

export default function Parks() {
  const [content, setContent] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const isPreview = isPreviewing();

  useEffect(() => {
    async function fetchContent() {
      const content = await fetchOneEntry({
        model: "page",
        apiKey: BUILDER_PUBLIC_API_KEY,
        userAttributes: {
          urlPath: "/parks",
        },
      });

      if (content) {
        setContent(content);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    }

    fetchContent();
  }, []);

  // Default content to show if no Builder page is found
  const defaultContent = (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            National Parks
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            America's national parks are more than protected landscapes — they are living
            testaments to the wild beauty that inspired Vista Outfitters from the very
            beginning. Explore our guides to some of our favorite places on earth.
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
                      <p className="text-sm text-muted-foreground">{park.trail.detail}</p>
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
    </>
  );

  if (notFound && !isPreview) {
    return (
      <Layout>
        {defaultContent}
      </Layout>
    );
  }

  return (
    <Layout>
      {content || isPreview ? (
        <Content
          model="page"
          content={content}
          apiKey={BUILDER_PUBLIC_API_KEY}
          customComponents={customComponents}
        />
      ) : (
        <div className="flex h-[50vh] w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
    </Layout>
  );
}
