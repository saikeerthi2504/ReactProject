import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // track login state
  const [username, setUsername] = useState(""); // store username

  const handleLogin = (e) => {
    e.preventDefault();

    const enteredUsername = usernameRef.current.value.trim();
    const enteredPassword = passwordRef.current.value.trim();

    let newErrors = { username: "", password: "" };
    if (!enteredUsername) newErrors.username = "Username is required";
    if (!enteredPassword) newErrors.password = "Password is required";

    setErrors(newErrors);
    if (newErrors.username || newErrors.password) return;

    // Login successful
    setUsername(enteredUsername);
    setMessage(`Welcome, ${enteredUsername}!`);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setMessage("");
    setIsLoggedIn(false);
    setUsername("");
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="d-flex align-items-center vh-100">
      <div style={{ marginTop: "150px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "green" }}>
          BigBasket::LoginPage
        </h2>

        {!isLoggedIn ? (
          // Show login form if not logged in
          <div className="card p-4 shadow-lg" style={{ width: "500px" }}>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  ref={usernameRef}
                  className={`form-control ${errors.username ? "is-invalid" : ""}`}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  ref={passwordRef}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="btn btn-success w-100">
                Login
              </button>
            </form>
          </div>
        ) : (
          // Show welcome message + logout if logged in
          <div className="card p-4 shadow-lg text-center" style={{ width: "500px" }}>
            <h3 className="text-success">{message}</h3>
            <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
