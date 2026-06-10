import ImageSection from "~/components/homePages/ImageSection";

export default function corporateGifting() {

    const IMAGE_SRC =
  "https://cdn.shopify.com/s/files/1/0752/6435/files/Land_on_this.webp?v=1768306889";

  return (
    <div className="shop-the-look-section">
     <ImageSection
        src={IMAGE_SRC}
        alt="Corporate Gifting"
      />
    </div>
  );
}