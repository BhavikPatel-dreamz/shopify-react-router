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
    <div className="quantity-wrapper">
      <div className="quantity-box">
        <button
          type="button"
          className="quantity-button"
          onClick={onDecrease}
        >
          <span className="icon icon-mobile-minus">
            <svg
              viewBox="0 0 12 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.417969H11.4519"
                stroke="#000000"
                stroke-width="0.76"
              ></path>
            </svg>
          </span>
        </button>

        <input
          className="quantity-input"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => onChange(Number(e.target.value))}
        />

        <button
          type="button"
          className="quantity-button"
          onClick={onIncrease}
        >
          <span className="icon icon-mobile-plus">
            <svg
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.203125 5H10.2031"
                stroke="#000000"
                stroke-width="0.76"
              ></path>
              <path
                d="M5.2041 0L5.2041 10"
                stroke="#000000"
                stroke-width="0.76"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
