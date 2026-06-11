// app/components/Cart/UpsellProducts.tsx

interface UpsellProduct {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  comparePrice?: number;
  discount?: number;
  image: string;
  url: string;
  variants: Array<{
    id: string;
    size: string;
    price: number;
    available: boolean;
  }>;
}

interface UpsellProductsProps {
  products: UpsellProduct[];
  onAddToCart: (product: UpsellProduct, variantId: string) => void;
}

export default function UpsellProducts({ products, onAddToCart }: UpsellProductsProps) {
  return (
    <div className="side-cart-upsell-products-wrapper">
      <div className="upsell-products">
        <div className="upsell-products-heading">YOU MAY ALSO LIKE</div>
        <div className="upsell-product-wrapper">
          {products.map((product) => (
            <div key={product.id} className="upsell-product-card">
              <div className="product-main product-main-js">
                <div className="product-main-inner">
                  <div className="product-image-wrap">
                    <a className="product-link" href={product.url}>
                      <div className="image-inner">
                        <img src={product.image} alt={product.title} />
                      </div>
                    </a>
                  </div>
                  <div className="product-detail">
                    <div className="product-title-price">
                      <a className="product-link" href={product.url}>
                        <h6 className="main-title">{product.title}</h6>
                        <h4 className="sub-title">{product.subtitle}</h4>
                      </a>
                      <div className="price-wrapper">
                        <div className="product-price">
                          <div className="regular-price-wrapper">
                            <div className="main-price">
                              <span className="money">₹ {product.price.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-wrapper">
                    <button 
                      type="submit" 
                      className="upsell-product-js add-to-cart-button button-full border-button"
                      onClick={() => {
                        const availableVariant = product.variants.find(v => v.available);
                        if (availableVariant) {
                          onAddToCart(product, availableVariant.id);
                        }
                      }}
                    >
                      <span className="text">ADD TO BAG</span>
                      <span className="loader-btn"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}