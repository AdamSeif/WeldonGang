import React, { useState } from 'react';
import './SeekerPage.css';

const SeekerPage = () => {
  const [searchType, setSearchType] = useState('country');

  return (
    <div className="seeker-page">
      <header className="seeker-header">
        <img src={`${process.env.PUBLIC_URL}/images/a1.png`} alt="BaddieBase Logo" className="logo" />
      </header>
      <div className="seeker-content">
        <h1>Find by</h1>
        <div className="seeker-controls">
          <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="country">Country</option>
            <option value="language">Language</option>
            <option value="ethnicity">Ethnicity</option>
          </select>
          <input type="text" placeholder={`Search by ${searchType}`} />
        </div>
      </div>
    </div>
  );
};

export default SeekerPage;
