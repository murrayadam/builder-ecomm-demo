import { useQuery } from "@tanstack/react-query";
import { fetchEntries } from "@builder.io/sdk-react";
import { BuilderContent, Product, Category, Brand } from "@shared/types";
import { BUILDER_PUBLIC_API_KEY } from "@/lib/builder";

// Helper to fetch content from Builder
async function fetchBuilderContent<T>(modelName: string, options: any = {}) {
  const content = await fetchEntries({
    model: modelName,
    apiKey: BUILDER_PUBLIC_API_KEY,
    ...options,
    // Ensure we get the data we need
    fields: "data,id,name",
  });
  return content as BuilderContent<T>[];
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchBuilderContent<Product>("product", {
      options: { includeRefs: true },
    }),
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchBuilderContent<Category>("category"),
  });
}

export function useBrands() {
  return useQuery({
    queryKey: ["brands"],
    queryFn: () => fetchBuilderContent<Brand>("brand"),
  });
}
