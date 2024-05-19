import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FormPage.css';

const FormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEdit = location.pathname === '/edit';

  const [formData, setFormData] = useState({
    ethnicity: '',
    nationality: '',
    language: '',
    music: '',
    food: '',
    politics: '',
    cities: '',
    literature: '',
    anythingElse: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    navigate('/baddie');
  };

  return (
    <div className="form-page">
      <header className="form-header">
        <img src={`${process.env.PUBLIC_URL}/images/a1.png`} alt="BaddieBase Logo" className="logo" />
      </header>
      <div className="form-content">
        <h1>{isEdit ? 'Edit' : 'Add New'} Ethnicity/Background</h1>
        <form onSubmit={handleSubmit}>
          {['ethnicity', 'nationality', 'language', 'music', 'food', 'politics', 'cities', 'literature', 'anythingElse'].map((field) => (
            <div key={field} className="form-group">
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
