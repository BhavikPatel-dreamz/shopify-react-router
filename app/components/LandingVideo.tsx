import React, { useEffect, useRef, useState } from "react";

interface Props {
    desktopVideoSrc: string;
    desktopPoster: string;
    mobileVideoSrc: string;
    mobilePoster: string;
}

export default function LandingVideo({
    desktopVideoSrc,
    desktopPoster,
    mobileVideoSrc,
    mobilePoster,
}: Props) {
    const desktopVideoRef = useRef<HTMLVideoElement>(null);
    const mobileVideoRef = useRef<HTMLVideoElement>(null);

    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (desktopVideoRef.current) {
            desktopVideoRef.current.play().catch((error) => {
                console.log("Desktop autoplay prevented:", error);
            });
        }

        if (mobileVideoRef.current) {
            mobileVideoRef.current.play().catch((error) => {
                console.log("Mobile autoplay prevented:", error);
            });
        }
    }, []);

    function togglePlay(event: React.MouseEvent<HTMLButtonElement>): void {
        const d = desktopVideoRef.current;
        const m = mobileVideoRef.current;

        [d, m].forEach((v) => {
            if (!v) return;
            if (v.paused) v.play().catch(() => {});
            else v.pause();
        });
    }

    function toggleMute(event: React.MouseEvent<HTMLDivElement>): void {
        const newMuted = !isMuted;
        setIsMuted(newMuted);

        if (desktopVideoRef.current) desktopVideoRef.current.muted = newMuted;
        if (mobileVideoRef.current) mobileVideoRef.current.muted = newMuted;
    }

    return (
        <section className="section-video parallax-section">
            <div className="video-with-progress">

                <div className="video-prog-wrapper">

                    {/* Desktop */}
                    <div className="template-wrapper small-hide">
                        <video
                            ref={desktopVideoRef}
                            className="video-with-pro__media"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={desktopVideoSrc} type="video/mp4" />
                        </video>
                    </div>

                    {/* Mobile */}
                    <div className="template-wrapper medium-hide large-up-hide">
                        <video
                            ref={mobileVideoRef}
                            className="video-with-pro__media"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={mobileVideoSrc} type="video/mp4" />
                        </video>
                    </div>

                </div>

                <div
                    className="mute-unmute-icon-wrapper"
                    onClick={toggleMute}
                >
                    <div className="mute-unmute-icon-inner">

                        <img
                            src="https://thehouseofrare.com/cdn/shop/files/volume-mute.svg"
                            className={isMuted ? "unmute volume-icon hide" : "unmute volume-icon"}
                            alt=""
                            width={15}
                            height={15}
                        />

                        <img
                            src="https://thehouseofrare.com/cdn/shop/files/volume.svg"
                            className={isMuted ? "mute volume-icon" : "mute volume-icon hide"}
                            width={15}
                            height={15}
                            alt=""
                        />

                    </div>
                </div>

            </div>
        </section>
    );
}