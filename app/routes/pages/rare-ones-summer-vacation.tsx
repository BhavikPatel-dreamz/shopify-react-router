import React, { useState } from "react";

import "~/styles/custom-styles.css";
import "~/styles/rare-ones-summer-vacation-page.css";
import "~/styles/common-image-grids.css";

import LookbookTabs from "~/components/summerVacation/LookbookTabs";
import CollectionSection from "~/components/summerVacation/CollectionSection";
import SummerVacationLookbook from "~/components/summerVacation/SummerVacationLookbook";

import {
  summerVacationDesktopBlocks,
  summerVacationMobileBlocks,
} from "~/data/rareOnesSummerVacation";

export default function RareOnesSummerVacationPage() {
  const [activeTab, setActiveTab] = useState<
    "default" | "collection"
  >("default");

  return (
    <main className="rare-ones-summer-vacation-page">

      {/* Tabs */}
      <LookbookTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Collection Tab */}
      {activeTab === "collection" && (
        <CollectionSection />
      )}

      {/* Lookbook Tab */}
      {activeTab === "default" && (
        <SummerVacationLookbook
          desktopBlocks={
            summerVacationDesktopBlocks
          }
          mobileBlocks={
            summerVacationMobileBlocks
          }
        />
      )}

    </main>
  );
}