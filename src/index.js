import React from 'react';
import ReactDOM from 'react-dom/client';
import { PhoneBook } from './components/App/App.jsx';
import { Provider } from 'react-redux'
import { store } from 'redux/store.js';
// import { PersistGate } from 'redux-persist/integration/react'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <PhoneBook />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  // document.getElementById('root')
);
