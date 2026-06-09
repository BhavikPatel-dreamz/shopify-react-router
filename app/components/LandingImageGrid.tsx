import { Link } from "react-router";

type DesktopGridTextBlock = {
    type: "desktop_grid_text";
    settings: {
        banner_bg_image?: { url: string; alt?: string };
        text_link?: string;
    };
};

type DesktopSplitImagesBlock = {
    type: "desktop-split-images";
    settings: {
        split_banner_one?: { url: string; alt?: string };
        banner_text_one?: string;
        banner_text_one_color?: string;
        banner_one_link?: string;

        split_banner_second?: { url: string; alt?: string };
        banner_text_two?: string;
        banner_text_two_color?: string;
        banner_two_link?: string;
    };
};

type DesktopLargeImageBlock = {
    type: "desktop_large_image";
    settings: {
        large_banner_image?: { url: string; alt?: string };
        banner_text?: string;
        banner_link?: string;
    };
};

type MobileSplitImagesBlock = {
    type: "mobile-split-images";
    settings: {
        mobile_split_banner_one?: { url: string; alt?: string };
        mobile_banner_text_one?: string;
        mobile_banner_text_one_color?: string;
        mobile_banner_one_link?: string;

        mobile_split_banner_second?: { url: string; alt?: string };
        mobile_banner_text_two?: string;
        mobile_banner_text_two_color?: string;
        mobile_banner_two_link?: string;
    };
};

type MobileGridTextBlock = {
    type: "mobile-grid-text";
    settings: {
        mobile_banner_bg_image?: { url: string; alt?: string };
        mobile_text_link?: string;
    };
};

type MobileLargeImageBlock = {
    type: "mobile-large-image";
    settings: {
        mobile_large_banner_image?: { url: string; alt?: string };
        mobile_banner_text?: string;
        mobile_banner_text_color?: string;
        mobile_banner_link?: string;
    };
};

type Block =
    | DesktopGridTextBlock
    | DesktopLargeImageBlock
    | DesktopSplitImagesBlock
    | MobileSplitImagesBlock
    | MobileGridTextBlock
    | MobileLargeImageBlock;

interface LandingImageGridProps {
    headerType?: "light" | "dark";
    blocks: Block[];
}

