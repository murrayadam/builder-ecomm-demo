import { useEffect, useState } from "react";
import { Content, fetchOneEntry, isPreviewing } from "@builder.io/sdk-react";
import Layout from "@/components/Layout";
import { BUILDER_PUBLIC_API_KEY } from "@/lib/builder";
import { customComponents } from "../../builder-registry";
import { Loader2 } from "lucide-react";

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
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-serif font-bold text-primary mb-6">National Parks</h1>
      <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          America's national parks are more than protected landscapes — they are living testaments 
          to the wild beauty that inspired Vista Outfitters from the very beginning.
        </p>
        <p>
          From the towering granite walls of Yosemite to the sweeping red rock vistas of Zion, 
          each park offers its own singular character and set of adventures. We've spent countless 
          seasons in these places, testing gear, finding trails, and falling deeper in love with 
          the natural world.
        </p>
        <p>
          Our park guides are built for explorers at every level — whether you're planning your 
          first overnight backpack or returning to a beloved summit for the tenth time. 
          Discover trail recommendations, gear checklists, and tips from the Vista community.
        </p>
        <p>
          Lace up your boots. The parks are waiting.
        </p>
      </div>
    </div>
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
