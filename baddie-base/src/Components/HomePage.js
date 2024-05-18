import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="overlay"></div>
      <header className="header">
        <img src={`${process.env.PUBLIC_URL}/images/a1.png`} alt="BaddieBase Logo" className="logo" />
        <h2>So She Knows You Care.</h2>
      </header>
      <div className="homepage">
        <div className="content">
          <h1>Are you a</h1>
          <div className="buttons">
            <button className="baddie-button" onClick={() => navigate('/baddie')}>Baddie</button>
            <button className="seeker-button" onClick={() => navigate('/seeker')}>Seeker</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
