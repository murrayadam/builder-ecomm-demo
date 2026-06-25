import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Content, fetchOneEntry, isPreviewing } from "@builder.io/sdk-react";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";
import { BUILDER_PUBLIC_API_KEY } from "@/lib/builder";
import { customComponents } from "../../builder-registry";
import { Loader2 } from "lucide-react";

export default function BuilderPage() {
  const { pathname } = useLocation();
  const [content, setContent] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const isPreview = isPreviewing();

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setContent(null);
    setNotFound(false);

    fetchOneEntry({
      model: "page",
      apiKey: BUILDER_PUBLIC_API_KEY,
      userAttributes: { urlPath: pathname },
    })
      .then((entry) => {
        if (cancelled) return;
        if (entry) {
          setContent(entry);
        } else {
          setNotFound(true);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  if (notFound && !isPreview) {
    return <NotFound />;
  }

  if (loading && !isPreview) {
    return (
      <Layout>
        <div className="flex h-[50vh] w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Content
        model="page"
        content={content}
        apiKey={BUILDER_PUBLIC_API_KEY}
        customComponents={customComponents}
      />
    </Layout>
  );
}
