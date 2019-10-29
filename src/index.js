import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes'
import { StoreContext } from 'redux-react-hook'
import store from './store/index'
import Loading from '@components/LoadingComponent'
import './index.css';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Suspense fallback={<Loading />}>
      <Routers />
    </Suspense>
  </StoreContext.Provider>,
  document.getElementById('root')
);

