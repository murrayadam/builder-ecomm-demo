import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Parks() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Explore Parks</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Discover the hidden gems of our national park system. Guides and maps coming soon.
        </p>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </Layout>
  );
}
