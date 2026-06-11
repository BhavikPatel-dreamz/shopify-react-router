import { useCart } from "~/lib/useCart";
import { useEffect, useState } from "react";
import CartHeader from "./CartHeader";
import CartItemsList from "./CartItemsList";
import UpsellProducts from "./UpsellProducts";

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

const upsellProducts: UpsellProduct[] = [
  {
    id: "7566865563719",
    title: "REGULAR FIT GRAPHIC PRINT T-SHIRT",
    subtitle: "VAROL - BLACK",
    price: 3199,
    image: "https://86e75ac3.nitro.getn7.io/s/files/1/0752/6435/files/RR285246_9_-hm.webp?v=1779863234",
    url: "/products/varol-mens-t-shirt-black-1",
    variants: [
      { id: "42841820397639", size: "XS-36", price: 3199, available: true },
      { id: "42841820430407", size: "S-38", price: 3199, available: true },
      { id: "42841820463175", size: "M-40", price: 3199, available: true },
      { id: "42841820495943", size: "L-42", price: 3199, available: true },
      { id: "42841820528711", size: "XL-44", price: 3199, available: true },
      { id: "42841820561479", size: "XXL-46", price: 3199, available: true },
      { id: "42841820594247", size: "3XL-48", price: 3199, available: true },
    ]
  },
  {
    id: "7320162107463",
    title: "BREATHABLE ANTI-SLIP INVISIBLE SOCKS FOOT LINERS",
    subtitle: "SOK - BROWN",
    price: 899,
    image: "https://86e75ac3.nitro.getn7.io/s/files/1/0752/6435/files/BROWN_1.webp?v=1775039210",
    url: "/products/sok-mens-socks-brown",
    variants: [
      { id: "42120363180103", size: "FREE SIZE", price: 899, available: true }
    ]
  },
  {
    id: "7201622425671",
    title: "SLIM RFID EMBOSSED WALLET",
    subtitle: "ZILO - MAROON",
    price: 2499,
    image: "https://86e75ac3.nitro.getn7.io/s/files/1/0752/6435/files/ZILONEW_0003_Layer16.jpg?v=1745913528",
    url: "/products/zilo-mens-wallet-maroon",
    variants: [
      { id: "41593439387719", size: "ONE SIZE", price: 2499, available: true }
    ]
  }
];

