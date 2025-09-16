import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import Veg from "./veg";
import "./mystyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Notfound from "./Notfound";
import Nonveg from "./Nonveg";
import Navbar from "./navbar";
import Chacolates from "./Chacolates";
import Drinks from "./Drinks";
import OffersPage from "./OffersPage";
import SearchResults from "./SearchResults";
import Login from "./Login";
import SpentTime from "./SpentTime";


function App() {
  const auth = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/Nonveg" element={<Nonveg />} />
          <Route path="/Chacolates" element={<Chacolates />} />
          <Route path="/Drinks" element={<Drinks />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>

        <div className="text-center text-success">
          <span>
            <i>
              <SpentTime />
            </i>
          </span>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
