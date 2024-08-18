






// src/components/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../api/usersApi';
import { toast } from 'react-toastify';

function Signup() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validate()) {
      // Submit the form
      console.log('Form submitted successfully', formData);
      try{
        const {firstName,lastName,password,confirmPassword,email} = formData;
        // console.log(firstName);
        const response = await signupUser({firstName,lastName,password,confirmPassword,email});
        console.log(response);
        toast.success("SignUp Successful!");
        navigate("/login");
      }
      catch(error){
        console.log(error);
        toast.error("SignUp Failed,Please try Again!");
      }
      setSubmitted(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="container">
      <h2>SignUp Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          {errors.lastName && (
            <span className="error">{errors.lastName}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        <div className="form-group">
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </label>
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>


        <button type="submit">Sign-in</button>
      </form>

      {/* Basic styling */}
      <style jsx>{`
        .container {
          max-width: 500px;
          margin: auto;
          padding: 1em;
          background: #f5f5f5;
          border-radius: 5px;
        }
        h2 {
          text-align: center;
          color: #333;
        }
        .form-group {
          margin-bottom: 1em;
        }
        label {
          display: flex;
          flex-direction: column;
          font-weight: bold;
          color: #555;
        }
        input {
          padding: 0.5em;
          border: 1px solid #ccc;
          border-radius: 3px;
          margin-top: 0.5em;
        }
        .error {
          color: red;
          font-size: 0.8em;
        }
        .success-message {
          background: #d4edda;
          color: #155724;
          padding: 0.5em;
          border-radius: 3px;
          margin-bottom: 1em;
          text-align: center;
        }
        button {
          width: 100%;
          padding: 0.7em;
          border: none;
          border-radius: 3px;
          background: #28a745;
          color: white;
          font-size: 1em;
        }
        button:hover {
          background: #218838;
        }
      `}</style>
    </div>
  );
}

export default Signup;

