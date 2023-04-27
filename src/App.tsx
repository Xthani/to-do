import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Todo from './page/todo';
import Auth from './page/auth';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
