import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const SignupForm = () => {
  // const Navigate=useNavigate()
  // State to hold form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // State to handle form submission status
  const [submissionStatus, setSubmissionStatus] = useState({
    success: false,
    error: false,
  });

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission by making a POST request to your API
    axios
      .post("http://localhost:3000/employee", formData)
      .then((response) => {
        console.log("Signup successful!", response.data);
        // Clear the form after successful signup
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        // Set submission status to success
        setSubmissionStatus({
          success: true,
          error: false,
        });
      }) 
      .catch((error) => {
        console.error("Error signing up:", error);
        // Set submission status to error
        setSubmissionStatus({
          success: false,
          error: true,
        });
      });
      // Navigate('/')
  };

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {submissionStatus.success && (
          <p className="success-message">Signup successful!</p>
        )}
        {submissionStatus.error && (
          <p className="error-message">Error signing up. Please try again.</p>
        )}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="signupbutton" type="submit">Sign Up</button>
        <p>Already Registered? <Link to='/'>Login</Link> here</p>
      </form>
   
    </div>
  );
};

export default SignupForm;
