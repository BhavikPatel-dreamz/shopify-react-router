import { Link, useLocation } from "react-router";
import "../../styles/header.css";

const logoSize = {
  default: {
    height: "38px",
    width: "auto",
  },
  women: {
    height: "60px",
    width: "auto",
  },
  kids: {
    height: "60px",
    width: "auto",
  },
  shoes: {
    height: "60px",
    width: "auto",
  },
};

const logos = {
  default: {
    href: "/",
    src: "https://cdn.shopify.com/s/files/1/0752/6435/files/hor_1_ac34ebd3-4498-4f64-b50b-ae6bd5404df8.png?v=1720351640",
    lightSrc: "https://cdn.shopify.com/s/files/1/0752/6435/files/hor_1_ac34ebd3-4498-4f64-b50b-ae6bd5404df8.png?v=1720351640",
    darkSrc: "https://cdn.shopify.com/s/files/1/0752/6435/files/hor_2_1dd668d6-9d4b-40ca-9a09-0f65a289eea7.png?v=1720351632",
  },
  women: {
    href: "/pages/rareism",
    src: "https://cdn.shopify.com/s/files/1/0752/6435/files/LOGO_RAREISM_750_X_541_light_1d28ee09-7205-49c6-aec4-c4b4826dccb2.png?v=1757083866",
    lightSrc: "https://cdn.shopify.com/s/files/1/0752/6435/files/LOGO_RAREISM_750_X_541_light_1d28ee09-7205-49c6-aec4-c4b4826dccb2.png?v=1757083866",
    darkSrc: "https://cdn.shopify.com/s/files/1/0752/6435/files/LOGO_RAREISM_750_X_540_Dark_b3bd1fca-9554-4a29-929f-dcb32110746c.png?v=1757083907",
  },
  kids: {
    href: "/pages/kids",
    src: "https://cdn.shopify.com/s/files/1/0752/6435/files/rsm_black-1.png?v=1720346771",
    lightSrc: "https://cdn.shopify.com/s/files/1/0752/6435/files/rsm_black-1.png?v=1720346771",
    darkSrc: "https://cdn.shopify.com/s/files/1/0752/6435/files/rsm_black_856240fb-9e57-4ab4-b03c-ba0d89c95cae.png?v=1720346775",
  },
  shoes: {
    href: "/pages/rarez-landing-page",
    src: "https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41820.png?v=1720342909",
    lightSrc: "https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41820.png?v=1720342909",
    darkSrc: "https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41821.png?v=1720342911",
  },
};

