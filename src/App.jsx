import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import Home from './pages/Home';
import Store from './pages/Store';
import NotFound from './pages/NotFound';
import Compare from './components/Compare';
import Layout from './components/Layout/Layout';
import About from './pages/sobre-nosotros';

import { loadVendor } from './services/loadVendor';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/search/:store"
          loader={loadVendor}
          element={<Store />}
          errorElement={
            <div className="mx-6">
              La petición no devolvió lo que esperaba, verificar si el servidor esta activo
            </div>
          }
        >
          {/* <Route path="products" element={<GridProducts />} /> */}
        </Route>
        <Route path="about" element={<About />} />
        <Route path="compare" element={<Compare />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
