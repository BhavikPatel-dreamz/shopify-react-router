import type { Route } from "../+types/home";
import "../../styles/about-us.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - The House Of Rare" },
    {
      name: "description",
      content: "The House Of Rare is a pioneering force in the Indian fashion landscape. Founded in 2015 by Mr. and Mrs. Poddar.",
    },
  ];
}

export default function AboutUsPage() {
  return (
    <main className="about-us-page">
      {/* Banner Section */}
      <div className="banner-wrapper">
        <div className="container">
          {/* Desktop Image */}
          <div className="image-wrapper xs-hide">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/FIRST_IMAGE_HERO_ABOUT_US.jpg?v=1722838071"
              alt="About Us Hero"
              className="img-fluid"
              loading="lazy"
            />
          </div>

          {/* Mobile Image */}
          <div className="image-wrapper xs-show">
            <img
              src="https://cdn.shopify.com/s/files/1/0752/6435/files/APP_ABOUT_US.jpg?v=1722839321"
              alt="About Us Hero Mobile"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* About Us Content */}
      <div className="about-us-page-wrapper">
        <div className="about-us-page-inner">
          {/* Who We Are Section */}
          <div className="page-top-content-wrapper">
            <div className="page-content-inner">
              <div className="wo-we-are-wrapper">
                <div className="right-content">
                  <div className="right-text">
                    <div className="right-sub-title">
                      <p>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>The </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>House </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>of </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Rare </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>is </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>a </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>pioneering </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>force </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>in </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>the </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Indian </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>fashion </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>landscape. </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Founded </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>in </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>2015 </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>by </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Mr. </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>and </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Mrs. </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Poddar, </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>our </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>vision </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>is </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>to </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>celebrate </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>individuality </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>and </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>challenge </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>societal </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>norms. </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>With </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>brands </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>like </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Rareism </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>for </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>women, </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Rare </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Rabbit </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>for </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>men, </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>and </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Rare </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>Ones </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>for </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>children, </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>we </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>aim </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>to </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>redefine </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>fashion </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>for </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>the </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>entire </span>
                        <span style={{ color: "rgba(0, 0, 0, 0.14)" }}>family. </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Welcome to the Burrow Section */}
              <div className="linen-love-affair-wrapper">
                <div className="linen-love-affair-inner">
                  <div className="title-and-description">
                    <p className="linen-title">Welcome to the Burrow</p>
                    <p className="linen-sub-title">
                      Our commitment to innovation and our unwavering belief in the power of self-expression are the cornerstones of our success.
                    </p>
                  </div>
                  <div className="linen-image-wrapper">
                    <div className="linen-images-grid">
                      <div className="linen-image-slide">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41843.jpg?v=1722838167"
                          alt="Fashion 1"
                          loading="lazy"
                        />
                      </div>
                      <div className="linen-image-slide">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41844.jpg?v=1722838166"
                          alt="Fashion 2"
                          loading="lazy"
                        />
                      </div>
                      <div className="linen-image-slide">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41852.jpg?v=1722838166"
                          alt="Fashion 3"
                          loading="lazy"
                        />
                      </div>
                      <div className="linen-image-slide">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41851.jpg?v=1722838166"
                          alt="Fashion 4"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proudly Made In Bharath Bar */}
          <div className="linen-bottom-bar">
            <div className="linen-bottom-bar-inner">
              <p>
                Proudly Made In Bharath: We take immense pride in our commitment to showcasing India's rich heritage and artistry. Every product we offer is crafted within the borders of our beloved nation.
              </p>
            </div>
          </div>

          {/* Full Image Section */}
          <div className="linen-full-image">
            <div className="linen-background-image"></div>
            <div className="linen-bottom-image xs-hide">
              <img
                src="https://cdn.shopify.com/s/files/1/0752/6435/files/store_23d3dead-ba3b-4202-a6eb-08795a7a5b7f.jpg?v=1722838167"
                alt="Store"
                loading="lazy"
              />
            </div>
            <div className="linen-bottom-wrapper xs-show">
              <p className="linen-mobile-text">
                Authenticity: Authenticity is the guiding principle that drives us. We believe in the genuine expression of individuality and originality.
              </p>
            </div>
          </div>

          {/* Full Slider Section */}
          <div className="full-slider-wrapper">
            <div className="full-slider-inner">
              <div className="full-slider">
                <div className="slider-images-grid">
                  <div className="slider-slide">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41847.jpg?v=1722838166"
                      alt="Fashion 1"
                      loading="lazy"
                    />
                  </div>
                  <div className="slider-slide">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41848.jpg?v=1722838167"
                      alt="Fashion 2"
                      loading="lazy"
                    />
                  </div>
                  <div className="slider-slide">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41849.jpg?v=1722838166"
                      alt="Fashion 3"
                      loading="lazy"
                    />
                  </div>
                  <div className="slider-slide">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0752/6435/files/Frame_41850.jpg?v=1722838166"
                      alt="Fashion 4"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-bottom-text">
                <p className="animation-wrapper">
                  Modernity: While honoring tradition, we also embrace the spirit of innovation and contemporary design. We seamlessly blend classic aesthetics with modern sensibilities.
                </p>
              </div>
            </div>
          </div>

          {/* Store Locator Section */}
          <div className="store-locator-wrapper">
            <div className="store-locator-inner">
              <div className="store-locator-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/180_black.gif?v=1724931362"
                  alt="Store Locator"
                  className="light-theme-gif"
                  loading="lazy"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0752/6435/files/180_white.gif?v=1724931368"
                  alt="Store Locator"
                  className="dark-theme-gif"
                  loading="lazy"
                />
              </div>
              <div className="store-locator-title-btn">
                <p className="store-locator-title">Stores In India</p>
                <a
                  href="https://stores-rarerabbit.thehouseofrare.com/"
                  className="store-locator-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RARE INDIA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}