export default function Header() {
  const location = useLocation();

  // Pages that need transparent header (ALL these pages have transparent background)
  const transparentHeaderPages = [
    "/pages/rare-rabbit",
    "/pages/rareism",
    "/pages/kids",
    "/pages/rarez-landing-page",
  ];
  
  const isTransparentHeader = transparentHeaderPages.includes(location.pathname);
  
  // Pages with WHITE text (MEN, KIDS pages) - Logo should be WHITE
  const whiteTextPages = [
    "/pages/rare-rabbit",
    "/pages/kids",
  ];
  
  // Pages with BLACK text (WOMEN, SHOES pages) - Logo should be BLACK
  const blackTextPages = [
    "/pages/rareism",
    "/pages/rarez-landing-page",
  ];
  
  const isWhiteText = whiteTextPages.includes(location.pathname);
  const isBlackText = blackTextPages.includes(location.pathname);
  
  // Set text color based on page
  const textColor = isWhiteText ? "#fff" : (isBlackText ? "#000" : "#000");
  
  // Logo should match text color
  const needWhiteLogo = isWhiteText;
  const needBlackLogo = isBlackText;

  let currentLogo = logos.default;
  let currentLogoKey = "default";

  if (location.pathname === "/pages/rareism") {
    currentLogo = logos.women;
    currentLogoKey = "women";
  } else if (location.pathname === "/pages/kids") {
    currentLogo = logos.kids;
    currentLogoKey = "kids";
  } else if (location.pathname === "/pages/rarez-landing-page") {
    currentLogo = logos.shoes;
    currentLogoKey = "shoes";
  } else if (location.pathname === "/pages/rare-rabbit") {
    currentLogo = logos.default;
    currentLogoKey = "default";
  }

  // Get logo size based on current logo
  const currentLogoSize = logoSize[currentLogoKey as keyof typeof logoSize];

  // Choose logo based on required color
  let logoSrc;
  if (needWhiteLogo) {
    // Use darkSrc for white logo (since dark logo appears white on dark background)
    logoSrc = currentLogo.darkSrc;
  } else if (needBlackLogo) {
    // Use lightSrc for black logo (since light logo appears black on light background)
    logoSrc = currentLogo.lightSrc;
  } else {
    logoSrc = currentLogo.lightSrc;
  }

  return (
    <header className={`header ${isTransparentHeader ? "header-transparent" : "header-white"}`}>
      <div className="header-container">
        {/* Left Side - Navigation Links */}
        <nav className="header-nav">
          <Link 
            to="/pages/rare-rabbit" 
            className="header-nav-link"
            style={{ color: textColor }}
          >
            MEN
          </Link>
          <Link 
            to="/pages/rareism" 
            className="header-nav-link"
            style={{ color: textColor }}
          >
            WOMEN
          </Link>
          <Link 
            to="/pages/kids" 
            className="header-nav-link"
            style={{ color: textColor }}
          >
            KIDS
          </Link>
          <Link 
            to="/pages/rarez-landing-page" 
            className="header-nav-link"
            style={{ color: textColor }}
          >
            SHOES
          </Link>
        </nav>

        {/* Center - Dynamic Logo with Theme Support */}
        <Link to={currentLogo.href} className="header-logo">
          <img
            src={logoSrc}
            alt="Brand Logo"
            className="header-logo-img"
            style={{
              height: currentLogoSize.height,
              width: currentLogoSize.width,
              filter: needWhiteLogo ? "none" : "none",
            }}
          />
        </Link>

        {/* Right Side - Icons */}
        <div className="header-icons">
          {/* Search */}
          <Link to="/search" aria-label="Search" className="header-icon-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="header-icon-svg"
              style={{ stroke: textColor }}
            >
              <path
                d="M11.1797 11.1895L14.1631 13.9994"
                strokeWidth="1.26354"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.96674 12.9462C10.2621 12.9462 12.9335 10.2748 12.9335 6.97943C12.9335 3.68409 10.2621 1.0127 6.96674 1.0127C3.6714 1.0127 1 3.68409 1 6.97943C1 10.2748 3.6714 12.9462 6.96674 12.9462Z"
                strokeWidth="1.26354"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Account */}
          <Link to="/account" aria-label="Account" className="header-icon-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
              width="18"
              height="18"
              className="header-icon-svg"
              style={{ stroke: textColor }}
            >
              <path
                d="M8.72493 0.742188C9.74932 0.742188 10.7318 1.14912 11.4561 1.87348C12.1805 2.59783 12.5874 3.58026 12.5874 4.60465C12.5874 5.62904 12.1805 6.61148 11.4561 7.33583C10.7318 8.06018 9.74932 8.46712 8.72493 8.46712C7.70054 8.46712 6.71811 8.06018 5.99376 7.33583C5.2694 6.61148 4.86247 5.62904 4.86247 4.60465C4.86247 3.58026 5.2694 2.59783 5.99376 1.87348C6.71811 1.14912 7.70054 0.742188 8.72493 0.742188ZM8.72493 11.6484C11.0745 11.6484 13.1759 12.1252 14.6715 12.873C16.1968 13.6356 16.9499 14.597 16.9499 15.5108V17.1921H0.5V15.5108C0.5 14.597 1.25304 13.6356 2.77838 12.873C4.27394 12.1252 6.3754 11.6484 8.72493 11.6484Z"
              />
            </svg>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" aria-label="Wishlist" className="header-icon-link">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/Vector_5ef8fdd7-fe82-493a-9740-e9ce2077266f.svg?v=1738670882"
              alt="Wishlist"
              style={{ filter: needWhiteLogo ? "brightness(0) invert(1)" : "none" }}
              className="header-wishlist-img"
            />
          </Link>

          {/* Cart with Badge */}
          <Link
            to="/cart"
            aria-label="Cart"
            className="header-cart-link"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/Group_1171276473.svg?v=1738670982"
              alt="Cart"
              style={{ filter: needWhiteLogo ? "brightness(0) invert(1)" : "none" }}
              className="header-cart-img"
            />
            <span
              className={`header-cart-badge ${isWhiteText ? "header-cart-badge-white" : "header-cart-badge-black"}`}
            >
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}