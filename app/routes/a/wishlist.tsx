import { useState } from 'react';
import '../../styles/WishlistPage.css';
import ShareWishlistModal from '~/components/Wishlist/ShareWishlistModal';

export default function WishlistPage() {
  const [wishlistItems] = useState<any[]>([]);
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <main className="wishlist-main">
      <div className="wishlist-header">
        <h1 className="titletext">MY WISHLIST</h1>

        <button
          className="sharebutton"
          onClick={() => setShowShareModal(true)}
        >
          Share Wishlist
        </button>
      </div>

      <div className="empty-wishlist">
        There are no items in your Wishlist
      </div>

      {showShareModal && (
        <ShareWishlistModal
          onClose={() => setShowShareModal(false)}
        />
      )}
    </main>
  );
}