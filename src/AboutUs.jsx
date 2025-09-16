import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <div className="container-fluid py-4">
      <div className='non-veg'>
      <h1 className="text-center text-success mb-4">🌿 About BigBasket</h1>
      <p className="lead text-center">
        BigBasket is your trusted online grocery partner, delivering freshness, convenience, and quality right to your doorstep.
      </p>

      <div className="row mt-5">
        <div className="col-md-6">
          <h4>🚀 Our Mission</h4>
          <p>
            To simplify grocery shopping by offering a wide range of products—from farm-fresh vegetables and premium meats to indulgent chocolates—all at competitive prices, with fast and reliable delivery.
          </p>
          <p>
            We aim to create a seamless and enjoyable grocery shopping experience for every household by combining technology, quality, and service.
          </p>
        </div>

        <div className="col-md-6">
          <h4>💡 Why Choose Us?</h4>
          <ul>
            <li>Wide selection of fresh and packaged goods</li>
            <li>Easy-to-use interface and secure checkout</li>
            <li>Exclusive discounts and seasonal offers</li>
            <li>Fast delivery across major cities</li>
            <li>Friendly and responsive customer support</li>
            <li>Eco-friendly packaging and sustainable sourcing</li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4>📦 Our Services</h4>
          <p>
            BigBasket offers multiple delivery slots, express delivery in select locations, and subscription services for regular essentials. Whether you're planning meals for the week or just need a quick restock, we've got you covered.
          </p>
        </div>

        <div className="col-md-6">
          <h4>🌱 Sustainability Commitment</h4>
          <p>
            We're committed to a greener future. Our partnerships with local farmers help reduce food miles, and we are steadily moving toward 100% biodegradable and recyclable packaging.
          </p>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h5>🏅 Our Promise</h5>
        <p>
          At BigBasket, customer satisfaction is our top priority. We promise timely deliveries, fresh products, and quick issue resolution—so you can shop with confidence every time.
        </p>
      </div>

      <div className="mt-4 text-center">
        <h5>📞 Need help? Reach out to our support team anytime!</h5>
        <p>Email: <a href="mailto:support@bigbasket.com">support@bigbasket.com</a> | Phone: 1800-123-456</p>
      </div>
      </div>
      {/* Footer */}
      <footer
        className="text-white text-center py-4 mt-5"
        style={{ backgroundColor: '#1f3a20', borderRadius: '20px', padding: '30px' }}
      >
        <div className="container-fluid">
          <p className="mb-1">© {new Date().getFullYear()} BigBasket. All rights reserved.</p>
          <p className="mb-0">
            📍 Address: 123 Grocery Street, Hyderabad, India | 📞 +91 7702062390
          </p>
          <p className="mb-0">
            📧 Email:{' '}
            <a href="mailto:support@bigbasket.com" className="text-info">
              support@bigbasket.com
            </a>
          </p>
          <div className="mt-2">
            <a href="#" className="text-white me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
