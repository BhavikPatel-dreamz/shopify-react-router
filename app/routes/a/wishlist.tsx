import React, { useState } from 'react';
import '../../styles/WishlistPage.css';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);

  const handleShareWishlist = () => {
    setShowShareModal(true);
  };

  return (
    <main className="wishlist-main">
      <div className="wishlist-header">
        <h1 className="titletext">MY WISHLIST</h1>
        <button 
          className="sharebutton"
          onClick={handleShareWishlist}
        >
          Share Wishlist
        </button>
      </div>

      <div className="empty-wishlist">
        There are no items in your Wishlist
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="modal" onClick={() => setShowShareModal(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h3>Share Wishlist</h3>
                <button className="close" onClick={() => setShowShareModal(false)}>×</button>
              </div>
              <div className="modal-body">
                <p>Share your wishlist with friends and family!</p>
                <div className="share-url">
                  <input 
                    type="text" 
                    readOnly 
                    value={window.location.href} 
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                  />
                  <button 
                    className="btn-secondary"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }}
                  >
                    Copy
                  </button>
                </div>
                <div className="social-sharing">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">Pinterest</a>
                  <a href={`mailto:?subject=Check out my wishlist&body=${encodeURIComponent(window.location.href)}`}>Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}