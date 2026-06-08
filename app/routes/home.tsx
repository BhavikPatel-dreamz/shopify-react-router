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
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Desktop Layout - Exactly like original */}
        <div className="desktop-grid-wrapper">
          {/* Left Side - Vertical Image */}
          <Link to="/" className="grid-text-wrapper">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/first_part_bd89b112-c9fb-46ad-82b1-d98f003ed43b.jpg?v=1753174894"
              alt="The House Of Rare"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Link>

          {/* Right Side Container */}
          <div className="right-side-container">
            {/* Top - Large Banner */}
            <div className="large-banner-wrapper">
              <Link to="/pages/rare-rabbit">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/RR-Home_page-desktop_85bdb133-d253-4486-a142-ae630bead256.webp?v=1778750757"
                  alt="Rare Rabbit"
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                />
              </Link>
            </div>

            {/* Bottom - Split Banners (Kids + Rareism side by side) */}
            <div className="desktop-split-banner-container">
              <Link to="/pages/kids" className="first-banner-wrapper">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/KIDS-Home_page-desktop_108ea8fc-54ee-47d4-9c44-c7c2f5614d57.webp?v=1778750770"
                  alt="Kids Collection"
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                />
              </Link>

              <Link to="/pages/rareism" className="second-banner-wrapper">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/Rsm-Home_page-desktop_ee278396-8e44-4e4e-8a04-c450d89e7d2f.webp?v=1778750774"
                  alt="Rareism Collection"
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mobile-grid-wrapper">
          <Link to="/pages/rareism" className="mobile-banner">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/WOMEN_-_RSM_-_DENIM.webp?v=1779344846"
              alt="Women Collection"
              style={{
                width: "100%",
                display: "block",
                marginBottom: "20px",
              }}
            />
          </Link>

          <Link to="/pages/kids" className="mobile-banner">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/KIDS-Home_page-MOBILE.webp?v=1778750797"
              alt="Kids Collection"
              style={{
                width: "100%",
                display: "block",
                marginBottom: "20px",
              }}
            />
          </Link>

          <Link to="/pages/rare-rabbit" className="mobile-banner">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/RR_Home_page-mob_d07e012a-5b1f-4565-bf13-8d4de56c31db.webp?v=1778750810"
              alt="Rare Rabbit"
              style={{
                width: "100%",
                display: "block",
                marginBottom: "20px",
              }}
            />
          </Link>

          <Link to="/" className="mobile-banner">
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
        /* Desktop Layout */
        .desktop-grid-wrapper {
          display: flex;
          gap: 20px;
        }

        .desktop-grid-wrapper .grid-text-wrapper {
          flex: 0 0 300px;
        }

        .desktop-grid-wrapper .right-side-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .desktop-split-banner-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* Mobile Layout - Hidden on Desktop */
        .mobile-grid-wrapper {
          display: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-grid-wrapper {
            display: none;
          }
          
          .mobile-grid-wrapper {
            display: block;
          }
        }

        /* Image hover effect */
        .desktop-grid-wrapper img,
        .mobile-grid-wrapper img {
          transition: opacity 0.3s ease;
        }

        .desktop-grid-wrapper img:hover,
        .mobile-grid-wrapper img:hover {
          opacity: 0.95;
        }
      `}</style>
    </main>
  );
}