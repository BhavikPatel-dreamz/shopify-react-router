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
    <div className="py-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {isLoadingMore && (
        <div className="py-8 text-center text-sm opacity-70">
          Loading more products...
        </div>
      )}
    </div>
  );
}
