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
      "https://86e75ac3.nitro.getn7.io/cdn/shop/files/hor_2_1dd668d6-9d4b-40ca-9a09-0f65a289eea7.png",
    href: "/",
  },

  men: {
    light:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rare-rabbit-white.png",
    dark:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/hor_1_ac34ebd3-4498-4f64-b50b-ae6bd5404df8.png?v=1720351640",
    href: "/pages/rare-rabbit",
  },

  women: {
    light:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rareism_white.png",
    dark:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/LOGO_RAREISM_750_X_541_light_1d28ee09-7205-49c6-aec4-c4b4826dccb2.png?v=1757083866",
    href: "/pages/rareism",
  },

  kids: {
    light:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rsm_white.png",
    dark:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rsm_black-1.png?v=1720346771",
    href: "/pages/kids",
  },

  shoes: {
    light:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/rarez_white.png",
    dark:
      "https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41820.png?v=1720342909",
    href: "/pages/rarez-landing-page",
  },
};

export default function Header() {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<"light" | "dark">("light");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sections =
        document.querySelectorAll("[data-header]");

      if (!sections.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const theme =
              (entry.target.getAttribute("data-header") as
                | "light"
                | "dark") || "light";

            setHeaderTheme(theme);
          });
        },
        {
          threshold: 0.5,
        }
      );

      sections.forEach((section) =>
        observer.observe(section)
      );

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  let logo = logos.home;

  if (location.pathname.startsWith("/pages/rareism")) {
    logo = logos.women;
  } else if (location.pathname.startsWith("/pages/kids")) {
    logo = logos.kids;
  } else if (location.pathname.startsWith("/pages/rarez-landing-page")) {
    logo = logos.shoes;
  } else if (location.pathname.startsWith("/pages/rare-rabbit")) {
    logo = logos.men;
  }

  const logoSrc =
    headerTheme === "dark"
      ? logo.light
      : logo.dark;

  const darkFont =
    headerTheme === "light";


  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector(
        ".header-wrapper"
      ) as HTMLElement;

      if (header) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${header.offsetHeight}px`
        );
      }
    };

    updateHeaderHeight();

    window.addEventListener(
      "resize",
      updateHeaderHeight
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateHeaderHeight
      );
  }, []);


  return (
    <header className={`header-wrapper ${isHome ? "header-transparent" : ""} ${headerTheme === "dark" ? "light-font" : "dark-font"} ${hoveredLink ? "header-hovered" : ""} `} >
      <div className="header-inner">
        {/* LEFT PART */}

        <div className="left-part xs-hide medium-hide">
          <nav className="header-main-nav">
            <ul className="horizontal-list-wrapper">
              {[
                {
                  label: "MEN",
                  path: "/pages/rare-rabbit",
                  type: "men",
                },
                {
                  label: "WOMEN",
                  path: "/pages/rareism",
                  type: "women",
                },
                {
                  label: "KIDS",
                  path: "/pages/kids",
                  type: "kids",
                },
                {
                  label: "SHOES",
                  path: "/pages/rarez-landing-page",
                  type: "rare-shoes",
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className={`main-link ${hoveredLink === item.label ? "active" : ""
                    }`}
                  data-type={item.type}
                  onMouseEnter={() => {
                    setOpenMenu(item.label);
                    setActiveMenu(item.label);
                    setHoveredLink(item.label);
                  }}
                  onMouseLeave={() => {
                    setOpenMenu(null);
                    setActiveMenu(null);
                    setHoveredLink(null);
                  }}
                >
                  <Link
                    to={item.path}
                    className={`parent-link ${hoveredLink === item.label ? "parent-active" : ""
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

        <div className={`middle-part ${location.pathname.startsWith("/pages/rareism") ? "rareism-brand" : location.pathname.startsWith("/pages/kids") ? "rare-kid-brand" : location.pathname.startsWith("/pages/rarez-landing-page") ? "rare-shoes-brand" : location.pathname.startsWith("/pages/rare-rabbit") ? "rare-rabbit-brand" : "home-brand"} `} >
          <div className="header-logo-wrapper">
            <div className={`header-logo-inner ${headerTheme === "dark" ? "light-logo-active" : "dark-logo-active"} ${location.pathname === "/pages/rare-rabbit" || location.pathname === "/pages/rareism" || location.pathname === "/pages/kids" || location.pathname === "/pages/rarez-landing-page" ? "landing-page-logo" : ""} `} >
              <Link to={logo.href} className={`brand-image ${location.pathname.startsWith("/pages/rareism") ? "rareism-image" : location.pathname.startsWith("/pages/kids") ? "rare-kid-image" : location.pathname.startsWith("/pages/rarez-landing-page") ? "rare-footwear-image" : location.pathname.startsWith("/pages/rare-rabbit") ? "rare-rabbit-image" : "home-image"} `} >
                <img src={logo.light}alt="logo"className="light-theme-logo"/>

                <img src={logo.dark} alt="logo" className="dark-theme-logo" />
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
          <Link to="/pages/rare-rabbit">MEN</Link>
        </div>

        <div className="title-label">
          <Link to="/pages/rareism">WOMEN</Link>
        </div>

        <div className="title-label">
          <Link to="/pages/kids">KIDS</Link>
        </div>

        <div className="title-label">
          <Link to="/pages/rarez-landing-page">SHOES</Link>
        </div>
      </div>
    </header>
  );
}