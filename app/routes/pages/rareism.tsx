import type { Route } from "../+types/home";
import "../../styles/rareism.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rareism - Women's Luxury Clothing Brand" },
    {
      name: "description",
      content: "Discover premium luxury clothing for women at Rareism. Shop tops, dresses, trousers, denim and more.",
    },
  ];
}

export default function RareismPage() {
  return (
    <main className="rareism-page">
      {/* Section 1: Tops Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rareism-top">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RSM-_TOP_0bd4c9e9-2200-4da5-9f29-c17a71d45c43.webp?v=1780399545"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RSM-_TOP_30783c12-6c9a-4679-8957-80015fde9185.webp?v=1780399542"
                    alt="Rareism Tops Collection"
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
                    alt="Rareism Denim Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: WIF x Rareism Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/collections/rareism-x-wif-cannes">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-EMBROIDERY-_WIF_X_RSM.webp?v=1780054263"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-WIF_X_RSM.webp?v=1780054258"
                    alt="WIF x Rareism Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Croquet Polos Banner */}
      <section className="image-wrapper-section" data-header="light">
        <div className="image-wrapper">
          <div className="image-block" data-header="light">
            <div className="image-inner">
              <a href="/pages/croquet-club">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-RSM-_CROQUET-_POLOS.png?v=1777543141"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_RSM-_CROQUET-_POLOS_2ecc9c12-fdca-445f-8b9e-e49698fd1d53.png?v=1777547324"
                    alt="Rareism Croquet Polos"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Summer Tale - Dresses Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/pages/rareism-summer-tale">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-dresses_-RSM.webp?v=1776342639"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_dresses_-_RSM_bef7bae0-8802-4ab8-a2c4-647942b7d635.webp?v=1776342636"
                    alt="Rareism Summer Dresses"
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
              <a href="/pages/rareism-walk-6-0">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_-_WALK_6.0_-Rsm.webp?v=1773143029"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_WALK_6.0_-Rsm.webp?v=1773143024"
                    alt="Rareism Walk 6.0"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: New In Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rareism-ss-26">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-new_-RSM.webp?v=1771311194"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_new_in-RSM_2faf2488-b58f-4596-9952-e0878cfae9b4.webp?v=1771311191"
                    alt="New In - Rareism"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Dresses Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rareism-dress">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-dress_-RSM_93ef94d2-1d13-4d6e-9a1a-0c8b0a93402d.webp?v=1771310852"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_Dresses_-_RSM_764de9d3-5908-4537-bf02-3e4e2ca60973.webp?v=1771310848"
                    alt="Rareism Dresses Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Work Wear Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/work-wear-rareism">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-work_-RSM_25d0b5ff-b57e-4f96-b7d6-c6cbcf4015a4.webp?v=1771312751"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_workwear_-_RSM_75ccf07c-b54c-4749-bc61-7dd68f09c912.webp?v=1771312749"
                    alt="Rareism Work Wear"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Top Wear Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rareism-top">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-topwear_-RSM_e659cc86-bc7e-4066-b0e8-79a77b8a9868.webp?v=1771311525"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_topwear_-_RSM_f3ee5031-291b-4c4e-98cb-819e854b0a04.webp?v=1771311522"
                    alt="Rareism Top Wear"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Trousers Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="/collections/rareism-trouser">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-TROUSER_CONFIDENT_-RSM.webp?v=1771312573"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_TROUSER_CONFIDENT_-_RSM_606d341e-430a-4178-9df5-2a79e0323d0a.webp?v=1771312576"
                    alt="Rareism Trousers Collection"
                    loading="eager"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Join Instagram Banner */}
      <section className="image-wrapper-section" data-header="dark">
        <div className="image-wrapper">
          <div className="image-block" data-header="dark">
            <div className="image-inner">
              <a href="https://www.instagram.com/rareism_in/#">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://cdn.shopify.com/s/files/1/0752/6435/files/MOB_-_join_insta_-RSM.webp?v=1771311034"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/DESKTOP_-_WEB_-_join_insta_-_RSM_e5828eb8-9791-48ec-aa76-012d76f58799.webp?v=1771311032"
                    alt="Join Rareism on Instagram"
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