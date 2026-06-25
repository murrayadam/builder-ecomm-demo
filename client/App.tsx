import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import BuilderPage from "@/pages/BuilderPage";
import Index from "@/pages/Index";
import Shop from "@/pages/Shop";
import About from "@/pages/About";
import Events from "@/pages/Events";
import Parks from "@/pages/Parks";
import { BrowserRouter, MemoryRouter, Routes, Route as ReactRoute } from "react-router-dom";
import { isPreviewing, isEditing } from "@builder.io/sdk-react";
import { createRoot } from "react-dom/client";
import "@/global.css";
import "@/lib/builder-design-tokens";

const isBuilderEditor = isEditing() || isPreviewing();

function Router() {
  const RouterComponent = isBuilderEditor ? MemoryRouter : BrowserRouter;
  return (
    <RouterComponent>
      <Routes>
        <ReactRoute path="/" element={<Index />} />
        <ReactRoute path="/shop" element={<Shop />} />
        <ReactRoute path="/about" element={<About />} />
        <ReactRoute path="/events" element={<Events />} />
        <ReactRoute path="/parks" element={<Parks />} />
        <ReactRoute path="*" element={<BuilderPage />} />
      </Routes>
    </RouterComponent>
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
