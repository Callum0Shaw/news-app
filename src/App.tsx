import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { createContext } from 'react';

import Grid from './components/Grid';
import Layout from './components/Layout';
import Home from './routes/Home';
import Article from './routes/Article';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'article/:id',
        element: <Article />,
      },
    ],
  },
]);

const FilterContext = createContext('all');

function App() {
  return (
    <>
      <Grid />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
