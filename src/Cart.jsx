import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addOrder,
  clearCart,
} from "./store"; // make sure path is correct
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import balloonsUp from "./animations"; // your animation function
import QRCode from "react-qr-code";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [discountInput, setDiscountInput] = useState("");
  const [couponDiscountPercent, setCouponDiscountPercent] = useState(0);
  const [buttonDiscountPercent, setButtonDiscountPercent] = useState(0);
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalDiscountPercent = couponDiscountPercent + buttonDiscountPercent;
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = (subtotal * totalDiscountPercent) / 100;
  const shipping = 50;
  const total = subtotal - discount + shipping;

  const templateParams = {
    order_id: Math.floor(Math.random() * 1000000000),
    email: customerEmail,
    orders: cartItems.map((item) => ({
      image_url: item.imageurl,
      name: item.name,
      units: item.quantity,
      price: item.price.toFixed(2),
    })),
    shipping: shipping.toFixed(2),
    couponDiscount: couponDiscountPercent,
    buttonDiscount: buttonDiscountPercent,
    tax: discount.toFixed(2),
    total: total.toFixed(2),
  };

  // Send email via EmailJS
  const handleCheckOut = () => {
    if (!/\S+@\S+\.\S+/.test(customerEmail)) {
      toast.error("❌ Please enter a valid email address");
      return;
    }

    emailjs
      .send(
        "service_lox31t8",
        "template_byg3t2k",
        templateParams,
        "_74FQM7fKTJAt0Nvg"
      )
      .then(() => toast.success("📧 Email sent successfully"))
      .catch((error) => toast.error("❌ Email sending failed: " + error.text));
  };

  // Apply discount from coupon code or %
  const handleApplyDiscount = () => {
    const code = discountInput.trim().toLowerCase();
    if (code === "sai10") setCouponDiscountPercent(10);
    else if (code === "sai20") setCouponDiscountPercent(20);
    else if (code === "sai30") setCouponDiscountPercent(30);
    else {
      const parsed = parseFloat(discountInput);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 30) setCouponDiscountPercent(parsed);
      else {
        toast.error("❌ Enter valid coupon code or % (0–30)");
        return;
      }
    }
    toast.success(`✅ ${totalDiscountPercent}% Discount Applied`);
  };

  // Complete purchase: add to orders & clear cart
  const handleCompletePurchase = () => {
    if (cartItems.length === 0) {
      toast.error("🛒 Cart is empty!");
      return;
    }

    const purchaseDetails = {
      id: Date.now(), // unique order ID
      date: new Date().toLocaleString(),
      totalPrice: total,
      items: [...cartItems],
    };

    dispatch(addOrder(purchaseDetails));
    dispatch(clearCart());
    toast.success("🎉 Purchase Completed!");
    orderConfirmation();
  };

  // Swal animation for confirmation
  const orderConfirmation = () => {
    Swal.fire({
      icon: "success",
      title: "✅ Order Placed",
      text: "Your order placed successfully",
      confirmButtonText: "OK",
      confirmButtonColor: "#2bca58ff",
      cancelButtonText: "Close",
      cancelButtonColor: "#ef4444",
      showCancelButton: true,
      timer: 5000,
      timerProgressBar: true,
    }).then(() => {
      balloonsUp(600); // your animation
    });
  };

  return (
    <div style={{ paddingTop: "200px" }}>
      <div className="container-fluid py-4">
        <h2 className="mb-4 text-center text-success">🛒 BigBasket :: Cart Items</h2>

        {cartItems.length === 0 ? (
          <h2 className="text-center">Your cart is empty.</h2>
        ) : (
          <div className="row g-5">
            {/* Left side - Cart Items */}
            <div className="col-md-6">
              <h3 className="mb-3">Cart Items</h3>
              <ul className="list-unstyled">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="mb-4 border-bottom pb-3 d-flex align-items-start"
                  >
                    <img
                      src={item.imageurl}
                      alt={item.name}
                      width="100"
                      height="100"
                      className="me-3 rounded"
                    />
                    <div>
                      <h5>{item.name}</h5>
                      <p>Price: ₹{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <button
                        onClick={() => {
                          dispatch(decrementQuantity(item.id));
                          toast.info("➖ Item Decreased");
                        }}
                        className="btn btn-sm btn-success me-2"
                      >
                        ➖
                      </button>
                      <button
                        onClick={() => {
                          dispatch(incrementQuantity(item.id));
                          toast.info("➕ Item Increased");
                        }}
                        className="btn btn-sm btn-success me-2"
                      >
                        ➕
                      </button>
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(item.id));
                          toast.error("❌ Item Removed");
                        }}
                        className="btn btn-sm btn-danger"
                      >
                        ❌ Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Bill Calculations */}
            <div className="col-md-6">
              <h3 className="mb-3">Bill Calculations</h3>

              <label className="form-label">Apply Discount:</label>
              <div className="d-flex flex-wrap gap-2 mb-2">
                <button
                  onClick={() => setButtonDiscountPercent(10)}
                  className="btn btn-outline-primary"
                >
                  10% OFF
                </button>
                <button
                  onClick={() => setButtonDiscountPercent(20)}
                  className="btn btn-outline-primary"
                >
                  20% OFF
                </button>
                <button
                  onClick={() => setButtonDiscountPercent(30)}
                  className="btn btn-outline-primary"
                >
                  30% OFF
                </button>
              </div>

              <input
                type="text"
                value={discountInput}
                onChange={(e) => setDiscountInput(e.target.value)}
                placeholder="Or enter coupon code / %"
                className="form-control mb-2"
              />

              <div className="d-flex gap-2 mb-3">
                <button onClick={handleApplyDiscount} className="btn btn-primary">
                  Apply
                </button>
                <button
                  onClick={() => {
                    setDiscountInput("");
                    setCouponDiscountPercent(0);
                    setButtonDiscountPercent(0);
                    toast.info("🔄 Discounts Reset");
                  }}
                  className="btn btn-secondary"
                >
                  Reset
                </button>
              </div>

              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              {totalDiscountPercent > 0 && (
                <p>
                  🎟️Discount: ₹{discount.toFixed(2)} ({totalDiscountPercent}%)
                </p>
              )}
              <h4>
                💰Total (incl. ₹{shipping} shipping): ₹{total.toFixed(2)}
              </h4>

              <div className="mb-3 mt-3">
                <label>Enter your Gmail to receive order confirmation:</label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="form-control"
                />
              </div>

              <div className="d-flex gap-2 mb-3 mt-3">
                <button
                  onClick={handleCheckOut}
                  className="btn btn-success flex-fill"
                >
                  Checkout & Send Email
                </button>
                <button
                  onClick={handleCompletePurchase}
                  className="btn btn-warning flex-fill"
                >
                  Complete Purchase
                </button>
              </div>

              <div className="payment-method mt-4">
                <h5>Select Payment Method</h5>
                <button
                  onClick={() => setPaymentMethod("qr")}
                  className="btn btn-success me-2"
                >
                  QR Code
                </button>
                <button
                  onClick={() => setPaymentMethod("cash")}
                  className="btn btn-success me-2"
                >
                  Cash On Delivery
                </button>

                {paymentMethod === "qr" && (
                  <div className="qr-selection mt-4 text-center">
                    <h6>Scan UPI QR to Pay ₹{total.toFixed(2)}</h6>
                    <QRCode
                      value={`upi://pay?pa=7702062390@axl&pn=BigBasket%20Store&am=${total.toFixed(
                        2
                      )}&cu=INR`}
                      size={180}
                    />
                    <p className="mt-2">
                      UPI ID: <strong>7702062390@axl</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Cart;
