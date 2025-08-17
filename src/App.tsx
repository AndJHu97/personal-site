import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import PersonalityPredictorPage from './Pages/PersonalityPredictorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/personal-site" element={<Main />} />
        <Route path="/personality-predictor" element={<PersonalityPredictorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
