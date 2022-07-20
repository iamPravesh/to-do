import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Router from './Router';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => <Router />;
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
