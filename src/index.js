import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from "react-redux";
import { persistor } from 'components/redux/store';
import { store } from 'components/redux/store';
import { App } from 'components/App';
import { theme } from 'components/theme'
import "@fontsource/akshar/500.css"
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter >
    </ChakraProvider>
  </React.StrictMode>
);
