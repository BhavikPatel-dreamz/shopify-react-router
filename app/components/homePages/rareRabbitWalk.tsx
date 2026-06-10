import React from "react";

type Props = {
  items: MediaItem[];
};

export type ImageItem = {
  type: "image";
  href: string;
  desktopImage: string;
  mobileImage: string;
};

export type VideoItem = {
  type: "video";
  href: string;
  mediaId?: string;
  autoplay?: boolean;
  desktop: {
    src: string;
    poster: string;
  };
  mobile: {
    src: string;
    poster: string;
  };
};

export type MediaItem = ImageItem | VideoItem;

const RareRabbitWalk: React.FC<Props> = ({ items }) => {
  return (
    <div className="Container">
      <div className="final-landing-image-wrapper">
        {items.map((item, index) => (
          <div className="single-image-wrapper" key={index}>
            <a href={item.href}>
              {/* IMAGE TYPE */}
              {item.type === "image" && (
                <>
                  <div className="desktop-img xs-hide">
                    <img src={item.desktopImage} alt="" />
                  </div>

                  <div className="mobile-img xs-show">
                    <img src={item.mobileImage} alt="" />
                  </div>
                </>
              )}

              {/* VIDEO TYPE */}
              {item.type === "video" && (
                <>
                  {/* Desktop Video */}
                  <div className="section-video">
                    <div className="video-with-progress">
                    <video
                      playsInline
                      muted
                      loop
                      autoPlay={item.autoplay}
                      preload="metadata"
                      poster={item.desktop.poster}
                    >
                      <source src={item.desktop.src} type="video/mp4" />
                    </video>
                    </div>
                  </div>

                  {/* Mobile Video */}
                  <div className="mobile-img xs-show">
                    <video
                      playsInline
                      muted
                      loop
                      autoPlay={item.autoplay}
                      preload="metadata"
                      poster={item.mobile.poster}
                    >
                      <source src={item.mobile.src} type="video/mp4" />
                    </video>
                  </div>
                </>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};


export default RareRabbitWalk;