import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Store from '../pages/Store';
import NotFound from '../pages/NotFound';
import Compare from '../components/Compare';
import Layout from '../components/Layout/Layout';
import ErrorHandler from '../components/Layout/ErrorHandler';

import { loadVendor } from '../services/loadVendor';

export const configRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/search/:store',
        element: <Store />,
        loader: loadVendor
      },
      {
        path: 'compare',
        element: <Compare />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);
