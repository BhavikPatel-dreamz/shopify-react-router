import type { Route } from "../+types/home";
import "../../styles/rarez.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rarez - Premium Footwear Brand" },
    {
      name: "description",
      content: "Discover premium footwear at RareZ. Shop sneakers, loafers, formal shoes, boots and more for men.",
    },
  ];
}

export default function RarezLandingPage() {
  return (
    <main className="rarez-page">
      {/* Section 1: Ragno Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rarez-ragno">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RZ-_RAGNO.webp?v=1779449364"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RZ-_RAGNO.webp?v=1779449360"
                    alt="Rarez Ragno Collection"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: New Launch Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/shoes-sale">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_-_-RAREZ_NEW_LAUNCH_d7bc71fe-15e1-4373-aca3-aa5fd7cc435e.webp?v=1779099273"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/desktop_-RAREZ_NEW_LAUNCH_47baa5aa-de04-47f9-91a5-9e4ef47bfb11.webp?v=1779099269"
                    alt="New Launch Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Through The Years Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/footwear-through-the-years">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RZ_THROUGH_THE_AGES_66b7750e-0f18-40b8-a83f-dcdedc4012a8.webp?v=1776940020"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RZ_THROUGH_THE_AGES_f0256bba-0480-45af-ba3f-77c47d3c0a7d.webp?v=1776940016"
                    alt="Footwear Through The Years"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: New Arrivals Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rarez-ss-26">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_-NEW_ARRIVAL_-_RZ.webp?v=1774332365"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-NEW_ARRIVAL_-_RZ.webp?v=1774332360"
                    alt="New Arrivals"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Sauron Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/pages/rarez-sauron">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-SAURON-RZ_47421635-352c-4d6c-a870-d72c42979089.webp?v=1773061434"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-SAURON-RZ_9ac54468-e459-42f1-9c93-24a68a30cfea.webp?v=1773061429"
                    alt="Sauron Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: High Tops & Boots Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rarez-high-top-sneakers-and-boot">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-HIGH_TOPS.webp?v=1777543129"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_HIGH_TOPS.webp?v=1777543131"
                    alt="High Tops & Boots"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Slip Ons / Loafers Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/collections/loafers">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_-SLIP_ONES_-_RZ.webp?v=1774957179"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-SLIP_ONES_-_RZ.webp?v=1774957176"
                    alt="Slip Ons & Loafers"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Formal Shoes Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rare-rabbit-formal-shoes">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_FORMALS_-_rz.webp?v=1774956745"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-FORMALS_-_rz.webp?v=1774956741"
                    alt="Formal Shoes"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Best Sellers Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rarez-best-seller-1">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_BEST_SELLERS-_RZ_8ea3bf3e-f000-4850-aac0-02780496a446.webp?v=1773060149"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_BEST_SELLERS-_RZ_db6bcd75-11dd-4aa5-9927-8d18d40f321a.webp?v=1773060144"
                    alt="Best Sellers"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Life In RareZ Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/sneakers-shoes-for-men">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_LIFE_IN_RAREZ_-_RZ.webp?v=1774956879"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-LIFE_IN_RAREZ_-_RZ.webp?v=1774956876"
                    alt="Life In RareZ"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Instagram Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="https://www.instagram.com/rarez.in">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_INSTAGRAM-_RZ.webp?v=1771308381"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_INSTAGRAM-_RZ.webp?v=1771308377"
                    alt="Follow RareZ on Instagram"
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