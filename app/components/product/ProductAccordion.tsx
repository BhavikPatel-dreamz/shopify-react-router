import { useState } from "react";

export default function ProductAccordion({
  product,
}: any) {
  const [open, setOpen] =
    useState("description");

  const metafields = product?.metafields ?? [];

const manufacturer = metafields.find(
  (item: any) => item?.key === "manufacturer_details"
);

const shipping = metafields.find(
  (item: any) => item?.key === "shipping_returns"
);

  return (
    <div className="mt-10">

      <div className="border-t py-4">

        <button
          className="w-full text-left"
          onClick={() =>
            setOpen("description")
          }
        >
          DESCRIPTION
        </button>

        {open === "description" && (
          <div
            dangerouslySetInnerHTML={{
              __html:
                product.descriptionHtml,
            }}
          />
        )}
      </div>

      <div className="border-t py-4">

        <button
          className="w-full text-left"
          onClick={() =>
            setOpen("manufacturer")
          }
        >
          MANUFACTURER DETAILS
        </button>

        {open === "manufacturer" && (
          <div>
            {manufacturer?.value}
          </div>
        )}
      </div>

      <div className="border-t border-b py-4">

        <button
          className="w-full text-left"
          onClick={() =>
            setOpen("shipping")
          }
        >
          SHIPPING & RETURNS
        </button>

        {open === "shipping" && (
          <div>
            {shipping?.value}
          </div>
        )}
      </div>
    </div>
  );
}