import type { Route } from "../+types/home";
import "../../styles/rare-rabbit-our-theme.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Themes - Rare Rabbit | The House Of Rare" },
    {
      name: "description",
      content: "Explore Rare Rabbit brand themes including new arrivals, textured collection, footwear, denim, loafers, innerwear, linen, blazers, trousers and more.",
    },
  ];
}

export default function RareRabbitOurThemePage() {
  return (
    <main className="rare-rabbit-theme-page">
      <div className="image-grid-section-wrapper">
        <div className="container">
          {/* Desktop Grid */}
          <div className="images-wrapper xs-hide">
            {/* Image 1 - New In */}
            <div className="image">
              <a href="/collections/rr-new-arrivals-for-men">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/new_in_1_5x_8e8bea0d-f374-4994-a581-8fb75c7b8818.webp?v=1755004440"
                  alt="New Arrivals"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 2 - Textured Collection */}
            <div className="image">
              <a href="/collections/rare-rabbit-texture">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/centre_2_textured_1_5x_10ed7efb-e2cd-40f4-9763-1e51e47c52a6.webp?v=1755004547"
                  alt="Textured Collection"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 3 - Footwear */}
            <div className="image">
              <a href="/collections/rare-rr-men-shoes">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/right_4_1_5x_55c83d9a-0035-406d-84cd-8701ea22531b.webp?v=1755004575"
                  alt="Footwear Collection"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 4 - Denim (Large Image) */}
            <div className="image large-image-class">
              <a href="/collections/denim-collection">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/left_big_2_1_5x_ca9be1a2-94b7-475a-a832-aa2e6c57744e.webp?v=1755004643"
                  alt="Denim Collection"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 5 - Loafers */}
            <div className="image">
              <a href="/collections/loafers">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/loafers_new_1_5x_01fb7152-3cc4-4097-ad6e-2490fe70c209.webp?v=1755004710"
                  alt="Loafers Collection"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 6 - Left 1 */}
            <div className="image">
              <a href="#">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/left_1_2_1_5x_c0ad00a6-0126-47cb-ac4f-a99c4e614286.webp?v=1755004851"
                  alt="Collection"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 7 - Innerwear */}
            <div className="image">
              <a href="/collections/rare-rabbit-innerwear">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/middle_4_1_5x_bbc53a71-283c-4fd2-bdb7-b488982e6c9c.webp?v=1755004872"
                  alt="Innerwear Collection"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 8 - Linen */}
            <div className="image">
              <a href="/collections/rare-rabbit-linen">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/linen_1_5x_8809cb28-cf52-45ee-818a-4c808d60053e.webp?v=1755004894"
                  alt="Linen Collection"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 9 - Blazers & Jackets */}
            <div className="image">
              <a href="/collections/rare-blazer-and-jacket-for-men">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/left_blazer_1_5x_66a52712-fb2d-4e8f-80b9-03af1109896c.webp?v=1755004928"
                  alt="Blazers & Jackets"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 10 - Trousers */}
            <div className="image">
              <a href="/collections/rare-rr-trouser">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/middle_trouser_1_5x_452dc548-2068-4ecf-b859-8861b7bfd587.webp?v=1755004945"
                  alt="Trousers Collection"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Image 11 - Noble Friend */}
            <div className="image">
              <a href="/collections/thor-noble-friend">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/right_6_noble_friend_1_5x_61a81e76-a5c6-4b95-9e14-049a65cba145.webp?v=1755004957"
                  alt="Noble Friend Collection"
                  className="img-fluid"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Mobile Grid Placeholder */}
          <div className="mobile-image-wrapper xs-show">
            <div className="left-image-wrapper">
              {/* Mobile images will be configured as needed */}
            </div>
            <div className="right-image-wrapper">
              {/* Mobile images will be configured as needed */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}