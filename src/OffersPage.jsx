import React from 'react';

function OffersPage() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: '#2c6e49', fontWeight: '700' }}>
        🎁 Current Offers
      </h2>
      <ul className="list-group">
        <li className="list-group-item">Up to 70% OFF on all orders</li>
        <li className="list-group-item">Flat ₹100 OFF on orders above ₹299</li>
        <li className="list-group-item">Free delivery on first 3 orders</li>
      </ul>
    </div>
  );
}

export default OffersPage;