import type { Route } from "../+types/home";
import "../../styles/help.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Help Center - The House Of Rare" },
    {
      name: "description",
      content: "Get help with tracking orders, refund policy, FAQs, and contact information at The House Of Rare.",
    },
  ];
}

export default function HelpPage() {
  const helpLinks = [
    {
      title: "TRACK ORDER",
      href: "https://rarerabbit.logisy.tech/track-order/",
      external: true,
    },
    {
      title: "REFUND POLICY",
      href: "/pages/terms-conditions",
      external: false,
    },
    {
      title: "FAQ",
      href: "/pages/faqs",
      external: false,
    },
    {
      title: "CONTACT US",
      href: "/pages/contact-us",
      external: false,
    },
    {
      title: "CHAT WITH US",
      href: "https://ui-chatbot.shopster.chat/?pcode=rarerabbit?bcode=%27rarerabbit%27",
      external: true,
    },
  ];

  return (
    <main className="help-page">
      <div className="page-help-section">
        <div className="section-inner">
          {/* Help Banner */}
          <div className="help-banner-wrapper">
            <div className="help-banner">
              {/* Desktop Image */}
              <div className="desktop-img">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/help_page_banner_cd67daed-ad35-4e3a-9576-895b8507d3b1.png?v=1726049495"
                    alt="Help Center Banner"
                    className="img-fluid"
                    loading="eager"
                  />
                </div>
              </div>
              {/* Mobile Image */}
              <div className="mobile-img">
                <div className="image-wrapper">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0752/6435/files/help_page_banner_9113f8e0-296c-41f7-8db3-41ae41a05b71.png?v=1726049497"
                    alt="Help Center Banner Mobile"
                    className="img-fluid"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Help Menu Links */}
          <div className="help-menu-wrapper">
            <div className="help-link-wrapper">
              {helpLinks.map((link, index) => (
                <div key={index} className="help-link-inner">
                  {link.external ? (
                    <a
                      href={link.href}
                      className="link-title"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                      <span className="arrow-right">
                        <svg width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.17678 2.17678C9.27441 2.07915 9.27441 1.92085 9.17678 1.82322L7.58579 0.232233C7.48816 0.134602 7.32986 0.134602 7.23223 0.232233C7.1346 0.329864 7.1346 0.488155 7.23223 0.585786L8.64645 2L7.23223 3.41421C7.1346 3.51184 7.1346 3.67014 7.23223 3.76777C7.32986 3.8654 7.48816 3.8654 7.58579 3.76777L9.17678 2.17678ZM0 2.25H9V1.75H0V2.25Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  ) : (
                    <a href={link.href} className="link-title">
                      {link.title}
                      <span className="arrow-right">
                        <svg width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.17678 2.17678C9.27441 2.07915 9.27441 1.92085 9.17678 1.82322L7.58579 0.232233C7.48816 0.134602 7.32986 0.134602 7.23223 0.232233C7.1346 0.329864 7.1346 0.488155 7.23223 0.585786L8.64645 2L7.23223 3.41421C7.1346 3.51184 7.1346 3.67014 7.23223 3.76777C7.32986 3.8654 7.48816 3.8654 7.58579 3.76777L9.17678 2.17678ZM0 2.25H9V1.75H0V2.25Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}