import { useQuery } from "@tanstack/react-query";
import { builder } from "@/lib/builder";
import { BuilderContent, Product, Category, Brand } from "@shared/types";

// Helper to fetch content from Builder
async function fetchBuilderContent<T>(modelName: string, options: any = {}) {
  const content = await builder.getAll(modelName, {
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
