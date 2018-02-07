import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../shared/App';
import rootReducer from '../shared/js/rootReducer';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, preloadedState);

render(
    <Provider store = { store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
