import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isStudent: false,
    gender: "",
    city: "",
    course: "",
    about: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.gender ||
      !formData.city ||
      !formData.course
    ) {
      alert("Please fill all required fields.");
      return;
    }

    console.log(formData);

    setSubmitted(true);
  }

  return (
    <div className="container">

      <form className="form-card" onSubmit={handleSubmit}>

        <h1>Registration Form</h1>

        <p className="subtitle">
          Create your account by filling in the details below.
        </p>

        {submitted && (
          <div className="success-message">
            🎉 Registration Successful!
          </div>
        )}

        <div className="input-group">
          <label>First Name</label>

          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>

          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>
        </div>

        <div className="checkbox">

          <input
            type="checkbox"
            name="isStudent"
            checked={formData.isStudent}
            onChange={handleChange}
          />

          <label>Are you a Student?</label>

        </div>

        <div className="radio-group">

          <h3>Gender</h3>

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>

        </div>

        <div className="input-group">

          <label>City</label>

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Lucknow</option>
            <option>Bangalore</option>
          </select>

        </div>

        <div className="input-group">

          <label>Course</label>

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option>B.Tech</option>
            <option>MBA</option>
            <option>BCA</option>
            <option>B.Com</option>
          </select>

        </div>

        <div className="input-group">

          <label>About Yourself</label>

          <textarea
            rows="4"
            name="about"
            placeholder="Tell us something about yourself..."
            value={formData.about}
            onChange={handleChange}
          />

        </div>

        <button className="submit-btn">
          Register
        </button>

      </form>

      <div className="preview-card">

        <h2>Live Preview</h2>

        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>

        <p><strong>Email:</strong> {formData.email || "-"}</p>

        <p><strong>Student:</strong> {formData.isStudent ? "Yes" : "No"}</p>

        <p><strong>Gender:</strong> {formData.gender || "-"}</p>

        <p><strong>City:</strong> {formData.city || "-"}</p>

        <p><strong>Course:</strong> {formData.course || "-"}</p>

        <p><strong>About:</strong></p>

        <p>{formData.about || "Nothing added yet."}</p>

      </div>

    </div>
  );
}

export default App;