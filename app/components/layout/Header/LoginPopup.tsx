// app/components/layout/Header/LoginPopup.tsx
import { useState } from "react";
import "~/styles/loginPopup.css";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup = ({ isOpen, onClose }: LoginPopupProps) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [notifyChecked, setNotifyChecked] = useState(true);

  if (!isOpen) return null;

  const handleLogin = () => {
    if (mobileNumber.length === 10) {
      console.log("Login with:", mobileNumber);
      // Add your login API call here
      // onClose(); // Uncomment to close popup after login
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value.replace(/\D/g, ''));
  };

  return (
    <div className="login-popup-overlay" onClick={handleOverlayClick}>
      <div className="login-popup-container">
        {/* Close button inside the container */}
        <button className="login-popup-close" onClick={onClose}>
          ✕
        </button>

        {/* Image on TOP */}
        <div className="login-popup-image-top"></div>

        {/* Form BELOW */}
        <div className="login-form-wrapper">
          <div className="login-form-container">
            <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <span className="input-addon">
                  <img
                    src="https://fastrr-boost-ui.pickrr.com/assets/images/indian_flag.svg"
                    alt="India"
                    className="flag-icon"
                  />
                  <span className="country-code">+91</span>
                </span>
                <input
                  type="tel"
                  id="mobile"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  className="mobile-input"
                  value={mobileNumber}
                  onChange={handleMobileChange}
                />
                <button
                  type="button"
                  className="login-btn"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>

              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="notifyUpdates"
                  checked={notifyChecked}
                  onChange={(e) => setNotifyChecked(e.target.checked)}
                />
                <label htmlFor="notifyUpdates">
                  Notify me for Updates and Offers
                </label>
              </div>

              <div className="terms-wrapper">
                <img
                  src="https://fastrr-boost-ui.pickrr.com/assets/images/info-icon-black.svg"
                  alt="info-icon"
                  height="11"
                  width="11"
                  className="info-icon"
                />
                <p className="terms-text">
                  By proceeding, you are agreeing to our{" "}
                  <a
                    href="https://checkout.shiprocket.in/terms-conditions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    T&amp;C
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.shiprocket.in/privacy-policy/my-shiprocket/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;