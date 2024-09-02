import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MainPage from './pages/mainPage/mainPage';
import NotFound from './pages/notFound/notFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
