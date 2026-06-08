import { useState } from "react";

export default function ProductAccordion({ product }: any) {
  const [openTab, setOpenTab] = useState("description");

  const metafields = product?.metafields ?? [];

  const manufacturer = metafields.find(
    (item: any) => item?.key === "manufacturer_details",
  );

  const shipping = metafields.find(
    (item: any) => item?.key === "shipping_returns",
  );

  const toggleAccordion = (tab: string) => {
    console.log("clicked:", tab);

    setOpenTab((current) => (current === tab ? "" : tab));
  };

  return (
    <div className="product-items static-tab-info">
      <div className="product-tabs product-tabs-js">
        {/* Description */}
        <div className={`accordion-wrapper accordion-wrapper-js ${openTab === "description" ? "open" : ""}`}>
          <div
            className="accordion-button accordion-button-js first-tab-bttn"
            onClick={() => toggleAccordion("description")}
          >
            Description
            <span className="plus-icon">
              {openTab === "description" ? "" : ""}
            </span>
          </div>

          <div className={`accordion-inner ${openTab === "description" ? "open" : ""}`}>
            <div className="accordion-content">
              <div className="content-wrapper">
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.descriptionHtml || "",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturer */}
        <div className={`accordion-wrapper accordion-wrapper-js ${openTab === "manufacturer" ? "open" : ""}`}>
          <div
            className="accordion-button accordion-button-js first-tab-bttn"
            onClick={() => toggleAccordion("manufacturer")}
          >
            Manufacturer Details
            <span className="plus-icon">
              {openTab === "manufacturer" ? "" : ""}
            </span>
          </div>

          <div className={`accordion-inner ${openTab === "manufacturer" ? "open" : ""}`}>
            <div className="accordion-content">
              <div className="content-wrapper">
                {manufacturer?.value &&
                  JSON.parse(manufacturer.value)?.children?.map(
                    (paragraph: any, index: number) => (
                      <p key={index} className="mb-3">
                        {paragraph.children?.map(
                          (child: any, childIndex: number) => (
                            <span
                              key={childIndex}
                              className={child.bold ? "font-semibold" : ""}
                            >
                              {child.value}
                            </span>
                          ),
                        )}
                      </p>
                    ),
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className={`accordion-wrapper accordion-wrapper-js ${openTab === "shipping" ? "open" : ""}`}>
          <div
            className="accordion-button accordion-button-js"
            onClick={() => toggleAccordion("shipping")}
          >
            Shipping, Return and Exchange
            <span className="plus-icon">
              {openTab === "shipping" ? "" : ""}
            </span>
          </div>

          <div className={`accordion-inner ${openTab === "shipping" ? "open" : ""}`}>
            <div className="accordion-content">
              <div className="content-wrapper">
                <div
                  dangerouslySetInnerHTML={{
                    __html: shipping?.value || "",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
