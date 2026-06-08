import { useState } from "react";

export default function EstimatedDelivery() {
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    if (!pincode) return;

    setLoading(true);
    setMessage("");

    // fake API delay (replace with real API)
    setTimeout(() => {
      setLoading(false);

      if (pincode.length === 6) {
        setMessage("Estimated delivery in 3-5 days 🚚");
      } else {
        setMessage("Please enter a valid pincode");
      }
    }, 800);
  };

  return (
    <div className="estimated-delivery-wrapper">
      <div className="estimated-delivery-inner">

        {/* TITLE */}
        <div className="estimated-delivery-title">
          <p>Check estimated delivery</p>
        </div>

        {/* INPUT WRAPPER */}
        <div className="estimated-delivery-input-wrapper">

          {/* hidden input (kept same as HTML) */}
          <input
            type="hidden"
            className="last-order-zip"
            value=""
          />

          {/* PINCODE INPUT */}
          <input
            type="number"
            placeholder="ENTER YOUR PINCODE"
            className="pincode-input"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

          {/* BUTTON */}
          <button
            type="button"
            className="submit-pincode"
            onClick={handleCheck}
          >
            <span>CHECK</span>

            {loading && <div className="spinner" />}
          </button>
        </div>

        {/* MESSAGE */}
        <div className="message-wrapper">
          <p className="success msg-text">
            {message}
          </p>
        </div>

      </div>
    </div>
  );
}