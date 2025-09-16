import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [price, setPrice] = useState(100); // slider state
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim().toLowerCase();

    const routeMap = {
      veg: "/Veg",
      nonveg: "/Nonveg",
      drinks: "/Drinks",
      chacolates: "/Chacolates",
      orders: "/Orders",
      about: "/AboutUs",
      contact: "/ContactUs",
      signup: "/SignUp",
      cart: "/Cart",
      home: "/",
    };

    const foundRoute = Object.keys(routeMap).find(
      (key) => term === key || term.includes(key)
    );

    if (foundRoute) {
      navigate(routeMap[foundRoute]);
    } else {
      navigate(`/search?q=${encodeURIComponent(term)}`);
    }

    setSearchTerm("");
  };

  return (
    <nav className="navbar navbar-custom py-3">
      <div className="container-fluid">
        {/* 🔹 FIRST ROW: Search Bar + Cart */}
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 w-100">
          <div className="flex-shrink-0">
            <h3 className="m-0" style={{ whiteSpace: "nowrap" }}>
              BigBasket: 🍲{" "}
              <span style={{ color: "#121213ff" }}>Foodie Zone</span>
            </h3>
          </div>

         <div className="flex-grow-0">
         <form className="d-flex" onSubmit={handleSearch}>
        <input
        className="form-control form-control-sm me-2"
        type="search"
        placeholder="Search food..."
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "180px" }}
        />
         <button className="btn btn-sm btn-outline-primary" type="submit">
         Search
        </button>
        </form>
        </div>


          <div className="flex-shrink-0">
            <Link
              className="nav-item nav-link cart-highlight"
              to="/Cart"
              style={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                fontSize: "1.1rem",
                color: "#121213ff",
                backgroundColor: "#edf4adff",
                paddingRight: "12px",
                borderRadius: "6px",
              }}
            >
              🛒 CartItems {cartCount}
            </Link>
          </div>
        </div>

        {/* 🔹 SECOND ROW: Navigation */}
        <div className="d-flex flex-wrap align-items-center gap-4 ms-2">
          <ul className="navbar-nav flex-row flex-wrap gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                🏠 Home
              </Link>
            </li>

            {/* 🔽 Food Menu Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="menuDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                🍴 Menu 🔽
              </Link>
              <ul
                className="dropdown-menu p-3"
                aria-labelledby="menuDropdown"
                style={{ minWidth: "250px" }}
              >
                <li>
                  <Link className="dropdown-item" to="/Veg">
                    🥦 Veg Items
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Nonveg">
                    🍗 Nonveg
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Chacolates">
                    🍫 Chocolates
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Drinks">
                    🥤 Drinks
                  </Link>
                </li>

                <li><hr className="dropdown-divider" /></li>

                {/* Price Slider only in food menu */}
                <li className="px-2">
                  <label className="form-label">Filter by Price</label>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="form-range"
                  />
                  <p className="m-0">Up to ₹{price}</p>
                </li>
              </ul>
            </li>

            {/* Other Nav Links */}
            
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                👥 About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
                📞 Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                🔑 Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SignUp">
                📝 SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Orders">
                🧾 Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
