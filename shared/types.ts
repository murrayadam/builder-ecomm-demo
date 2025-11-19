export interface BuilderContent<T = any> {
  id: string;
  name: string;
  data: T;
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface Brand {
  name: string;
  slug: string;
  description?: string;
  website?: string;
  country?: string;
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category?: { value: BuilderContent<Category> };
  brand?: { value: BuilderContent<Brand> };
  inStock: boolean;
  rating?: number;
  isFeatured?: boolean;
}
