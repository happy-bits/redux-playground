import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Counter } from './features/counter/Counter';
import { Textbox } from './features/textbox/Textbox';

import "./style.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
      <Textbox />
    </Provider>
  </React.StrictMode>
);

