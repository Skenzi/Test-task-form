import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './store/store.js';
import cities from './cities.json';
import { setCities } from './store/actions.js';

const init = () => {
  store.dispatch(setCities(cities));
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default init;
