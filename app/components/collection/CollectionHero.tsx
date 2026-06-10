interface Props {
  collection: any;
}

export default function CollectionHero({
  collection,
}: Props) {
  return (
    <div className="main-collection-banner-wrapper">
      <div className="collection-banner-inner">
        <div className = "desktop-image">
      {collection.image && (
        <img
          src={collection.image.url}
          alt={
            collection.image.altText ||
            collection.title
          }
          className="image-wrapper"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
    
      )}
      </div>
      </div>
      
    </div>
  );
}
