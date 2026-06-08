interface Props {
  images: {
    id: string;
    url: string;
    altText?: string;
  }[];
}

export default function ProductGallery({
  images,
}: Props) {
  return (
    <div className="product-image-wrapper">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.altText ?? ""}
          className="w-full"
        />
      ))}
    </div>
  );
}