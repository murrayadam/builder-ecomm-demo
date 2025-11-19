import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Upcoming Events</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Join us for guided hikes, workshops, and community gatherings. Calendar coming soon.
        </p>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </Layout>
  );
}
