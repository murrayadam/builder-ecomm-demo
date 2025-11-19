import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Shop Our Collection</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          We are currently restocking our shelves with the finest gear for your next adventure. Check back soon!
        </p>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </Layout>
  );
}
