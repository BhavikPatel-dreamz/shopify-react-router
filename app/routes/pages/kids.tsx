import type { Route } from "../+types/home";
import "../../styles/kids.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rare Ones - Kids Luxury Clothing Brand" },
    {
      name: "description",
      content: "Discover premium luxury clothing for kids at Rare Ones. Shop back to school, denim, motorsport, t-shirts and more.",
    },
  ];
}

export default function KidsPage() {
  return (
    <main className="kids-page">
      {/* Section 1: Back to School Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/collections/rare-ones-back-to-school">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_RO_back_to_school.webp?v=1780469100"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_back_to_school.webp?v=1780469097"
                    alt="Back to School Collection"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Summer Vacation Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/rare-ones-summer-vacation">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_RO_vacation.webp?v=1779370560"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_vacation.webp?v=1779370556"
                    alt="Summer Vacation Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Denim Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/collections/rare-ones-ss-26-jeans">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_RO_denim.webp?v=1778759751"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_denim.webp?v=1778759746"
                    alt="Kids Denim Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Motorsport Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/rare-ones-motorsport">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RO_motorsport.webp?v=1775804626"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_motorsport.webp?v=1775804623"
                    alt="Motorsport Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Tennis Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="https://thehouseofrare.com/pages/rare-ones-tennis">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RO_Tennis.webp?v=1775046409"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_Tennis.webp?v=1775046408"
                    alt="Tennis Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Walk 6.0 Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/pages/rare-ones-walk-6-0">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_-_WALK_6.0_-RO.webp?v=1773143640"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_WALK_6.0_-RO.webp?v=1773143637"
                    alt="Walk 6.0 Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: New Arrivals Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rare-ones-new-arrivals">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RO_NEW_IN_6ca5e6c3-6375-4571-b28e-70b326df5ad3.webp?v=1773403318"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-RO_NEW_IN_226e0c84-7ab5-4250-b888-c7805a6cb2a2.webp?v=1773403314"
                    alt="New Arrivals"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Shirts Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rare-ones-shirt">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_RO_SHIRTS.webp?v=1771328705"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_SHIRTS.webp?v=1771328700"
                    alt="Kids Shirts Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: T-Shirts Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rare-ones-t-shirt">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RO_T-SHIRT.webp?v=1771328755"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-RO_T-SHIRT.webp?v=1771328743"
                    alt="Kids T-Shirts Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Jeans Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rare-ones-kids-jeans">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_RO_JEANS.webp?v=1771328904"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_JEANS.webp?v=1771328900"
                    alt="Kids Jeans Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Polos Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rare-ones-polo">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RO_POLOS.webp?v=1771328933"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_POLOS.webp?v=1771328929"
                    alt="Kids Polos Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Shorts Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rare-ones-kids-shorts">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RO_SHORTS.webp?v=1771328964"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_SHORTS.webp?v=1771328958"
                    alt="Kids Shorts Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: App Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="https://play.google.com/store/apps/details?id=rarerabbit.android.app">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_RO__1_app_for_all_c38da2c2-dcc4-47ea-b375-9eee8107ce6a.webp?v=1771328302"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO__1_app_for_all_4e694306-ae6e-40a8-bcdf-884899fba42f.webp?v=1771328284"
                    alt="Download App"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Instagram Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="https://www.instagram.com/rareones_in/#">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RSM_-_RO_Insta_0013eb87-10c9-4650-93b2-d82357b48aa5.webp?v=1771328335"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RO_Insta_6c18f3ef-aba5-4b57-ac4c-f9ac0e2c51f9.webp?v=1771328329"
                    alt="Follow on Instagram"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 15: Store Locator Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="https://maps.app.goo.gl/MvoBfsEydpKxNUhV9">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/mob_new_in1.png?v=1741693771"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/store_locator1.png?v=1741693767"
                    alt="Store Locator"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 16: Corporate Gifting Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/pages/corporate-gifting">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/GIF-1_820ceb83-f002-4a38-b152-82980574b1c8.gif?v=1738301329"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/GIF-2_a96b687a-90d7-4621-b430-b81cbac55031.gif?v=1738243349"
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