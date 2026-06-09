type QuantitySelectorProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange: (value: number) => void;
};

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  onChange,
}: QuantitySelectorProps) {
  return (
    <div className="quantity-wrapper quantity-wrapper-js">
      <div className="quantity-box">
        <button
          type="button"
          className="quantity-button-js quantity-button no-js-hidden"
          onClick={onDecrease}
        >
          -
        </button>

        <input
          className="quantity-input quantity-input-js"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => onChange(Number(e.target.value))}
        />

        <button
          type="button"
          className="quantity-button-js quantity-button no-js-hidden"
          onClick={onIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
}