// app/components/Cart/CartItemsList.tsx
import SizeSelectorCart from "./SizeSelectorCart";
import QuantitySelector from "../product/QuantitySelector";
import CartPrice from "./CartPrice";
import { RewardPoints } from "./RewardPoints";

interface CartItemType {
  cartItemKey: string;
  id: string;
  title: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
  selectedVariantId: string;
  product?: {
    id: string;
    title: string;
    variants?: {
      nodes: Array<{
        id: string;
        title: string;
        price: { amount: string; currencyCode: string };
        availableForSale?: boolean;
        sku?: string;
        quantityAvailable?: number;
      }>;
    };
    options?: Array<{
      name: string;
      values: string[];
    }>;
  };
  url?: string;
}

interface CartItemsListProps {
  items: CartItemType[];
  editingItemKey: string | null;
  setEditingItemKey: (key: string | null) => void;
  updateItemVariant: (itemKey: string, data: { selectedVariantId: string; size: string; price: number }) => void;
  updateItemQuantity: (itemKey: string, quantity: number) => void;
  removeItem: (itemKey: string) => void;
}

const getProductUrl = (item: CartItemType): string => {
  if (item.url) return item.url;
  if (item.product?.id) return `/products/${item.product.id}`;
  return "#";
};

export default function CartItemsList({
  items,
  editingItemKey,
  setEditingItemKey,
  updateItemVariant,
  updateItemQuantity,
  removeItem,
}: CartItemsListProps) {
  const handleRemove = (itemKey: string) => {
    removeItem(itemKey);
    if (editingItemKey === itemKey) {
      setEditingItemKey(null);
    }
  };

  return (
    <div className="cart-content-wrapper">
      <div className="cart-content">
        {items.map((item) => {
          const variants = item.product?.variants?.nodes ?? [];
          const options = item.product?.options ?? [];
          const productUrl = getProductUrl(item);
          
          return (
            <div className="cart-item" key={item.cartItemKey}>
              <div className="loader-cart"></div>
              <div className="cart-item-image-wrapper">
                <div className="image-wrapper">
                  <img 
                    src={item.image} 
                    width="400" 
                    height="500" 
                    alt={item.title} 
                    loading="eager" 
                  />
                </div>
              </div>

              <div className="cart-item-content-wrapper">
                <div className="item-content-wrapper">
                  <div className="name-price">
                    <div className="name-variant">
                      <h3>
                        <a href={productUrl} className="cart-item-title-link">
                          {item.title}
                        </a>
                      </h3>
                      <h4>
                        <span>SIZE: {item.size}</span>
                        <span 
                          className="edit_size" 
                          onClick={() => setEditingItemKey(editingItemKey === item.cartItemKey ? null : item.cartItemKey)}
                        >
                          Edit Size
                        </span>
                      </h4>
                    </div>

                    <div className="item-price-wrapper">
                      <CartPrice
                        variants={variants}
                        selectedVariantId={item.selectedVariantId}
                      />
                    </div>
                  </div>

                  <SizeSelectorCart
                    variants={variants}
                    options={options}
                    selectedVariantId={item.selectedVariantId}
                    onSelectVariant={(variantId) => {
                      const variant = variants.find((v: any) => v.id === variantId);
                      updateItemVariant(item.cartItemKey, {
                        selectedVariantId: variantId,
                        size: variant?.title || item.size,
                        price: Number(variant?.price?.amount || 0),
                      });
                    }}
                    isEditingSize={editingItemKey === item.cartItemKey}
                  />
                </div>

                <div className="item-actions-wrapper">
                  <QuantitySelector
                    quantity={item.quantity}
                    onIncrease={() => updateItemQuantity(item.cartItemKey, item.quantity + 1)}
                    onDecrease={() => updateItemQuantity(item.cartItemKey, Math.max(1, item.quantity - 1))}
                    onChange={(value) => updateItemQuantity(item.cartItemKey, value)}
                  />

                  <div className="remove" onClick={() => handleRemove(item.cartItemKey)}>
                    <span className="icon icon-mobile-cross">
                      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.42383 13.1953L13.1495 4.37349" stroke="#000000" strokeWidth="0.76"></path>
                        <path d="M4.36426 4.40625L13.2094 13.155" stroke="#000000" strokeWidth="0.76"></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="reward-points-wrapper">
                  <RewardPoints />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}