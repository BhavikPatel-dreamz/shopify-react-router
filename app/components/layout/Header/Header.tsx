import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";

import {
  SearchIcon,
  AccountIcon,
  WishlistIcon,
  CartIcon,
} from "~/images/Icons";

import MegaMenu from "./MegaMenu";
import { megaMenuData } from "~/data/megaMenuData";
import "~/styles/header.css";

const logos = {
  home: {
    light:
      "https://86e75ac3.nitro.getn7.io/cdn/shop/files/hor_1_ac34ebd3-4498-4f64-b50b-ae6bd5404df8.png",
    dark:
      "https://86e75ac3.nitro.getn7.io/cdn/shop/files/hor_1_ac34ebd3-4498-4f64-b50b-ae6bd5404df8.png",
    href: "/",
  },

  men: {
    light:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rare-rabbit-white.png",
    dark:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/hor_1_ac34ebd3-4498-4f64-b50b-ae6bd5404df8.png?v=1720351640",
    href: "/men",
  },

  women: {
    light:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rareism_white.png",
    dark:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/LOGO_RAREISM_750_X_541_light_1d28ee09-7205-49c6-aec4-c4b4826dccb2.png?v=1757083866",
    href: "/women",
  },

  kids: {
    light:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rsm_white.png",
    dark:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rsm_black-1.png?v=1720346771",
    href: "/kids",
  },

  shoes: {
    light:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rarez_white.png",
    dark:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41820.png?v=1720342909",
    href: "/shoes",
  },
};

export default function Header() {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  let logo = logos.home;

  if (location.pathname.startsWith("/women")) {
    logo = logos.women;
  } else if (location.pathname.startsWith("/kids")) {
    logo = logos.kids;
  } else if (location.pathname.startsWith("/shoes")) {
    logo = logos.shoes;
  } else if (location.pathname.startsWith("/men")) {
    logo = logos.men;
  }

  const logoSrc =
    isHome && !scrolled
      ? logo.light
      : logo.dark;

  const darkFont = logoSrc === logo.dark;

  return (
    <header
      className={`
        header-wrapper
        ${isHome ? "header-transparent" : ""}
        ${location.pathname === "/men" ||
              location.pathname === "/women" ||
              location.pathname === "/kids" ||
              location.pathname === "/shoes"
              ? "header-transparent-landing-page"
              : ""
            }
        ${darkFont ? "dark-font" : ""}
      `}
    >
      <div className="header-inner">
        {/* LEFT PART */}

        <div className="left-part xs-hide medium-hide">
          <nav className="header-main-nav">
            <ul className="horizontal-list-wrapper">
              {[
                {
                  label: "MEN",
                  path: "/men",
                  type: "men",
                },
                {
                  label: "WOMEN",
                  path: "/women",
                  type: "women",
                },
                {
                  label: "KIDS",
                  path: "/kids",
                  type: "kids",
                },
                {
                  label: "SHOES",
                  path: "/shoes",
                  type: "shoes",
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className={`main-link ${activeMenu === item.label ||
                      location.pathname.startsWith(item.path)
                      ? "active"
                      : ""
                    }`}
                  data-type={item.type}
                  onMouseEnter={() => {
                    setOpenMenu(item.label);
                    setActiveMenu(item.label);
                  }}
                  onMouseLeave={() => {
                    setOpenMenu(null);
                    setActiveMenu(null);
                  }}
                >
                  <Link
                    to={item.path}
                    className={`parent-link ${location.pathname.startsWith(
                      item.path
                    )
                      ? "parent-active"
                      : ""
                      }`}
                  >
                    {item.label}
                    <span className="link-spacer">
                      menu
                    </span>
                  </Link>

                  <MegaMenu
                    sections={
                      megaMenuData[
                      item.label.toLowerCase() as keyof typeof megaMenuData
                      ]
                    }
                    isOpen={openMenu === item.label}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* MIDDLE PART */}

        <div
          className={` middle-part
           ${location.pathname.startsWith("/women")
              ? "rareism-brand"
              : location.pathname.startsWith("/kids")
                ? "rare-kid-brand"
                : location.pathname.startsWith("/shoes")
                  ? "rare-shoes-brand"
                  : location.pathname.startsWith("/men")
                    ? "rare-rabbit-brand"
                    : "home-brand"
            }
        `}
        >
          <div className="header-logo-wrapper">
            <div className={`header-logo-inner
                ${scrolled
                  ? "dark-logo-active"
                  : "light-logo-active"
                }
                ${location.pathname === "/men" ||
                  location.pathname === "/women" ||
                  location.pathname === "/kids" ||
                  location.pathname === "/shoes"
                  ? "landing-page-logo"
                  : ""
                }
              `} 
            >
              <Link to={logo.href} className={`brand-image
                  ${location.pathname.startsWith("/women")
                      ? "rareism-image"
                      : location.pathname.startsWith("/kids")
                        ? "rare-kid-image"
                        : location.pathname.startsWith("/shoes")
                          ? "rare-footwear-image"
                          : location.pathname.startsWith("/men")
                            ? "rare-rabbit-image"
                            : "home-image"
                    }
                `}
              >
                <img
                  src={logoSrc}
                  alt="logo"
                  className="brand-logo"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT PART */}

        <div className="right-part xs-hide medium-hide">
          <div className="right-content">
            <div className="second-nav-wrapper">
              <ul className="second-nav-inner">
                <li>
                  <Link
                    to="/search"
                    className="header-search-icon-wrapper"
                    aria-label="search"
                  >
                    <SearchIcon />
                  </Link>
                </li>

                <li className="second-nav-content">
                  <Link
                    to="/account"
                    aria-label="account"
                  >
                    <AccountIcon />
                  </Link>
                </li>

                <li className="second-nav-content">
                  <Link
                    to="/wishlist"
                    className="wishlist-button"
                    aria-label="wishlist"
                  >
                    <WishlistIcon />
                  </Link>
                </li>

                <li className="second-nav-content">
                  <Link
                    to="/cart"
                    className="header-cart-btn"
                    aria-label="cart"
                  >
                    <CartIcon />

                    <span className="Header__CartCount cart-count">
                      0
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND STICKY NAVIGATION */}

      <div className={` header-bottom xs-show ${scrolled ? "fix-top" : ""} ${isHome ? "index-page" : ""} `} >
        <div className="title-label">
          <Link to="/men">MEN</Link>
        </div>

        <div className="title-label">
          <Link to="/women">WOMEN</Link>
        </div>

        <div className="title-label">
          <Link to="/kids">KIDS</Link>
        </div>

        <div className="title-label">
          <Link to="/shoes">SHOES</Link>
        </div>
      </div>
    </header>
  );
}