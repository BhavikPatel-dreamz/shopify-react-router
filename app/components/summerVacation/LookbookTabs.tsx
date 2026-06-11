import React from "react";

type Props = {
    activeTab: "default" | "collection";
    onTabChange: (
        tab: "default" | "collection"
    ) => void;
};

export default function LookbookTabs({
    activeTab,
    onTabChange,
}: Props) {
    return (
        <div className="lookbook-collection-tabs">

            <span
                className={`lookbook-tab ${activeTab === "default"
                        ? "active"
                        : ""
                    }`}
                onClick={() =>
                    onTabChange("default")
                }
            >
                LOOKBOOK
            </span>

            <span
                className={`lookbook-tab ${activeTab === "collection"
                        ? "active"
                        : ""
                    }`}
                onClick={() =>
                    onTabChange("collection")
                }
            >
                COLLECTION
            </span>

        </div>
    );
}