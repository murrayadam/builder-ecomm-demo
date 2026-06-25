import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/NotFound";
import Index from "@/pages/Index";
import Shop from "@/pages/Shop";
import About from "@/pages/About";
import AboutUs from "@/pages/AboutUs";
import Events from "@/pages/Events";
import Parks from "@/pages/Parks";
import { BrowserRouter, MemoryRouter, Routes, Route as ReactRoute } from "react-router-dom";
import { isPreviewing, isEditing } from "@builder.io/sdk-react";
import { createRoot } from "react-dom/client";
import "@/global.css";

const isBuilderEditor = isEditing() || isPreviewing();

function Router() {
  const RouterComponent = isBuilderEditor ? MemoryRouter : BrowserRouter;
  const routerProps = isBuilderEditor
    ? { initialEntries: [window.location.pathname] }
    : {};
  return (
    <RouterComponent {...routerProps}>
      <Routes>
        <ReactRoute path="/" element={<Index />} />
        <ReactRoute path="/shop" element={<Shop />} />
        <ReactRoute path="/about" element={<About />} />
        <ReactRoute path="/about-us" element={<AboutUs />} />
        <ReactRoute path="/events" element={<Events />} />
        <ReactRoute path="/parks" element={<Parks />} />
        <ReactRoute path="*" element={<NotFound />} />
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
