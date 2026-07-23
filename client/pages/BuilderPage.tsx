import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Content, fetchOneEntry, isEditing, isPreviewing } from "@builder.io/sdk-react";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";
import { BUILDER_PUBLIC_API_KEY } from "@/lib/builder";
import { customComponents } from "../../builder-registry";
import { Loader2 } from "lucide-react";

export default function BuilderPage() {
  const { pathname } = useLocation();
  const isBuilderEditor = isEditing() || isPreviewing();
  const [content, setContent] = useState<any>(null);
  const [status, setStatus] = useState<"loading" | "found" | "notFound">(
    isBuilderEditor ? "found" : "loading",
  );

  useEffect(() => {
    if (isBuilderEditor) return;
    let cancelled = false;
    setStatus("loading");

    fetchOneEntry({
      model: "page",
      apiKey: BUILDER_PUBLIC_API_KEY,
      userAttributes: { urlPath: pathname },
    }).then((entry) => {
      if (cancelled) return;
      if (entry) {
        setContent(entry);
        setStatus("found");
      } else {
        setContent(null);
        setStatus("notFound");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [pathname, isBuilderEditor]);

  if (isBuilderEditor) {
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

  if (status === "notFound") {
    return <NotFound />;
  }

  if (status === "loading") {
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
