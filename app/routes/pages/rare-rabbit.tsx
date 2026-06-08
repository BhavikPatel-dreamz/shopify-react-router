import type { Route } from "../+types/home";
import { Link } from "react-router";
import "../../styles/rare-rabbit.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rare Rabbit - Luxury Clothing Brand for Men" },
    {
      name: "description",
      content: "Discover premium luxury clothing for men at Rare Rabbit. Shop shirts, t-shirts, trousers, denim and more.",
    },
  ];
}

export default function RareRabbitPage() {
  return (
    <main className="rare-rabbit-page">
      {/* Section 1: Embroidery Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/collections/rare-rabbit-embroidery">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-EMBROIDERY-_RR.webp?v=1779963732"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_EMBROIDERY-_RR.webp?v=1779963728"
                    alt="Rare Rabbit Embroidery Collection"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Denim Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/thor-denim">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-THOR-_DENIM.webp?v=1778752281"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_THOR-_DENIM.webp?v=1778752278"
                    alt="Rare Rabbit Denim Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Shirts Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rr-shirt">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_--SHIRTS-_RR.webp?v=1780320608"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_-SHIRTS-_RR.webp?v=1780320603"
                    alt="Rare Rabbit Shirts Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: T-Shirts Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/rare-rabbit-t-shirt">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_tees_--_RR.webp?v=1778062826"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_TEES_cffe8b28-8a4d-48d8-a7ba-6b0dcc782f5c.webp?v=1778065300"
                    alt="Rare Rabbit T-Shirts Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Luggage Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/pages/luggage">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_tees_--_LUGGAGE.webp?v=1778235059"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_LUGGAGE.webp?v=1778235057"
                    alt="Rare Rabbit Luggage Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Croquet Polo Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/rare-rabbit-croquet-club">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RR-_CROQUET-_POLOS_7369f5ae-c26a-4863-9f46-43a28d8b080b.webp?v=1777030927"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RR-_CROQUET-_POLOS_a03e3139-c7f0-43c9-bd40-5d14357d9e93.webp?v=1777030920"
                    alt="Rare Rabbit Croquet Polos"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Linen Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/rare-rabbit-linen">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RR-_LINEN.webp?v=1775316578"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RR-_LINEN.webp?v=1775316577"
                    alt="Rare Rabbit Linen Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Florens Print Shirt Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/florens-print-shirt">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RR-_FLORENS.webp?v=1774875038"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RR-_FLORENS.webp?v=1774875031"
                    alt="Rare Rabbit Florens Print Shirt"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Trousers Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/collections/rare-rr-trouser">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_TROUSERS_--_RR_62c3313c-722a-400c-bb38-91cd6a741b07.webp?v=1778062720"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_TROUSERS_29b9e927-28c2-4bff-8fce-102203848bd0.webp?v=1778062716"
                    alt="Rare Rabbit Trousers Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Innerv Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/rare-rabbit-innerv">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RR-_INNERV.webp?v=1776085142"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RR-_INNERV.webp?v=1776085136"
                    alt="Rare Rabbit Innerv Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Walk 6.0 Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/pages/rare-rabbit-walk-6-0">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_-_WALK_6.0_-RR.webp?v=1773142503"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_WALK_6.0_-RR.webp?v=1773142498"
                    alt="Rare Rabbit Walk 6.0"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Title Section */}
      <div className="show-title-section">
        <h1 className="section-title-text">Rare Rabbit - Luxury Clothing Brand for Men</h1>
      </div>

      {/* App Download Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="https://play.google.com/store/apps/details?id=rarerabbit.android.app">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_trouser_-_rr_7af6219c-afcc-4a01-8bed-0ad0e3d0622a.webp?v=1771311878"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_trouser_-_rr_ddfd2f57-8648-4cac-bfd8-643b117f6798.webp?v=1771311875"
                    alt="Download App"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locator Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="https://stores-rarerabbit.thehouseofrare.com">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/M_WEB_2x_cad7471f-74f3-4e67-aa50-628f6b7d4048.jpg?v=1737617717"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/landing_page_stores_2x_1.jpg?v=1737617696"
                    alt="Store Locator"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Gifting Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/pages/corporate-gifting">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/GIF-1.gif?v=1738301245"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/GIF-2.gif?v=1738241746"
                    alt="Corporate Gifting"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}