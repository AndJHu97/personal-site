import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,  
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;

