// components/RareismBoboImages.tsx
import React from "react";

interface ImageItem {
  id: number;
  href: string;
  desktopImg: string;
  mobileImg: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
  alt: string;
}

interface RareismBoboImagesProps {
  items: ImageItem[];
  sectionId: string;
  paddingClass: string;
}

const RareismBoboImages: React.FC<RareismBoboImagesProps> = ({ 
  items, 
  sectionId, 
  paddingClass 
}) => {
  return (
    <div className={`final-landing-image-section ${paddingClass}`} id={sectionId}>
      <div className="final-landing-image-wrapper">
        {items.map((item) => (
          <div key={item.id} className="single-image-wrapper">
            <a href={item.href}>
              {/* Desktop Image */}
              <div className="desktop-img xs-hide">
                <div className="image-wrapper">
                  <img
                    src={item.desktopImg}
                    width={item.desktopWidth}
                    height={item.desktopHeight}
                    loading="eager"
                    className="image-res"
                    sizes="100vw"
                    alt={item.alt}
                  />
                </div>
              </div>
              {/* Mobile Image */}
              <div className="mobile-img xs-show">
                <div className="image-wrapper">
                  <img
                    src={item.mobileImg}
                    width={item.mobileWidth}
                    height={item.mobileHeight}
                    loading="eager"
                    className="image-res"
                    sizes="100vw"
                    alt={item.alt}
                  />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RareismBoboImages;