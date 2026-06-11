// app/components/Cart/CartHeader.tsx
import { useState } from "react";
import { CloseIcon, WishlistIcon } from "~/images/Icons";

interface CartHeaderProps {
  itemCount: number;
  onClose: () => void;
}

export default function CartHeader({ itemCount, onClose }: CartHeaderProps) {
  const [showShareOptions, setShowShareOptions] = useState(false);

  return (
    <div className="cart-drawer-header">
      <div className="header-top">
        <div className="cart-drawer-close-btn">
          <span className="icon icon-menu-close-btn" onClick={onClose}>
            <CloseIcon />
          </span>
        </div>

        <div className="cart-title-wrapper">
          <h3 className="cart-title">
            BAG (<span className="cart-count">{itemCount}</span>)
          </h3>
        </div>

        <div className="top-icon-wrapper">
          <div className="wishlist-page-icon">
            <a href="/wishlist" aria-label="wishlist-icon">
              <WishlistIcon />
            </a>
          </div>

          <div className="side-cart-share-wrapper">
            <div className="share-cart-icon share-cart-wrapper-js">
              <a 
                href="javascript:void(0);" 
                className="share-cart-btn"
                onClick={() => setShowShareOptions(!showShareOptions)}
              >
                <img 
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/share-new.png" 
                  alt="share" 
                  className="blank-icon" 
                  width="16" 
                  height="16"
                />
                <span className="close-icon">
                  <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                    <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                  </svg>
                </span>
              </a>
            </div>

            {showShareOptions && (
              <div className="share-cart-icon-list active">
                <a className="cart-share-item" href="#" target="_blank" rel="noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1226.37 1226.37">
                    <path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" fill="#000000"></path>
                  </svg>
                  X
                </a>
                <a className="cart-share-item" href="#" target="_blank" rel="noopener">
                  <svg className="Icon Icon--facebook" viewBox="0 0 9 17">
                    <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                  </svg>
                  Facebook
                </a>
                <a className="cart-share-item" href="#" target="_blank" rel="noopener">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"></path>
                  </svg>
                  Whatsapp
                </a>
                <a className="cart-share-item copy-url-js" href="javascript:void(0);">
                  Copy link
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}