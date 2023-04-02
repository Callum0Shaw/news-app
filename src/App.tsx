import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
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

function App() {
  return (
    <>
      <Provider store={store}>
        <Grid />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
