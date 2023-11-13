import Compare from './components/Compare';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import LayoutNavigation from './pages/Layout/Navigation';
import Store from './pages/Store';
import GridProducts from './pages/Layout/GridProducts';

const requested = async ({ params, request }) => {
  console.log({ params, request });
};

const App = () => {
  return (
    <div className="relative h-[100dvh] bg-slate-300/10 overflow-x-hidden">
      <Router>
        <LayoutNavigation />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/search/:store" element={<Store />}>
            <Route path="products" action={requested} element={<GridProducts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
