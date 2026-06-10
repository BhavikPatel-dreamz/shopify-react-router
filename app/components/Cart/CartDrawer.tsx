import { useCart } from "~/lib/useCart";
import { useEffect, useState } from "react";
import { CloseIcon, WishlistIcon } from "~/images/Icons";
import SizeSelectorCart from "./SizeSelectorCart";
import QuantitySelector from "../product/QuantitySelector";
import CartPrice from "./CartPrice";
import { RewardPoints } from "./RewardPoints";

export default function CartDrawer({ onClose }: any) {
  const items = useCart((s) => s.items);
  const updateItemVariant = useCart((s) => s.updateItemVariant);
  const updateItemQuantity = useCart((s) => s.updateItemQuantity);
  const removeItem = useCart((s) => s.removeItem);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [editingItemKey, setEditingItemKey] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add("cart-drawer-open");
    setIsActive(true);

    const obs = new MutationObserver(() => {
      setIsActive(document.body.classList.contains("cart-drawer-open"));
    });
    obs.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      obs.disconnect();
      document.body.classList.remove("cart-drawer-open");
    };
  }, []);

  const handleClose = () => {
    document.body.classList.remove("cart-drawer-open");
    setIsActive(false);
    if (typeof onClose === "function") {
      try {
        onClose();
      } catch (e) {}
    }
  };

  const handleRemove = (itemKey: string) => {
    removeItem(itemKey);
    if (editingItemKey === itemKey) {
      setEditingItemKey(null);
    }
  };

  return (
    <>
      <div
        className={`PageOverlay ${isActive ? "is-visible" : ""}`}
        onClick={handleClose}
      />

      <div className={`cart-drawer-section ${isActive ? "active" : ""}`}>
        <div className="section-inner">
          <div className="cart-drawer">
            <div className="cart-drawer-header">
              <div className="header-top">
                <div className="cart-title-wrapper">
                  <h2 className="cart-title">BAG ({items.length})</h2>
                </div>

                <div className="cart-drawer-close-btn">
                  <span className="icon icon-menu-close-btn">
                    <button onClick={handleClose}>
                      <CloseIcon />
                    </button>
                  </span>
                </div>
                <div className="top-icon-wrapper">
                  <div className="wishlist-page-icon">
                    <a href="/wishlist" aria-label="wishlist-icon">
                      <WishlistIcon />
                    </a>
                  </div>
                  <div className="side-cart-share-wrapper">
                    <div className="share-cart-icon share-cart-wrapper-js">
                      <a href="#" className="share-cart-btn">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0752/6435/files/share-new.png"
                          alt="share"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-drawer-inner">
              <div className="cart-content-wrapper">
                <div className="cart-content">
                  {items.map((item) => (
                    (() => {
                      const variants = item.product?.variants?.nodes ?? [];
                      const options = item.product?.options ?? [];

                      return (
                    <div className="cart-item" key={item.cartItemKey}>
                      <div className="cart-item-image-wrapper">
                        <div className="image-wrapper">
                          <img
                            src={item.image}
                            className="w-16 h-20 object-cover"
                            width="400"
                            height="500"
                            alt={item.title}
                          />
                        </div>
                      </div>
                      <div className="cart-item-content-wrapper">
                        <div className="item-content-wrapper">
                          <div className="name-price">
                            <div className="name-variant">
                              <h3>{item.title}</h3>
                              <h4 className="cart-size">
                                SIZE: {item.size}
                                <button
                                  type="button"
                                  onClick={() =>
                                    setEditingItemKey((prev) =>
                                      prev === item.cartItemKey
                                        ? null
                                        : item.cartItemKey,
                                    )
                                  }
                                >
                                  {editingItemKey === item.cartItemKey
                                    ? ""
                                    : "Edit Size"}
                                </button>
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
                              const variant = variants.find(
                                (v: any) => v.id === variantId,
                              );

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
                            onIncrease={() =>
                              updateItemQuantity(
                                item.cartItemKey,
                                item.quantity + 1,
                              )
                            }
                            onDecrease={() =>
                              updateItemQuantity(
                                item.cartItemKey,
                                Math.max(1, item.quantity - 1),
                              )
                            }
                            onChange={(value) =>
                              updateItemQuantity(item.cartItemKey, value)
                            }
                          />

                          <button className="remove" onClick={() => handleRemove(item.cartItemKey)}>
                          
                          <span className="icon icon-mobile-cross">
                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.42383 13.1953L13.1495 4.37349" stroke="#000000" strokeWidth="0.76"></path>
                              <path d="M4.36426 4.40625L13.2094 13.155" stroke="#000000" strokeWidth="0.76"></path>
                            </svg>
                          </span>
  
                          </button>
                        </div>

                        <div className="reward-points-wrapper">
                          <RewardPoints />
                        </div>
                      </div>
                       
                    </div>
                      );
                    })()
                  ))}
                  
                </div>
              </div>
             
            </div>

            <div className="cart-bottom-wrapper">
              <div className="cart-bottom">
                <button className="checkout-btn">
                  CHECKOUT{" "}
                  <span className="money">
                    <span className="money">₹ 48,110</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
