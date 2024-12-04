import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Counter } from './features/counter/Counter';
import { Textbox } from './features/textbox/Textbox';

import "./style.css"
import { MyList } from './features/mylist/MyList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
      <Textbox />
      <MyList />
    </Provider>
  </React.StrictMode>
);

