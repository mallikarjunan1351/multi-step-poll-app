import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const container = document.getElementById('root');
const root = createRoot(container!); // Create a root.

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
