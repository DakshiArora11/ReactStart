import React, { useState } from 'react';

const ContactForm = () => {
  // Define state variables for name and email inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    alert(`Submitted Name: ${name}, Email: ${email}`);
    
    // Clear inputs after submission
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>

      {/* Preview Section */}
      <div style={{ marginTop: '20px' }}>
        <h2>Preview</h2>
        <p><strong>Name:</strong> {name || 'Not entered'}</p>
        <p><strong>Email:</strong> {email || 'Not entered'}</p>
      </div>
    </div>
  );
};

export default ContactForm;
