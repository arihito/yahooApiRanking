import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as reducers from './reducers';

const store = createStore(
// reducreを結合
combineReducers(reducers),
// ミドルウェアの読み込み
applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
