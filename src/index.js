import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSageMiddleware from 'redux-saga';

import './index.css';
import App from './containers/App';
import reducer from './redux/reducers'
import searchSaga from './redux/sagas/sagas'

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSageMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(searchSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
