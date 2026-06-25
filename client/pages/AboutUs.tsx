import { useEffect, useState } from "react";
import { Content, fetchOneEntry, isPreviewing } from "@builder.io/sdk-react";
import Layout from "@/components/Layout";
import { BUILDER_PUBLIC_API_KEY } from "@/lib/builder";
import { customComponents } from "../../builder-registry";
import { Loader2 } from "lucide-react";

export default function AboutUs() {
  const [content, setContent] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const isPreview = isPreviewing();

  useEffect(() => {
    async function fetchContent() {
      const result = await fetchOneEntry({
        model: "page",
        apiKey: BUILDER_PUBLIC_API_KEY,
        userAttributes: {
          urlPath: "/about-us",
        },
      });

      if (result) {
        setContent(result);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    }

    fetchContent();
  }, []);

  const defaultContent = (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-serif font-bold text-primary mb-6">About Us</h1>
      <p className="max-w-xl mx-auto text-lg text-muted-foreground">
        This page is managed by Builder CMS. Add content in the Builder visual editor to get started.
      </p>
    </div>
  );

  if (notFound && !isPreview) {
    return <Layout>{defaultContent}</Layout>;
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
