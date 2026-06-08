import ProductCard from "./ProductCard";

interface Props {
  products: any[];
  isLoadingMore?: boolean;
}

export default function CollectionGrid({
  products,
  isLoadingMore = false,
}: Props) {
  return (
    <div className="product-grid-wrapper py-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Loader state (when fetching more products) */}
      {isLoadingMore && (
        <div className="py-10 text-center">
          <p className="text-sm opacity-60">
            Loading more products...
          </p>
        </div>
      )}
    </div>
  );
}