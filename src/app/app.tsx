import React from 'react';
import './app.scss';
import MainPage from './views/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;