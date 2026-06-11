import React, { useState } from "react";

import "../../styles/custom-styles.css";
import "../../styles/rare-ones-summer-vacation-page.css";

import LookbookTabs from "~/components/summerVacation/LookbookTabs";
import CollectionSection from "~/components/summerVacation/CollectionSection";
import SummerVacationLookbook from "~/components/summerVacation/SummerVacationLookbook";

import {
  rareOnesSummerVacationBlocks,
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
          blocks={rareOnesSummerVacationBlocks}
        />
      )}

    </main>
  );
}