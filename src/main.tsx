import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.scss';
import Auth from './page/auth';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
