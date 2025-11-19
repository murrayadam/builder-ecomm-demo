import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/sdk-react";
import Layout from "@/components/Layout";
import { BUILDER_PUBLIC_API_KEY } from "@/lib/builder";
import { Loader2 } from "lucide-react";

// Initialize builder with the API key
builder.init(BUILDER_PUBLIC_API_KEY);

export default function About() {
  const isPreviewing = useIsPreviewing();
  const [content, setContent] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchContent() {
      const content = await builder.get("page", {
        url: "/about",
      }).promise();

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
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-serif font-bold text-primary mb-6">Our Story</h1>
      <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          Vista Outfitters was founded in the 1990s by two friends who shared a simple but profound passion: 
          the love of the wild. What started as weekend camping trips and hiking expeditions in the 
          rugged terrains of the Pacific Northwest quickly grew into a lifelong pursuit of adventure.
        </p>
        <p>
          Bonded by campfires and starry nights, they realized that the right gear could make the difference 
          between a struggle and a memory to cherish. They set out to curate and create equipment that 
          was as resilient as the landscapes they explored.
        </p>
        <p>
          Today, that spirit lives on. We are no longer just two friends with backpacks; we are a community. 
          We enjoy doing the same things we did back then—exploring, discovering, and connecting with nature—but 
          now we do it with our families and our customers all over the world.
        </p>
        <p>
          Whether you're trekking through Zion or setting up camp in your backyard, we're honored to be part of your journey.
        </p>
      </div>
    </div>
  );

  if (notFound && !isPreviewing) {
    return (
      <Layout>
        {defaultContent}
      </Layout>
    );
  }

  return (
    <Layout>
      {content || isPreviewing ? (
        <BuilderComponent model="page" content={content} />
      ) : (
        <div className="flex h-[50vh] w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
    </Layout>
  );
}
