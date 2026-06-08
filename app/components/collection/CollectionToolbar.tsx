interface Props {
  count: number;
}

export default function CollectionToolbar({
  count,
}: Props) {
  return (
    <div className="flex justify-between items-center border-y py-4">
      <p>
        {count} Products
      </p>

      <button>
        Sort By
      </button>
    </div>
  );
}