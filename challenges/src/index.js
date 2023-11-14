import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { UserProvider } from './context//UserContext';
import App from './App';
import { store } from './reducers/store';

ReactDOM.render(
  <Provider store={store}>
    <UserProvider>
      <App />
    </UserProvider>
  </Provider>,
  document.getElementById('root')
);
