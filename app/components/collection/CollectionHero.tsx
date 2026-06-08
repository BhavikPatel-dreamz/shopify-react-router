interface Props {
  collection: any;
}

export default function CollectionHero({
  collection,
}: Props) {
  return (
    <section>
      {collection.image && (
        <img
          src={collection.image.url}
          alt={
            collection.image.altText ||
            collection.title
          }
          className="w-full"
        />
      )}

      
    </section>
  );
}
