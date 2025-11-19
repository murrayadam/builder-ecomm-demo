import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts, useCategories, useBrands } from "@/hooks/use-shop-data";
import { BuilderContent, Product } from "@shared/types";
import { Filter, X } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const { data: products, isLoading: isLoadingProducts } = useProducts();
  const { data: categories, isLoading: isLoadingCategories } = useCategories();
  const { data: brands, isLoading: isLoadingBrands } = useBrands();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((item) => {
      const product = item.data;
      
      // Filter by Category
      if (selectedCategories.length > 0) {
        const categoryId = product.category?.value?.id;
        if (!categoryId || !selectedCategories.includes(categoryId)) {
          return false;
        }
      }

      // Filter by Brand
      if (selectedBrands.length > 0) {
        const brandId = product.brand?.value?.id;
        if (!brandId || !selectedBrands.includes(brandId)) {
          return false;
        }
      }

      return true;
    });
  }, [products, selectedCategories, selectedBrands]);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const toggleBrand = (id: string) => {
    setSelectedBrands((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-serif font-semibold text-lg">Filters</h3>
          {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="h-auto p-0 text-muted-foreground hover:text-primary"
            >
              Clear all
            </Button>
          )}
        </div>
        <Separator />
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-medium mb-4">Categories</h4>
        {isLoadingCategories ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : (
          <div className="space-y-3">
            {categories?.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`cat-${category.id}`} 
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                />
                <Label 
                  htmlFor={`cat-${category.id}`}
                  className="text-sm font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.data.name}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div>
        <h4 className="font-medium mb-4">Brands</h4>
        {isLoadingBrands ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : (
          <div className="space-y-3">
            {brands?.map((brand) => (
              <div key={brand.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`brand-${brand.id}`} 
                  checked={selectedBrands.includes(brand.id)}
                  onCheckedChange={() => toggleBrand(brand.id)}
                />
                <Label 
                  htmlFor={`brand-${brand.id}`}
                  className="text-sm font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {brand.data.name}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">Shop Our Collection</h1>
            <p className="text-muted-foreground">
              Curated gear for your next adventure.
            </p>
          </div>
          
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="py-6">
                <FilterSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {isLoadingProducts ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-square rounded-xl" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-muted/30 rounded-xl">
                <p className="text-lg text-muted-foreground mb-4">No products found matching your filters.</p>
                <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((item) => (
                  <ProductCard key={item.id} product={item.data} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden border-none shadow-none bg-transparent h-full flex flex-col">
      <CardContent className="p-0 relative aspect-square overflow-hidden rounded-xl bg-muted">
        {product.images && product.images[0] ? (
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
            No Image
          </div>
        )}
        {product.inStock === false && (
          <div className="absolute top-4 right-4 bg-destructive/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
            Out of Stock
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 px-0 flex-grow">
        <div className="flex justify-between w-full items-start gap-2">
          <div>
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
              {product.brand?.value?.data?.name || "Vista"}
            </p>
            <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-secondary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
          <span className="font-medium text-primary whitespace-nowrap">
            ${product.price?.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
      </CardFooter>
    </Card>
  );
}
