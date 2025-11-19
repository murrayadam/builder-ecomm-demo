import { useQuery } from "@tanstack/react-query";
import { builder } from "@builder.io/sdk-react";
import { BuilderContent, Product, Category, Brand } from "@shared/types";
import { BUILDER_PUBLIC_API_KEY } from "@/lib/builder";

// Initialize builder
builder.init(BUILDER_PUBLIC_API_KEY);

// Helper to fetch content from Builder
async function fetchBuilderContent<T>(modelName: string, options: any = {}) {
  const content = await builder.getAll(modelName, {
    ...options,
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
