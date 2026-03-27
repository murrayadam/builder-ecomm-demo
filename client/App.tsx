import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/NotFound";
import Index from "@/pages/Index";
import Shop from "@/pages/Shop";
import About from "@/pages/About";
import Events from "@/pages/Events";
import { BrowserRouter, Routes, Route as ReactRoute } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "@/global.css";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <ReactRoute path="/" element={<Index />} />
        <ReactRoute path="/shop" element={<Shop />} />
        <ReactRoute path="/about" element={<About />} />
        <ReactRoute path="/events" element={<Events />} />
        <ReactRoute path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

export default App;
