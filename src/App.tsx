import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './page/todo';
import Auth from './page/auth';

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
