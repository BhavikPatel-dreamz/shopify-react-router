import React, { useRef, useState } from "react";

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
  const desktopVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [mutedState, setMutedState] = useState<Record<number, boolean>>({});
  const [playingState, setPlayingState] = useState<Record<number, boolean>>(
    {}
  );

  const getCurrentVideo = (index: number) => {
    return window.innerWidth < 768
      ? mobileVideoRefs.current[index]
      : desktopVideoRefs.current[index];
  };

  const toggleMute = (
    index: number,
    video: HTMLVideoElement | null
  ) => {
    if (!video) return;

    video.muted = !video.muted;

    setMutedState((prev) => ({
      ...prev,
      [index]: video.muted,
    }));
  };

  return (
    <div className="final-landing-image-wrapper">
      {items.map((item, index) => (
        <div className="single-image-wrapper" key={index}>
          <a href={item.href}>
            {/* IMAGE */}
            {item.type === "image" && (
              <>
                <div className="desktop-img xs-hide">
                  <img
                    src={item.desktopImage}
                    alt=""
                    loading="lazy"
                  />
                </div>

                <div className="mobile-img xs-show">
                  <img
                    src={item.mobileImage}
                    alt=""
                    loading="lazy"
                  />
                </div>
              </>
            )}

            {/* VIDEO */}
            {item.type === "video" && (
              <div className="section-video">
                <div className="video-with-progress">
                  <div className="video-prog-wrapper">

                    {/* Desktop Video */}
                    <div className="template-wrapper small-hide">
                      <video
                        className="video-with-pro__media"
                        playsInline
                        muted
                        loop
                        autoPlay={item.autoplay}
                        preload="metadata"
                        poster={item.desktop.poster}
                        controls={false}
                        ref={(el) => {
                          desktopVideoRefs.current[index] = el;
                        }}
                        onPlay={() =>
                          setPlayingState((prev) => ({
                            ...prev,
                            [index]: true,
                          }))
                        }
                        onPause={() =>
                          setPlayingState((prev) => ({
                            ...prev,
                            [index]: false,
                          }))
                        }
                      >
                        <source
                          src={item.desktop.src}
                          type="video/mp4"
                        />
                      </video>
                    </div>

                    {/* Mobile Video */}
                    <div className="template-wrapper medium-hide large-up-hide">
                      <video
                        className="video-with-pro__media"
                        playsInline
                        muted
                        loop
                        autoPlay={item.autoplay}
                        preload="metadata"
                        poster={item.mobile.poster}
                        controls={false}
                        ref={(el) => {
                          mobileVideoRefs.current[index] = el;
                        }}
                        onPlay={() =>
                          setPlayingState((prev) => ({
                            ...prev,
                            [index]: true,
                          }))
                        }
                        onPause={() =>
                          setPlayingState((prev) => ({
                            ...prev,
                            [index]: false,
                          }))
                        }
                      >
                        <source
                          src={item.mobile.src}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>

                  {/* Mute / Unmute */}
                  <button
                    type="button"
                    className="mute-unmute-icon-wrapper"
                    onClick={(e) => {
                      e.preventDefault();

                      toggleMute(
                        index,
                        getCurrentVideo(index)
                      );
                    }}
                  >
                    <div className="mute-unmute-icon-inner">
                      {mutedState[index] !== false ? (
                        <img
                          src="https://thehouseofrare.com/cdn/shop/files/volume-mute.svg"
                          width={15}
                          height={15}
                          className="volume-icon"
                          alt="Muted"
                        />
                      ) : (
                        <img
                            src="https://thehouseofrare.com/cdn/shop/files/volume.svg"
                          width={15}
                          height={15}
                          className="volume-icon"
                          alt="Unmuted"
                        />
                      )}
                    </div>
                  </button>
                </div>
              </div>
            )}
          </a>
        </div>
      ))}
    </div>
  );
};

export default RareRabbitWalk;