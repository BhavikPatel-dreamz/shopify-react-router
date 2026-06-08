import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The House Of Rare | Premium Clothing Brand in India" },
    {
      name: "description",
      content: "Premium Fashion Collection - Rare Rabbit, Rareism, Kids Collection",
    },
  ];
}

export default function Home() {
  return (
    <main>
      {/* Full Width Container - No Padding on Sides */}
      <div
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Desktop Layout - 4 Images Horizontally */}
        <div
          style={{
            display: "flex",
            gap: "0px", // No gap to remove vacant space
            alignItems: "stretch",
            width: "100%",
          }}
        >
          {/* Image 1: Left - Rare Vertical Image */}
          <Link
            to="/"
            style={{
              flex: "0 0 20%", // 20% width
              display: "block",
            }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/first_part_bd89b112-c9fb-46ad-82b1-d98f003ed43b.jpg?v=1753174894"
              alt="The House Of Rare"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Link>

          {/* Image 2: Middle - Rare Rabbit Banner (Ladke wali) */}
          <Link
            to="/pages/rare-rabbit"
            style={{
              flex: "0 0 50%", // 50% width - largest
              display: "block",
            }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/RR-Home_page-desktop_85bdb133-d253-4486-a142-ae630bead256.webp?v=1778750757"
              alt="Rare Rabbit"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Link>

          {/* Image 3 & 4: Right Side - Two Images Vertically Stacked */}
          <div
            style={{
              flex: "0 0 30%", // 30% width for right column
              display: "flex",
              flexDirection: "column",
              gap: "0px", // No gap
            }}
          >
            {/* Top - Kids Banner */}
            <Link to="/pages/kids" style={{ display: "block", flex: 1 }}>
              <img
                src="https://cdn.shopify.com/s/files/1/0752/6435/files/KIDS-Home_page-desktop_108ea8fc-54ee-47d4-9c44-c7c2f5614d57.webp?v=1778750770"
                alt="Kids Collection"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Link>

            {/* Bottom - Rareism Banner */}
            <Link to="/pages/rareism" style={{ display: "block", flex: 1 }}>
              <img
                src="https://cdn.shopify.com/s/files/1/0752/6435/files/Rsm-Home_page-desktop_ee278396-8e44-4e4e-8a04-c450d89e7d2f.webp?v=1778750774"
                alt="Rareism Collection"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Stacked Vertically */}
        <div
          style={{
            display: "none",
            width: "100%",
          }}
          className="mobile-layout"
        >
          <Link to="/pages/rareism" style={{ display: "block" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/WOMEN_-_RSM_-_DENIM.webp?v=1779344846"
              alt="Women Collection"
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </Link>

          <Link to="/pages/kids" style={{ display: "block" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/KIDS-Home_page-MOBILE.webp?v=1778750797"
              alt="Kids Collection"
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </Link>

          <Link to="/pages/rare-rabbit" style={{ display: "block" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/RR_Home_page-mob_d07e012a-5b1f-4565-bf13-8d4de56c31db.webp?v=1778750810"
              alt="Rare Rabbit"
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </Link>

          <Link to="/" style={{ display: "block" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/3_4805f32d-fc17-4702-933f-3d4a5b41b028.jpg?v=1726473286"
              alt="The House Of Rare"
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </Link>
        </div>
      </div>

      <style>{`
        /* Remove all margins and paddings */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        main {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Desktop Layout */
        .desktop-layout {
          display: block !important;
        }

        /* Mobile Layout */
        @media (max-width: 768px) {
          .desktop-layout {
            display: none !important;
          }
          .mobile-layout {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .desktop-layout {
            display: block !important;
          }
          .mobile-layout {
            display: none !important;
          }
        }

        /* Ensure images take full width without gaps */
        img {
          vertical-align: middle;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </main>
  );
}