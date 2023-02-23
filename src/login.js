import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formData;

    // Compare the input field data with the given data
    if (username === "admin@frejun" && password === "12345678") {
      // Redirect to the specified page
      navigate("/dashboard");
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper d-flex align-items-center justify-content-center flex-column">
        <div className="login">
          <h2 className="mb-3 text1">Log in</h2>
          <div className="form-group mb-2">
            <label className="form-label user">Username</label>
            <input
              placeholder="Enter your username"
              className="form-control input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-2">
            <label className="form-label pass">Password</label>
            <input
              password="........"
              className="form-control input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn0 login-btn" type="submit">
            Log In
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
