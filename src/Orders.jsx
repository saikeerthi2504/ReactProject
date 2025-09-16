import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Orders = () => {
  const allOrders = useSelector((state) => state.orders);

  // Get today’s date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Filter orders for today only
  const todaysOrders = allOrders.filter((order) => {
    const orderDate = new Date(order.date).toISOString().split("T")[0];
    return orderDate === today;
  });

  return (
    <div style={{ paddingTop: "200px" }}>
      <div className="container">
        <h2 className="mb-4 text-center text-success">📦 Today’s Orders</h2>

        {todaysOrders.length === 0 ? (
          <h4 className="text-center">No orders placed today.</h4>
        ) : (
          <div className="row g-4">
            {todaysOrders.map((order, index) => (
              <div key={index} className="col-12">
                <div className="card shadow-sm mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      Order ID: {order.id || index + 1}
                    </h5>
                    <p className="card-text">Date: {order.date}</p>
                    <p className="card-text">
                      Total: ₹{order.totalPrice.toFixed(2)}
                    </p>
                    <h6>Items:</h6>
                    <ul className="list-group list-group-flush">
                      {order.items.map((item) => (
                        <li key={item.id} className="list-group-item">
                          <div className="d-flex flex-column align-items-start">
                            <img
                              src={item.imageurl}
                              alt={item.name}
                              width="100"
                              height="100"
                              className="mb-2 rounded"
                            />
                            <strong>{item.name}</strong>
                            <p className="mb-1">Quantity: {item.quantity}</p>
                            <p className="mb-1">Price: ₹{item.price}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
