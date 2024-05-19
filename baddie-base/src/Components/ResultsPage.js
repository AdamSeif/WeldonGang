import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ResultsPage.css';

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchType, searchQuery } = location.state || {};
  const [results, setResults] = useState([]); // Initialize with empty results
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchResults = async () => {
    // Replace with your actual API call
    const fetchedResults = await fetch(`YOUR_API_ENDPOINT?type=${searchType}&query=${searchQuery}`)
      .then(response => response.json())
      .catch(error => console.error('Error fetching results:', error));

    setResults(fetchedResults);
  };

  // Fetch results when component mounts
  React.useEffect(() => {
    fetchResults();
  }, []);

  const handleNext = () => {
    if (results && currentIndex < results.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="results-page">
      <header className="results-header">
        <img src={`${process.env.PUBLIC_URL}/images/a1.png`} alt="BaddieBase Logo" className="logo" />
      </header>
      <div className="results-content">
        <h1>Search Results</h1>
        {results && results.length > 0 ? (
          <div className="result">
            <p>{results[currentIndex]}</p>
          </div>
        ) : (
          <p>No results found</p>
        )}
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
      <button className="home-button" onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default ResultsPage;
