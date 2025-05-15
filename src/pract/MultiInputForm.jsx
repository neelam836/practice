import React, { useState } from 'react';

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding key in the object
      setFormData((prevData) => ({
          ...prevData, [name]: value
    }));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        /><br />

        <p><b>Output:</b></p>
        <p>Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        <p>Email: {formData.email}</p>
      </form>
    </div>
  );
}

export default MultiInputForm;
