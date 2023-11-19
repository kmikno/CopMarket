import { redirect } from 'react-router-dom';
import { stores } from '../utils/constants';

export const loadVendor = async ({ request, params }) => {
  const query = new URL(request.url).searchParams.get('q');

  const supportedStore = !!stores.find((s) => s.vendor === params.store);
  if (!supportedStore) return redirect('/');

  if (typeof query !== 'string') {
    return null; // Initial load
  }

  if (query === '') {
    return 'Ingresar nombre de producto para comparar';
  }

  const store = params?.store.toLowerCase();
  // console.log({ store, request, query });
  const _req = await fetch(`http://localhost:1234/vendor/${store}/${query}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const _res = await _req.json();

  if (!_req.ok || _req.status === null) {
    return `Error ${_req.status}: ${_res}`;
  }

  if (typeof _res.data === 'string') return _res.data;
  return _res;
};
