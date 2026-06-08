export default function ProductActions() {
  return (
    <div className="product-form-buttons mt-8">
  <div className="button-wrapper flex">
    <button
      type="button"
      className="add-to-cart-js add-to-cart-button button-full border-button flex-1 border border-black h-12 uppercase"
    >
      Add to cart
    </button>

    <button
      type="button"
      className="button-full buy-now-btn buy-now-btn-js flex-1 bg-black text-white border border-black h-12 uppercase"
    >
      BUY IT NOW
    </button>
  </div>
</div>
  );
}