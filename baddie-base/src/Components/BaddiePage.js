// BaddiePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BaddiePage.css';

const BaddiePage = () => {
  const navigate = useNavigate();

  return (
    <div className="baddie-page">
      <header className="baddie-header">
        <img src={`${process.env.PUBLIC_URL}/images/a1.png`} alt="BaddieBase Logo" className="logo" />
      </header>
      <div className="baddie-content">
        <h1>Help us represent you better!</h1>
        <div className="baddie-buttons">
          <button className="baddie-add-button" onClick={() => navigate('/add')}>Add new ethnicity/background</button>
          <button className="baddie-edit-button" onClick={() => navigate('/edit')}>Edit existing ethnicity/background</button>
        </div>
      </div>
      <button className="home-button" onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default BaddiePage;
