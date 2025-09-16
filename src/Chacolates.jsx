import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import './Nonveg.css';

function Chacolates() {
  // Accessing chocolate products from the Redux store
  const chocProducts = useSelector(globalState => globalState.product.Chacolates);
  const dispatch = useDispatch();

  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(chocProducts.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = chocProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
    <div className="non-veg">
      <h1 className="text-center">This is bigBasket:: chocolate page</h1>
      <h1 className="text-center">🍫 Chocolate Items</h1>
      <ToastContainer position="top-right" autoClose={2000} />
  
      <div className="container-fluid">
        <div className="row">
          {currentItems.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div
                className="card h-100"
                style={{
                  transform: hoveredCard === product.id ? 'scale(1.03)' : 'scale(1)',
                  boxShadow: hoveredCard === product.id ? '0 8px 16px rgba(0,0,0,0.2)' : 'none',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img 
                  src={product.imageurl}
                  className="card-img-top"
                  alt={product.name}
                  style={{
                    height: '200px',
                    width: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#f8f9fa',
                    padding: '10px'
                  }}
                />
                <div className="card-body">
                  <h2 className="card-title text-center">{product.name}</h2>
                  <p className="card-text text-center">{product.description}</p>
                  <p className="card-text text-center">
                    <i><b>Price:</b></i> <b>₹{product.price}</b>
                  </p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => {
                      dispatch(addToCart(product));
                      toast.success(`${product.name} added to cart successfully!`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
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
    </>
  );
}

export default Chacolates;
