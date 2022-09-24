import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// api
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './api/apiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);