import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import BaddiePage from './Components/BaddiePage';
import SeekerPage from './Components/SeekerPage';
import FormPage from './Components/FormPage';
import ResultsPage from './Components/ResultsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/baddie" element={<BaddiePage />} />
        <Route path="/seeker" element={<SeekerPage />} />
        <Route path="/add" element={<FormPage />} />
        <Route path="/edit" element={<FormPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
