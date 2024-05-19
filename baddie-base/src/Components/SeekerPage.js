import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SeekerPage.css';

const SeekerPage = () => {
  const [searchType, setSearchType] = useState('country');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement your search logic here
    console.log(`Searching for ${searchQuery} by ${searchType}`);
    // Navigate to results page (assuming results page path is '/results')
    navigate('/results', { state: { searchType, searchQuery } });
  };

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
          <input
            type="text"
            placeholder={`Search by ${searchType}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <button className="home-button" onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default SeekerPage;
