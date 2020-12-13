import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers';

import { PersistGate } from 'redux-persist/integration/react' 

import configureStore from './store';

const store = configureStore();
const rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store.store}>
       <PersistGate loading={null} persistor={store.persistor}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
     </PersistGate> 
     </Provider>  , rootElement);
