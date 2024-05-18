import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import BaddiePage from './Components/BaddiePage';
import SeekerPage from './Components/SeekerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/baddie" element={<BaddiePage />} />
        <Route path="/seeker" element={<SeekerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
