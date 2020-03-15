import React from 'react';
import App from './App';

let rerenderEntireTree = (state) => {
    debugger;
    ReactDOM.render(<App state = { state } dispatch = { store.dispatch.bind(store)} store = { store } />, document.getElementById('root'));
}


rerenderEntireTree(store.getState());

store.image (() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

