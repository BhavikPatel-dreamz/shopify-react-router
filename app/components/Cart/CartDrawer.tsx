import { useCart } from "~/lib/useCart";
import { useEffect, useState } from "react";
import { CloseIcon, WishlistIcon } from "~/images/Icons";


export default function CartDrawer({
  onClose,
}: any) {
  const items = useCart((s) => s.items);

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    // ensure body class is set while drawer is mounted
    document.body.classList.add("cart-drawer-open");
    setIsActive(true);

    // observe external changes to body class and keep local state in sync
    const obs = new MutationObserver(() => {
      setIsActive(document.body.classList.contains("cart-drawer-open"));
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      obs.disconnect();
      document.body.classList.remove("cart-drawer-open");
    };
  }, []);

  const handleClose = () => {
    // remove active classes but keep component mounted
    document.body.classList.remove("cart-drawer-open");
    setIsActive(false);
    if (typeof onClose === "function") {
      try {
        onClose();
      } catch (e) {
        // ignore errors from external handler
      }
    }
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`PageOverlay ${isActive ? "is-visible" : ""}`}
        onClick={handleClose}
      />

      {/* DRAWER */}
      <div className={`cart-drawer-section ${isActive ? "active" : ""}`}>

        <div className="section-inner">
          <div className="cart-drawer">
            {/* HEADER */}
            <div className="cart-drawer-header">
              <div className="header-top">
                <div className="cart-title-wrapper">
                  <h2 className="cart-title">
                    BAG ({items.length})
                  </h2>
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
                        <img src="https://cdn.shopify.com/s/files/1/0752/6435/files/share-new.png" alt="share" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              {/* ITEMS */}
              <div className="cart-drawer-inner">
                <div className="cart-content-wrapper">
                  <div className="cart-content">
                    {items.map((item, index) => (
                      <div className="cart-item" key={index}>
                        <div className="cart-item-image-wrapper">
                          <div className="image-wrapper">
                            <img src={item.image} className="w-16 h-20 object-cover" width="400" height="500" />
                          </div>
                        </div>
                        <div className="cart-item-content-wrapper">
                          <div className="item-content-wrapper">
                            <div className="name-price">
                              <div className="name-variant">
                                <h3>
                                  {item.title}
                                </h3>
                                <h4 className="cart-size">
                                  SIZE: {item.size}
                                </h4>
                              </div>

                              <div className="item-price-wrapper">
                                <span className="money">
                                  ₹{item.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* CHECKOUT */}
            <div className="cart-bottom-wrapper">
              <div className="cart-bottom">
                <button className="checkout-btn">
                  CHECKOUT <span className="money"><span className="money">₹ 48,110</span></span>
                </button>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}