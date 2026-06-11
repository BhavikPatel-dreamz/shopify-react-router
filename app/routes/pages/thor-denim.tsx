import React, { useState } from "react";

import "~/styles/custom-styles.css";
import "~/styles/rare-ones-summer-vacation-page.css";
import "~/styles/common-image-grids.css";

import LookbookTabs from "~/components/summerVacation/LookbookTabs";
// import CollectionSection from "~/components/summerVacation/CollectionSection";
import ThorDenimLookbook from "~/components/thorDenim/ThorDenimLookbook";


import {
  thorDenimDesktopBlocks,
  thorDenimMobileBlocks,
} from "~/data/thorDenimData";

export default function ThorDenimPage() {
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
      {/* {activeTab === "collection" && (
        <CollectionSection />
      )} */}

      {/* Lookbook Tab */}
      {activeTab === "default" && (
        <ThorDenimLookbook
          desktopBlocks={
            thorDenimDesktopBlocks
          }
          mobileBlocks={
            thorDenimMobileBlocks
          }
        />
      )}

    </main>
  );
}