export default function LandingImageGrid({
    headerType = "light",
    blocks,
}: LandingImageGridProps) {
    return (
        <section className="shopify-section image-grid-landing-page">
            <div
                className="landing-image-grid-page-wrapper"
                data-header={headerType}
            >
                <div className="container">

                    {/* DESKTOP */}
                    <div className="desktop-grid-wrapper xs-hide">
                        {blocks.map((block, i) => {
                            if (block.type === "desktop_grid_text") {
                                return (
                                    <Link
                                        key={i}
                                        to={block.settings.text_link || "#"}
                                        className="grid-text-wrapper"
                                    >
                                        {block.settings.banner_bg_image && (
                                            <img
                                                src={block.settings.banner_bg_image.url}
                                                alt={block.settings.banner_bg_image.alt || ""}
                                                loading="eager"
                                            />
                                        )}
                                    </Link>
                                );
                            }

                            if (block.type === "desktop_large_image") {
                                if (!block.settings.large_banner_image) return null;

                                return (
                                    <div
                                        key={i}
                                        className="large-banner-wrapper"
                                    >
                                        <Link
                                            to={block.settings.banner_link || "#"}
                                            className="banner-link"
                                        >
                                            <img
                                                src={block.settings.large_banner_image.url}
                                                alt={
                                                    block.settings.large_banner_image.alt || ""
                                                }
                                                loading="eager"
                                            />

                                            {block.settings.banner_text && (
                                                <p className="large-banner-text">
                                                    {block.settings.banner_text}
                                                </p>
                                            )}
                                        </Link>
                                    </div>
                                );
                            }

                            if (block.type === "desktop-split-images") {
                                return (
                                    <div
                                        key={i}
                                        className="desktop-split-banner-container"
                                    >
                                        {block.settings.split_banner_one && (
                                            <Link
                                                to={block.settings.banner_one_link || "#"}
                                                className="first-banner-wrapper"
                                            >
                                                <img
                                                    src={block.settings.split_banner_one.url}
                                                    alt={
                                                        block.settings.split_banner_one.alt || ""
                                                    }
                                                    loading="eager"
                                                />

                                                {block.settings.banner_text_one && (
                                                    <p
                                                        className="banner-text"
                                                        style={{
                                                            color:
                                                                block.settings.banner_text_one_color,
                                                        }}
                                                    >
                                                        {block.settings.banner_text_one}
                                                    </p>
                                                )}
                                            </Link>
                                        )}

                                        {block.settings.split_banner_second && (
                                            <Link
                                                to={block.settings.banner_two_link || "#"}
                                                className="second-banner-wrapper"
                                            >
                                                <img
                                                    src={block.settings.split_banner_second.url}
                                                    alt={
                                                        block.settings.split_banner_second.alt ||
                                                        ""
                                                    }
                                                    loading="eager"
                                                />

                                                {block.settings.banner_text_two && (
                                                    <p
                                                        className="banner-text"
                                                        style={{
                                                            color:
                                                                block.settings.banner_text_two_color,
                                                        }}
                                                    >
                                                        {block.settings.banner_text_two}
                                                    </p>
                                                )}
                                            </Link>
                                        )}
                                    </div>
                                );
                            }

                            return null;
                        })}
                    </div>

                    {/* MOBILE */}
                    <div className="mobile-grid-wrapper xs-show">

                        {/* 1. MOBILE SPLIT IMAGES */}
                        {blocks
                            .filter((block) => block.type === "mobile-split-images")
                            .map((block, i) => (
                                <div
                                    key={`split-${i}`}
                                    className="mobile-split-banner-container"
                                >
                                    {block.settings.mobile_split_banner_one && (
                                        <Link
                                            to={block.settings.mobile_banner_one_link || "#"}
                                            className="first-banner-wrapper"
                                        >
                                            <img
                                                src={block.settings.mobile_split_banner_one.url}
                                                alt={block.settings.mobile_split_banner_one.alt || ""}
                                                loading="eager"
                                            />

                                            {block.settings.mobile_banner_text_one && (
                                                <p
                                                    className="banner-text"
                                                    style={{
                                                        color:
                                                            block.settings.mobile_banner_text_one_color,
                                                    }}
                                                >
                                                    {block.settings.mobile_banner_text_one}
                                                </p>
                                            )}
                                        </Link>
                                    )}

                                    {block.settings.mobile_split_banner_second && (
                                        <Link
                                            to={block.settings.mobile_banner_two_link || "#"}
                                            className="second-banner-wrapper"
                                        >
                                            <img
                                                src={block.settings.mobile_split_banner_second.url}
                                                alt={
                                                    block.settings.mobile_split_banner_second.alt || ""
                                                }
                                                loading="eager"
                                            />

                                            {block.settings.mobile_banner_text_two && (
                                                <p
                                                    className="banner-text"
                                                    style={{
                                                        color:
                                                            block.settings.mobile_banner_text_two_color,
                                                    }}
                                                >
                                                    {block.settings.mobile_banner_text_two}
                                                </p>
                                            )}
                                        </Link>
                                    )}
                                </div>
                            ))}

                        {/* 2. MOBILE LARGE IMAGE */}
                        {blocks
                            .filter((block) => block.type === "mobile-large-image")
                            .map((block, i) => {
                                if (!block.settings.mobile_large_banner_image) return null;

                                return (
                                    <div
                                        key={`large-${i}`}
                                        className="mobile-large-banner-wrapper"
                                    >
                                        <Link
                                            to={block.settings.mobile_banner_link || "#"}
                                            className="banner-link"
                                        >
                                            <img
                                                src={block.settings.mobile_large_banner_image.url}
                                                alt={
                                                    block.settings.mobile_large_banner_image.alt || ""
                                                }
                                                loading="eager"
                                            />

                                            {block.settings.mobile_banner_text && (
                                                <p
                                                    className="large-banner-text"
                                                    style={{
                                                        color:
                                                            block.settings.mobile_banner_text_color,
                                                    }}
                                                >
                                                    {block.settings.mobile_banner_text}
                                                </p>
                                            )}
                                        </Link>
                                    </div>
                                );
                            })}

                        {/* 3. MOBILE GRID TEXT */}
                        {blocks
                            .filter((block) => block.type === "mobile-grid-text")
                            .map((block, i) => (
                                <Link
                                    key={`text-${i}`}
                                    to={block.settings.mobile_text_link || "#"}
                                    className="mobile-grid-text-wrapper"
                                >
                                    {block.settings.mobile_banner_bg_image && (
                                        <img
                                            src={block.settings.mobile_banner_bg_image.url}
                                            alt={
                                                block.settings.mobile_banner_bg_image.alt || ""
                                            }
                                            loading="eager"
                                        />
                                    )}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}