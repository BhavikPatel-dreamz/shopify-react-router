import { Link, useLocation } from "react-router";

const logos = {
  default: {
    href: "/",
    src: "https://cdn.shopify.com/s/files/1/0752/6435/files/hor_1_ac34ebd3-4498-4f64-b50b-ae6bd5404df8.png?v=1720351640",
  },

  women: {
    href: "/women",
    src: "https://cdn.shopify.com/s/files/1/0752/6435/files/LOGO_RAREISM_750_X_541_light_1d28ee09-7205-49c6-aec4-c4b4826dccb2.png?v=1757083866",
  },

  kids: {
    href: "/kids",
    src: "https://cdn.shopify.com/s/files/1/0752/6435/files/rsm_black-1.png?v=1720346771",
  },

  shoes: {
    href: "/shoes",
    src: "https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41820.png?v=1720342909",
  },
};

const navLink: React.CSSProperties = {
  textDecoration: "none",
  color: "#000",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "1px",
};

export default function Header() {
  const location = useLocation();

  let currentLogo = logos.default;

  if (location.pathname.startsWith("/women")) {
    currentLogo = logos.women;
  }

  if (location.pathname.startsWith("/kids")) {
    currentLogo = logos.kids;
  }

  if (location.pathname.startsWith("/shoes")) {
    currentLogo = logos.shoes;
  }

  return (
    <header
      style={{
        borderBottom: "1px solid #e5e5e5",
        background: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 60px",
        }}
      >
        {/* Left Side - Navigation Links */}
        <nav
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <Link to="/men" style={navLink}>
            MEN
          </Link>
          <Link to="/women" style={navLink}>
            WOMEN
          </Link>
          <Link to="/kids" style={navLink}>
            KIDS
          </Link>
          <Link to="/shoes" style={navLink}>
            SHOES
          </Link>
        </nav>

        {/* Center - Dynamic Logo */}
        <Link to={currentLogo.href}>
          <img
            src={currentLogo.src}
            alt="Brand Logo"
            style={{
              height: "38px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Right Side - Icons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Search */}
          <Link to="/search" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M11.1797 11.1895L14.1631 13.9994"
                stroke="black"
                strokeWidth="1.26354"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.96674 12.9462C10.2621 12.9462 12.9335 10.2748 12.9335 6.97943C12.9335 3.68409 10.2621 1.0127 6.96674 1.0127C3.6714 1.0127 1 3.68409 1 6.97943C1 10.2748 3.6714 12.9462 6.96674 12.9462Z"
                stroke="black"
                strokeWidth="1.26354"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Account */}
          <Link to="/account" aria-label="Account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
              width="18"
              height="18"
            >
              <path
                stroke="#000"
                d="M8.72493 0.742188C9.74932 0.742188 10.7318 1.14912 11.4561 1.87348C12.1805 2.59783 12.5874 3.58026 12.5874 4.60465C12.5874 5.62904 12.1805 6.61148 11.4561 7.33583C10.7318 8.06018 9.74932 8.46712 8.72493 8.46712C7.70054 8.46712 6.71811 8.06018 5.99376 7.33583C5.2694 6.61148 4.86247 5.62904 4.86247 4.60465C4.86247 3.58026 5.2694 2.59783 5.99376 1.87348C6.71811 1.14912 7.70054 0.742188 8.72493 0.742188ZM8.72493 11.6484C11.0745 11.6484 13.1759 12.1252 14.6715 12.873C16.1968 13.6356 16.9499 14.597 16.9499 15.5108V17.1921H0.5V15.5108C0.5 14.597 1.25304 13.6356 2.77838 12.873C4.27394 12.1252 6.3754 11.6484 8.72493 11.6484Z"
              />
            </svg>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" aria-label="Wishlist">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/Vector_5ef8fdd7-fe82-493a-9740-e9ce2077266f.svg?v=1738670882"
              alt="Wishlist"
              style={{
                width: "18px",
                height: "18px",
                display: "block",
              }}
            />
          </Link>

          {/* Cart with Badge */}
          <Link
            to="/cart"
            aria-label="Cart"
            style={{
              position: "relative",
            }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/Group_1171276473.svg?v=1738670982"
              alt="Cart"
              style={{
                width: "18px",
                height: "18px",
                display: "block",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                minWidth: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "#000",
                color: "#fff",
                fontSize: "9px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 4px",
              }}
            >
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}