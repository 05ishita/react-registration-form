import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isStudent: false,
    gender: "",
     city: "",
  about: "",
   course: "",
  });

  function handleChange(event) {
    const { name, value , type, checked } = event.target;

    setFormData({
      ...formData,
      [name]:  type === "checkbox" ? checked :value,
    });
  }
  function handleSubmit(event) {
  event.preventDefault();

  console.log(formData);
}

  return (
    <form onSubmit={handleSubmit}>

      <h1>Registration Form</h1>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
       
       <input
  type="checkbox"
  name="isStudent"
  checked={formData.isStudent}
  onChange={handleChange}
/>

<label> Are you a Student?</label>

<br /><br />
          <h3>Gender</h3>

<input
  type="radio"
  name="gender"
  value="Male"
  checked={formData.gender === "Male"}
  onChange={handleChange}
 />

<label>Male</label>

<br />

<input
  type="radio"
  name="gender"
  value="Female"
  checked={formData.gender === "Female"}
  onChange={handleChange}
/>

<label>Female</label>

<br /><br />
     <h3>Select City</h3>

<select
  name="city"
  value={formData.city}
  onChange={handleChange}
>
  <option value="">Select City</option>
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Lucknow">Lucknow</option>
</select>
 <h3>course</h3>

<select
  name="course"
  value={formData.city}
  onChange={handleChange}
>
  <option value="">Select Course</option>
  <option value="BTECH">BTECH</option>
  <option value="MBA">MBA</option>
  <option value="BCOM">BCOM</option>
</select>
<h3>About Yourself</h3>

<textarea
  name="about"
  placeholder="Write something..."
  value={formData.about}
  onChange={handleChange}
/>

<br /><br />

<br /><br />
      <h2>
        Welcome {formData.firstName} {formData.lastName}
      </h2>
      <p>
Student : {formData.isStudent ? "Yes" : "No"}
</p>
      <p>
Gender : {formData.gender}
</p>
<p>City : {formData.city}</p>

<p>About : {formData.about}</p> 
<p>Course : {formData.course}</p> 
    </form>
    
  );
}
<button type="submit">
  Submit
</button>
export default App;