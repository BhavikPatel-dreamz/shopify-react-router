import { useState, useEffect } from "react";
import { Link } from "react-router";

interface MegaMenuProps {
    sections: any[];
    parentLink?: string;
    isOpen?: boolean;
}

export default function MegaMenu({
    sections,
    parentLink,
    isOpen = false,
}: MegaMenuProps) {
    const [activeSection, setActiveSection] = useState<any>(null);

    useEffect(() => {
        if (sections?.length > 0) {
            setActiveSection(sections[0]);
        }
    }, [sections]);

    if (!sections?.length) return null;

    return (
        <div
            className={`header-mega-menu-wrapper ${isOpen ? "show" : "hide"}`}
            menu-text={parentLink}
        >
            <div className="header-mega-menu-innerr">
                <div className="header-sub-list-wrapper">

                    {/* LEFT MENU */}

                    <div className="help-text-wrapper">
                        <div className="card">

                            <ul className="header-mega-menu-ul">
                                {sections.map((section, index) => (
                                    <li
                                        key={section.title}
                                        className={`link-item ${activeSection?.title === section.title
                                                ? "active"
                                                : ""
                                            }`}
                                        data-id={section.title
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}
                                        onMouseEnter={() => {
                                            setActiveSection(section);
                                        }}
                                    >
                                        <Link
                                            to={section.url || "#"}
                                            className="links"
                                            onClick={(e) => {
                                                // Stop propagation to prevent any parent handlers from interfering
                                                e.stopPropagation();
                                            }}
                                        >
                                            {section.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="help-text-wrapper-inner">
                                <Link
                                    to="/help"
                                    className="help-text"
                                >
                                    HELP
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* CENTER CONTENT */}

                    <div className="list-container">
                        {sections.map((section) => (
                            <div
                                key={section.title}
                                className={`list-result-inner ${activeSection?.title === section.title
                                        ? ""
                                        : "hide"
                                    }`}
                                data-id={section.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}
                            >
                                <div className="title-wrapper">
                                    <Link
                                        to={section.url || "#"}
                                        className="sub-list-title"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    >
                                        {section.title}
                                    </Link>
                                </div>

                                {(section.links?.length > 0 || section.image) && (
                                    <div className="list-wrapperer">
                                        {section.links?.length > 0 && (
                                            <div className="sublist-child-list-wrapper">
                                                <ul className="submenu-child-list">
                                                    {section.links.map((link: any) => (
                                                        <li key={link.title} className="list">
                                                            <Link
                                                                to={link.url}
                                                                className="submenu-title"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                }}
                                                            >
                                                                {link.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {section.image && (
                                            <div className="sublist-image-wrapper">
                                                <div
                                                    className={`menu-image-inner ${section.title === activeSection?.title
                                                            ? "active"
                                                            : ""
                                                        }`}
                                                    data-id={section.title
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")}
                                                    menu-text={parentLink}
                                                >
                                                    <Link
                                                        to={section.imageLink || section.url || "#"}
                                                        className="mega-image"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                        }}
                                                    >
                                                        <img
                                                            src={section.image}
                                                            alt={section.title}
                                                            className="banner-image"
                                                            style={{ cursor: 'pointer' }}
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}