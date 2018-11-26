import React from 'react';
import {render,ReactDOM} from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { Provider } from 'react-redux';
import rootReducers from './reducers';
import rootSaga from "./sagas";

//store.js 로 빼낼 코드
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
