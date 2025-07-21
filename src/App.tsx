import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import PersonalityPredictorPage from './Pages/PersonalityPredictorPage';

const router = createBrowserRouter([
  {
    path: '/personal-site',
    element: <Main />,  
  },
  {
    path: '/personality-predictor',
    element: <PersonalityPredictorPage />,  
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;

