import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import PersonalityPredictorPage from './Pages/PersonalityPredictorPage';
import NextStepMDPage from './Pages/NextStepMDPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/personality-predictor" element={<PersonalityPredictorPage />} />
        <Route path = "/nextstepmd" element = {<NextStepMDPage />} />
      </Routes>
    </Router>
  );
};

export default App;
