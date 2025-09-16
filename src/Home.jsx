import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import OfferTimer from './OfferEndTime';

function Home() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <h1 className="text-center mb-4" style={{ color: '#2c6e49', fontWeight: '700', marginTop: "200px" }}>
        🛒 Welcome to BigBasket
      </h1>
      <p className="lead text-center" style={{ color: '#444', fontSize: '1.2rem', marginBottom: '3rem' }}>
        Your one-stop shop for fresh vegItems, delicious non-veg dishes, and sweet treats!
      </p>

      {/* About BigBasket Section */}
      <div
        className="container-fluid my-5 px-4 py-5"
        style={{
          borderRadius: "20px",
          background: "linear-gradient(135deg, #e0f7fa, #b2ebf2, #80deea, #4dd0e1)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}>
        <div className="row align-items-center">
          {/* Text Content - Left Side */}
          <div className="col-md-6">
            <h2
              style={{
                background: "linear-gradient(90deg, #2c6e49, #00bcd4, #3f51b5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "800",
                marginBottom: "20px",
              }}
            >
              🛒 What is BigBasket?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.8" }}>
              <strong>BigBasket</strong> is your one-stop online grocery platform that brings fresh food,
              kitchen essentials, snacks, and more right to your doorstep. Whether you're looking for fresh
              vegetables, high-quality meat, or indulgent treats — we’ve got you covered.
            </p>

            <h4
              style={{
                background: "linear-gradient(90deg, #2c6e49, #009688, #00bcd4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "700",
                marginTop: "30px",
              }}
            >
              💡 Why use BigBasket?
            </h4>
            <p style={{ fontSize: "1.05rem", color: "#333", lineHeight: "1.8" }}>
              No more waiting in long supermarket queues or carrying heavy bags. With BigBasket, you can
              order everything you need from the comfort of your home. Enjoy exclusive deals, fast delivery,
              and the convenience of cashless shopping — all at your fingertips.
            </p>

            <h4
              style={{
                background: "linear-gradient(90deg, #2c6e49, #43a047, #00c853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "700",
                marginTop: "30px",
              }}
            >
              ⚙️ How it works
            </h4>
            <ol
              style={{
                fontSize: "1.05rem",
                color: "#333",
                lineHeight: "1.8",
                paddingLeft: "1.2rem",
              }}
            >
              <li>Browse categories like Vegetables, Non-Veg, Snacks, and Chocolates.</li>
              <li>Add your favorite items to the cart.</li>
              <li>Choose a delivery time that suits you.</li>
              <li>Checkout securely with card, UPI, or cash on delivery.</li>
              <li>Relax while we deliver your order to your doorstep.</li>
            </ol>
          </div>

          {/* Image - Right Side */}
          <div className="col-md-6 text-center">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/254814167976123.6432c4d743d88.png"
              alt="About BigBasket"
              className="img-fluid rounded shadow-lg"
              style={{
                maxHeight: "480px",
                objectFit: "cover",
                borderRadius: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
              }}
            />
          </div>
        </div>
      </div>

      {/* Available Items Section */}
      <h2 className="text-center mt-5 mb-4" style={{ color: '#2c6e49', fontWeight: '700' }}>
        Available Items
      </h2>

      <div className="container">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          {[
            'https://png.pngtree.com/png-vector/20240204/ourlarge/pngtree-indian-lemon-rice-png-image_11540901.png',
            'https://cf.shopee.com.br/file/dfa7c74f12d3ceef1e0230b19f1a353e',
            'https://m.media-amazon.com/images/I/71WeEVI1gZL.jpg',
            'https://img.freepik.com/premium-photo/delicious-indian-vegetable-biryani-bowl-white-background-generative-ai_804788-10024.jpg?w=2000',
            '/chicken.webp',
            '/chickenfry.webp',
            'public/Dark.webp',
            'public/fish.webp',
            'public/Snickers.webp',
            'https://img.freepik.com/premium-photo/chocolate-isolated-white-background_825385-1141.jpg?w=2000',
            'https://static.vecteezy.com/system/resources/previews/021/952/450/non_2x/southern-fried-chicken-fried-chicken-transparent-background-png.png',
            'https://hamara.com.au/wp-content/uploads/2024/01/basmati-rice-2000.jpg',
            'https://tse2.mm.bing.net/th/id/OIP.2y-gxk-lQRU10eTl2c4ZpAHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`scroll-img-${idx}`}
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '90px',
                marginRight: '5px',
              }}
            />
          ))}
        </marquee>
      </div>

      {/* Category Highlights */}
      <div className="row mt-5 ">
        {[
          {
            img: 'https://media.istockphoto.com/id/642512760/photo/curd-rice-garnished-with-pomegranate.jpg?s=612x612&w=0&k=20&c=eeyAq_2fc7gvrfb-r7R4xgigaTYVbPcZn6oJktV4bnE=',
            alt: 'Vegetables',
            title: '🥗 VegItems Specials',
            desc: 'Explore a wide variety of farm-fresh veggies delivered straight to your doorstep.',
          },
          {
            img: '/chicken.webp',
            alt: 'Non-Veg',
            title: '🍗 Non-Veg Specials',
            desc: 'From biryanis to curries, indulge in mouth-watering non-veg delights.',
          },
          {
            img: '/images/dairyMilk.webp',
            alt: 'Chocolates',
            title: '🍫 Chocolates & Treats',
            desc: 'Satisfy your sweet tooth with premium chocolates and snacks.',
          },
        ].map(({ img, alt, title, desc }, i) => (
          <div className="col-md-4 text-center mb-4" key={i}>
            <img
              src={img}
              alt={alt}
              className="img-fluid rounded mb-3"
              style={{ height: '150px', objectFit: 'cover', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            />
            <h5 style={{ color: '#2c6e49', fontWeight: '700' }}>{title}</h5>
            <p style={{ color: '#444' }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <p className="fw-bold" style={{ color: '#155724', fontSize: '1.1rem' }}>
          🛍️ Start shopping now and enjoy seamless checkout, discounts, and fast delivery!
        </p>
      </div>

      {/* Offer Cards Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4" style={{ color: '#2c6e49', fontWeight: '700' }}>
          🎁 Explore Our Offers
        </h2>
        <div className="row">
          {[
            {
              title: '🥗 Veg',
              desc: 'Fresh veggies at unbeatable prices! with   45% off',
              img: 'https://tse2.mm.bing.net/th/id/OIP.2y-gxk-lQRU10eTl2c4ZpAHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
              route: '/veg',
            },
            {
              title: '🍗 Nonveg',
              desc: 'Delicious meats and ready-to-cook packs! with   35% off',
              img: 'https://static.vecteezy.com/system/resources/previews/021/952/450/non_2x/southern-fried-chicken-fried-chicken-transparent-background-png.png',
              route: '/nonveg',
              showTimer: true,
            },
            {
              title: '🍫 Chacolates',
              desc: 'Sweet deals on your favorite treats! with 25% off',
              img: 'https://img.freepik.com/premium-photo/chocolate-isolated-white-background_825385-1141.jpg?w=2000',
              route: '/chacolates',
            },
          ].map(({ title, desc, img, route, showTimer }, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <img
                  src={img}
                  alt={title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color: '#2c6e49', fontWeight: '700' }}>{title}</h5>
                  <p className="card-text">{desc}</p>

                  {/* Timer only for Nonveg card */}
                  {showTimer && (
                    <div className="mb-3">
                      <OfferTimer endTime={new Date(Date.now() + 2 * 60 * 60 * 1000)} />
                    </div>
                  )}

                  <button className="btn btn-success" onClick={() => navigate(route)}>
                    See Offers
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container-fluid mt-5" style={{ backgroundColor: '#c3e6cb', borderRadius: '20px', padding: '30px', boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}>
        <h2 className="text-center" style={{ color: '#155724', fontWeight: '700' }}>
          Reviews
        </h2>

        <Carousel className="mt-4">
          {[
            { text: '“This place is a hidden gem! Always stocked with fresh items and the staff are super friendly.”', author: 'Saikeerthi' },
            { text: '“Clean, organized, and everything I need is just a shelf away. The prices are fair and the quality is top-notch.”', author: 'Alice' },
            { text: '“Feels like a neighborhood store with a heart. They even remember my usual order!”', author: 'Bob' },
            { text: '“Best rice and pulses in town. Nothing compares to the freshness here.”', author: 'Charlie' },
            { text: '“The owner is incredibly helpful and even helped me carry my bags to the car!”', author: 'David' },
            { text: '“Great variety, especially in snacks and spices. I always find something new.”', author: 'George' },
            { text: '“Their homemade pickles and masalas are next level. My mom swears by them!”', author: 'Elon' },
            { text: '“Fast service, fair prices, and they even offer home delivery.”', author: 'Franlie' },
          ].map(({ text, author }, idx) => (
            <Carousel.Item key={idx}>
              <div className="text-center p-4" style={{ color: '#155724', fontStyle: 'italic' }}>
                <p>{text}</p>
                <h4 style={{ fontWeight: '700', marginTop: '15px' }}>— {author}</h4>
                <button onClick={() => setLikes(likes + 1)} className="btn btn-success me-2">👍</button>
                <button onClick={() => setDislikes(dislikes + 1)} className="btn btn-danger">👎</button>
                <h5 className="mt-3">Likes: {likes}</h5>
                <h5>Dislikes: {dislikes}</h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
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

export default Home;
