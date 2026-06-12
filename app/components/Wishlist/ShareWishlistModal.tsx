import React from 'react';

interface ShareWishlistModalProps {
  onClose: () => void;
}

export default function ShareWishlistModal({
  onClose,
}: ShareWishlistModalProps) {
  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>Share Wishlist</h3>
            <button className="close" onClick={onClose}>
              ×
            </button>
          </div>

          <div className="modal-body">
            <p>Share your wishlist with friends and family!</p>

            <div className="share-url">
              <input
                type="text"
                readOnly
                value={currentUrl}
                onClick={(e) =>
                  (e.target as HTMLInputElement).select()
                }
              />

              <button
                className="btn-secondary"
                onClick={handleCopy}
              >
                Copy
              </button>
            </div>

            <div className="social-sharing">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>

              <a
                href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>

              <a
                href={`mailto:?subject=Check out my wishlist&body=${encodeURIComponent(
                  currentUrl
                )}`}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}