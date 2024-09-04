import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MainPage from './pages/mainPage/mainPage';
import NotFound from './pages/notFound/notFound';
import {
  detailedLoader,
  DetailedPage,
} from './pages/detailedPage/detailedPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'detailed/:detailedId',
        loader: detailedLoader,
        element: <DetailedPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
