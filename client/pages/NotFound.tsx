import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-muted p-4 rounded-full mb-6">
          <AlertTriangle className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-muted-foreground max-w-md mb-8">
          It looks like you've wandered off the trail. The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg">Return to Trailhead</Button>
        </Link>
      </div>
    </Layout>
  );
}
