import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Nonveg.css';

function Nonveg() {
  const NonvegProducts = useSelector(globalState => globalState.product.Nonveg);
  const dispatch = useDispatch();
  const [hoveredCard, setHoveredCard] = useState(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(NonvegProducts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = NonvegProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="non-veg">
        {/* Heading */}
        <h1 className="text-center">This is BigBasket :: Non-veg Page</h1>
        <h1 className="text-center">🍗 Non-veg Items</h1>

        <ToastContainer position="top-right" autoClose={2000} />

        {/* Cards Container */}
        <div className="container-fluid">
          <div className="row">
            {currentItems.map(product => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div
                  className={`card h-100 ${hoveredCard === product.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img
                    src={product.imageurl}
                    className="card-img-top"
                    alt={product.name}
                  />

                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <i><b>Price:</b></i> <b>₹{product.price}</b>
                    </p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => {
                        dispatch(addToCart(product));
                        toast.success(`${product.name} is added to cart successfully`);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-secondary mx-1"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className="btn btn-outline-secondary mx-1"
                style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="btn btn-outline-secondary mx-1"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer>
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
    </>
  );
}

export default Nonveg;
