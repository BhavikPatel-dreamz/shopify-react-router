export default function ProductActions() {
  return (
    <div className="mt-8 flex gap-4">

      <button
        className="
        flex-1
        border
        py-4
        uppercase
      "
      >
        Add To Cart
      </button>

      <button
        className="
        flex-1
        bg-black
        text-white
        py-4
        uppercase
      "
      >
        Buy Now
      </button>
    </div>
  );
}