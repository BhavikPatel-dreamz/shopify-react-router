import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <h2 className="footer-newsletter-title">Let's Connect</h2>
        <p className="footer-newsletter-subtitle">Subscribe our Newsletter</p>
        <div className="footer-newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="footer-newsletter-input"
          />
          <button className="footer-newsletter-button">
            <svg width="31" height="6" viewBox="0 0 31 6" fill="none">
              <path
                d="M30.2475 3.24749C30.3842 3.11081 30.3842 2.8892 30.2475 2.75251L28.0201 0.525128C27.8834 0.388445 27.6618 0.388445 27.5251 0.525128C27.3884 0.661812 27.3884 0.883419 27.5251 1.0201L29.505 3L27.5251 4.9799C27.3884 5.11658 27.3884 5.33819 27.5251 5.47488C27.6618 5.61156 27.8834 5.61156 28.0201 5.47488L30.2475 3.24749ZM-3.91068e-08 3.35L30 3.35L30 2.65L3.91068e-08 2.65L-3.91068e-08 3.35Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Links Row */}
      <div className="footer-links-row">
        {/* Left Column - Follow Us */}
        <div className="footer-col footer-col-follow">
          <h4 className="footer-links-title">Follow Us</h4>
          <div className="footer-social-icons">
            <SocialIcon href="https://www.facebook.com/RareRabbitIndia">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M12.1 6.60156C12.1 3.56556 9.63601 1.10156 6.60001 1.10156C3.56401 1.10156 1.10001 3.56556 1.10001 6.60156C1.10001 9.26356 2.99201 11.4801 5.50001 11.9916V8.25156H4.40001V6.60156H5.50001V5.22656C5.50001 4.16506 6.36351 3.30156 7.42501 3.30156H8.80001V4.95156H7.70001C7.39751 4.95156 7.15001 5.19906 7.15001 5.50156V6.60156H8.80001V8.25156H7.15001V12.0741C9.92751 11.7991 12.1 9.45606 12.1 6.60156Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://www.instagram.com/rarerabbit_in">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M6.60016 4.95156C6.16255 4.95156 5.74287 5.1254 5.43343 5.43484C5.124 5.74427 4.95016 6.16396 4.95016 6.60156C4.95016 7.03917 5.124 7.45885 5.43343 7.76829C5.74287 8.07772 6.16255 8.25156 6.60016 8.25156C7.03777 8.25156 7.45745 8.07772 7.76689 7.76829C8.07632 7.45885 8.25016 7.03917 8.25016 6.60156C8.25016 6.16396 8.07632 5.74427 7.76689 5.43484C7.45745 5.1254 7.03777 4.95156 6.60016 4.95156ZM6.60016 3.85156C7.3295 3.85156 8.02898 4.14129 8.5447 4.65702C9.06043 5.17274 9.35016 5.87222 9.35016 6.60156C9.35016 7.33091 9.06043 8.03038 8.5447 8.54611C8.02898 9.06183 7.3295 9.35156 6.60016 9.35156C5.87081 9.35156 5.17134 9.06183 4.65562 8.54611C4.13989 8.03038 3.85016 7.33091 3.85016 6.60156C3.85016 5.87222 4.13989 5.17274 4.65562 4.65702C5.17134 4.14129 5.87081 3.85156 6.60016 3.85156ZM10.1752 3.71406C10.1752 3.8964 10.1027 4.07127 9.9738 4.2002C9.84486 4.32913 9.67 4.40156 9.48766 4.40156C9.30532 4.40156 9.13046 4.32913 9.00152 4.2002C8.87259 4.07127 8.80016 3.8964 8.80016 3.71406C8.80016 3.53173 8.87259 3.35686 9.00152 3.22793C9.13046 3.099 9.30532 3.02656 9.48766 3.02656C9.67 3.02656 9.84486 3.099 9.9738 3.22793C10.1027 3.35686 10.1752 3.53173 10.1752 3.71406Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://www.linkedin.com/company/shoprarerabbit/">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M10.56 0H0.44C0.196625 0 0 0.196625 0 0.44V10.56C0 10.8034 0.196625 11 0.44 11H10.56C10.8034 11 11 10.8034 11 10.56V0.44C11 0.196625 10.8034 0 10.56 0ZM3.26287 9.37337H1.63075V4.12362H3.26287V9.37337ZM2.4475 3.40588C2.2604 3.40588 2.0775 3.35039 1.92193 3.24645C1.76636 3.1425 1.64511 2.99475 1.57351 2.82189C1.50191 2.64903 1.48318 2.45883 1.51968 2.27532C1.55618 2.09181 1.64628 1.92325 1.77858 1.79095C1.91088 1.65865 2.07944 1.56855 2.26294 1.53205C2.44645 1.49555 2.63666 1.51428 2.80952 1.58588C2.98238 1.65749 3.13012 1.77874 3.23407 1.93431C3.33802 2.08987 3.3935 2.27277 3.3935 2.45987C3.39212 2.98237 2.96863 3.40588 2.4475 3.40588ZM9.37337 9.37337H7.74262V6.82C7.74262 6.21088 7.73163 5.4285 6.89425 5.4285C6.04588 5.4285 5.91525 6.09125 5.91525 6.776V9.37337H4.28588V4.12362H5.85063V4.84137H5.87262C6.08987 4.42887 6.622 3.993 7.41675 3.993C9.0695 3.993 9.37337 5.08062 9.37337 6.49412V9.37337Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>

            <SocialIcon href="https://www.youtube.com/channel/UCtIOytvTl2OjCreMucFRr_g">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <path
                  d="M16.5466 5.94829C16.5466 5.90766 16.5466 5.8615 16.5448 5.80794C16.5429 5.65836 16.5392 5.4903 16.5356 5.31117C16.5208 4.79594 16.4949 4.28255 16.4543 3.79871C16.3989 3.13204 16.3176 2.57618 16.2068 2.15882C16.0899 1.72327 15.8607 1.32604 15.5421 1.00683C15.2236 0.687617 14.8268 0.45761 14.3915 0.339797C13.8689 0.199446 12.8458 0.11265 11.4054 0.059095C10.7202 0.0332409 9.98707 0.0166204 9.25392 0.00738678C8.99723 0.00369333 8.759 0.00184672 8.54478 0H8.00185C7.78763 0.00184672 7.5494 0.00369333 7.29271 0.00738678C6.55956 0.0166204 5.82641 0.0332409 5.14127 0.059095C3.70083 0.114497 2.6759 0.201293 2.15512 0.339797C1.71967 0.457321 1.32275 0.68723 1.00414 1.00648C0.685538 1.32574 0.456436 1.72312 0.339797 2.15882C0.227147 2.57618 0.147738 3.13204 0.0923361 3.79871C0.0517082 4.28255 0.0258541 4.79594 0.0110803 5.31117C0.00554014 5.4903 0.00369342 5.65836 0.00184669 5.80794C0.00184669 5.8615 0 5.90766 0 5.94829V6.05171C0 6.09234 -2.82063e-08 6.1385 0.00184669 6.19206C0.00369342 6.34164 0.00738686 6.50969 0.0110803 6.68883C0.0258541 7.20406 0.0517082 7.71745 0.0923361 8.20129C0.147738 8.86796 0.228994 9.42382 0.339797 9.84118C0.576177 10.7258 1.27054 11.4238 2.15512 11.6602C2.6759 11.8006 3.70083 11.8873 5.14127 11.9409C5.82641 11.9668 6.55956 11.9834 7.29271 11.9926C7.5494 11.9963 7.78763 11.9982 8.00185 12H8.54478C8.759 11.9982 8.99723 11.9963 9.25392 11.9926C9.98707 11.9834 10.7202 11.9668 11.4054 11.9409C12.8458 11.8855 13.8707 11.7987 14.3915 11.6602C15.2761 11.4238 15.9705 10.7276 16.2068 9.84118C16.3195 9.42382 16.3989 8.86796 16.4543 8.20129C16.4949 7.71745 16.5208 7.20406 16.5356 6.68883C16.5411 6.50969 16.5429 6.34164 16.5448 6.19206C16.5448 6.1385 16.5466 6.09234 16.5466 6.05171V5.94829ZM6.62973 8.47461L10.9141 5.98153L6.62973 3.52539V8.47461Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Middle Left Column - Company */}
        <div className="footer-col">
          <h4 className="footer-links-title">Company</h4>
          <FooterLink href="/pages/about-us">About us</FooterLink>
          <FooterLink href="/pages/help">Help</FooterLink>
          <FooterLink href="https://ui-chatbot.shopster.chat/?pcode=rarerabbit">
            Chat with Us
          </FooterLink>
          <FooterLink href="/pages/work-with-rare">Work for Rare</FooterLink>
        </div>

        {/* Middle Right Column - Quick Links */}
        <div className="footer-col">
          <h4 className="footer-links-title">Quick Links</h4>
          <FooterLink href="/account">My Account</FooterLink>
          <FooterLink href="https://returns.logisy.tech/returns">
            Returns / Exchange
          </FooterLink>
          <FooterLink href="https://rarerabbit.logisy.tech/track-order/">
            Order Tracking
          </FooterLink>
          <FooterLink href="/pages/thor-store-locator">Store Locator</FooterLink>
        </div>

        {/* Right Column - Our Themes, Blogs, Terms, Site Map */}
        <div className="footer-col footer-col-right">
          <FooterLink href="/pages/rare-rabbit-our-theme">Our Themes</FooterLink>
          <FooterLink href="/blogs/news">Blogs</FooterLink>
          <FooterLink href="/pages/terms-conditions">Terms</FooterLink>
          <FooterLink href="/pages/html-sitemap">Site Map</FooterLink>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        {/* Left Side - Most Searched & Copyright */}
        <div className="footer-bottom-left">
          <div className="footer-most-searched">
            <span className="footer-most-searched-text">Most Searched</span>
            <ChevronDown size={14} />
          </div>
          <p className="footer-copyright">
            All Rights Reserved TheHouseOfRare © {new Date().getFullYear()}
          </p>
        </div>

        {/* Right Side - App Store Buttons */}
        <div className="footer-bottom-right">
          <div className="footer-app-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=rarerabbit.android.app"
              className="footer-app-link"
            >
              <div className="footer-app-subtitle">Get it on</div>
              <div className="footer-app-title">Google Play</div>
            </a>
            <a
              href="https://apps.apple.com/in/app/the-house-of-rare/id1563278819"
              className="footer-app-link"
            >
              <div className="footer-app-subtitle">Download on the</div>
              <div className="footer-app-title">App Store</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <div className="footer-link-item">
      <Link to={href} className="footer-link">
        {children}
      </Link>
    </div>
  );
}

function SocialIcon({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-social-icon"
    >
      {children}
    </a>
  );
}