export default function CartDrawer({ onClose }: { onClose?: () => void }) {
  const items = useCart((s) => s.items) as CartItemType[];
  const updateItemVariant = useCart((s) => s.updateItemVariant);
  const updateItemQuantity = useCart((s) => s.updateItemQuantity);
  const removeItem = useCart((s) => s.removeItem);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [editingItemKey, setEditingItemKey] = useState<string | null>(null);
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const [showPincodeModal, setShowPincodeModal] = useState(false);
  const [pincode, setPincode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState("");
  const [couponLoading, setCouponLoading] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const finalTotal = cartTotal - discountAmount;

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
      onClose();
    }
  };

  const handleApplyCoupon = () => {
    if (!couponCode) return;
    
    setCouponLoading(true);
    setCouponError("");
    
    setTimeout(() => {
      if (couponCode === "P5000" && cartTotal >= 5000) {
        const discount = cartTotal * 0.1;
        setDiscountAmount(discount);
        setAppliedCoupon(couponCode);
        setShowDiscountModal(false);
        setCouponCode("");
      } else if (couponCode === "P10000" && cartTotal >= 10000) {
        const discount = cartTotal * 0.14;
        setDiscountAmount(discount);
        setAppliedCoupon(couponCode);
        setShowDiscountModal(false);
        setCouponCode("");
      } else {
        setCouponError("Invalid coupon code or minimum order not met");
      }
      setCouponLoading(false);
    }, 500);
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setDiscountAmount(0);
  };

  const handleAddToCart = (product: UpsellProduct, variantId: string) => {
    console.log("Adding to cart:", product.title, variantId);
  };

  return (
    <>
      <div
        className={`PageOverlay ${isActive ? "is-visible" : ""}`}
        onClick={handleClose}
      />

      <div className={`cart-drawer-section ${isActive ? "active" : ""}`} data-cart_count={items.length}>
        <div className="section-inner">
          <div className="cart-drawer">
            <CartHeader itemCount={items.length} onClose={handleClose} />

            {/* GWP Section */}
            <div className="others-offers-wrapper" id="gwp-wrapper">
              <div className="free-ship-wrap">
                <div className="free-ship-data">
                  <div className="free-ship-text">
                    <div className="ship-text remain" id="gwp-message">
                      <p>Shop for <strong><span className="money">₹ {5000 - cartTotal > 0 ? 5000 - cartTotal : 0}</span></strong> to get 10% discount</p>
                    </div>
                  </div>

                  <div className="ship-wrapper">
                    <div className="ship-progress first">
                      <div className="progress" id="gwp-progress" style={{ width: `${Math.min((cartTotal / 15000) * 100, 100)}%` }}></div>
                    </div>

                    <div className="price-msgs" id="gwp-thresholds">
                      <div className="price-msg" style={{ width: "33.3333%" }}>
                        <span className="icon-bg logo"></span>
                        <span className="free-text">Shop Rs 5000</span>
                      </div>
                      <div className="price-msg" style={{ width: "33.3333%" }}>
                        <span className="icon-bg logo"></span>
                        <span className="free-text">Shop Rs 10000</span>
                      </div>
                      <div className="price-msg" style={{ width: "33.3333%" }}>
                        <span className="icon-bg logo"></span>
                        <span className="free-text">Shop Rs 15000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="cart-drawer-divider">
              <div className="divider-text">
                <p>Additional Discount on Pre-Paid | Free Returns and Exchange</p>
              </div>
            </div>

            {/* Delivery Change */}
            <div className="change-delivery-data-conatiner hide">
              DELIVER TO :
              <p className="applied-pincode"></p>
              |
              <p className="change-button" onClick={() => setShowPincodeModal(true)}>CHANGE</p>
            </div>

            {/* Pincode Modal */}
            <div className={`check-date-modal-wrapper ${showPincodeModal ? "active" : ""}`}>
              <div className="popup-overlay">
                <div className="check-pincode-for-order-popup-wrapper">
                  <div className="title-wrapper">
                    <h3 className="title-text">SELECT DELIVERY ADDRESS</h3>
                    <span className="close-discount-modal-wrapper" onClick={() => setShowPincodeModal(false)}>
                      <span className="icon icon-mobile-modal-cross">
                        <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.00049 1L11.9022 11.9017" strokeLinecap="round"></path>
                          <path d="M11.9019 1L1.00015 11.9017" strokeLinecap="round"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="estimated-delivery-input-wrapper">
                    <input 
                      type="number" 
                      placeholder="ENTER YOUR PINCODE" 
                      className="popup-pincode-input"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <button type="button" className="check-pincode-button">
                      <span>CHECK</span>
                      <div className="spinner"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="cart-drawer-inner" style={{ height: "calc(100% - 339px)" }}>
              <CartItemsList
                items={items}
                editingItemKey={editingItemKey}
                setEditingItemKey={setEditingItemKey}
                updateItemVariant={updateItemVariant}
                updateItemQuantity={updateItemQuantity}
                removeItem={removeItem}
              />

              <UpsellProducts products={upsellProducts} onAddToCart={handleAddToCart} />
            </div>

            {/* Bottom Section */}
            <div className="cart-bottom-wrapper">
              <div className="cart-bottom">
                <div className="checkout-details-wrapper">
                  <div className="checkout-details">
                    {discountAmount > 0 && (
                      <div className="detail discount-detail">
                        <div className="detail-title">Discounts</div>
                        <div className="detail-value">- ₹ {discountAmount.toLocaleString()}</div>
                      </div>
                    )}
                    <div className="detail rare-points available-rare-point-wrapper">
                      <div className="detail-title">Rare Points</div>
                      <div className="detail-value available-rare-point-inner">
                        <div className="reward-value-wrapper">
                          <span className="reward-login reward-login-js">login</span>
                          <div className="info-icon">
                            <span className="icon icon-rare-point-info">
                              <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.77661 9.43176C4.56479 9.43176 3.4026 8.9905 2.54571 8.20506C1.68882 7.41962 1.20743 6.35433 1.20743 5.24355C1.20743 4.13277 1.68882 3.06748 2.54571 2.28204C3.4026 1.4966 4.56479 1.05535 5.77661 1.05535C6.98844 1.05535 8.15063 1.4966 9.00752 2.28204C9.8644 3.06748 10.3458 4.13277 10.3458 5.24355C10.3458 6.35433 9.8644 7.41962 9.00752 8.20506C8.15063 8.9905 6.98844 9.43176 5.77661 9.43176ZM5.77661 10.0301C7.16155 10.0301 8.48977 9.52578 9.46907 8.62813C10.4484 7.73049 10.9985 6.51302 10.9985 5.24355C10.9985 3.97409 10.4484 2.75662 9.46907 1.85897C8.48977 0.961324 7.16155 0.457031 5.77661 0.457031C4.39167 0.457031 3.06346 0.961324 2.08415 1.85897C1.10485 2.75662 0.554688 3.97409 0.554688 5.24355C0.554688 6.51302 1.10485 7.73049 2.08415 8.62813C3.06346 9.52578 4.39167 10.0301 5.77661 10.0301Z" fill="#000000"></path>
                                <path d="M6.383 4.40228L4.88823 4.574L4.8347 4.80136L5.12844 4.85102C5.32034 4.8929 5.3582 4.95632 5.31643 5.13163L4.8347 7.20659C4.70807 7.74327 4.90324 7.99576 5.36212 7.99576C5.71786 7.99576 6.13105 7.84499 6.31838 7.63797L6.37582 7.38907C6.24528 7.49438 6.05467 7.53626 5.92804 7.53626C5.74854 7.53626 5.68327 7.42078 5.72961 7.21736L6.383 4.40228ZM6.4287 3.153C6.4287 3.31169 6.35992 3.46387 6.23751 3.57607C6.1151 3.68828 5.94907 3.75132 5.77595 3.75132C5.60284 3.75132 5.43681 3.68828 5.3144 3.57607C5.19198 3.46387 5.12321 3.31169 5.12321 3.153C5.12321 2.99432 5.19198 2.84214 5.3144 2.72993C5.43681 2.61772 5.60284 2.55469 5.77595 2.55469C5.94907 2.55469 6.1151 2.61772 6.23751 2.72993C6.35992 2.84214 6.4287 2.99432 6.4287 3.153Z" fill="#000000"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="coupon-wrapper">
                    <span className="apply-btn-wrapper" onClick={() => setShowDiscountModal(true)}>
                      <span>Apply Coupons</span>
                      <span className="icon icon-menu-close-btn">
                        <svg viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.59082 1L1.00005 8.49933L8.59082 16" stroke="#000000" strokeWidth="1" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </span>
                    
                    {appliedCoupon && (
                      <div className="coupon-code-applied-wrapper">
                        <div className="coupon-code-applied-text-main">
                          <div className="coupon-code-text">{appliedCoupon}</div>
                          <div className="coupon-code-applied-text">APPLIED</div>
                          <div className="you-saved-text">You saved <span className="saved-amount">₹ {discountAmount.toLocaleString()}</span></div>
                        </div>
                        <div className="coupon-code-applied-link-applied">
                          <div className="coupon-code-link-text" onClick={handleRemoveCoupon}>REMOVE</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="checkbox-wrapper">
                  <div className="checkbox-inner">
                    <input type="checkbox" id="gift-card-input" name="gift-card-input" className="checkbox-input" />
                    <label htmlFor="gift-card-input">I Have Gift Card</label>
                  </div>
                </div>

                <a href="/checkout" className="checkout-btn">
                  CHECKOUT / <span className="money">₹ {finalTotal.toLocaleString()}</span>
                </a>
              </div>
            </div>

            {/* Discount Modal */}
            <div className={`discount-modal-wrapper ${showDiscountModal ? "active" : ""}`}>
              <div className="discount-overlay">
                <div className="discount-modal">
                  <div className="discount-header">
                    <h3>AVAILABLE COUPONS</h3>
                    <span className="close-discount-modal" onClick={() => setShowDiscountModal(false)}>
                      <span className="icon icon-mobile-modal-cross">
                        <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.00049 1L11.9022 11.9017" strokeLinecap="round"></path>
                          <path d="M11.9019 1L1.00015 11.9017" strokeLinecap="round"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="discount-content">
                    <div className="discount-form-main">
                      <div className="discount-form">
                        <div className="discount-form-inner">
                          <input 
                            type="text" 
                            className="discount-form-input" 
                            placeholder="ENTER COUPON CODE"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                          />
                          <button 
                            type="button" 
                            className={`discount-form-button ${couponLoading ? "loading" : ""}`}
                            onClick={handleApplyCoupon}
                            disabled={couponLoading}
                          >
                            <span className="text-wrap default-text">APPLY</span>
                            <span className="text-wrap loading-text">Loading...</span>
                          </button>
                        </div>
                        {couponError && <div className="discount-form-result error-msg active">{couponError}</div>}
                      </div>
                    </div>

                    <div className="coupon-code-list-wrapper">
                      <div className={`coupon-code-list ${cartTotal < 10000 ? "disabled" : ""}`}>
                        <div className="discount-head">
                          <div className="discount-title-description-wrapper">
                            <div className="discount-title" data-code="P10000">P10000</div>
                            <div className="discount-links">
                              <div 
                                className="copy-discount"
                                onClick={() => {
                                  if (cartTotal >= 10000) {
                                    setCouponCode("P10000");
                                    handleApplyCoupon();
                                  }
                                }}
                              >
                                APPLY
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="discount-description">
                          <p>Minimum Rs. 1400 off on purchase of Rs. 10,000 and above on prepaid orders.</p>
                        </div>
                      </div>

                      <div className={`coupon-code-list ${cartTotal < 5000 ? "disabled" : ""}`}>
                        <div className="discount-head">
                          <div className="discount-title-description-wrapper">
                            <div className="discount-title" data-code="P5000">P5000</div>
                            <div className="discount-links">
                              <div 
                                className="copy-discount"
                                onClick={() => {
                                  if (cartTotal >= 5000) {
                                    setCouponCode("P5000");
                                    handleApplyCoupon();
                                  }
                                }}
                              >
                                APPLY
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="discount-description">
                          <p>Additional 10% off on purchase of Rs. 5000 and above on prepaid orders.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}