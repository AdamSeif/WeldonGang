import React from 'react';
import './BaddiePage.css';

const BaddiePage = () => {
  return (
    <div className="baddie-page">
      <header className="baddie-header">
        <img src={`${process.env.PUBLIC_URL}/images/a1.png`} alt="BaddieBase Logo" className="logo" />
      </header>
      <div className="baddie-content">
        <h1>Help us represent you better!</h1>
        <div className="baddie-buttons">
          <button className="baddie-add-button">Add new ethnicity/background</button>
          <button className="baddie-edit-button">Edit existing ethnicity/background</button>
        </div>
      </div>
    </div>
  );
};

export default BaddiePage;
